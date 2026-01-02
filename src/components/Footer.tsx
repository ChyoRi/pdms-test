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

// 링크 아이템 타입
type LinkItem = { href: string; icon: string; hover: string; key: string };

type CompanyDoc = {
  footer_url?: any; // array
  company_name?: string;
};

// users.company -> companies doc id 변환
const normalizeCompanyKey = (v: any) => {
  return String(v ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "");
};

// unknown 제거 (매칭 안되면 null)
const detectLinkType = (url: string): "slack" | "drive" | "chat" | null => {
  const u = String(url || "").toLowerCase();
  if (u.includes("slack.com")) return "slack";
  if (u.includes("drive.google.com")) return "drive";
  if (u.includes("mail.google.com/chat") || u.includes("chat.google.com")) return "chat";
  return null;
};

const ICONS = {
  slack: { icon: slackIconGray, hover: slackIconWhite },
  drive: { icon: googleDriveIconGray, hover: googleDriveIconWhite },
  chat: { icon: googleChatIconGray, hover: googleChatIconWhite },
} as const;

export default function Footer() {
  const [footerUrls, setFooterUrls] = useState<string[]>([]); // ★ 유지

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setFooterUrls([]);
        return;
      }

      // 1) users 문서에서 company 읽기
      const userSnap = await getDoc(doc(db, "users", user.uid));
      if (!userSnap.exists()) {
        setFooterUrls([]);
        return;
      }

      const userData = userSnap.data() as any;
      const company = userData.company ?? "";

      // 2) users.company -> companies/{docId} 매칭해서 footer_url 가져오기
      const companyKey = normalizeCompanyKey(company);
      if (!companyKey) {
        setFooterUrls([]);
        return;
      }

      const companySnap = await getDoc(doc(db, "companies", companyKey));
      if (!companySnap.exists()) {
        setFooterUrls([]);
        return;
      }

      const companyData = companySnap.data() as CompanyDoc;

      const raw = companyData.footer_url;

      // 배열만 허용
      if (Array.isArray(raw)) {
        const cleaned = raw
          .map((v) => String(v ?? "").trim())
          .filter((v) => !!v);
        setFooterUrls(cleaned);
      } else {
        setFooterUrls([]);
      }
    });

    return () => unsub();
  }, []);

  // ★ 변경: 알 수 없는 링크는 렌더링에서 제외 (fallback 없음)
  const items: LinkItem[] = useMemo(() => {
    if (!footerUrls || footerUrls.length === 0) return [];

    return footerUrls
      .map((href, idx) => {
        const t = detectLinkType(href);
        if (!t) return null; // ★ 변경: unknown skip

        const iconSet = ICONS[t];
        return {
          href,
          icon: iconSet.icon,
          hover: iconSet.hover,
          key: `${t}-${idx}`, // 순서 유지
        };
      })
      .filter(Boolean) as LinkItem[];
  }, [footerUrls]);

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