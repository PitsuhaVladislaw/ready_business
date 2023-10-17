import './Main.css'

import Price from './Price/Price';
import Questions from './Questions/Questions';
import SeasonWork from './SeasonWork/SeasonWork';
import TakeDate from './TakeDate/TakeDate';
import Answear from './Answear/Answear';
import Garantee from './Garantee/Garantee';
import Stock from './Stock/Stock';

function Main() {
    return(
        <main>
            <Answear />
            <Price />
            <Stock />
            <SeasonWork />
            <Questions />
            <Garantee />
            <TakeDate />
        </main>
    )
}

export default Main