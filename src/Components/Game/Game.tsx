import React from 'react';
import style from './Game.module.css'

type GameType={
    question:textType
    testgg:(index:number)=>void

}
type textType={
    id:number,
    title:string,
    correct:number,
    vatiants:string[]
}



export const Game = (props:GameType) => {


    return (
        <div>
        <div className={style.progress}>
            <div style={{width:'50%'}} ></div>
            <h1>{props.question.title}</h1>
            <div>
                <div >{props.question.vatiants.map((e,index)=>{
                    const testHandler = (index:number) => {
                        props.testgg(index)
                    }
                    return(
                        <li  onClick={()=>testHandler(index)}>{e.toString()}</li>
                    )
                })}</div>



            </div>
        </div>
        </div>

    );
};
