
/**
 * Esta funcion retorna el valor numerico de una carta
 * @param {String} carta 
 * @returns {Number} Retorna un valor numerico
 */
export const valorCarta = ( carta ) => {

    if ( !carta ) throw new Error('Carta es obligatorio')

    const valor = carta.substring(0, carta.length - 1);
    
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}
