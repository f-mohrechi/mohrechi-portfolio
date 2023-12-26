import Head from "next/head";
import ProfileSideBar from "../components/ProfileSideBar";
import Profile from "../components/Profile";
import MenuSideBar from "../components/MenuSideBar";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import CopyRight from "../components/CopyRight";
import ProfileBox from "../components/ProfileBox";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-dark-text text-white dark:text-dark-text dark:bg-light-app">
      <div className="px-6 lg:px-16 2xl:px-32">
        <Head>
          <title>Faeze Mohrechi</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/images/FM.svg" />
        </Head>

        <main>
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 xl:gap-10">
            <div className="col-start-1 col-end-4 lg:col-end-5 xl:col-end-4 hidden lg:block">
              <ProfileSideBar />
            </div>

            <div className="col-start-1 lg:col-start-5 xl:col-start-4 col-end-13 xl:col-end-12">
              <div className="xl:hidden sticky top-8 mb-7 z-10">
                <Header />
              </div>
              <div className="pt-8" id="home">
                <Profile />
              </div>
              <div className="pt-7 lg:hidden" id="about">
                <ProfileBox />
              </div>
              <div className="pt-7 xl:pt-16" id="experience">
                <Experience />
              </div>
              <div className="pt-7 xl:pt-16" id="education">
                <Education />
              </div>
              <div className="pt-7 xl:pt-16" id="projects">
                <Projects />
              </div>
              <div className="pt-7 xl:pt-16" id="contact-me">
                <ContactMe />
              </div>

              <div className="pt-10 pb-3">
                <CopyRight />
              </div>
            </div>

            <div className="col-start-12 col-end-12 hidden xl:block">
              <MenuSideBar />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
