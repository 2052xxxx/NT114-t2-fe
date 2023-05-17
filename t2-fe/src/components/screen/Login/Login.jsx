import React from "react";
import './Login.css';
import '../SignupWE/SignupWE';
export default function Login(){
    return(
        <div className = "Login-Button">
            <div>
                <h1 className="CL">Welcome</h1>
            </div>
            <div>
                <a href="">
                    <button className="SW">
                        ㅤ Sign in with Google ㅤ
                    </button>
                </a>
            </div>
            <div>
                <a href="">
                    <button className="SW">
                        ㅤSign in with Facebookㅤ
                    </button>
                </a>
            </div>
            <div>
                <a href="/SignupWE">
                    <button className="SW">
                        ㅤㅤSign in with Emailㅤㅤ
                    </button>
                </a> 
            </div>
            <div>
                No account? 
                
            </div>
            <div>
                    <h5>Create one</h5>
                </div>
        </div>
    )
}