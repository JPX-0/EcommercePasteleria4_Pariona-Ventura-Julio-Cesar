import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './components/css/App.css';

const App = () => {
  return (
    <>
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        <ItemListContainer />
      </main>
      <footer></footer>
    </>
  )};
export default App;
