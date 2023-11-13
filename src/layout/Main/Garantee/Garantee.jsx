import './Garantee.css'

import Ipod from '../../../assets/img/ipod.png'
import Pencil from '../../../assets/img/pencil.png'
import Vector from '../../../assets/img/vector.png'
import Risunok from '../../../assets/img/risunok.png'

function Garantee() {
    return(
        <section className='garantee'>
            <header>
                <h1>МОИ ГАРАНТИИ</h1>   
                <p>Я гарантирую вам, что:</p>
            </header>
            <article className='line-gara'>
                <main>
                    <article className='ipod'>
                        <div>
                            <img src={Ipod} alt="ipad" />
                            <img src={Risunok} className='risunok' alt="risunok" />
                        </div>
                        <img src={Pencil} alt="pencil" />
                    </article>
                    <article className='list-gar'>
                        <img src={Vector} alt="vector" />
                        <div>
                            <ul>
                                <li><h6 style={{marginBottom: '20px'}}>Передам все знания, которые могут  потребоваться в серьезном бизнесе</h6></li>
                            </ul>
                            <ul>
                                <li>
                                    <h5>Вы не останетесь в минусе</h5>
                                </li>
                                <li>
                                    <h5>Если вам не подойдет этот прибыльный бизнес, то вы всегда сможете его продать другим желающим</h5>
                                </li>
                                <li>
                                    <h5>При грамотному подходу к этому делу, у вас всегда будут клиенты</h5>
                                </li>
                            </ul>
                            <ul>
                                <li><h6>Даже если вы перестанете заниматься этим доходным бизнесом, то знания останутся при вас и вы всегда сможете передать их другим, проводя платное обучение.</h6></li>
                            </ul>
                        </div>
                    </article>
                </main>
            </article>
        </section>
    )
}

export default Garantee