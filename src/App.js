
import styled from "styled-components";
import Sidebar from "./Components/Sidebar";
import HomePages from "./Pages/HomePages";
import Aboutpage from "./Pages/Aboutpage";
import ContactPage from "./Pages/ContactPage";
import SkillPage from "./Pages/SkillPage";
import ExperiencePage from "./Pages/ExperiencePage";
import ProjectPage from "./Pages/ProjectPage";
import QualificationPage from "./Pages/QualificationPage";
import { Route, Switch } from "react-router";
//import MenuIcon from '@material-ui/icons/Menu'

function App() {
  return (
      <div className="App"> 
        <Sidebar />
        <MainContentStyled >
        <Switch>
          <Route path= "/mypoto" exact>
            <HomePages />
          </Route>
          <Route path= "/" exact>
            <HomePages />
          </Route>
          <Route path= "/about" exact>
            <Aboutpage />
          </Route>
          <Route path= "/experience" exact>
            <ExperiencePage />
          </Route>
          <Route path= "/qualification" exact>
            <QualificationPage />
          </Route>
          <Route path= "/project" exact>
            <ProjectPage />
          </Route>
          <Route path= "/skill" exact>
            <SkillPage />
          </Route>
          <Route path= "/contact" exact>
            <ContactPage />
          </Route>
          
        </Switch>
        
        </MainContentStyled>

      </div>
  );
}

const MainContentStyled=styled.main`
position: relative;
margin-left: 10.3rem;
min-height: 100vh;

@media screen and (max-width:1200px){
  margin-left: 0;
  }

  .nav-btn{
    position: absolute;
    z-index: 10;
    right: 50%;
    top: 40%;
    background-color: red;
    width: 5rem;
    height: 5rem;
    display: none;
    @media screen and (max-width:1000px){
        display: block;
    }
}


`;

export default App;
