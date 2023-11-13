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
import CompBlock from './CompBlock/CompBlock'
import Payback from './Payback/Payback';
import ProfitBusiness from './ProfitBusiness/ProfitBusiness';
import Customer from './Customer/Customer';

function Main() {
    return(
        <main>
            <OwnBusiness />
            <Payback />
            <BuildFences />
            <Condition />
            <Answear />
            <Price />
            <Customer />
            <CompBlock />
            <Stock />
            <ProfitBusiness />
            <SeasonWork />
            <Questions />
            <Garantee />
            <TakeDate />
        </main>
    )
}

export default Main