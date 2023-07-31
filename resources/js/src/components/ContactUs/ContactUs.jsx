import React from "react";
import Marquee from "../../pages/Items/Marquee";
import Constants from "../../common/Constants";
import { useAppContext } from "../../Context";

import "./css.css";
import { Locales } from "../../common";

function ContactUs() {
    const { state } = useAppContext();
    return (
        <div
            style={{
                marginBottom: "50px",
                textAlign: "center",
                width: "100%",
                paddingBottom : '50px'
            }}
        >
            <Marquee title={Locales[state.lang].Contact} />
            <div className="contact">
                <div>
                    <div style={{ marginTop: "1.5rem" }}>
                        <h2
                            style={{
                                color: state.mode == "dark" ? "#fff" : "#000",
                                fontSize: "18px",
                                textTransform: "uppercase",
                                display: "flex",
                                justifyContent: "center",
                                userSelect: 'none'
                            }}
                        >
                        {Locales[state.lang].Phone}
                        </h2>
                        <a
                            href={"tel:" + Constants.storePhones[0]}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                textDecoration: "none",
                                fontSize: "18px",
                                color: state.mode == "dark" ? "#fff" : "#000",
                                paddingTop: "2px",
                                boxSizing: "border-box",
                            }}
                        >
                            {Constants.storePhones[0]}
                        </a>
                        <a
                            href={"tel:" + Constants.storePhones[1]}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                textDecoration: "none",
                                fontSize: "18px",
                                color: state.mode == "dark" ? "#fff" : "#000",
                                paddingTop: "2px",
                                boxSizing: "border-box",
                            }}
                        >
                            {Constants.storePhones[1]}
                        </a>
                        <a
                            href={"tel:" + Constants.storePhones[2]}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                textDecoration: "none",
                                fontSize: "18px",
                                color: state.mode == "dark" ? "#fff" : "#000",
                                paddingTop: "2px",
                                boxSizing: "border-box",
                            }}
                        >
                            {Constants.storePhones[2]}
                        </a>
                    </div>
                    <div style={{ marginTop: "2.5rem" }}>
                        <h5
                            style={{
                                color: state.mode == "dark" ? "#fff" : "#000",
                                fontSize: "18px",
                                textTransform: "uppercase",
                                display: "flex",
                                justifyContent: "center",
                                userSelect:'none'
                            }}
                        >
                        {Locales[state.lang].Address}
                        </h5>
                        <div style={{padding:'0 25px'}}>
                            <h2
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "18px",
                                    color:
                                        state.mode == "dark" ? "#fff" : "#000",
                                    userSelect :' none'
                                }}
                            >
                                {Constants.address}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
