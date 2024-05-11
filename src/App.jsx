import { Routes, Route } from 'react-router-dom'
import Fa from './pages/Fa'
function App() {

  return (
    <>
      <Routes>
        <Route path='/fa' element={<Fa />} />
      </Routes>

    </>

  )
}

export default App
