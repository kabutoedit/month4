import React from 'react';
import coreClasses from "../core.css";
import styleClasses from "../style.css";


const InformationBlock = () => {
    return (
        <>
            <div className="information_block">
                <div className="container">
                    <div className="hp">
                        <img src="/hp&fb.webp" alt="Fantastic Beasts" />
                        <div className="description">
                            <p>
                                Гарри Поттер — серия романов, написанных британской писательницей Дж. К. Роулинг.
                                Книги представляют собой хронику приключений юного волшебника Гарри Поттера, а также
                                его друзей Рона Уизли и Гермионы Грейнджер, обучающихся в школе чародейства и
                                волшебства Хогвартс.
                            </p>
                            <p>
                                "Фантастические твари" — серия британо-американских фэнтезийных фильмов режиссёра
                                Дэвида Йейтса по романам Джоан Роулинг. Приквел серии фильмов о Гарри
                                Поттере, повествующий о событиях, произошедших за 65 лет до начала основной саги.
                            </p>
                        </div>
                    </div>
                    <div className="posters">
                        <img src="/harry_potter_poster.jpg" alt="Harry Potter" />
                        <img src="/fantastic_beasts_poster.jpg" alt="Fantastic Beasts" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default InformationBlock;
