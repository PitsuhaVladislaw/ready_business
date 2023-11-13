import './OwnBusiness.css'

import Card1 from '../../assets/img/Rectangle 45.png'
import Card2 from '../../assets/img/Rectangle 46.png'
import Card3 from '../../assets/img/Rectangle 47.png'
import Card4 from '../../assets/img/Rectangle 48.png'
import Card5 from '../../assets/img/Rectangle 49.png'

export default function OwnBusiness() {
    return(
        <section className="ownBusiness">
            <h1>Всегда мечтали о собственном бизнесе?</h1>
            <h6>Хотите заниматься настоящим серьезным делом? Я предлагаю вам только легальный бизнес под ключ. Вы можете стать индивидуальным предпринимателем, открыть ООО или работать как физическое лицо.</h6>
            <article>
                <div>
                    <div>
                        <img src={Card1} alt="cart" />
                        <p>Никаких финансовых пирамид</p>
                    </div>
                    <div>
                        <img src={Card2} alt="cart" />
                        <p>Никакого специального обучения</p>
                    </div>
                    <div>
                        <img src={Card3} alt="cart" />
                        <p>Никаких биржевых брокеров</p>
                    </div>
                    <div>
                        <img src={Card4} alt="cart" />
                        <p>Никаких азартных игр</p>
                    </div>
                    <div>
                        <img src={Card5} alt="cart" />
                        <p>Никакого распространения</p>
                    </div>
                </div>
                <h3>Только реальный и только <span>легальный бизнес под ключ.</span></h3>
            </article>
            <button>УЗНАЙТЕ ПОДРОБНЕЕ О ПОКУПКЕ ГОТОВОГО БИЗНЕСА</button>
        </section>
    )
}