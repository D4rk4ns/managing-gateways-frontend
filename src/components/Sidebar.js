import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Nav, NavIcon, SidebarNav, SidebarWrap } from './navComponent/Nav';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';


const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return  <>
                <IconContext.Provider value={{color:'#fff'}}>
                    <Nav>
                        <NavIcon to="#">
                            <FaIcons.FaBars onClick={showSidebar}/>
                        </NavIcon>
                        <SidebarNav sidebar={sidebar}>
                            <SidebarWrap>
                                <NavIcon to="#">
                                    <AiIcons.AiOutlineClose onClick={showSidebar}/>
                                </NavIcon>
                                {SidebarData.map((item, index) =>{
                                    return <SubMenu item={item} key={index} />;
                                })}
                            </SidebarWrap>
                        </SidebarNav>
                    </Nav>
                </IconContext.Provider>
            </>
}

export default Sidebar;