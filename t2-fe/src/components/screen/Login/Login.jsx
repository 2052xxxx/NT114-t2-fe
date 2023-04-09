import React from "react";
import './Login.css'

export default function Login(){
    return(
        <div className = "Login-Button">
            <div>
                <h1>Welcome</h1>
            </div>
            <div>
                <button className="SW">
                    ㅤ Sign in with Google ㅤ
                </button>
            </div>
            <div>
                <button className="SW">
                    ㅤSign in with Facebookㅤ
                </button>
            </div>
            <div>
                <button className="SW">
                ㅤㅤSign in with Emailㅤㅤ
                </button>
            </div>
            <div>
                No account? <h5>Create one</h5>
            </div>
        </div>
    )
}