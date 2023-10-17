import Form from '../../components/Form/Form'
import FotInfa from '../../components/FotInfa/FotInfa'
import './Footer.css'

const Footer = () => {
    return(
        <footer>
            <h1>НЕ НАШЛИ ОТВЕТ НА СВОЙ ВОПРОС? <span>СВЯЖИТЕСЬ СО МНОЙ!</span></h1>
            <article>
                <h2>Просто заполните форму обратной связи и я лично свяжусь с вами в течении 72 часов.</h2>
                <section>
                    <Form />
                    <FotInfa />
                </section>
                <p className='copyright'>Copyright © АЛЕКСАНДР "ГОТОВЫЙ БИЗНЕС ПОД КЛЮЧ" 2021 год.  Все права защищены. Копирование материалов без письменного разрешения владельца сайта запрещено. Сайт не является публичной офертой или интернет-магазином</p>
            </article>
        </footer>
    )
}

export default Footer