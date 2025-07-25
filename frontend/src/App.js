import Project from './Components/projects/Project'
import ProjectForm from './Components/projects/ProjectForm'
import SignIn from './Components/SignIn/SignIn'
import Skills from './Components/Skills/Skills'
import Navbar from './Layout/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProjectDetails from "./Components/projects/Project_Details"
import Home from './Home/Home'
import About from './Components/About/About'
import Errorpage from '../src/ErrorPage/Errorpage'
import Resume from './Resume/Resume'
function App() {
  let router=createBrowserRouter([{
    path:'',
    element:<Navbar/>,
    errorElement:<Errorpage/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/login',
        element:<SignIn/>
      },
      {
        path:'/skills',
        element:<Skills/>
      },
      {
        path:'/projects',
        element:<Project/>
      },
      {
        path:'/project-form',
        element:<ProjectForm/>
      },
      {
        path:'/project-Details',
        element:<ProjectDetails/>
      }
    ]
  },{
    path:'/resume',
    element:<Resume/>,
  }])
  return (
    <RouterProvider router={router}>

    </RouterProvider>

  )
}

export default App