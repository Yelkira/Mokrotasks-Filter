import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent/NewComponent";

 export type FilterType="all"|"dollar"|"ruble"

function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    const [btnName, SetBtnName] = useState<FilterType>("all")
    let currentMoney = money

    if (btnName === "ruble") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "RUBLS")
    } else if (btnName === "dollar") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "Dollars")
    }


    const onClickFilterHandler = (btnName:FilterType) => {
        SetBtnName(btnName)
    }
    return (<>
            <NewComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
            {/*<ul>
                {currentMoney.map((el, i) => {
                    return (
                        <li key={i}>
                            <span> {el.banknots} </span>
                            <span>{el.value}</span>
                            <span>{el.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={() => onClickFilterHandler("all")}>all</button>
                <button onClick={() => onClickFilterHandler("ruble")}>ruble</button>
                <button onClick={() => onClickFilterHandler("dollar")}>dollar</button>
            </div>*/}
        </>
    )
}

export default App;
