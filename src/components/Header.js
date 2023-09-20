import React, { useState, useRef } from "react";
import { sideUrl, secHeaderList, headerUrl } from '../utils/sideBarUrls';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-light head-shadow px-3 header-fixed">
        <div className="navbar-header fixed-brand">
          <a className="navbar-brand" href="#">
            <img src="/assets/images/logo.png" height={35} alt="logo" />
          </a>
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" id="menu-toggle" style={{ background: "transparent" }}>
            <img src="/assets/images/menu.png" width={35} height={35} alt={"icon"} />
          </button>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="active">
              <button className="navbar-toggle collapse in" data-toggle="collapse" id="menu-toggle-2" style={{ background: "transparent" }}>
                <img src="/assets/images/menu.png" aria-hidden="true" width={35} height={35} alt={"icon"} />
              </button>

            </li>
          </ul>
        </div>
        <div className="first-head-ele">
          <div className="d-none d-md-block">
            <ul className="navbar-nav mr-auto mt-lg-0 sec-head">
              {
                headerUrl.map((data, indx) => {
                  return (
                    <li key={indx} className={`nav-item px-3`}>
                      <Link
                        key={indx}
                        to={{ pathname: data.pathname }}
                        className="nav-link head-url"
                      // className={data.pathname === location.pathname ? "active-tab" : ""}
                      >
                        {data.name}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="right-align">
            <img src="/assets/images/foreEver.png" height={34} style={{ borderRadius: 50, width: 34 }} alt={"forever"} />
          </div>
        </div>
      </nav>

      <div className="d-md-none mob-sec-header">
        <SecondaryHeader />
      </div>
    </>
  );
}

export default Header;



const SecondaryHeader = () => {
  return (
    <nav className="navbar navbar-expand navbar-light head-shadow pt-2">
      <div className="container-fluid">
        <ul className="navbar-nav w-100 justify-content-between cls-a">
          {
            secHeaderList.map((data, indx) => {
              return (
                <li key={indx} className={`nav-item `}>
                  <Link
                    key={indx}
                    to={{ pathname: data.pathname }}
                    className="nav-link desig"
                  >
                    {data.name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav >
  );
};



{/* <nav className="navbar navbar-expand-lg navbar-light ">
<ul className="navbar-nav navbar-scrollable">
  {
    sideUrl.map((data, indx) => {
      return (
        <li key={indx} className={`nav-item col${indx === sideUrl.length - 1 ? '' : '-4'}`}>
          <Link
            key={indx}
            to={{ pathname: data.pathname }}
            className="nav-link"
          // className={data.pathname === location.pathname ? "active-tab" : ""}
          >
            {data.name}
          </Link>
        </li>
      )
    })
  }

</ul>
</nav > */}