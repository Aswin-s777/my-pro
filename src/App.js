import logo from './logo.svg';
import './App.css';
import './css/frm.css';
import Fuct from './component/fuct.js';
import Cls from './component/cls.js';
import A from './component/jsx.js'
import Subscription from './component/Subscription';
import ItemSearch from './component/ItemSearch';
import Employee from './component/Employee';
import Increment from './component/Increment';
import HerosList from './component/product';

import Forms from './component/Forms';
import Renderprops from './component/Renderprops';
import Ucontext from './component/Ucontext';
import Counterhooks from './componenthooks/counterhooks';

function App() {
  
  
  return (
    <div >
      {/* <Ucontext />
       <Counterhooks  />  */}
      <Increment />
      {/* <Renderprops />*/}
      <Forms /> 
    </div>
  )
    
   
    
}

export default App;
