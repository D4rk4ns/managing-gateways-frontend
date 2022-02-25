import React from 'react'
import * as IoIcons from 'react-icons/io5'
import * as RiIcons from 'react-icons/ri'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'


export const SidebarData = [{
        title       : 'Overview',
        path        : '/overview',
        icon        : <IoIcons.IoHome />
    },
    {
        title       : 'Gateways',
        path        : '/gateways',
        icon        : <AiIcons.AiOutlineGateway />
        
    },
    {
        title       : 'Devices',
        path        : '/devices',
        icon        : <RiIcons.RiDeviceFill />
        
    }]

