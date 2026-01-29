// MainPage.tsx
import styled from "styled-components";
import Header from "../components/Header";
import Main from "../components/Main";
import Aside from "../components/Aside";
import RequestDrawer from "../components/RequestDrawer";
import RequestForm from "../components/RequestForm";
import RequestDetail from "../components/RequestDetail";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import {
  doc,
  getDoc,
  collection,
  updateDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import AssignDesigner from "../components/AssignDesigner";
import type { AssignedDesigner } from "../components/AssignDesigner";

// ✅ Drawer 콘텐츠 모드 타입
type DrawerMode = "create" | "edit" | "detail" | null;

// 사이드바에서 쓰는 경량 타입(완료일 추가)
interface RequestLite {
  id: string;
  status?: RequestData["status"];
  completion_date?: any; // Firestore Timestamp | string | Date | undefined
}

// 값 정리
const norm = (v: any) => String(v ?? "").trim();

// count 파싱(0 허용, 빈값/비정상은 0)
const toCount = (v: any) => {
  const s = String(v ?? "").trim();
  if (s === "") return 0;
  const n = Number(s);
  return Number.isFinite(n) && n >= 0 ? n : 0;
};

// 소수 오차 방지
const round3 = (n: number) => Math.round(n * 1000) / 1000;

// Firestore 저장 전 undefined 제거(깊은 구조 포함)
const sanitizeForFirestore = (v: any): any => {
  if (v === undefined) return undefined;

  if (Array.isArray(v)) {
    return v.map(sanitizeForFirestore).filter((x) => x !== undefined);
  }

  if (v && typeof v === "object") {
    const out: any = {};
    Object.keys(v).forEach((k) => {
      const sv = sanitizeForFirestore(v[k]);
      if (sv !== undefined) out[k] = sv;
    });
    return out;
  }

  if (typeof v === "number" && !Number.isFinite(v)) return 0;
  return v;
};

export default function MainPage() {
  const [userRole, setUserRole] = useState<number>(0);
  const [requests, setRequests] = useState<RequestLite[]>([]);
  const [userName, setUserName] = useState<string>("");
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  // ✅ 선택된 요청 데이터(수정/상세 공용)
  const [selectedData, setSelectedData] = useState<RequestData | undefined>(undefined);

  // ✅ Drawer 표시 모드 (기본 detail)
  const [drawerMode, setDrawerMode] = useState<DrawerMode>(null);

  // 사이드바에서 클릭한 상태값을 보관
  const [statusFromAside, setStatusFromAside] = useState<string | null>(null);

  // 필터 리셋 트리거
  const [filterResetKey, setFilterResetKey] = useState(0);

  // AssignDesigner 모달 상태
  const [assignOpen, setAssignOpen] = useState(false);
  const [assignTarget, setAssignTarget] = useState<RequestData | null>(null);

  // 자식(ManagerRequestItem)에서 호출할 “모달 열기”
  const openAssignDesigner = (target: RequestData) => {
    setAssignTarget(target);
    setAssignOpen(true);
  };

  // 모달 닫기
  const closeAssignDesigner = () => {
    setAssignOpen(false);
    setAssignTarget(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setUserRole(0);
        setUserName("");
        setRequests([]);
        return;
      }

      const displayName = user.displayName || "";
      setUserName(displayName);

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) return;

      const data = userDoc.data() as any;
      const role: number = data.role;
      setUserRole(role);

      let qRef: any;

      if (role === 1) {
        qRef = query(
          collection(db, "design_request"),
          where("requester", "==", displayName)
        );
      } else if (role === 2) {
        // ★ 유지: 디자이너는 인덱스용 필드로 조회
        qRef = query(
          collection(db, "design_request"),
          where("assigned_designer_uids", "array-contains", user.uid)
        );
      } else {
        // role 3(매니저) 등
        qRef = collection(db, "design_request");
      }

      onSnapshot(qRef, (snapshot: any) => {
        const listAll: RequestLite[] = snapshot.docs.map((docSnap: any) => {
          const d = docSnap.data() as any;
          return {
            id: docSnap.id,
            status: (d.status as RequestData["status"]) ?? "대기중",
            completion_date:
              d.completion_date ??
              d.complete_date ??
              d.completion_dt ??
              d.completed_at ??
              null,
          };
        });

        if (role !== 2) {
          setRequests(listAll);
          return;
        }

        // ★ 디자이너는 클라 필터(하위호환)
        const filtered = snapshot.docs
          .filter((docSnap: any) => {
            const d = docSnap.data() as any;
            const legacySingle = String(d.assigned_designer ?? "").trim();

            const arr = Array.isArray(d.assigned_designers) ? d.assigned_designers : [];
            const namesFromArr =
              arr.length > 0 && typeof arr[0] === "string"
                ? arr.map((x: any) => String(x).trim())
                : arr.map((x: any) => String(x?.name ?? "").trim());

            return legacySingle === displayName || namesFromArr.includes(displayName);
          })
          .map((docSnap: any) => {
            const d = docSnap.data() as any;
            return {
              id: docSnap.id,
              status: (d.status as RequestData["status"]) ?? "대기중",
              completion_date:
                d.completion_date ??
                d.complete_date ??
                d.completion_dt ??
                d.completed_at ??
                null,
            } as RequestLite;
          });

        setRequests(filtered);
      });
    });

    return () => unsubscribe();
  }, []);

  const handleOpenCreate = () => {
    setSelectedData(undefined);
    setDrawerMode("create");
    setIsDrawerOpen(true);
  };

  // ✅ Drawer 닫기
  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedData(undefined);
  };

  // 사이드바 status 클릭 → Main에게 전달할 값 세팅
  const handleClickStatusFromAside = (status: string) => {
    setStatusFromAside(status);
  };

  // Aside 연동 상태 리셋용
  const clearStatusFromAside = () => {
    setStatusFromAside(null);
  };

  // 상단 Nav에서 "나의 요청 리스트" 눌렀을 때 전역 필터 초기화
  const handleResetAllFilters = () => {
    setStatusFromAside(null);
    setFilterResetKey((prev) => prev + 1);
  };

  // ★ 변경: AssignDesigner rows를 design_request 문서에 저장
  // - assigned_designers가 "row형 본체"가 됨
  // - _rowId는 UI 전용이므로 DB에 저장하지 않음
  // - assigned_rows는 더 이상 저장하지 않음
  const saveAssignDesignerToFirestore = async (target: RequestData, rows: AssignedDesigner[]) => {
    if (!target?.id) return;

    const docRequirement = norm((target as any)?.requirement); // ★ 추가: 문서 작업항목

    // ★ 변경: uid/task_form/task_type 기준 유효성
    const cleaned = rows.filter((r) => norm((r as any).task_form) && norm((r as any).task_type) && norm(r.uid));

    if (!cleaned.length) {
      alert("저장할 배정 행이 없습니다.");
      return;
    }

    // ★ 변경: assigned_designers row에 price도 저장
    const assigned_designers = cleaned.map((r) => {
      const c = toCount((r as any).count);

      return sanitizeForFirestore({
        uid: norm(r.uid),
        name: norm(r.name) || "(이름없음)",

        task_form: norm((r as any).task_form),
        task_type: norm((r as any).task_type),

        requirement: norm((r as any).requirement) || docRequirement || "",
        task_type_detail: norm((r as any).task_type_detail) || "",

        count: c,

        out_work_hour: Number((r as any).out_work_hour ?? 0) || 0,
        in_work_hour: Number((r as any).in_work_hour ?? 0) || 0,

        out_work_price: Number((r as any).out_work_price ?? 0) || 0, // ★ 추가
        in_work_price: Number((r as any).in_work_price ?? 0) || 0,   // ★ 추가
      });
    });

    // ★ 변경: totals / uids는 assigned_designers(row형)에서 직접 산출
    const totalOut = round3(assigned_designers.reduce((s: number, r: any) => s + Number(r.out_work_hour ?? 0), 0));
    const totalIn = round3(assigned_designers.reduce((s: number, r: any) => s + Number(r.in_work_hour ?? 0), 0));

    // ★ 추가: price totals
    const totalOutPrice = round3(
      assigned_designers.reduce((s: number, r: any) => s + Number(r.out_work_price ?? 0), 0)
    );
    const totalInPrice = round3(
      assigned_designers.reduce((s: number, r: any) => s + Number(r.in_work_price ?? 0), 0)
    );

    const uidsFromRows = Array.from(new Set(assigned_designers.map((r: any) => norm(r.uid)).filter(Boolean)));

    const payload = sanitizeForFirestore({
      out_work_hour: totalOut,
      in_work_hour: totalIn,

      out_work_price: totalOutPrice, // ★ 추가
      in_work_price: totalInPrice,   // ★ 추가

      assigned_designers,
      assigned_designer_uids: uidsFromRows,
    });

    await updateDoc(doc(db, "design_request", target.id), payload);

    alert("디자이너 배정 저장 완료!");
  };

  return (
    <Container>
      <Aside
        requests={requests}
        userName={userName}
        role={userRole}
        onRequestButtonClick={handleOpenCreate}
        onClickStatus={handleClickStatusFromAside}
      />

      <DashBoardFrame>
        <Header onResetFilters={handleResetAllFilters} />

        <Main
          userRole={userRole}
          setIsDrawerOpen={setIsDrawerOpen}
          setEditData={(data: RequestData) => {
            setSelectedData(data);
            setDrawerMode("edit");
          }}
          setDetailData={(data: RequestData) => {
            setSelectedData(data);
            setDrawerMode("detail");
          }}
          statusFromAside={statusFromAside}
          clearStatusFromAside={clearStatusFromAside}
          filterResetKey={filterResetKey}
          onOpenAssignDesigner={openAssignDesigner}
        />
      </DashBoardFrame>

      <RequestDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        isDetail={drawerMode === "detail"}
      >
        {drawerMode === "create" && (
          <RequestForm userName={userName} isDrawerOpen={isDrawerOpen} onClose={closeDrawer} />
        )}

        {drawerMode === "edit" && selectedData && (
          <RequestForm
            userName={userName}
            isDrawerOpen={isDrawerOpen}
            editData={selectedData}
            onClose={closeDrawer}
          />
        )}

        {drawerMode === "detail" && selectedData && (
          <RequestDetail
            data={selectedData}
            onClose={closeDrawer}
            currentUserName={userName}
            currentUserRole={userRole}
          />
        )}
      </RequestDrawer>

      <AssignDesigner
        isOpen={assignOpen}
        onClose={closeAssignDesigner}
        target={assignTarget}
        onAssign={async (rows) => {
          if (!assignTarget) return;
          await saveAssignDesignerToFirestore(assignTarget, rows); // ★ rows: AssignedDesigner[]
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex()};
  width: 100%;
  height: 100%;
`;

const DashBoardFrame = styled.div`
  flex: 1;
`;