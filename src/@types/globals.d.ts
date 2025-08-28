import type { Timestamp } from "firebase/firestore";

declare global {
  interface RequestData {
    id: string; // firestore 문서 고유번호
    design_request_id: string; // 문서 고유 번호
    company?: string; // 회사
    request_date: string; // 요청일
    merchandiser: string; // 담당 MD
    requester: string; // 요청자
    completion_dt: string; // 완료 요청일
    open_dt: string; // 오픈일
    task_form: string; // 업무 형태
    task_type: string; // 업무 타입
    task_type_detail: string; // 상세 업무 타입
    requirement: string; // 작성 항목
    url: string; // 기획안 URL
    note: string; // 메모
    status: string; // 진행 상태
    assigned_designer: string; // 담당 디자이너
    result_url: string; // 산출물 URL
    emergency: boolean; // 긴급
    designer_start_date?: string; // 디자인 시작일
    designer_end_date?: string; // 디자인 종료일
    requester_review_status?: string; // 요청자 검수 상태
    manager_review_status?: string; // 매니저 검수 상태
    requester_edit_state?: boolean; // 요청자 수정 상태
    designer_edit_state? : boolean; // 디자이너 수정 상태
    in_work_hour?: number | ""; // 내부공수
    out_work_hour?: number | ""; // 외부공수
    work_hour_edit_state?: boolean // 공수 수정 상태
    created_at: Timestamp | null // 문서 생성일시
    updated_at: Timestamp | null; // 문서 수정일시
    delete_at: Timestamp | null; // 문서 삭제일시
  }
  
  type RequestLite = Pick<RequestData, "id" | "status">;
}

export {};