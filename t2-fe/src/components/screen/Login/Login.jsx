import React from "react";
import './Login.css';
import '../SignupWE/SignupWE';
import { Row, Col, Container } from "react-bootstrap";
import theName from '../../header/theName.png';


export default function Login(){
    return(
        <div className="Login-Button">
            <div className="loginTitle">
                <h1 className="CL">Welcome</h1> 
                <img className="theName" src={theName} alt="theName" />
            </div> 
            <div className="emailType_in">
                <h5>Your email</h5>
                <input type="text" name="String" placeholder="Enter your email" className="Testbox"/>
            </div>
            
            <div className="passType_in">
                <h5>Your password</h5>
                <input type="password" name="String" placeholder="Enter your password" className="Testbox"/>
            </div>                    
            
            <div className="btnContinue">
                <a href="/HeaderPage">
                    <button className="SW">
                        Countinue
                    </button>
                </a>
            </div>
        </div>
        // <div className = "Login-Button">
        //     <div>
        //         <h1 className="CL">Welcome</h1>
        //         <img className="theName" src={theName} alt="theName" />
        //     </div>
        //     <div>
        //         <a href="">
        //             <button className="SW">
        //                 ㅤ Sign in with Google ㅤ
        //             </button>
        //         </a>
        //     </div>
        //     <div>
        //         <a href="">
        //             <button className="SW">
        //                 ㅤSign in with Facebookㅤ
        //             </button>
        //         </a>
        //     </div>
        //     <div>
        //         <a href="/SignupWE">
        //             <button className="SW">
        //                 ㅤㅤSign in with Emailㅤㅤ
        //             </button>
        //         </a> 
        //     </div>
        //     <div>
        //         No account? 
                
        //     </div>
        //     <div>
        //         <h5>Create one</h5>
        //     </div>
        // </div>
    )
}