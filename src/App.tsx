import React, {useState} from 'react';
import './App.css';
import {Game} from "./Components/Game/Game";
import {Result} from "./Components/Result/Result";

function App() {
    const [questions,setQuestions]= useState([
        {id:1,title:'React - это...?',vatiants:['приложение ','фрэймворк','библиотека'],correct:2},// 0 first variand carrect
        {id:2,title:'Расшифруйте аббревиатуру DOM. ',vatiants:['Document Object Model','Digital Optical Modulation','Domestic Object Mode'],correct:0},
        {id:3,title:'Чем отличается const от let?',vatiants:['Const - не является частью JavaScript','Переменные, объявленные через const, находятся в глобальной видимости','Объявление const задаёт константу, то есть значение, которое нельзя менять'],correct:2},
        {id:4,title:'Расшифруйте аббревиатуру API.',vatiants:['Analog Programm Interface','Application Programming Interface','Academy Provide Infinite'],correct:1},
        {id:5,title:'Компонента - это ...?',vatiants:['приложение','часть приложения','то, что я не знаю'],correct:1},
        {id:6,title:'Что такое Reducer?',vatiants:['это чистая функция, которая принимает параметрами state и action. ','это просто специальное значение, которое представляет собой «ничего»','это специальный объект, ' +
            'предназначенный для работы с'+
            'ассинхронным кодом'],correct:0},


    ])


const [step,setStep]=useState(0)
    const question=questions[step]

const [correct,setCorrect]=useState(0)




const testgg=(index:number)=>{
    setStep(step+1)
    if (index===question.correct){
        setCorrect(correct+1)
    }
}
    return (
        <div className="App">
            <div style={{margin:'20px'}}>{step !== questions.length ? (<Game question={question} testgg={testgg}/>): <Result correct={correct}/>}</div>

        </div>
    );
}

export default App;
