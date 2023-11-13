import './CompBlock.css'

import { PiTrendDownBold, PiLightbulbThin } from 'react-icons/pi'
import { HiOutlineHand } from 'react-icons/hi'
import { FiTag } from 'react-icons/fi'

import Wall from '../../../assets/img/Vector 22.png'

export default function CompBlock() {
    return (
        <section className='compe'>
            <div>
                <h1>Я ПОМОГУ ВАМ СТАТЬ <span>ЛУЧШЕ КОНКУРЕНТОВ</span></h1>
                <h6>В этой сфере я работаю уже более 20 лет и знаю много тонкостей и нюансов работы. Я поделюсь с вами всеми хитростями этого дела, если вы решите купить <span>реальный бизнес</span>. Например, вы узнаете:</h6>
            </div>
            <article>
                <div>
                    <PiTrendDownBold className="compe-icon" />
                    <p>Как не остаться в минусе ни при каких  обстоятельствах</p>
                </div>
                <div>
                    <FiTag className="compe-icon" />
                    <p>Как контактировать с поставщиками и получать <span>хорошие скидки</span></p>
                </div>
                <div>
                    <div>
                        <HiOutlineHand className='compe-icon left-h' />
                        <img src={Wall} alt="wall" />
                        <div className='blc-img'>
                            <HiOutlineHand className='compe-icon right-h' />
                        </div>
                    </div>
                    <p>Как понять, что клиент действительно готов сделать заказ и не передумает</p>
                </div>
                <div>
                    <PiLightbulbThin className="compe-icon" />
                    <p>Какие могут быть <span>сюрпризы</span> в работе с производством</p>
                </div>
            </article>
            <p>Также вы узнаете много других секретов и хитростей, которые позволят вам получать серьезный и реальный доход.</p>
            <button>КУПИТЬ БИЗНЕС ПОД КЛЮЧ</button>
        </section>
    )
}