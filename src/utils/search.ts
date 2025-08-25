// ㄱ~ㅎ 초성표
const CHO = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];

// 문자열 → 초성 문자열
export const toChosung = (s: string) =>
  [...(s || "")].map((ch) => {
    const code = ch.charCodeAt(0);
    if (code >= 0xac00 && code <= 0xd7a3) {
      const idx = Math.floor((code - 0xac00) / 28 / 21);
      return CHO[idx];
    }
    return ch;
  }).join("");

// 쿼리가 순수 초성으로만 이루어졌는지
export const isConsonantQuery = (q: string) => /^[\u3131-\u314e]+$/.test(q);

// 행 단위 검색 인덱스 만들기(필요한 필드를 합쳐 인덱싱)
export function makeSearchIndex(row: any) {
  const low = (v: any) => (v == null ? "" : String(v).toLowerCase());
  const pick = {
    id: low(row.design_request_id),     // 숫자+영문 가능
    requirement: low(row.requirement),  // 한글 본문
    // memo나 status, requester 등은 제외
  };
  const plain = Object.values(pick).join(" ");
  const chosung = toChosung(pick.requirement); // 초성은 작업항목만
  return { ...row, _index: { plain, chosung } };
}

export function matchesQuery(r: any, q: string) {
  if (!q) return true;
  const v = q.toLowerCase();
  return r._index.plain.includes(v) || r._index.chosung.includes(v);
}