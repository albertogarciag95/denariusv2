import React from "react";
import SideMenu from "../../components/side-menu/side-menu";

class DenariusPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOptions: [
        { name: 'upload inputs', route: 'upload-inputs', active: true, icon: 'home' },
        { name: 'download', route: 'download', active: false, icon: 'home' },
        { name: 'process history', route: 'process-history', active: true, icon: 'home' },
        { name: 'transfer', route: 'transfer', active: false, icon: 'home' },
        { name: 'costes boadilla', route: 'costes', active: false, icon: 'home' },
        { name: 'queries', route: 'queries', active: false, icon: 'home' }
      ]
    }
  }

  render() {
    return (
      <div style={{ width: "240px", marginRight: "15px" }}>
        <SideMenu menuOptions={this.state.menuOptions} />
      </div>
    );
  }
}

export default DenariusPage;