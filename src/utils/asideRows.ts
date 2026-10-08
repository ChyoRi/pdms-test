/**
 * 사이드바(Aside) 상태 카운트 모수 변환 유틸
 *
 * 리스트 화면(Requester / Designer / Manager)의 viewList는
 * 상단 필터(요청기간 · 진행상태 · 부서 · 회사 · 요청자 · 디자이너 · 검색어)가
 * 모두 적용된 결과다. 이 결과를 그대로 사이드바 카운트 모수로 쓰기 위해
 * 집계에 필요한 필드만 남긴 경량 행으로 변환한다.
 *
 * status는 화면 표시용 displayStatus가 아니라 DB 원본 값을 유지한다.
 * (Aside의 makeStatusBuckets가 역할별 라벨 묶음/스왑을 원본 기준으로 처리하기 때문)
 */
/** 사이드바 필터 라벨용 기간 표기 (리스트 표의 10/8 표기와 동일한 형식) */
export const formatRangeLabel = (start: Date | null, end: Date | null): string => {
  if (!start || !end) return "";

  const md = (d: Date) => `${d.getMonth() + 1}/${d.getDate()}`;

  return md(start) === md(end) ? md(start) : `${md(start)} ~ ${md(end)}`;
};

/** 값이 기본값("○○ 선택")이 아닐 때만 "접두사 값" 형태의 라벨을 만든다 */
export const makeFilterLabel = (prefix: string, value: string, defaultValue: string): string => {
  const v = String(value ?? "").trim();

  if (!v || v === defaultValue) return "";

  return `${prefix} ${v}`;
};

export const toAsideRows = (rows: any[]): AsideRow[] => {
  return (rows ?? []).map((r: any) => ({
    id: String(r?.id ?? ""),
    status: r?.status,
    completion_date:
      r?.completion_date ??
      r?.complete_date ??
      r?.completion_dt ??
      r?.completed_at ??
      null,
    company: r?.company ?? "",
  }));
};
