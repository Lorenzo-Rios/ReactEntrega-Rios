import React from 'react';
import Burguer from '../Burguers/Burguer';
import BurguerIMG from '../../assets/newtriple.png'

export default function ItemList({ selectedBurger }) {
    return (
        <div>
            {selectedBurger === 'doble' && <Burguer id={'id1'} img={BurguerIMG} price={266} title={'hamburguesita'} />}
            {selectedBurger === 'triple' && <Burguer id={'id2'} img={BurguerIMG} price={266} title={'hamburguesita'} />}
            {selectedBurger === 'cuadruple' && <Burguer id={'id3'} img={BurguerIMG} price={266} title={'hamburguesita'} />}
            {selectedBurger === 'quintuple' && <Burguer id={'id4'} img={BurguerIMG} price={266} title={'hamburguesita'} />}
        </div>
    );
}