import styled from "styled-components"
import slackIconGray from "../assets/icon_slack_gray.svg";
import slackIconWhite from "../assets/icon_slack_white.svg";
import googleDriveIconGray from "../assets/icon_google_drive_gray.svg";
import googleDriveIconWhite from "../assets/icon_google_drive_white.svg";

export default function Footer() {
  return (
    <Container>
      <FooterInFo>
        <FooterLogo>PDMS</FooterLogo>
        <FooterCopy>© Pushcomz Corp.</FooterCopy>
      </FooterInFo>
      <FooterSnsList>
        <FooterSnsItem>
          <FooterSnsLink target="_blank" $icon={slackIconGray} $iconHover={slackIconWhite} href="https://thepdms.slack.com/?redir=%2Fssb%2Fredirect%3Fentry_point%3Dyour_workspaces%26geocode%3Dko-kr"/>
        </FooterSnsItem>
        <FooterSnsItem>
          <FooterSnsLink target="_blank" $icon={googleDriveIconGray} $iconHover={googleDriveIconWhite} href="https://drive.google.com/drive/folders/1-hQiEmPEomtaDFgnRqt0bAaxIFEWEvYn" />
        </FooterSnsItem>
      </FooterSnsList>
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