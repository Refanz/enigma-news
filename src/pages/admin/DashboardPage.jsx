import React, {Component} from 'react';
import Sidebar from "./dashboard/Sidebar.jsx";
import Content from "./dashboard/Content.jsx";

class DashboardPage extends Component {

    state = {
        menu: ""
    }

    handleChangeSidebarMenu = (name) => {
        this.setState(() => ({
            menu: name
        }));
    }

    render() {
        return (
            <div className="flex">
                <Sidebar menu={this.state.menu} onChangeSidebarMenu={this.handleChangeSidebarMenu}/>
                <Content menu={this.state.menu} news={this.props.news} onAddNews={this.props.onAddNews}
                         onDeleteNews={this.props.onDeleteNews}
                         onChangeSidebarMenu={this.handleChangeSidebarMenu}/>
            </div>
        );
    }
}

export default DashboardPage;