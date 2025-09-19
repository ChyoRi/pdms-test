import styled from "styled-components"
import slackIconGray from "../assets/icon_slack_gray.svg";
import slackIconWhite from "../assets/icon_slack_white.svg";
import googleDriveIconGray from "../assets/icon_google_drive_gray.svg";
import googleDriveIconWhite from "../assets/icon_google_drive_white.svg";
import googleChatIconGray from "../assets/icon_google_chat_gray.svg";
import googleChatIconWhite from "../assets/icon_google_chat_white.svg";
import { useEffect, useMemo, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { doc, getDoc } from "firebase/firestore";

// 회사 상수 및 타입
const COMPANY = { HOMEPLUS: "homeplus", NSMALL: "nsmall" } as const;
type CompanyKind = "homeplus" | "nsmall" | null;

// 매핑 타입에 slack 항목 추가
type LinkItem = { href: string; icon: string; hover: string };
type LinkMap = {
  slack?: LinkItem;  // ★ 추가
  chat?: LinkItem;
  drive?: LinkItem;
};

// 회사별 아이콘/링크 매핑 (HomePlus = Slack + Drive 유지)
const COMPANY_LINKS: Record<Exclude<CompanyKind, null>, LinkMap> = {
  homeplus: {
    // 노출 순서를 Slack → Drive로 하고 싶으면 items 배열 생성 시 그 순서대로 push
    slack: {
      href: "https://hmp-m-design.slack.com/?redir=%2Farchives%2FC06TTC8518T%3Fname%3DC06TTC8518T",
      icon: slackIconGray,
      hover: slackIconWhite,
    },
    drive: {
      href: "https://drive.google.com/drive/folders/1-hQiEmPEomtaDFgnRqt0bAaxIFEWEvYn",
      icon: googleDriveIconGray,
      hover: googleDriveIconWhite,
    },
  },
  nsmall: {
    // NSmall = Google Chat + Google Drive
    chat: {
      href: "https://mail.google.com/chat/u/0/#chat/home",
      icon: googleChatIconGray,
      hover: googleChatIconWhite,
    },
    drive: {
      href: "https://drive.google.com/drive/",
      icon: googleDriveIconGray,
      hover: googleDriveIconWhite,
    },
  },
};

export default function Footer() {
  const [userCompany, setUserCompany] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setUserCompany("");
        return;
      }
      const snap = await getDoc(doc(db, "users", user.uid));
      if (snap.exists()) {
        const data = snap.data() as any;
        setUserCompany(data.company ?? "");
      } else {
        setUserCompany("");
      }
    });
    return () => unsub();
  }, []);

   // companyKind 계산
  const companyKind: CompanyKind = useMemo(() => {
    const k = String(userCompany ?? "").trim().replace(/\s+/g, "").toLowerCase();
    if (k === "homeplus") return COMPANY.HOMEPLUS;
    if (k === "nsmall" || k === "n-small") return COMPANY.NSMALL;
    return null; // pushcomz 포함: 아이콘 비노출
  }, [userCompany]);

  // 렌더 아이콘 배열 생성 (HomePlus=Slack→Drive, NSmall=Chat→Drive)
  const items = useMemo(() => {
    if (!companyKind) return []; // Pushcomz/기타: 아이콘 없음
    const conf = COMPANY_LINKS[companyKind];
    const arr: Array<{ href: string; icon: string; hover: string; key: string }> = [];
    // 노출 우선순위 정의
    if (conf.slack) arr.push({ href: conf.slack.href, icon: conf.slack.icon, hover: conf.slack.hover, key: "slack" });
    if (conf.chat)  arr.push({ href: conf.chat.href,  icon: conf.chat.icon,  hover: conf.chat.hover,  key: "chat"  });
    if (conf.drive) arr.push({ href: conf.drive.href, icon: conf.drive.icon, hover: conf.drive.hover, key: "drive" });
    return arr;
  }, [companyKind]);

  return (
    <Container>
      <FooterInFo>
        <FooterLogo>PDMS</FooterLogo>
        <FooterCopy>© Pushcomz Corp.</FooterCopy>
      </FooterInFo>
      {items.length > 0 && (
        <FooterSnsList>
          {items.map((it) => (
            <FooterSnsItem key={it.key}>
              <FooterSnsLink target="_blank" rel="noreferrer" $icon={it.icon} $iconHover={it.hover} href={it.href} />
            </FooterSnsItem>
          ))}
        </FooterSnsList>
      )}
    </Container>
  )
}

const Container = styled.footer`
  ${({ theme }) => theme.mixin.flex("center", "space-between")};
  font-family: 'Pretendard';
  padding: 24px;
  padding-top: 0px;
  gap: 0 13px;
`;

const FooterInFo = styled.div`
  ${({ theme }) => theme.mixin.flex("flex-start")};
  flex-direction: column;
`;

const FooterLogo = styled.strong`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray05};
`;

const FooterCopy = styled.span`
  font-size: 12px;
  font-weight: 300;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray05};
  text-align: center;
  white-space: nowrap;
`;

const FooterSnsList = styled.ul`
  ${({ theme }) => theme.mixin.flex("center", "space-between")};
  gap: 0 8px;
`;

const FooterSnsItem = styled.li`
  ${({ theme }) => theme.mixin.flex("center", "center")};
  width: 36px;
  height: 36px;
  background-color: ${({ theme }) => theme.colors.gray01};
  border-radius: 50%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;

const FooterSnsLink = styled.a<{ $icon: string; $iconHover: string }>`
  display: block;
  width: 20px;
  height: 20px;
  background: ${({ $icon }) => `url(${$icon}) no-repeat center / 20px 20px`};
  cursor: pointer;

  &:hover {
    background-image: ${({ $iconHover }) => `url(${$iconHover})`};
  }
  
  ${FooterSnsItem}:hover & {
    background-image: ${({ $iconHover }) => `url(${$iconHover})`};
  }
`;