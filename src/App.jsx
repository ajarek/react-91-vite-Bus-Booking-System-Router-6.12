import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createContext, useState } from 'react'
export const AppContext = createContext()
import Main from './layouts/Main/Main'
import Home from './pages/Home/Home'
import SelectBus from './pages/SelectBus/SelectBus'
import Summary from './pages/Summary/Summary'
import Login from './pages/Login/Login'
import Error from './pages/Error/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: '/select-bus',
        element: <SelectBus />,
        errorElement: <Error />,
      },
      {
        path: 'summary',
        errorElement: <Error />,
        children: [
          {
            path: ':id',
            // action: noteAction,
            element: <Summary />,
            errorElement: <Error />,
          },
        ],
      },
      {
        path: '/login',
        element: <Login />,
        errorElement: <Error />,
      },
    ]
    }
])
function App() {
  const [dataFormHome, setDataFormHome] = useState(null)
  const [isLogin, setIsLogin] = useState(false)
  return (
    <div className='App'>
      <AppContext.Provider value={{dataFormHome, setDataFormHome, isLogin, setIsLogin}}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  )
}

export default App
