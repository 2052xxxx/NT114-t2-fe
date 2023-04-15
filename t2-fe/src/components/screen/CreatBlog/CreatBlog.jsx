import React from "react";
import theLogo from './theLogo.png';
import kinhlup from './kinhlup.png';
import viet from './viet.png';
import Avata from './Avata.png';
import './Crea.css';
import chuong from './chuong.png';

export default function Header(){
    return(
        <header>
            <div className="container">
                <div className="item ">
                    <img className="theLogo" src={theLogo} alt="theLogo" />
                </div>
                <div className="item">
                    <input type="text" className="Tbox" placeholder="subject" />
                </div>
                <div className="item">
                    <a href="">
                        <button className="button_1">
                            <img className="kinhlup" src={kinhlup} alt="kinhlup" />
                        </button>
                    </a>
                </div>
            </div>
            <div className="container">
                <div className="item">
                    <a href="">
                        <button className="button_2 container left">
                            <img className="item viet" src={viet} alt="viet" />
                            <h5 className="item" >Pulish</h5>
                        </button>
                    </a>
                </div>
                <div className="item">
                    <img className="chuong" src={chuong} alt="chuong" />
                </div>
                <div className="item">
                    <img className="Avata" src={Avata} alt="Avata" />
                </div>
            </div>
        </header>
        
    )
}