import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Nav, NavIcon, SidebarNav, SidebarWrap } from './navComponent/Nav';
import { SidebarData } from './components/SidebarData';



const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)
    return  <>
                <Nav>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </NavIcon>
                    <SidebarNav sidebar={sidebar}>
                        <SidebarWrap>
                            <NavIcon to="#">
                                <AiIcons.AiOutlineClose onClick={showSidebar}/>
                            </NavIcon>
                        </SidebarWrap>
                    </SidebarNav>
                </Nav>
            </>
}

export default Sidebar;