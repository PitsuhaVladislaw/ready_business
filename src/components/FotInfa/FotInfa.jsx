import './FotInfa.css'

import Link1 from '../../assets/icon/Phone.png'
import Link2 from '../../assets/icon/Skype.png'
import Link3 from '../../assets/icon/Mail.png'
import Hit from '../../assets/icon/hit 1.png'

function FotInfa() {
    return(
        <article>
            <div className='cont_infa'>
                <div className="cont_block">
                    <div>
                        <img src={Link1} alt="icon" />
                    </div>
                    <a href="none">
                        <p>8 (812) 951-60-55</p>
                    </a>
                </div>
                <div className="cont_block">
                    <div>
                        <img src={Link2} alt="icon" />
                    </div>
                    <a href="none">
                        <p>big.Business</p>
                    </a>
                </div>
                <div className="cont_block">
                    <div>
                        <img src={Link3} alt="icon" />
                    </div>
                    <a href="none">
                        <p>info@work-business.ru</p>
                    </a>
                </div>
            </div>
            <div className='text_infa'>
                <h1>Наш офис:</h1>
                <h2>194352 г. Санкт-Петербург, ул.Сиреневый бульвар, дом 18, корпус 1, офис 415 Б.</h2>
                <p>Для визита в офис обязательно следует согласовать время по телефону, чтобы охрана подготовила пропуск на Ваше имя</p>
            </div>
            <div className='after_infa'>
                <p>Если вы не хотите ждать и предпочитаете решать вопросы по телефону, то просто позвоните мне по номеру: 8 (812) 9516055</p>
                <a href="none">
                    <img src={Hit} alt="link" />
                </a>
            </div>
        </article>
    )
}

export default FotInfa