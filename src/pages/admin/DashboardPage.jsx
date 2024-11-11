import React, {Component} from 'react';
import Sidebar from "./dashboard/Sidebar.jsx";
import Content from "./dashboard/Content.jsx";

class DashboardPage extends Component {

    state = {
        menu: "",
        tempNews: null
    }

    handleChangeSidebarMenu = (name, news) => {
        this.setState(() => ({
            menu: name,
            tempNews: news
        }));
    }

    render() {
        return (
            <div className="flex">
                <Sidebar menu={this.state.menu} onChangeSidebarMenu={this.handleChangeSidebarMenu}/>
                <Content menu={this.state.menu}
                         news={this.props.news}
                         tempNews={this.state.tempNews}
                         onAddNews={this.props.onAddNews}
                         onDeleteNews={this.props.onDeleteNews}
                         onUpdateNews={this.props.onUpdateNews}
                         onChangeSidebarMenu={this.handleChangeSidebarMenu}/>
            </div>
        );
    }
}

export default DashboardPage;