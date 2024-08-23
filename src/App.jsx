import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav'; // just my name and nav(bar) - links dont work
// import Portfolio from './components/Portfolio'; // works
// import PortfolioItem from './components/PortfolioItem';// nope
// import PortfolioList from './components/PortfolioList'; // same as portfolio
// import { portfolioData } from './utils/portfolioData'; // just my name


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
