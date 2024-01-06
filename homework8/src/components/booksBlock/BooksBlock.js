import React from 'react';
import coreClasses from "../core.css";
import styleClasses from "../style.css";

const BooksBlock = () => {
    return (
        <>
            <div className="books_block">
                <div className="container">
                    <div className="title">
                        <h2>Книги</h2>
                        <p>Франшиза Гарри Поттер включает в себя 8 книг.</p>
                    </div>
                    <div className="books">
                        <div className="book">
                            <h2>Гарри Поттер и философский камень</h2>
                            <img src="/philosophers_stone_book.jpg" alt="философский камень"/>
                        </div>
                        <div className="book">
                            <h2>Гарри Поттер и Тайная комната</h2>
                            <img src="/chamber_of_secrets_book.jpg" alt="Тайная комната"/>
                        </div>
                        <div className="book">
                            <h2>Гарри Поттер и узник Азкабана</h2>
                            <img src="/prisoner_of_azkaban_book.jpg" alt="узник Азкабана"/>
                        </div>
                        <div className="book">
                            <h2>Гарри Поттер и Кубок огня</h2>
                            <img src="/goblet_of_fire_book.jpg" alt="Кубок огня"/>
                        </div>
                        <div className="book">
                            <h2>Гарри Поттер и Орден Феникса</h2>
                            <img src="/order_of_the_phoenix_book.jpg" alt="Орден Феникса"/>
                        </div>
                        <div className="book">
                            <h2>Гарри Поттер и Принц-полукровка</h2>
                            <img src="/half_blood_prince_book.jpg" alt="Принц-полукровка"/>
                        </div>
                        <div className="book">
                            <h2>Гарри Поттер и Дары Смерти</h2>
                            <img src="/deathly_hallows_book.jpg" alt="Дары Смерти"/>
                        </div>
                        <div className="book">
                            <h2>Гарри Поттер и Проклятое дитя</h2>
                            <img src="/cursed_child_book.jpg" alt="Проклятое дитя"/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="title">
                        <p>Франшиза Фантастические твари включает в себя одну книгу.</p>
                    </div>
                    <div className="books">
                        <div className="book">
                            <h2>Фантастические твари и где они обитают</h2>
                            <img src="/where_to_find_them_book.jpg" alt="где они обитают"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BooksBlock;
