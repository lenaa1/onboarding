import "./Main.css"
import {Thesis} from "../../components/thesis/thesis.jsx";
import {Faces} from "../../components/faces/Faces.jsx";
import photo1 from "./../../assets/1st.png"
import photo2 from"./../../assets/photo2.png"
import photo3 from "./../../assets/photo3.png"
import photo4 from "./../../assets/photo4.png"
import photoss1 from "./../../assets/photoss1.png"
import {Faces__Ss} from "../../components/FacesSs/FacesSs.jsx";
import photoss2 from './../../assets/photoss2.png'
import photoss3 from './../../assets/photoss3.png'
import photoss4 from './../../assets/photoss4.png'
import photoss5 from './../../assets/photoss5.png'
import photoss6 from './../../assets/photoss6.png'
import photoss7 from './../../assets/photoss7.png'
import photoss8 from './../../assets/photoss8.png'
import photoss9 from './../../assets/photoss9.png'
import photoss10 from './../../assets/photoss10.png'
import photoss11 from './../../assets/photoss11.png'
import {Tutor} from "../../components/Tutor/Tutor.jsx";
import photot1 from"./../../assets/photot1.png"
import photot2 from"./../../assets/photot2.png"
import photot3 from"./../../assets/photot3.png"
import photot4 from"./../../assets/photot4.png"
import photot5 from"./../../assets/photot5.png"
import photot6 from"./../../assets/photot6.png"

export function Main() {
    return(
        <div className="mainsection">
            <div className="mainsection__wrapper">
                <div className="first section">
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

                <div className="second__section section">
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
                <div className="third__fourth__sections section">
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
                <div className="fifth__section section">
                    <div className="fifth__section__thesis">
                        <Thesis number={"5"} thesis={"новые слова"}/>
                    </div>
                    <div className="fifth__section__wrapper">
                        <p><span className="pink">БРС</span> - балльно-рейтинговая система.
                            В системе ты найдешь баллы по каждой дисциплине, которые формируются
                            из контрольных точек в течение семестра и результата зачета или экзамена.
                            На первых занятиях преподаватели расскажут, за что будут выставляться баллы и
                            как будет сформирован итоговый балл по предметам.</p>
                        <p><span className="pink">ИОТ*</span> - индивидуальная образовательная тракетория
                            Уникальный маршрут студентов Уральского федерального университета, который формируется каждый семестр при выборе новых дисциплин, преподавателей, уровней сложности и технологии обучения.</p>
                    </div>
                </div>
                <p>*ИОТ сейчас досутпна студентам следующих направлений: программная инженерия,  прикладная информатика, информатика и вычислительная техника, безопасность компьютерных систем, радиотехника, инфокоммуникационные технологии и системы связи, конструирование и технология электронных средств, управление в технических системах, технология полиграфического и упаковочного производства</p>
                <div className="sixth__section section">
                    <div className="sixth__section__thesis">
                        <Thesis number={"6"} thesis={"лица ИРИТ-РТФ"}/>
                        <p>Пришло время познакомиться с <span className="blue">дирекцией</span> института </p>
                        <div className="sixth__section__wrapper">
                            <Faces name={"Обабков Илья Николаевич"} job={"Директор ИРИТ-РТФ"} additionalinfo1={"Аудитория: Р-332"}
                                additionalinfo2={"Почта: i.n.obabkov@urfu.ru"} photo={photo1}/>
                            <Faces name={"Орехова Ирина\n" +
                                "Сергеевна"} job={"Начальник отдела по работе со студентами"} additionalinfo1={"Аудитория: Р-219"}
                            additionalinfo2={"Почта: i.s.orekhova@urfu.ru"} photo={photo2}/>
                            <Faces name={"Новиков Максим Юрьевич"} job={"Директор школы бакалавриата\n"} additionalinfo1={"Аудитория: Р-327"}
                                   additionalinfo2={"Почта: novikov.maksim@urfu.ru"} photo={photo3}/>
                            <Faces name={"Нигаматуллина Жанна Руслановна"} job={"Помощник директора"} additionalinfo1={"Аудитория: Р-332"}
                                   additionalinfo2={"Почта: zh.r.sadrislamova@urfu.ru"} photo={photo4}/>
                        </div>
                    </div>
                </div>
                <div className="seventh__section section">
                    <Thesis number={"7"} thesis={"союз студентов"}/>
                    <div className="seventh__section__grid">
                        <Faces__Ss name={"Корякин Игорь"} job={"Председатель Союза студентов ИРИТ-РТФ"} photo={photoss1}/>
                        <div className="ss__intro"><div><span className="pink__small">Союз студентов ИРИТ-РТФ</span> — это орган студенческого самоуправления, который занимается защитой прав студентов, поселением в общежитие, проведением спортивных и культурно-массовых мероприятий и многим другим</div></div>
                        <Faces__Ss name={"Сазонкина Евгения"} job={"Заместитель председателя Союза студентов ИРИТ-РТФ по"} photo={photoss2} color={"организационно-массовой работе"}/>
                        <Faces__Ss name={"Филяева Алёна"} job={"Председатель Союза студентов ИРИТ-РТФ"} photo={photoss3} color={"по информационной работе"}/>
                        <Faces__Ss name={"Попова Ксения"} job={"Председатель Союза студентов ИРИТ-РТФ"} photo={photoss4} color={"по социально-правовой работе"}/>
                        <Faces__Ss name={"Ковтонюк Полина"} job={"Председатель Союза студентов ИРИТ-РТФ"} photo={photoss5} color={"по жилищно-бытовой работе"}/>
                        <Faces__Ss name={"Воронцов Михаил"} job={"Председатель Союза студентов ИРИТ-РТФ"} photo={photoss6} color={"по спортивно-массовой работе"}/>
                        <Faces__Ss name={"Корелина Дарья"} job={"Председатель Союза студентов ИРИТ-РТФ"} photo={photoss7} color={"по учебно-научной работе"}/>
                        <Faces__Ss name={"Назипов Даниил"} job={"Председатель Союза студентов ИРИТ-РТФ"} photo={photoss8} color={"по работе с наставниками"}/>
                        <Faces__Ss name={"Вострецова Татьяна"} job={"Председатель Союза студентов ИРИТ-РТФ"} photo={photoss9} color={"по культурно-массовой работе"}/>
                        <Faces__Ss name={"Амосова Варвара"} job={"Председатель Союза студентов ИРИТ-РТФ"} photo={photoss10} color={"по работе с партнёрами"}/>
                        <Faces__Ss name={"Мартынов Дмитрий"} job={"Председатель Союза студентов ИРИТ-РТФ"} photo={photoss11} color={"по техническому обеспечению"}/>
                    </div>
                </div>
                <div className="eighth__section section">
                    <Thesis number={"8"} thesis={"найди своего тьютора"}/>
                    <div className="eighth__section__wrapper">
                        <Tutor name={"Садова Алена"} photo={photot1} programs={"ИнФО, Программная инженерия"}/>
                        <Tutor name={"Базаров Георгий"} photo={photot2} programs={"Информатика и вычислительная техника, Программная инженерия"}/>
                        <Tutor name={"Колмогорцева Ирина"} photo={photot3} programs={"Программная инженерия"}/>
                        <Tutor name={"Хрушков Артем"} photo={photot4} programs={"Программная инженерия"}/>
                        <Tutor name={"Валиева Эльмира"} photo={photot5} programs={"Радиотехника, Инфокоммуникационные технологии и системы связи, Управление в технических системах, Технология полиграфического и упаковочного производства, Конструирование и технология электронных средств"}/>
                        <Tutor name={"Андреевских Софья"} photo={photot6} programs={"ИнФО, Программная инженерия"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}