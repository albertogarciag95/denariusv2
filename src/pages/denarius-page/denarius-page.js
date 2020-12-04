import React from "react";
import SideMenu from "../../components/side-menu/side-menu";

class DenariusPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOptions: [
        { name: 'upload inputs', route: 'upload-inputs', active: true, icon: 'upload' },
        { name: 'process history', route: 'process-history', active: true, icon: 'history' },
        { name: 'downloads', route: 'downloads', active: false, icon: 'download' },
        { name: 'data management', route: 'data-management', active: false, icon: 'database' },
        { name: 'queries', route: 'queries', active: false, icon: 'search' }
      ]
    }
  }

  render() {
    return (
      <SideMenu menuOptions={this.state.menuOptions} />
    );
  }
}

export default DenariusPage;