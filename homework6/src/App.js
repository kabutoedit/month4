import './App.css';
import {useRef, useState, useEffect} from "react";

// export default function Counter() {
//   let ref = useRef(0)
//
//   function click() {
//     ref.current = ref.current +1
//       console.log('You clicked ' + ref.current + ' times')
//
//   }
//   return (
//     <div>
//       <button onClick={click}>Click me!</button>
//     </div>
// )
// }


export default function DataFetchingComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, []);

  return (
      <div>
        {data ? (
            <p>Данные: {JSON.stringify(data)}</p>
        ) : (
            <p>Загрузка данных...</p>
        )}
      </div>
  );
}


