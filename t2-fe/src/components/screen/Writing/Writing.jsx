import React from "react";
import AdHeader from "../../admin/ad-header/adHeader";

export default function Writing(){
    return(
        <div>
            <AdHeader/>
            <div> 
                <textarea rows="3" cols="70" placeholder="Title"/>
            </div>
            <div>
                <textarea rows="5" cols="70" placeholder="Content"/>
            </div>
        </div>
    )
}