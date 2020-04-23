/*
 Classe dicesParser
 Permet de g�rer une liste de lancer de d�s de type "2D6+4-2" pour renvoyer les r�sultats du lancer sous forme d'un json

Methodes :

_DicesParser.construct(Array)
    Methode private
    initiation de l'objet et appel de la m�thode dicesSplit             // Ici ["2D6+4-2", "1D12"]

_DicesParser.dicesSplit()
    Methode private
    D�coupe la chaine en autant de lancer 
    que possible et s�pare les modifiers

 renvoi la liste
 rollsResult :[
 {                                                                      Objet "Premier lancer"
 rollA : [ DiceA1 :{side : 6, value: 4}, DiceA2:{side: 6, value: 2}],   // La liste des objets dice du premier lancer{side: valeur du d�s, value: valeur du lancer}
 modifiers : 2,                                                         // La somme des modifiers (4 - 2)
 sum : 8                                                                // La somme des lancer de d� (4 + 2) et des modifiers (4 - 2)
 },                                                              
 {                                                                      Objet "Deuxi�me lancer"
 rollB: [DiceB1:{side:12, value: 3}]                                    // La liste des objets dice du deuxi�me lancer {side: valeur du d�s, value: valeur du lancer}
 modifiers: 0,                                                          // La somme des modifiers (0)
 sum: 3                                                                 // La somme des lancer de d� (3) et des modifiers (0)
 }                                                                

_DicesParser.modifiersParser()
    methode Private
    converti et calcul les string des modifiers en number.

DicesParser._roll(map{json});
    Methode private
    prend en argument la liste renvoy�e par la m�thode splitRolls
    Instancie la classe Dice autant de fois qu'il y a de lancer 
    et renvoi la liste des lancer de d�s[DiceA1, DiceA2]                // Pour le premier lancer de l'exemple
                                                                        // la m�thode renvoi : [ DiceA1 :{side : 6, value: 4}, DiceA2:{side: 6, value: 2}]

}
 */

import { DiceController as Dice } from "../dice/dice.service";

export class DicesParser {

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
        let dice = dices.match(/\d*d\d+/gi); // R�cup�re ["2D3"]
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

        if (dice[0].search(/^\d+d/gi) !== 0) dice[0] = "1".concat(dice[0]); //dans le cas de "d12" un "1" est rajout� pour obtenir "1D12"

        let diceDecomposed = dice[0].split(/d/gi); // R�cup�re ["2", "3"]
        let rollNumber = parseInt(diceDecomposed[0]); //R�cup�re le nombre de lancer
        let side: number = parseInt(diceDecomposed[1]); //R�cup�re a valeur du d�

        let dicesList = [];
        let dicesSum = 0;

        /*Pour chaque lancer de d� de m�me valeur*/
        for (let i = 0; i < rollNumber; i++) {
            let diceRoll = new Dice(side).rolled(); //Cr�ation de l'objet d�
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
