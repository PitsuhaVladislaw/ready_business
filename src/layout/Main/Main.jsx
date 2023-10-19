import './Main.css'

import Price from './Price/Price';
import Questions from './Questions/Questions';
import SeasonWork from './SeasonWork/SeasonWork';
import TakeDate from './TakeDate/TakeDate';
import Answear from './Answear/Answear';
import Garantee from './Garantee/Garantee';
import Stock from './Stock/Stock';
import Condition from './Condition/Condition';
import BuildFences from './BuildFences/BuildFences';
import OwnBusiness from './OwnBusiness/OwnBusiness';

function Main() {
    return(
        <main>
            <OwnBusiness />
            <BuildFences />
            <Condition />
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