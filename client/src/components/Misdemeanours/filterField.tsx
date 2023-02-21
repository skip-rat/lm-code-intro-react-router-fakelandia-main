import { ALL_MISDEMEANOURS, MISDEMEANOURS } from "../../types/misdemeanours.types";
import './misdemeanours.css';

interface FilterFieldProps {
    //filter: string;
    onChangeFilter: (filter: string) => void;
}

const FilterField: React.FC<FilterFieldProps> = ({ onChangeFilter }: FilterFieldProps) => {

    const filterValues = [ALL_MISDEMEANOURS, ...MISDEMEANOURS];      

    return (
        <>
            <label className="container" htmlFor='filterMisdemeanours'>Filter </label>
            <select id='filterMisdemeanours' name='filterMisdemeanours' onChange={(e) => {
                onChangeFilter(e.target.value);
            }}>
                {filterValues.map((md, index) => <option key={index} value={md}>{md}</option>)}
            </select>
        </>
    );
}; 

export default FilterField;