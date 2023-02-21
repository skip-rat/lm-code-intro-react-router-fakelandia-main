import { useState, useContext } from 'react';
import DisplayMisdemeanour from "./displayMisdemeanour";
import { MisdemeanoursContext } from "../../router";
import FilterField from "./filterField";
import { ALL_MISDEMEANOURS } from '../../types/misdemeanours.types';
import './misdemeanours.css';

const DisplayMisdemeanours = () => {
    const misdemeanourContext = useContext(MisdemeanoursContext);

    const [filter, setFilter] = useState(ALL_MISDEMEANOURS);
    
return (
    <>
        <FilterField onChangeFilter={setFilter}></FilterField> 
        
            <table className='container' style={{ width: "100%" }}>
                <tbody >
                <tr >
                    <td style={{ width: "20%" }}>Citizen ID</td>
                    <td style={{ width: "20%" }}>Date</td>
                    <td style={{ width: "20%" }}>Misdemeanour</td>
                    <td style={{ width: "40%" }}>Punishment idea</td>
                </tr>
                
                {(filter === ALL_MISDEMEANOURS) 
                    ? misdemeanourContext?.misdemeanoursState.map((md, index) => 
                       <DisplayMisdemeanour key={index} misdemeanour={md}/>) 
                    : misdemeanourContext?.misdemeanoursState.filter(item => item.misdemeanour === filter)
                                         .map((md, index) =>    
                            <DisplayMisdemeanour key={index} misdemeanour={md}/>              
                )}
                               
                </tbody>
            </table>
        <br />
    </>
);
}

export default DisplayMisdemeanours;