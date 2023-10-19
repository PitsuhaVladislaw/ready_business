import './BuildFences.css'

import { 
    PiPaperPlaneTiltBold, 
    PiPaperclipHorizontal, 
    PiArchiveBold,
    PiBookBookmark,
    PiGlobeSimpleBold,
    PiPencilLine
} from 'react-icons/pi'

function BuildFences() {
    return(
        <section className="buildFences">
            <div className='fences'>
                <header>
                    <h2>СТРОИТЕЛЬСТВО ЗАБОРОВ <br /><span>- РЕАЛЬНЫЙ ДОХОД</span></h2>
                    <p>Вы получите:</p>
                </header>
                <article>
                    <div>
                        <div>
                            <PiPaperPlaneTiltBold className='icon-fences' />
                            <h5>Эффективно настроенную таргетированную рекламу</h5>
                        </div>
                        <div>
                            <PiPaperclipHorizontal className='icon-fences' />
                            <h5>Необходимую сопроводительную документацию</h5>
                        </div>
                        <div>
                            <PiArchiveBold className='icon-fences' />
                            <h5>Полностью разработанный бизнес - план</h5>
                        </div>
                        <div>
                            <PiBookBookmark className='icon-fences' />
                            <h5>Полную инструкцию по работе</h5>
                        </div>
                        <div>
                            <PiGlobeSimpleBold className='icon-fences' />
                            <h5>Собственный веб сайт</h5>
                        </div>
                        <div>
                            <PiPencilLine className='icon-fences' />
                            <h5>Обучение и поддержку</h5>
                        </div>
                    </div>
                    <h4>Я предлагаю вам <span>бизнес под ключ</span> по установке заборов.</h4>
                </article>
                <button>УЗНАЙТЕ ПОДРОБНЕЕ О ПОКУПКЕ ГОТОВОГО БИЗНЕСА</button>
            </div>
        </section>
    )
}

export default BuildFences