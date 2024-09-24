// import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <>
    
    <h1><a href="/" title='Michael Hellon'>Michael Hellon</a></h1>
      <div className="portfolio-page">

      <Nav />
      <Outlet />
      </div>
    
    </>
  );
}

export default App;
