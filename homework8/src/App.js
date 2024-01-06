import './App.css';
import NavBar from "./components/NavBar/NavBar";
import InformationBlock from "./components/InformationBlock/InformationBlock";
import Rowling from "./components/rowling/Rowling";
import BooksBlock from "./components/booksBlock/BooksBlock";
import Footer from "./components/footer/Footer";
import FilmsBlock from "./components/filmsBlock/FilmsBlock";

function App() {
  return (
      <>
          <NavBar/>
          <InformationBlock/>
          <Rowling/>
          <FilmsBlock/>
          <BooksBlock/>
          <Footer/>
      </>
  );
}

export default App;
