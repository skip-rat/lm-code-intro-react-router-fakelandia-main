import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { Misdemeanour } from '../../types/misdemeanours.types'
import DisplayMisdemeanours from "./displayMisdemeanours";
import { MisdemeanoursContext } from "../../router";

 export function getPunishmentIdeaImageUrl(width : number, height : number): string {
       
    return ('https://picsum.photos/' + width + '/' + height);
}

const Misdemeanours : React.FC = () => {
    const misdemeanourContext = useContext(MisdemeanoursContext);
    
    const getMisdemeanours = async (amount : number) => {
        
        const apiResponse = await fetch(`http://localhost:8080/api/misdemeanours/${amount}`);    

        if (!apiResponse.ok) {
            throw new Error(`Request failed with status code ${apiResponse.status}`);
        }
            const data = await apiResponse.json(); 
            setPunishmentIdeaImageUrl(data.misdemeanours);
            misdemeanourContext?.setMisdemeanoursState(data.misdemeanours);
    };

    const setPunishmentIdeaImageUrl = (arr : Misdemeanour[]) : void => {
        // todo: React is caching and showing the same random image for the Misdemeanour punishment idea
        // for now am creating a unique url for each one by altering the image size slightly 
        let size = 60;
        arr.forEach(md => md.punishmentIdeaImageUrl = getPunishmentIdeaImageUrl(size, size++));
    }

    useEffect(() => {    
        if(misdemeanourContext?.misdemeanoursState.length === 0)
        {
            getMisdemeanours(20); // read from server            
        } 
        // read from context
    }, []);

    return (            
            <DisplayMisdemeanours/>           
)};

export default Misdemeanours;