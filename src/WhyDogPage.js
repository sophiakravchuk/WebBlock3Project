import React from "react";
import smilingdog from "./images/smilingdog.jpg";
import happytoseeyou from "./images/happytoseeyou.gif";
import walkersWalkingDogs from "./images/walkers-walking-dogs.jpg";
import joggingwithdog from "./images/joggingwithdog.jpg";
import dogsclub from "./images/dogsclub.jpg";
import stopScrolling from "./images/stop_scrolling.jpg";


export default class WhyDogPage extends React.Component {
    constructor(p) {
        super(p);
        console.log(this.props.CurrPage)
    }

    OnPageChange(pageId) {
        window.location = pageId
    }

    getRootClassName() {
        return this.props.CurrPage;
    }

    getContentClassName() {
        const totnString = this.props.CurrPage;
        return (totnString || "").concat("Content");
    }

    render() {
        return (
                <div className={this.getRootClassName()}>
                    <div className={this.getContentClassName()}>

                        <div className={"WhyDogFirstText"}>
                            <h1>Чому собачка?</h1>
                            <h2>Досі не маєш собаки і думаєш, що тобі це не потрібно?
                                Часто задумуєшся, чому все більше твоїх друзів заводять чотирилапих друзів?
                                Можливо пес - це просто не для тебе, а може ти просто не знаєш всіх переваг
                                такого улюбленця. Нижче наведено 5 причин чому собачка -
                                це саме те, що тобі зараз потрібно.
                            </h2>
                        </div>
                        <div className={"WhyDogTextContent"}>

                            <img src={smilingdog} alt={"smiling dog"}
                                 style={{
                                     width: "auto", height: 300,
                                     float: "right", marginRight: "20%", marginLeft: "3%", marginTop: "2%",
                                     boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                                 }}/>

                            <h3>1. Собаки змушують нас сміятися</h3>
                            <p>Відповідно до одного з досліджень журналу Society & Animals, власники собак
                                сміються частіше. Дослідники опитали власників собак та власників кішок.
                                Проаналізувавши дані, прийшли до висновку, що господарі тільки собак або
                                і собак і кішок сміються частіше, ніж всі інші.</p>

                            <h3>2. Пес - однин з друзів, в якому ти можеш бути впевненим</h3>
                            <img src={happytoseeyou} alt={"happy to see you"}
                                 style={{
                                     width: 400, height: "auto",
                                     float: "left", marginLeft: "10%", marginRight: "3%",
                                     boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                                 }}/>

                            <p>В будинку, де є собака, нема місця для самотності.
                                Пес буде кожен день чекати тебе з роботи, радісно реагувати
                                на будь-який знак уваги і сходити з розмуму від щастя, коли у тебе вихідний.
                                Ці улюбленці здатні на глибоку відданість і безкорисну любов.
                                І в цьому їм нема рівних! </p>

                            <h3>3. Собаки роблять нас більш товариськими</h3>
                            <img src={walkersWalkingDogs} alt={"Walkers Walking Dogs"}
                                 style={{
                                     width: 400, height: "auto",
                                     float: "right", marginRight: "20%", marginLeft: "3%",
                                     boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                                 }}/>


                            <p>У Великобританії команда вчених з Університету Ліверпуля і Брістоля з'ясувала, що у
                                собачників більше друзів, ніж у тих, у кого немає собаки. Логічно, враховуючи, що собака
                                змусить вас частіше виходити з дому і гуляти в парку, де ви, швидше за все,
                                познайомитеся
                                з іншими власниками чотириногих вихованців.</p>

                            <h3>4. Твій пес - твій найкращий тренер!</h3>
                            <img src={joggingwithdog} alt={"jogging with dog"}
                                 style={{
                                     width: "auto", height: 300,
                                     float: "left", marginLeft: "15%", marginRight: "3%",
                                     boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                                 }}/>
                            <p>Відповідальний господар гуляє з собакою двічі кожного дня в будь-яку погоду. Багатьом
                                улюбленцям прогулянки і рух необхідні як повітря. Попри те, що гуляти разом з собакою
                                набагато цікавіше, це ще й покращує твоє самопочуття і фізичну форму. Прогулянки двічі
                                надень по півгодини будуть для тебе як невеличкі тренування. То чому ж не привести
                                себе в форму?
                            </p>

                            <h3>5. Клуб за інтересами</h3>
                            <img src={dogsclub} alt={"dogs club"}
                                 style={{
                                     width: 400, height: "auto",
                                     float: "right", marginRight: "20%", marginLeft: "3%",
                                     boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                                 }}/>


                            <p>Пес - це твій особистий клуб за інтересами. Ви можете разом займатися спортом,
                                подорожувати, брати участь в виставках, відвідувати заходи для собак і їхніх
                                господарів і навіть навчитися танцювати! Собака може стати для вас провідником
                                в новий і дуже захоплюючий світ, де ви обов'язково зустрінете
                                однодумців.</p>


                            <img src={stopScrolling} alt={"stop Scrolling"}
                                 style={{
                                     width: 400, height: "auto",
                                     marginTop: 100, marginLeft: "37%",
                                     boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                                 }}/>

                            <p className={"endText"}>То що, тепер ти хочеш собачку?</p>

                        </div>

                    </div>
                </div>
        );
    }
}
