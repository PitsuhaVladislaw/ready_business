import React, {useState} from "react";
import './NavBar.css'

import Key from "../../assets/icon/Subtract.png";

const Navbar = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [isIcon, setIconClass] = useState("icon");
    const [isButton, setButtonClass] = useState("button");
    const [isMenu, setMenuBur] = useState("burger-menu");

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
            setIconClass("hidden")
            setButtonClass("button hidden")
            setMenuBur("burger-menu close-menu");
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
            setIconClass("icon")
            setButtonClass("button")
            setMenuBur("burger-menu");
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <nav>
            <div className={isIcon}>
                <img src={Key} alt="Key" />
                <p>Готовый бизнес <br /><span>под ключ</span></p>
            </div>
            <div className={isMenu} onClick={updateMenu}>
                <div style={{marginTop: '0'}} className={burger_class} ></div>
                <div style={{width: '36px', left: '8px'}} className={burger_class} ></div>
                <div className={burger_class} ></div>
            </div>
            <div className={menu_class}>
                <p>мечтали о бизнесе?</p>
                <p>Время окупаемости</p>
                <p>РЕАЛЬНЫЙ ДОХОД</p>
                <p>можете купить бизнес</p>
                <p>ПОЧЕМУ стоит КУПИТЬ</p>
                <p>КАК КУПИТЬ БИЗНЕС ?</p>
                <p>ЕСТЬ ЛИ КОНКУРЕНЦИЯ?</p>
                <p>ПОМОГУ СТАТЬ ЛУЧШЕ КОНКУРЕНТОВ</p>
                <p>ПОЧЕМУ РЕШИЛ ПРОДАТЬ БИЗНЕС?</p>
                <p>ВНИМАНИЕ! ЭТО СЕЗОННАЯ РАБОТА</p>
                <p>ВОПРОСЫ - ОТВЕТЫ</p>
                <p>ЗАКАЗАТЬ БИЗНЕС</p>
                <p>Готовый бизнес под ключ</p>
            </div>
            <button className={isButton} id="btn">Заказать звонок</button>
        </nav>
    )
}

export default Navbar