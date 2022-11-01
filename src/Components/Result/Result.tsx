import React from 'react';
import style from './Result.module.css'
import yes from '../../picture/i.webp'

type resultType={

    correct:number
}


export const Result = (props:resultType) => {
    return (
        <div className={style.result}>
            <img src = {yes}/>
            <h2>Правильно ответили на {props.correct} из 6 </h2>
            <a href='/'>
            <button>попробовать снова</button>
            </a>
        </div>
    );
};

