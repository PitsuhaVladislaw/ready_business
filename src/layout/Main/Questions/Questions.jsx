import Accordion from '../../../components/Accordion/Accordion'
import './Questions.css'


function Questions() {
    return(
        <section className="questions">
            <h1>ВОПРОСЫ - ОТВЕТЫ О ТОМ КАК КУПИТЬ У МЕНЯ <span>ГОТОВЫЙ БИЗНЕС</span></h1>
            <article>
                <Accordion name="Сколько стоит готовый бизнес по установке заборов?" title="+">
                    <p>Some interesting answear</p>
                </Accordion>
                <Accordion name="Что вы получите за эти деньги?" title="+">
                    <p>Что вы получите за эти деньги?</p>
                </Accordion>
                <Accordion name="Как купить бизнес под ключ?" title="+">
                    <p>Some interesting answear</p>
                </Accordion>
                <Accordion name="Какие гарантии получения бизнеса после оплаты?" title="+">
                    <p>Some interesting answear</p>
                </Accordion>
                <Accordion name="Установка заборов всегда доходный бизнес?" title="+">
                    <p>Some interesting answear</p>
                </Accordion>
                <Accordion name="Сколько можно заработать в месяц?" title="+">
                    <p>Some interesting answear</p>
                </Accordion>
                <Accordion name="Как долго будет окупаться бизнес?" title="+">
                    <p>Some interesting answear</p>
                </Accordion>
                <Accordion name="Можно ли встретиться лично?" title="+">
                    <p>Some interesting answear</p>
                </Accordion>
                <Accordion name="К примеру, мне не подошёл ваш бизнес, скажите, пожалуйста, Вы поможете его мне продать другим людям?" title="+">
                    <p>Some interesting answear</p>
                </Accordion>
            </article>
        </section>
    )
}

export default Questions