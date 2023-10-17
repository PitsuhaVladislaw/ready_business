import './SeasonWork.css'
import {TbSun} from 'react-icons/tb'
import {PiCreditCardBold, PiMartiniBold} from 'react-icons/pi'

function SeasonWork() {
    return(
        <section className="seasonwork">
            <h1>ВНИМАНИЕ! ЭТО <span>СЕЗОННАЯ РАБОТА</span></h1>
            <section>
                <article>
                    <h3>Если вы решили приобрести у меня этот <span>прибыльный бизнес под ключ</span>, то стоит иметь в виду, что это сезонная работа.</h3>
                    <div className='art-card'>
                        <div>
                            <TbSun className='art-icon' />
                            <p>Больше всего заказов поступает весной, летом и осенью. Зимой количество заявок снижается и вы можете позволить себе отдохнуть.</p>
                            <div></div>
                        </div>
                        <div>
                            <PiCreditCardBold className='art-icon' />
                            <p style={{margin: '30px auto 56px'}}>За 1 сезон вы заработаете несколько миллионов, что позволит вам спокойно не работать в зимний период.</p>
                            <div></div>
                        </div>
                        <div>
                            <PiMartiniBold className='art-icon' />
                            <p>Если в холодное время можно ожидать к спаду заявок, то весной вы должны быть готовы к значительному увеличению потока клиентов.</p>
                            <div></div>
                        </div>
                    </div>
                    <div className='art-text'>
                        <p><span>Установка заборов - прибыльный бизнес</span>, который поможет вам получать серьезные доходы.</p>
                        <button>ПОДАТЬ ЗАЯВКУ НА ПРИОБРЕТЕНИЕ БИЗНЕСА</button>
                    </div>
                </article>
            </section>
        </section>
    )
}

export default SeasonWork