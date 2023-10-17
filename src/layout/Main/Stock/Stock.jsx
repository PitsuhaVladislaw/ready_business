import './Stock.css'

function Stock() {
    return(
        <section className='stock'>
            <div className='img-back-stock'>
                <h3>Хотите получать новости о скидках и акциях? Подписывайтесь!</h3>
                <article>
                    <form action="firtst-infa">
                        <input type="text" name="name-infa" id="name-infa" placeholder='Введите Ваше имя' />
                        <input type="text" name="tel-infa" id="tel-infa" placeholder='Введите Ваш телефон' />
                    </form>
                    <form action="second-infa">
                        <input type="text" name="email-infa" id="email-infa" placeholder='Введите Ваше e-mail' />
                        <button type='submit'>отправить данные для подписки</button>
                    </form>
                </article>
            </div>
        </section>
    )
}

export default Stock