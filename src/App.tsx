import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboar from './pages/Daschboard'
import Register from './pages/Register'
import GlobalStyle from './globalStyles'
import { DataProvider } from './context/appContext'

function App() {

  return (
    <Router>
      <GlobalStyle />
      <Routes>
          <Route 
            path='/' 
            element={
              <DataProvider>
                <Dashboar/>
              </DataProvider>
            }>
          </Route>
          <Route path='/cadastro' element={<Register/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
