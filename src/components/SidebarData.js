import React from 'react'
import * as IoIcons from 'react-icons/io5'
import * as RiIcons from 'react-icons/ri'
import * as GrIcons from 'react-icons/gr'


export const SidebarData = [{
        title       : 'Overview',
        path        : '/overview',
        icon        : <IoIcons.IoHome />
    },
    {
        title       : 'Gateways',
        path        : '/gateways',
        icon        : <GrIcons.GrGateway />,
        iconClose   : <RiIcons.RiArrowDownSFill />,
        iconOpened  : <RiIcons.RiArrowUpSFill />,
        subNav      : [{
            title       : 'Add Gateway',
            path        : '/gateways/add',
            icon        : <RiIcons.RiAddBoxFill />
        },
        {
            title       : 'Remove Gateway',
            path        : '/gateways/remove',
            icon        : <RiIcons.RiDeleteBin2Fill />
        }]
    },
    {
        title       : 'Devices',
        path        : '/devices',
        icon        : <RiIcons.RiDeviceFill />,
        iconClose   : <RiIcons.RiArrowDownSFill />,
        iconOpened  : <RiIcons.RiArrowUpSFill />,
        subNav      : [{
            title       : 'Add Device',
            path        : '/devices/add',
            icon        : <RiIcons.RiAddBoxFill />
        },
        {
            title       : 'Remove Device',
            path        : '/devices/remove',
            icon        : <RiIcons.RiDeleteBin2Fill />
        }]
    }]
