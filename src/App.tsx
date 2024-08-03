
import { useState } from 'react';
import './App.css'
import Header from './component/Header'
import SideNav from './component/SideNav'
import Dashboard from './screens/dashboard'

function App() {
  const [activeNav, setActiveNav] = useState<Number>(0);

  return (
    <>
     <div className='h-screen w-screen overflow-hidden flex '>
     <div className=''>
     <SideNav activeNav={activeNav} setActiveNav={setActiveNav}/>

     </div>
<div className='w-[100dvw]'>
  <div>
  <Header/>
  </div>
<Dashboard activeNav={activeNav}/>
</div>
    
     </div>
    </>
  )
}

export default App
