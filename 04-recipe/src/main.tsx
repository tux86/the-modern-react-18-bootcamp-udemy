import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import App from "./App";
import RecipePage from "./pages/RecipePage";

const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path="/" element={<App/>}>
           <Route path="/" element={<HomePage/>}/>
           <Route path="/about" element={<AboutPage/>}/>
           <Route path="/recipe/:id" element={<RecipePage/>}/>
       </Route>

    )
)

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router}/>)
