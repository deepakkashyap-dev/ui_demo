import React from "react";
import CommonSpace from '../CommonComp/CommonSpace';

const MyAccount = (props) => {
    return (
        <CommonSpace pagename="My Account">
            {/* <div className="container"> */}
            <div className="card my-account" >
                <ul className="nav nav-pills card-header-pills py-2">
                    <li style={{ marginLeft: "20px" }}>
                        <img src="/assets/images/go-back-left-arrow.png" width={18} height={18} alt="arrow" />
                        <span className="my-cls px-4">My Account</span>
                    </li>
                </ul>
                <div className="line"></div>

                <div className="profile-cont">
                    <div className="card">
                        <span className="card-header crd-title">
                            My Profile
                            <i class="far fa-edit" style={{ color: "#99CA3B" }}></i>
                        </span>
                        <div className="container">
                            <div className="row py-3">
                                <div className="m-prof col-lg-2 col-md-4 col-sm-4 col-4">
                                    <img src="/assets/images/profilePic.png" className="profile-pic" alt="user" />
                                </div>

                                <div className="acc-det col-lg-10 col-md-8 col-sm-8 col-8">
                                    <span className="name">
                                        Divya Chatterjee
                                    </span>
                                    <span className="desig">
                                        Designation
                                    </span>
                                    <span className="asst-mgr">
                                        Assistant Manager - HR
                                    </span>
                                    <span className="desig pt-2">
                                        Company Name
                                    </span>
                                    <span className="asst-mgr">
                                        XXY Company Name
                                    </span>
                                </div>
                            </div >
                            <div className="row">
                                <span className="desig">
                                    About me
                                </span>
                                <span className="about-me-cont">
                                    Microsoft enables digital transformation for the era of an intelligent cloud and an intelligent edge. Its mission is to empower every person and every organization on the planet to achieve more. Microsoft set up its India operations in 1990. Microsoft in India offers its global cloud services from local data centers to accelerate digital transformation across Indian start-ups, businesses, and government agencies.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="acc-setting">
                        <div className="card" >
                            <span className="card-header crd-title">
                                My Account Settings
                                <i class="far fa-edit" style={{ color: "#99CA3B" }}></i>
                            </span>
                            <div className="grp">
                                <div className="col-12 col-lg-6">
                                    <div className="desig">Full Name*</div>
                                    <div className="asst-mgr">Divya Chatterjee</div>

                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="desig">Designation</div>
                                    <div className="asst-mgr">Assistant Manager - HR</div>

                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="desig">Phone / Landline*</div>
                                    <div className="asst-mgr">7012248563</div>

                                </div>
                                <div className="ch-pass col-12 col-lg-6">
                                    <div>Change Password</div>
                                </div>
                            </div>
                        </div>
                        <div className="card" >
                            <span className="card-header crd-title">
                                Application Settings
                                <i class="far fa-edit" style={{ color: "#99CA3B" }}></i>
                            </span>
                            <div className="applic">
                                <div className="jb-app">
                                    Receive job applications via
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Only on my dashboard
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Email and on my dashboard
                                    </label>
                                </div>

                                <div className="jb-app" >*Please note, this setting will not impact your old job postings</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </CommonSpace>
    )
}
export default MyAccount;