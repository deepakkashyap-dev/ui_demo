import React from "react";

const CommonSpace = (props) => {
    return (
        // <div className=" px-3 py-3" style={{ background: "#F1F2F7", height: "100vh" }}>
        <div className=" px-3 py-3 breadcrumb-panel" style={{ background: "#F1F2F7",}}>
            <nav className="d-none d-md-block " aria-label="breadcrumb" id="brd" >
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                    {props.pagename && <li className="breadcrumb-item active" aria-current="page">{props.pagename}</li>}
                </ol>
            </nav>
            {props.children}
        </div>
    );
}

export default CommonSpace;