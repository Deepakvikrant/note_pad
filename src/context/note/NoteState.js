import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {
    const s1 = {
        "name": "Deepak",
        "class": "3C"
    }
    const [state, setState] = useState(s1);
    const updateFun = () => {
        setTimeout(() => {
            setState({
                "name": "Rohask",
                "class": "9d"
            });


        },1000)
    }

    return (
        <NoteContext.Provider value={{state,updateFun}}>

            {props.children}

        </NoteContext.Provider>
    )

}

export default NoteState;