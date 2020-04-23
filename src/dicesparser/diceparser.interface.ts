import { Dice as interfaceDice } from "../dice/dice.interface";

export interface rolls {
    [id: number]: roll
}


export interface roll {
    type: string,
    dices: Array<interfaceDice>,
    modifiers: number,
    sum: number,
    toString: string
}

export interface diceRoll {
    dicesList: Array<interfaceDice>,
    dicesSum: number,
}