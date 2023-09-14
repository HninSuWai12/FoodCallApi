import React from 'react'

import { BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import Menu from './Food/Menu'
import Detail from './Food/Detail'
import Navbar from './Food/Navbar'
const App = () => {
return (
<div className="container mx-auto">
<Navbar/>
  
    <Router>
        <Routes>
            <Route path='/' element={<Menu/>} />
            <Route path="/detail/:id" element={<Detail />} />
        </Routes>
    </Router>

</div>

)
}

export default App
