import {Component} from 'react';
import Divider from "../../../../../shared/components/Divider.jsx";
import NavHeader from "./NavHeader.jsx";
import NavTab from "./NavTab.jsx";

class Navbar extends Component {
    render() {
        return (
            <nav className="w-full flex flex-col gap-2 items-center">
                <NavHeader/>
                {/*<Divider/>*/}
                {/*<NavTab/>*/}
            </nav>
        );
    }
}

export default Navbar;