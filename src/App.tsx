import { useEffect, useRef, useState } from 'react';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { NavermapsProvider } from 'react-naver-maps';
import Account from '@/layout/Account/Account.tsx';
import Container from '@/layout/Container.tsx';
import FloatingBar from '@/layout/FloatingBar/FloatingBar.tsx';
import GalleryWrap from '@/layout/Gallery/GalleryWrap.tsx';
import Invitation from '@/layout/Invitation/Invitation.tsx';
import Location from '@/layout/Location/Location.tsx';
import Main from '@/layout/Main/Main.tsx';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const ncpClientId = import.meta.env.VITE_APP_NAVERMAPS_CLIENT_ID;
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const checkScrollPosition = () => {
    if (galleryRef.current) {
      const { offsetTop } = galleryRef.current;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= offsetTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <NavermapsProvider ncpClientId={ncpClientId}>
      <Global
        styles={`
          body {
            font-family: 'Noto Serif KR', serif;
            background: #fff;
            color: #000;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Container>
        <SectionWrapper>
          <Main />
        </SectionWrapper>
        <SectionWrapper>
          <SectionTitle>모시는 글</SectionTitle>
          <Invitation />
        </SectionWrapper>
        <SectionWrapper ref={galleryRef}>
          <SectionTitle>Gallery</SectionTitle>
          <GalleryWrap />
        </SectionWrapper>
        <SectionWrapper>
          <SectionTitle>마음 전하실 곳</SectionTitle>
          <Account />
        </SectionWrapper>
        <SectionWrapper>
          <SectionTitle>오시는 길</SectionTitle>
          <Location />
        </SectionWrapper>
        <FloatingBar isVisible={isVisible} />
      </Container>
    </NavermapsProvider>
  );
}

export default App;

const SectionWrapper  = styled.section`
  padding: 40px 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: 600;
`;
