import { ALL_MISDEMEANOURS, MISDEMEANOURS } from "../../types/misdemeanours.types";

interface FilterFieldProps {
    //filter: string;
    onChangeFilter: (filter: string) => void;
}

const FilterField: React.FC<FilterFieldProps> = ({ onChangeFilter }: FilterFieldProps) => {

    const filterValues = [ALL_MISDEMEANOURS, ...MISDEMEANOURS];      

    return (
        <>
            <label htmlFor='filterMisdemeanours'>Filter </label>
            <select id='filterMisdemeanours' name='filterMisdemeanours' onChange={(e) => {
                onChangeFilter(e.target.value);
            }}>
                {filterValues.map((md, index) => <option key={index} value={md}>{md}</option>)}
            </select>
        </>
    );
}; 

export default FilterField;