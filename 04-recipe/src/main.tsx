import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import App from "./App";
import RecipePage from "./pages/RecipePage";
import ErrorPage from "./pages/ErrorPage.tsx";
import Ingredients from "./components/Ingredients.tsx";
import Instructions from "./components/Instructions.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path="/" element={<App/>} errorElement={<ErrorPage/>}>
           <Route path="/" element={<HomePage/>}/>
           <Route path="/about" element={<AboutPage/>}/>
           <Route path="/recipe/:id" element={<RecipePage/>}>
               <Route path="/recipe/:id/ingredients" element={<Ingredients/>}/>
               <Route path="/recipe/:id/instructions" element={<Instructions/>}/>
           </Route>
       </Route>

    )
)

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router}/>)
