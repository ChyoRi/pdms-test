// src/utils/firestoreToCSV.ts
import { collection, getDocs, query } from "firebase/firestore";

const escapeCSV = (v: any) => {
  if (v == null) return "";
  const s = String(v).replace(/"/g, '""');
  return /[",\n]/.test(s) ? `"${s}"` : s;
};

const getByPath = (obj: any, path: string) =>
  path.split(".").reduce((acc, k) => (acc ? (acc as any)[k] : undefined), obj);

/**
 * Firestore → CSV (브라우저 다운로드)
 * (재조회가 필요한 경우에만 사용)
 */
export async function downloadFirestoreToCSV(
  db: any,
  opts: {
    collectionPath: string;
    fields: string[];
    filters?: any[];
    filename?: string;
  }
) {
  const { collectionPath, fields, filters = [], filename = "export.csv" } = opts;
  const col = collection(db, collectionPath);
  const q = filters.length ? query(col, ...filters) : col;
  const snap = await getDocs(q);

  const header = fields.join(",");
  const rows = snap.docs.map((doc) => {
    const data = { id: doc.id, ...doc.data() };
    const cols = fields.map((f) => escapeCSV(f === "id" ? data.id : getByPath(data, f)));
    return cols.join(",");
  });

  const csv = "\uFEFF" + [header, ...rows].join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

/** 내부용: 기본 직렬화(타임스탬프/Date → YYYY-MM-DD) */
const pad2 = (n: number) => (n < 10 ? `0${n}` : `${n}`);
const defaultSerialize = (v: any) => {
  if (v == null) return "";
  // Firestore Timestamp
  if (typeof v === "object" && typeof v.toDate === "function") {
    const d = v.toDate();
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
  }
  if (v instanceof Date) {
    return `${v.getFullYear()}-${pad2(v.getMonth() + 1)}-${pad2(v.getDate())}`;
  }
  return String(v);
};

/**
 * 배열(rows) → CSV (브라우저 다운로드)
 * 현재 화면의 viewList를 그대로 내보낼 때 사용
 */
export function downloadArrayToCSV(opts: {
  rows: any[];
  fields: string[];                 // 추출할 필드들 (dot-path 지원)
  filename?: string;                // 저장 파일명
  headers?: Record<string, string>; // 표시용 헤더명 매핑(옵션)
  serialize?: (v: any) => string;   // 값 직렬화(옵션)
}) {
  const {
    rows,
    fields,
    filename = "export.csv",
    headers,
    serialize = defaultSerialize,
  } = opts;

  const header = fields.map((f) => escapeCSV(headers?.[f] ?? f)).join(",");
  const body = rows.map((row) => {
    // row.id 보장
    const data = { id: row.id, ...row };
    const cols = fields.map((f) => escapeCSV(serialize(getByPath(data, f))));
    return cols.join(",");
  });

  const csv = "\uFEFF" + [header, ...body].join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}