
import * as React from 'react';
import { Link } from "react-router-dom"
import { sideUrl, } from '../utils/sideBarUrls';

import { siteUrl } from '../utils/constant';

const SideBar = (props) => {
    const [activeItem, setActiveItem] = React.useState(null);
    const handleItemClick = (itemId) => {
        setActiveItem(itemId);
    };
    return (
        <div id="sidebar-wrapper" className='sidebar-wrapper-new fixed-sidebar'>
            <ul className="sidebar-nav nav-pills nav-stacked" id="menu">
                <li className='px-2 py-3'>
                    <div className='d-flex' style={{ alignItems: "center" }}>
                        <img src='/assets/images/hp.png'
                            style={{ width: '48px', height: '48px', }}
                            className='rounded-circle'
                            alt="user" />
                        <span style={{ fontSize: 40, color: "#FFFFFF" }}>
                            Hello,
                        </span>

                    </div>
                    <div>
                        <span style={{ color: "#FFFFFF" }} >
                            Hewlett Packard Enterprise
                        </span>

                    </div>
                </li>
                {
                    sideUrl.map((data, indx) => {
                        return (
                            <li key={indx} className="">
                                <Link
                                    key={indx}
                                    to={{ pathname: data.pathname }}
                                    className={indx === activeItem ? "active-tab" : ""}
                                    onClick={() => handleItemClick(indx)}
                                >
                                    <i className={`${data.icon} fa-lg dash-icon`} ></i>
                                    {data.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default SideBar;
