import './Payback.css'

import Paral from '../../assets/img/Vector-paral.png'
import MoneySmall from '../../assets/img/moneysmall.png'

export default function Payback() {
    return(
        <section className='payback'>
            <article>
                <div>
                    <div></div>
                    <h1>
                        Время <br />
                        окупаемости <br />
                        <span>от 3 дней</span>
                    </h1>
                    <h6>
                        Это зависит только от вас! Я и сам <br />
                        работаю в этом направлении, и помогу <br />
                        вам организовать доходный бизнес.
                    </h6>
                    <p>
                        <span>Это <span style={{ color: '#008AC6' }}>сезонная работа</span>, 9 месяцев можно зарабатывать в <br />
                        среднем,</span> <span style={{ color: '#FF5E14' }}>1.500.000 миллионов</span> рублей ежемесячно, а <br />
                        зимой устроить себе отпуск. Главное, этот бизнес под <br />
                        ключ подходит абсолютно всем!
                    </p>
                    <div>
                    </div>
                    <h4>
                        <span>Сделайте первый шаг</span> <br />
                        навстречу своему делу - оставьте <br />
                        заявку на сайте.
                    </h4>
                </div>
                <img src={Paral} alt="paral" />
                <img src={MoneySmall} className='money' alt="money" />
            </article>
            <button>УЗНАЙТЕ ПОДРОБНЕЕ О ПОКУПКЕ ГОТОВОГО БИЗНЕСА</button>
        </section>
    )
}