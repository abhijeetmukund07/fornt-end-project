import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import RootLayout from './components/root layout/RootLayout';
import HomePage from './components/homepage/HomePage';
import ProductPage from './components/Product Page/ProductPage';

function App() {

  let router = createBrowserRouter([{
    path:'/',
    element: <RootLayout/>,

    children:[
      {
        path:'/',
        element:<HomePage/>
      },

      {
          path: '/:id',
          element : <ProductPage />
      }
  ]

  }])

  return (
    <div className="App">
                <RouterProvider router={router}/>
    </div>
  );
}

export default App;
