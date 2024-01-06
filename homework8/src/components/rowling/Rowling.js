import React from 'react';
import coreClasses from "../core.css";
import styleClasses from "../style.css";

const Rowling = () => {
    return (
        <div className="rowling_block">
            <div className="container">
                <div className="rowling_bio">
                    <h2>Джоан Роулинг</h2>
                    <p>Джоан Роулинг 31 июля 1965 г., известная под псевдонимами Дж.К.Роулинг, Джоан Кэтлин Роулинг и
                        Роберт Гелбрейт — британская писательница, сценаристка и кинопродюсер, наиболее известная как
                        автор серии романов о Гарри Поттере.</p>
                    <div className="rowling_imgs">
                        <img src="/rowling_one.jpg" alt="J.K. Rowling Image 1" />
                        <img src="/rowling_two.jpg" alt="J.K. Rowling Image 2" />
                        <img src="/rowling_three.jpg" alt="J.K. Rowling Image 3" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rowling;
