import './Form.css'

function Form() {
    return (
        <article>
            <form name='infa' className='infaForm'>
                <input type="text" name="fullname" id="fullname" placeholder='Ваши Ф.И.O.' />
                <div>
                    <input type="text" name="tel" id="tel" placeholder='Телефон для связи:' />
                    <input type="text" name="email" id="email" placeholder='Электронная почта:' />
                </div>
                <input type="text" name="message" id="message" placeholder='Введите Ваше сообщение' />
            </form>
            <div className='submitBl'>
                <button>Отправить</button>
            </div>
        </article>
    )
}

export default Form