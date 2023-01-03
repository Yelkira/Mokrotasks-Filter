import React from "react";
import {FilterType} from "../App";
import {Button} from "./Button";

type NewComponentPropsType = {
    currentMoney:Array<CurrentMoneyType>
    onClickFilterHandler:(btnName:FilterType)=>void
}
type CurrentMoneyType = {
    banknots: string
    value: number
    number: string
}

export const NewComponent = (props:NewComponentPropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((el, i) => {
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
                <Button name={"all"} callback={() => props.onClickFilterHandler("all")}/>
                <Button name={"ruble"} callback={() => props.onClickFilterHandler("ruble")}/>
                <Button name={"dollar"} callback={() => props.onClickFilterHandler("dollar")}/>
                {/*<button onClick={() => props.onClickFilterHandler("all")}>all</button>
                <button onClick={() => props.onClickFilterHandler("ruble")}>ruble</button>
                <button onClick={() => props.onClickFilterHandler("dollar")}>dollar</button>*/}
            </div>
        </>
    )
}