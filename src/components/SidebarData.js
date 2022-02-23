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
        icon        : <AiIcons.AiOutlineGateway />,
        iconClosed  : <RiIcons.RiArrowDownSFill />,
        iconOpened  : <RiIcons.RiArrowUpSFill />,
        subNav      : [{
            title       : 'Add Gateway',
            path        : '/gateways/add',
            icon        : <RiIcons.RiAddBoxFill />
        },
        {
            title       : 'Update Gateway',
            path        : '/gateways/update',
            icon        : <MdIcons.MdSystemUpdateAlt />
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
        iconClosed   : <RiIcons.RiArrowDownSFill />,
        iconOpened  : <RiIcons.RiArrowUpSFill />,
        subNav      : [{
            title       : 'Add Device',
            path        : '/devices/add',
            icon        : <RiIcons.RiAddBoxFill />
        },
        {
            title       : 'Update Device',
            path        : '/devices/update',
            icon        : <MdIcons.MdSystemUpdateAlt />
        },
        {
            title       : 'Remove Device',
            path        : '/devices/remove',
            icon        : <RiIcons.RiDeleteBin2Fill />
        }]
    }]
