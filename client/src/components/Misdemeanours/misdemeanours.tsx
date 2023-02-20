import React, { useState, createContext } from "react";
import { useEffect } from "react";
import { Misdemeanour } from '../../types/misdemeanours.types'
import DisplayMisdemeanours from "./displayMisdemeanours";

export const MisdemeanoursContext = createContext<Array<Misdemeanour>>([]);

const Misdemeanours : React.FC = () => {
    const [misdemeanours, setMisdemeanours] = useState<Array<Misdemeanour>>([]);

const getMisdemeanours = async (amount : number) => {
    
    const apiResponse = await fetch(`http://localhost:8080/api/misdemeanours/${amount}`);

    if (!apiResponse.ok) {
        throw new Error(`Request failed with status code ${apiResponse.status}`);
      }
        const data = await apiResponse.json(); 
        setPunishmentIdeaImageUrl(data.misdemeanours);
        setMisdemeanours(data.misdemeanours);
    };

    const setPunishmentIdeaImageUrl = (arr : Misdemeanour[]) : void => {
        // todo: React is caching and showing the same random image for the Misdemeanour punishment idea
        // for now am creating a unique url for each one by altering the image size slightly
        let size = 60;        
        arr.forEach(md => md.punishmentIdeaImageUrl = 'https://picsum.photos/' + size + "/" + size++);
    }

    useEffect(() => {
        getMisdemeanours(20);
        console.log('getMisdemeanours()');
    }, []);

 

return (
    <MisdemeanoursContext.Provider value={misdemeanours}>        
        <DisplayMisdemeanours/>       
    </MisdemeanoursContext.Provider>
)};

export default Misdemeanours;