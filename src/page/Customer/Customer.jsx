import './Customer.css'

export default function Customer() {
    return(
        <section className='customer'>
            <h1>ЕСТЬ ЛИ <span>КОНКУРЕНЦИЯ?</span></h1>
            <p>
                Да, каждый успешный бизнес сопровождается конкуренцией. Но в моем бизнесе <br />
                большинство совершают одни и те же ошибки, из-за которых к ним перестают <br />
                обращаться. Поэтому конкуренция вам не страшна если:
            </p>
            <article>
                <div className='block-blue'>
                    <div>
                        <p>
                            Давайте гарантии
                        </p>
                        <p>
                            Выполняете <br />
                            работу в срок
                        </p>
                        <p>
                            Не делаете <br />
                            больших накруток
                        </p>
                        <p>
                            Используете только <br /> 
                            качественные <br />
                            материалы
                        </p>
                        <p>
                            Проверяете <br />
                            качество работы <br />
                            перед сдачей <br />
                            хозяевам
                        </p>
                    </div>
                    <h4>
                        И помните, что у нас большая страна и спрос на <br />
                        <span>заборы</span> становится все больше и больше, а <br />
                        значит, работы хватит на всех.
                    </h4>
                    <button>ПОДАТЬ ЗАЯВКУ НА ПРИОБРЕТЕНИЕ БИЗНЕСА</button>
                </div>
            </article>
        </section>
    )
}