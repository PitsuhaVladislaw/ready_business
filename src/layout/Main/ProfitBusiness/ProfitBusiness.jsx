import './ProfitBusiness.css'

import Hands from '../../../assets/img/hands.png'

export default function ProfitBusiness() {
    return(
        <section className='profitBusi'>
            <h1>ПОЧЕМУ Я РЕШИЛ ПРОДАТЬ <span>ДОХОДНЫЙ БИЗНЕС?</span></h1>
            <article>
                <p>
                    Вполне резонный вопрос. Но каждый адекватный <br />
                    человек хочет развиваться и увеличивать свой <br />
                    доход. На сегодняшний день я осваиваю новое <br />
                    направление бизнеса с более высоким доходом, <br />
                    поэтому не могу больше тратить время даже на <br />
                    такой прибыльный бизнес.
                </p>
                <h6>
                    Зарабатываешь сам - помогай зарабатывать <br />
                    другим. Так прибыль выше.
                </h6>
                <button>ПОДАТЬ ЗАЯВКУ НА ПРИОБРЕТЕНИЕ БИЗНЕСА</button>
            </article>
            <img src={Hands} alt="hands" />
        </section>
    )
}