import './TakeDate.css'

function TakeDate() {
    return(
        <section className="takedate">
            <header>
                <h1><span>ПОЖАЛУЙСТА!</span> ВНИМАТЕЛЬНО ЗАПОЛНЯЙТЕ ДАННЫЕ!</h1>
                <p>от этого зависит правильное составление договора</p>
            </header>
            <main>
                <article className='input-date'>
                    <h2>ЗАКАЗАТЬ БИЗНЕС под ключ</h2>
                    <form>
                        <input type="text" name="date-up" id="date-up" placeholder='Ваше Ф.И.О.' />
                        <div>
                            <input type="text" name="mail-up" id="mail-up" placeholder='Электронная почта:' />
                            <input type="text" name="tel-up" id="tel-up"  placeholder='Телефон для связи:'/>
                        </div>
                        <div>
                            <input type="text" name="time-in" id="time-in" placeholder='Удобное время для связи:' />
                            <input type="text" name="date-in" id="date-in" placeholder='Дата рождения:' />
                        </div>
                        <input type="text" name="town-in" id="town-in" placeholder='Город проживания:' />
                        <div>
                            <input type="text" name="pass-infa" id="pass-infa" placeholder='Серия и номер паспорта' />
                            <input type="text" name="date-pass" id="date-pass" placeholder='Когда выдан паспорт:' />
                        </div>
                        <input type="text" name="kto-pass" id="kto-pass" placeholder='Кем выдан паспорт:' />
                        <input type="text" name="add-in" id="add-in" placeholder='Адрес прописки:' />
                    </form>
                    <button>отправить данные для заключения договора</button>
                </article>
                <article className='img-date'>
                    <h3>ИЛИ ПРОСТО СВЯЖИТЕСЬ СО МНОЙ ЛИЧНО ПО ТЕЛЕФОНУ: <span>8787878797897897</span></h3>
                </article>
            </main>
        </section>
    )
}

export default TakeDate