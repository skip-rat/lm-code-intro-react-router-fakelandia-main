import { Route, Routes } from "react-router-dom";
import ConfessionForm from "./components/confession/confessionForm";
import Home from "./components/home";
import Misdemeanours from "./components/Misdemeanours/misdemeanours";
import NotFound from "./components/not_found";
import MainLayout from "./layouts/main_layout";

export const Router : React.FC = () => <>
<Routes>    
    <Route path='/' element={<MainLayout />}>        
        <Route path='/' element={<Home />}/>
        <Route path='Confession' element={<ConfessionForm />}/>
        <Route path='Misdemeanours' element={<Misdemeanours />}/>        
        <Route path='*' element={<NotFound />}/>        
    </Route>
</Routes>

</>;