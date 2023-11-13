import './Price.css'
import {PiEnvelopeSimpleOpenLight} from 'react-icons/pi'
import {LuPhoneCall} from 'react-icons/lu'
import {PiPenNibStraightBold} from 'react-icons/pi'
import {PiNotePencilBold} from 'react-icons/pi'
import {PiCreditCard} from 'react-icons/pi'
import {FiBookOpen} from 'react-icons/fi'
import Money from '../../assets/img/Money.png'

function Price() {
    return(
        <section className='price'>
            <h1>КАК <span>КУПИТЬ</span> ДАННЫЙ <span>БИЗНЕС ПОД КЛЮЧ?</span></h1>
            <div className='back-picture'>
                <article>
                    <img src={Money} alt="Money" />
                    <div className='group-adva'>
                        <div>
                            <div className="card-adva">
                                <PiEnvelopeSimpleOpenLight className='icon-card' />
                                <h2>Подайте заявку <span>ТУТ</span></h2>
                                <p>Обратите внимание, что заполнить данные нужно максимально корректно, по ним мы будем составлять договор.</p>
                            </div>
                            <div className="card-adva">
                                <LuPhoneCall className='icon-card' />
                                <h2>Примите входящий звонок</h2>
                                <p>Я свяжусь с Вами и мы обсудим ваш бизнес по установке заборов.</p>
                            </div>
                        </div>
                        <div>
                            <div className="card-adva">
                                <PiPenNibStraightBold className='icon-card' />
                                <h2>Подпишите договор</h2>
                                <p>По данным указанным в заявке мы составим договор и вышлем Вам для подписи.</p>
                            </div>
                            <div className="card-adva">
                                <PiNotePencilBold className='icon-card' />
                                <h2>Отправьте нам договор</h2>
                                <p>Скан договора вы отправите на электронную почту, а оригинал почтой России или курьером.</p>
                            </div>
                            <div className="card-adva">
                                <PiCreditCard className='icon-card' />
                                <h2>Внесите оплату</h2>
                                <p>Оплатить вы можете сразу после подписания договора (или раньше - по желанию). Чем раньше вы внесете оплату, тем быстрее сможете открыть свое дело.</p>
                            </div>
                            <div className="card-adva">
                                <FiBookOpen className='icon-card' />
                                <h2>Получите <span>готовый доходный бизнес</span> в течение 72-х часов</h2>
                            </div>
                        </div>
                    </div>
                    <h4>ВСЕ ЧЕСТНО И ПРОЗРАЧНО. ПОЛУЧЕНИЕ ПРИБЫЛИ Я ГАРАНТИРУЮ.</h4>
                    <button>ПОДАТЬ ЗАЯВКУ НА ПРИОБРЕТЕНИЕ БИЗНЕСА</button>
                </article>
            </div>
        </section>
    )
}

export default Price