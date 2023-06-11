import {
  BrowserRouter as Router,
} from 'react-router-dom'
import "./App.css";
import AppFooter from "./components/footer";
import AppHeader from "./components/header";
import PageContent from "./components/pageContent";
import SideMenu from "./components/sideMenu";

function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <div className="SideMenuAndPageContent">
          <SideMenu></SideMenu>
          <PageContent></PageContent>
        </div>
        <AppFooter />
      </Router>
    </div>
  );
}
export default App;
