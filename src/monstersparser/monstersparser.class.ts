import { DiceController as Dice } from "../dice/dice.service";

export class MonstersParser {

    public constructor(dicesList: Array<string>) {
        this.dicesSplit(dicesList);
    };

    private _modifierParser(modifiers: Array<string>) {
        let modifiersSum = 0;
        for (let m of modifiers) { modifiersSum += parseInt(m) } // Additionne chaque �l�ment de la liste ["+3", "-4"]
        return modifiersSum;
    };

    public dicesSplit(rollsList: Array<string>) {

    let rolls = [];

    for (let dices of rollsList) {
    /*Pour chaque lancer de type "2D3+3-4"*/

        /*Partie modifier*/
        let modifiersSum = 0;
        let modifiers = dices.match(/(\+\d+)|(\-\d+)/g); // R�cup�re ["+3", "-4"]
        if (modifiers) {
            modifiersSum = this._modifierParser(modifiers);
        };

        /*Partie d�s*/
        let dice = dices.match(/\d*m\d+/gi); // R�cup�re ["2M3"]
        let dicesRoll = this._roll(dice as Array<string>);

        /*Cr�ation de l'objet final*/
        let roll = {
            toString: dices,
            dices: dicesRoll.dicesList,
            modifiers: modifiersSum,
            sum: modifiersSum + dicesRoll.dicesSum,
        };

        /*liste append des differents objet finaux*/
        rolls.push(roll);

        };
        /*Renvoi de la liste finale*/
        return rolls;
    };

    private _roll(dice: Array<string>) {

        if (dice[0].search(/^\d+m/gi) !== 0) dice[0] = "1".concat(dice[0]); //dans le cas de "d12" un "1" est rajout� pour obtenir "1D12"

        let diceDecomposed = dice[0].split(/d/gi); // R�cup�re ["2", "3"]
        let rollNumber = parseInt(diceDecomposed[0]); //R�cup�re le nombre de lancer
        let side: number = parseInt(diceDecomposed[1]); //R�cup�re a valeur du d�

        let dicesList = [];
        let dicesSum = 0;

        /*Pour chaque lancer de d� de m�me valeur*/
        for (let i = 0; i < rollNumber; i++) {
            let diceRoll = new Dice(side).get(); //Cr�ation de l'objet d�
            dicesList.push(diceRoll); //Ajout du d� cr�� � la liste dices
            dicesSum += diceRoll.value; //Additionne la valeur des diff�rent lancer
        };

        let dicesRoll = {
            dicesList: dicesList,
            dicesSum: dicesSum,
        };
        return dicesRoll;
    };
};