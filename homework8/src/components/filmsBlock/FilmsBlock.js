import React from 'react';
import coreClasses from "../core.css";
import styleClasses from "../style.css";

const FilmsBlock = () => {
    return (
        <>
            <div className="films_block">
                <div className="container">
                    <div className="title">
                        <h2>Фильмы</h2>
                        <p>Франшиза Гарри Поттер включает в себя 8 фильмов.</p>
                    </div>
                    <div className="films">
                        <div className="film">
                            <h2>Гарри Поттер и философский камень</h2>
                            <img src="https://i.pinimg.com/564x/9d/b9/6a/9db96af59d1e5180a9d69525170e8c9f.jpg"
                                 alt="философский камень"/>
                        </div>
                        <div className="film">
                            <h2>Гарри Поттер и Тайная комната</h2>
                            <img src="https://i.pinimg.com/564x/5c/38/dd/5c38ddfb4f84d3e51343149e7b0aa10d.jpg"
                                 alt="Тайная комната"/>
                        </div>
                        <div className="film">
                            <h2>Гарри Поттер и узник Азкабана</h2>
                            <img src="https://i.pinimg.com/564x/02/77/d1/0277d12f9f653239508fa4d7e94d4f5f.jpg"
                                 alt="узник Азкабана"/>
                        </div>
                        <div className="film">
                            <h2>Гарри Поттер и Кубок огня</h2>
                            <img src="https://i.pinimg.com/564x/af/b5/eb/afb5eb4d723c2385531525bbc787db0d.jpg"
                                 alt="Кубок огня"/>
                        </div>
                        <div className="film">
                            <h2>Гарри Поттер и Орден Феникса</h2>
                            <img src="https://i.pinimg.com/564x/57/22/d7/5722d7dbf4b2ed8bc192e3705dba22b9.jpg"
                                 alt="Орден Феникса"/>
                        </div>
                        <div className="film">
                            <h2>Гарри Поттер и Принц-полукровка</h2>
                            <img src="https://i.pinimg.com/564x/b6/3b/48/b63b48d98c7197be6314a223971fb763.jpg"
                                 alt="Принц-полукровка"/>
                        </div>
                        <div className="film">
                            <h2>Гарри Поттер и Дары Смерти часть 1</h2>
                            <img src="https://i.pinimg.com/564x/ec/8d/65/ec8d65f88fbca285c649f48fb6d167f4.jpg"
                                 alt="Дары Смерти"/>
                        </div>
                        <div className="film">
                            <h2>Гарри Поттер и Дары Смерти часть 2</h2>
                            <img src="https://i.pinimg.com/564x/fc/6e/17/fc6e17088c37ebdd0623bd35a0105d3c.jpg"
                                 alt="Проклятое дитя"/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="title">
                        <p>Франшиза Фантастические твари включает в себя 3 фильма</p>
                    </div>
                    <div className="filmsFB">
                        <div className="filmFB">
                            <h2>Фантастические твари и где они обитают</h2>
                            <img src="/where_to_find_them.jpg" alt="где они обитают"/>
                        </div>
                        <div className="filmFB">
                            <h2>Фантастические твари:Преступления Грин-де-Вальда</h2>
                            <img src="/crimes_of_grindelwald.jpg" alt="где они обитают"/>
                        </div>
                        <div className="filmFB">
                            <h2>Фантастические твари:Тайны Дамблдора</h2>
                            <img src="/secrets_of_dumbledore.jpg" alt="где они обитают"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FilmsBlock;
