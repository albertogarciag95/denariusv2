import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import DenariusPage from "./pages/denarius-page/denarius-page";
import HomePage from "./pages/home-page/home-page";
import ProcessPage from "./pages/process-page/process-page";
import CreateProcessPage from "./pages/create-process-page/create-process";
import UploadInputsPage from "./pages/upload-inputs-page/upload-inputs";
import DataManagementPage from "./pages/data-management-page/data-management-page";
import TopMenu from './components/top-menu/top-menu';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      sideBarOpened: false
    }
  }

  render() {
    return (
      <div style={{ padding: "0 10px" }}>
        <BrowserRouter>
          <TopMenu />
          <div className="app-content">
            <div className="main-content">
              <Route
                exact
                path="/"
                render={() => <Redirect to="/home" />}
              />
              <Route path={`/denarius`} component={DenariusPage} />
              <Route path={`/denarius/process-history`} component={ProcessPage} />
              <Route path={'/denarius/start-process'} component={CreateProcessPage} />
              <Route path={'/denarius/upload-inputs'} component={UploadInputsPage} />
              <Route path={'/denarius/data-management'} component={DataManagementPage} />
              <Route path={`/home`} component={HomePage} />
            </div>
            <Menu fixed></Menu>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
