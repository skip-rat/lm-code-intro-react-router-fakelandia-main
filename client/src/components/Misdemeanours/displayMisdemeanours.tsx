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
        
            <table className='container' style={{ width: "80%" }}>
                <tbody >
                    <tr >
                        <td style={{ width: "15%" }}>Citizen ID</td>
                        <td style={{ width: "15%" }}>Date</td>
                        <td style={{ width: "15%" }}>Misdemeanour</td>
                        <td style={{ width: "15%" }}>Punishment idea</td>
                        <td style={{ width: "40%" }}>Confession</td>
                    </tr>
                
                {
                    (filter === ALL_MISDEMEANOURS) 
                    ? misdemeanourContext?.misdemeanoursState
                        .map((md, index) => 
                            <DisplayMisdemeanour key={index} misdemeanour={md}/>
                        ) 
                    : misdemeanourContext?.misdemeanoursState
                        .filter(item => item.misdemeanour === filter)
                        .map((md, index) =>    
                            <DisplayMisdemeanour key={index} misdemeanour={md}/>              
                        )
                }
                               
                </tbody>
            </table>
        <br />
    </>
);
}

export default DisplayMisdemeanours;