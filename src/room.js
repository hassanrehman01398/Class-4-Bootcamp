import React, { useState } from 'react';


function Room(){
    let [islit,outlit]=useState(false);
    let [age,setage]=useState(20);
    function updatelit(){
        outlit(!islit);


    }
    function updateage(){
        setage(age++);


    }
 //console.log(state);
        return(

            <div>


                My Room : {islit?'Lit':'dark'};
                <br/>
                <br/>

                <button id="button1" onClick={updatelit}>Toogle Light</button>
                <br/>
                <br/>
                
                My Age : {age};
              
                <br/>
                <br/>
                
                <button id="button2" onClick={updateage}>Increase Age</button>
            </div>
        );

}

export default Room;
