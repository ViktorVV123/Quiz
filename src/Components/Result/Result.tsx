import React from 'react';
import style from './Result.module.css'
import yes from '../../picture/yes.jpg'
import noo from '../../picture/noo.jpg'

type resultType={

    correct:number
}


export const Result = (props:resultType) => {
    return (
        <div className={style.result}>
            {props.correct > 4 ? <img className={style.img} src = {yes}/> :  <img className={style.img} src={noo} />}

            <h2>Правильно ответили на {props.correct < 4 ? <div style={{color:'red'}}>{props.correct}</div> : <div style={{color:'blue'}}>{props.correct}</div>} из 6 </h2>
            <a href='/Quiz/'>
            <button className={style.btn}>попробовать снова</button>
            </a>
        </div>
    );
};

