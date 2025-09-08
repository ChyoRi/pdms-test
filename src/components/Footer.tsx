import styled from "styled-components"
import slackIcon from "../assets/icon_slack.svg";
import googleDriveIcon from "../assets/icon_google_drive.svg";

export default function Footer() {
  return (
    <Container>
      <FooterInFo>
        <FooterLogo>PDMS</FooterLogo>
        <FooterCopy>© Pushcomz Corp.</FooterCopy>
      </FooterInFo>
      <FooterSnsList>
        <FooterSnsItem>
          <FooterSnsLink target="_blank" $icon={slackIcon} />
        </FooterSnsItem>
        <FooterSnsItem>
          <FooterSnsLink target="_blank" $icon={googleDriveIcon} href="https://drive.google.com/drive/folders/1-hQiEmPEomtaDFgnRqt0bAaxIFEWEvYn" />
        </FooterSnsItem>
      </FooterSnsList>
    </Container>
  )
}

const Container = styled.footer`
  ${({ theme }) => theme.mixin.flex("center", "space-between")};
  font-family: 'Pretendard';
  padding: 5px 10px;
`;

const FooterInFo = styled.div`
  ${({ theme }) => theme.mixin.flex("center")};
  gap: 0 5px;
`;

const FooterLogo = styled.strong`
  font-size: 18px;
  font-weight: 700;
  line-height: 30px;
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
  margin-right: 5px;
`;

const FooterSnsItem = styled.li`
`;

const FooterSnsLink = styled.a<{ $icon: string }>`
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray06};
  background: ${({ $icon }) => `url(${$icon}) no-repeat center / 25px 25px`};
  cursor: pointer;
`;
