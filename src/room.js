import React, { useState } from 'react';


function Room(){
    const [islit,outlit]=useState(true);
 //console.log(state);
        return(

            <div>


                My Room : lit {islit} outlit:{outlit}
            </div>
        );

}

export default Room;
