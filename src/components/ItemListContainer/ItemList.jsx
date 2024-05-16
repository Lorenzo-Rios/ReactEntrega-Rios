import React from 'react';
import Burguer from '../Burguers/Burguers';
import BurguerDobleIMG from '../../assets/newdoble.png'
import BurguerTripleIMG from '../../assets/newtriple.png'
import BurguerCuadrupleIMG from '../../assets/cuadruple.png'
import BurguerQuintupleIMG from '../../assets/newquintuple.jpg'

export default function ItemList({ selectedBurger }) {
    return (
        <div>
            {selectedBurger === 'doble' && <Burguer id={'id1'} img={BurguerDobleIMG} price={7000} title={'DobleTasty'} />}
            {selectedBurger === 'triple' && <Burguer id={'id2'} img={BurguerTripleIMG} price={10000} title={'TripleYanki'} />}
            {selectedBurger === 'cuadruple' && <Burguer id={'id3'} img={BurguerCuadrupleIMG} price={12000} title={'CuadrupleMonster'} />}
            {selectedBurger === 'quintuple' && <Burguer id={'id4'} img={BurguerQuintupleIMG} price={14000} title={'QuintupleChess'} />}
        </div>
    );
}