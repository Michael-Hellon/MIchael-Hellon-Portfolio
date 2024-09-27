import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <>
    
    <div className='app-title'> 
      <a href="/" title='Michael Hellon'>Michael Hellon</a>
    </div>

      <div>

      <Nav />
      <Outlet />
      </div>
    
    </>
  );
}

export default App;
