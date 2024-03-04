import './App.css';
import Discover from './components/Discover';
// import About from './components/About';
// import Cover from './components/Cover';
// import Header from './components/Header';
import Layout from './components/Layout';
import MainPage from './components/MainPage';
// import Services from './components/Services';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

const appRouter = createBrowserRouter([{
  path:"/",
  element: <Layout />,
  children:[
    {
      path:"/",
      element:<MainPage />
    },
    {
      path:"/discover",
      element: <Discover />    
    }
  ]
}])

function App() {
  return (
    <div className="">
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
