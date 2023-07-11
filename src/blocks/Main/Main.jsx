import "./Main.css"
import {Thesis} from "../../components/thesis/thesis.jsx";

export function Main() {
    return(
        <div className="mainsection">
            <div className="mainsection__wrapper">
                <div className="first">
                    <div className="first__thesis">
                        <Thesis number={"1"} thesis={"сначала подпишемся на соцсети"}/>
                    </div>
                    <div className="first__section">
                        <div className="first__section__content">// Нужно обязательно подписаться на Первый курс ИОТ, там публикуется самая важная информация. Союз студентов - это коллектив самых активных ребят института. А в RTF MEMES с юмором обсуждаются все последние события </div>
                        <div>
                            <a href="https://vk.com/iot_first_urfu"><div className="button">Первый курс ИОТ</div></a>
                            <a href="https://vk.com/rtfmemes"><div className="button">RTF MEMES</div></a>
                            <a href="https://vk.com/irit_rtf"><div className="button">Союз студентов  ИРИТ-РТФ</div></a>
                        </div>
                    </div>
                </div>

                <div className="second__section">
                    <div className="second__thesis">
                            <Thesis number={"2"} thesis={"посетим некоторые сайты"}/>
                    </div>
                    <div className="second__section__content">
                        <div className="second__section__content__wrapper">
                            <div className="second__section__element">// Скорее всего ты уже знаешь, что такое личный кабинет, но если это не так, скорее посети его</div>
                            <div className="second__section__element">// Пришло время узнать, что находится в самом институте. Приглашаем тебя на виртаульную прогулку по ИРИТ-РТФ</div>
                        </div>
                        <div className="second__section__content__buttons">
                            <div className="button">Личный кабинет</div>
                            <div className="button">Навигатор по ИРИТ-РТФ</div>
                        </div>
                    </div>
                </div>
                <div className="third__fourth__sections">
                <div className="third__section">
                    <div className="third__section__thesis">
                        <Thesis number={"3"} thesis={"стипендия!"}/>
                    </div>
                    <div>
                        <div className="row">
                            <div className="third__section__highlight">2653 рублей в месяц</div>
                            <p>- обычная</p>
                        </div>
                        <div className="row">
                            <div className="third__section__highlight">3981 рублей в месяц</div>
                            <p>- для отличников учебы</p>
                        </div>
                        <div className="row">
                            <div className="third__section__highlight">10000 рублей в месяц</div>
                            <p>- для высокобалльников</p>
                        </div>
                    </div>
                </div>
                    <div className="fourth__section">
                        <div className="fourth__section__thesis">
                            <Thesis number={"4"} thesis={"про график работы"}/>
                        </div>
                        <p>Двери ИРИТ-РТФ открыты для входа <div className="blue"> с 8:00 до 19:30</div></p>
                        <p>а покинуть институт нужно будет <div className="blue">{" "} до 21:00</div></p>
                    </div>
                </div>
                <div className="fifth__section">
                    <div className="fifth__section__thesis">
                        <Thesis number={"5"} thesis={"новые слова"}/>
                    </div>
                    <div className="fifth__section__wrapper">
                        <p><span className="pink">БРС</span> - балльно-рейтинговая система.
                            В системе ты найдешь баллы по каждой дисциплине, которые формируются
                            из контрольных точек в течение семестра и результата зачета или экзамена.
                            На первых занятиях преподаватели расскажут, за что будут выставляться баллы и
                            как будет сформирован итоговый балл по предметам.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}