import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import DenariusPage from "./pages/denarius-page/denarius-page";
import HomePage from "./pages/home-page/home-page";
import LoginPage from "./pages/login-page/login-page";
import ProcessPage from "./pages/process-page/process-page";
import CreateProcessPage from "./pages/create-process-page/create-process";
import UploadInputsPage from "./pages/upload-inputs-page/upload-inputs";
import DataManagementPage from "./pages/data-management-page/data-management-page";
import EmptyPage from "./pages/empty-page/empty-page";
import TopMenu from './components/top-menu/top-menu';
import RoutePrivate from './components/admin-components/route-private';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isLoggedIn: localStorage.getItem('isLoggedIn'),
      sideBarOpened: false,
      dataManagementFields: [
        { order: 0, text: 'Id', inputType: 'text'},
        { order: 1, text: 'Name', inputType: 'text'},
        { order: 2, text: 'Status', inputType: 'text'},
        { order: 3, text: 'Version', inputType: 'text'},
        { order: 4, text: 'File date', inputType: 'date'},
        { order: 5, text: 'Username', inputType: 'text'},
        { order: 6, text: 'Upload date', inputType: 'date'},
        { order: 7, text: 'Creation date', inputType: 'date'},
        { order: 8, text: 'Last update', inputType: 'date'}
      ],
      processPageFields: [
        { order: 0, text: 'Id', inputType: 'text'},
        { order: 1, text: 'Status', inputType: 'text'},
        { order: 2, text: 'Created', inputType: 'text'},
        { order: 3, text: 'User', inputType: 'text'},
        { order: 5, text: 'Process date', inputType: 'date'},
        { order: 6, text: 'Description', inputType: 'text'},
        { order: 4, text: 'Official', inputType: 'toggle'},
        { order: 7, text: 'Sent', inputType: 'toggle'}
      ]
    }
  }

  render() {
    return (
      <div style={{ padding: "0 10px" }}>
        <BrowserRouter>
          <TopMenu onLogout={() => this.setState({ isLoggedIn: 'false'})} isLoggedIn={this.state.isLoggedIn}/>
          <div className="app-content">
            <div className="main-content">
              <Route exact path="/" render={() => <Redirect to="/login" />} />
              <Route path={'/login'} component={() => 
                <LoginPage onLogin={() => this.setState({ isLoggedIn: 'true' })} />} 
              />
              <RoutePrivate path={'/transfers'} component={() => <EmptyPage title='Transfers' icon='arrows alternate horizontal' />} />
              <RoutePrivate path={'/costes'} component={() => <EmptyPage title='Boadilla expenses' icon='eur' />} />
              <RoutePrivate path={`/denarius`} component={DenariusPage} />
              <RoutePrivate 
                path={`/denarius/process-history`} 
                component={() => <ProcessPage tableFields={this.state.processPageFields} />} />
              <RoutePrivate path={'/denarius/start-process'} component={CreateProcessPage} />
              <RoutePrivate path={'/denarius/upload-inputs'} component={UploadInputsPage} />
              <RoutePrivate path={'/denarius/downloads'} component={() => <EmptyPage title='Downloads' icon='download'/>} />
              <RoutePrivate path={'/denarius/queries'} component={() => <EmptyPage title='Queries' icon='random'/>} />
              <RoutePrivate 
                path={'/denarius/data-management'} 
                component={() => <DataManagementPage tableFields={this.state.dataManagementFields}/>} />
              <RoutePrivate path={`/home`} component={HomePage} />
            </div>
            {this.state.isLoggedIn === 'true' && <Menu fixed></Menu>}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
