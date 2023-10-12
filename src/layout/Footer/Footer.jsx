import Form from '../../components/Form/Form'
import FotInfa from '../../components/FotInfa/FotInfa'
import './Footer.css'

const Footer = () => {
    return(
        <footer>
            <h1>Просто заполните форму обратной связи и я лично свяжусь с вами в течении 72 часов.</h1>
            <section>
                <Form />
                <FotInfa />
            </section>
            <p className='copyright'>Copyright © АЛЕКСАНДР "ГОТОВЫЙ БИЗНЕС ПОД КЛЮЧ" 2021 год.  Все права защищены. Копирование материалов без письменного разрешения владельца сайта запрещено. Сайт не является публичной офертой или интернет-магазином</p>
        </footer>
    )
}

export default Footer