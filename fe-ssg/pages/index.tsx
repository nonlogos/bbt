import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import heroImage from "../public/home_hero.jpg";
import logoImage from "../public/logo.svg";

const Header = styled.header`
  background: white;
  width: 100%;
  height: 4rem;
`;

const MainNav = styled.nav`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 65% 35%;
`;

const LogoImage = styled.div`
  padding: 0.2rem;
`;

const HeroBanner = styled.section`
  position: relative;
  height: 45rem;
  max-height: 45rem;
  width: 100vw;
`;
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="BTT Lago Vista" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header>
          <MainNav>
            <LogoImage>
              <Image
                src={logoImage}
                alt="BTT Lago Vista logo"
                width={58}
                height={58}
              />
            </LogoImage>
          </MainNav>
        </Header>
        <HeroBanner>
          <Image
            src={heroImage}
            alt="BTT Lago Vista hero image"
            layout="fill"
            objectFit="cover"
          />
        </HeroBanner>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
