
import _ from "underscore";

// export const miNombre = 'Piero';

/**
 *  ESTA FUNCION CREA UN NUEVO DECK
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} RETORNA UN NUEVO DECK DE CARTAS
 */
export const crearDeck = ( tiposDeCarta, tiposEspeciales) => {

    if( !tiposDeCarta || tiposDeCarta === 0 ){
        throw new Error('tiposDeCarta es obligatorio como un arreglo de string'); 
    }

    if( !tiposEspeciales || tiposEspeciales === 0 ){
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string'); 
    }

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// EXPORTACION POR DEFECTO
// export default crearDeck;