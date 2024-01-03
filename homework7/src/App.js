import './App.css';
import {useCallback, useMemo, useState} from "react";

// export default function Memo() {
//
//     const [inputValue,setInputValue] = useState()
//     const [result,setResult] = useState()
//
//     const computedResult = useMemo(() => {
//         return `${inputValue * 2}`;
//     }, [inputValue]);
//
//     const handleInputChange = (event) => {
//         setInputValue(event.target.value)
//     }
//
//     const handleButtonClick = () => {
//         setResult(computedResult)
//     }
//
//     return (
//         <div>
//                 Введите число:
//                 <input type="text" value={inputValue} onChange={handleInputChange} />
//             <button onClick={handleButtonClick}>Вычислить</button>
//             <div>
//                 {result && (
//                     <p>Результат: {result}</p>
//                 )}
//             </div>
//         </div>
//     );
// };


export default function MyComp() {

    const [count,setCount] = useState(0)

    const handleClick = useCallback(() => {

        setCount((prevCount) => prevCount + 1)
    },[])

    return (
        <div>
            <p>Счёт: {count}</p>
            <button onClick={handleClick}>Нажми!</button>
        </div>
    )
}