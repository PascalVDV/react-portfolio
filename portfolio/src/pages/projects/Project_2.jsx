import NavbarItem from "../../components/NavbarItem";
import NavbarItemSelected from "../../components/NavbarItemSelected";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import MainSection from "../../components/home/MainSection";
import SecondNavbar from "../../components/projects/SecondNavbar";
import SecondNavbarButton from "../../components/projects/SecondNavbarButton";
import SecondNavbarButtonSelected from "../../components/projects/SecondNavbarButtonSelected";
import MainText from "../../components/projects/MainText";
import MainTextArticle from "../../components/projects/MainTextArticle";
import Lorem from "../../components/LoremIpsum";

const Project_2 = () => {
  return (
    <>
      <Header />
      <MainSection>
        <Navbar>
          <NavbarItem text="Home" link="/home" icon="home.svg" />
          <NavbarItem text="CV" link="/cv" icon="cv.svg" />
          <NavbarItem text="Skills" link="/skills" icon="skills.svg" />
          <NavbarItemSelected
            text="Projects"
            link="/projects"
            icon="projects.svg"
          />
        </Navbar>
        <SecondNavbar>
          <SecondNavbarButton
            link={"../projects/project_ouderavond"}
            text={"Ouderavond website"}
          />
          <SecondNavbarButtonSelected
            link={"../projects/project_leersite"}
            text={"HTML & CSS leerweb"}
          />
          <SecondNavbarButton
            link={"../projects/project_portfolio"}
            text={"Portfolio website"}
          />
          <SecondNavbarButton
            link={"../projects/project_gamesite"}
            text={"Game website"}
          />
          <SecondNavbarButton
            link={"../projects/project_donatetoplay"}
            text={"Donate to Play"}
          />
        </SecondNavbar>
        <MainText project={"HTML & CSS Leerwebsite"}>
          <MainTextArticle>
            <p class="main__article-infobox main__article-text">
            Datum: January 2024 <br/>
            Opdrachtgever: Jason van Schaik <br/>
            Locatie: Schiedam - Techniek College Rotterdam <br/>
            Software: HTML & CSS & JS <br/>
            Teamgenoten: Eren Ozkan, Fabian Luijten <br/>
            Tags: Educatie, Leren, Project <br/>
            </p>
          </MainTextArticle>
          <MainTextArticle>
            <h2 class="main__article-subtitle">Voorbereiding</h2>
            <p class="main__article-text">
              <Lorem/>
            </p>
          </MainTextArticle>
          <MainTextArticle>
            <h2 class="main__article-subtitle">Design</h2>
            <p class="main__article-text">
              <Lorem/>
            </p>
            <img
              class="main__article-img"
              src="../img/image 3.png"
              alt=""
            ></img>
          </MainTextArticle>
        </MainText>
      </MainSection>
    </>
  );
};

export default Project_2;