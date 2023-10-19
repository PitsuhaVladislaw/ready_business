import './Condition.css'

import Professor from '../../../assets/img/professor.png'

function Condition() {
    return(
        <section className='condition'>
            <img src={Professor} alt="professor" />
            <article className="cond-head">
                <h1>В итоге вы можете <span>купить готовый бизнес</span></h1>
                <p>всего за 150.000 рублей. Эта сумма окупится вам с первого же заказа. <span>Реальный доход в месяц</span> <b>составляет около 1.500.000 руб.</b></p>
            </article>
            <article className="cond-body">
                <div className='cond-body_color'>
                    <div className='cond-body_menu'>
                        <div style={{alignItems: 'flex-start'}}>
                            <h3>Моя месячная статистика</h3>
                            <h6>за апрель, 2021 года:</h6>
                        </div>
                        <div>
                            <p>Затраты на рекламу:</p>
                            <h4>87.125 ₽</h4>
                        </div>
                        <div>
                            <p>Выполнено объектов</p>
                            <h4>11 шт</h4>
                        </div>
                        <div>
                            <p>Доход: </p>
                            <h4>431.337 ₽</h4>
                        </div>
                    </div>
                    <button>УЗНАЙТЕ ПОДРОБНЕЕ О ПОКУПКЕ ГОТОВОГО БИЗНЕСА</button>
                </div>
            </article>
        </section>
    )
}

export default Condition