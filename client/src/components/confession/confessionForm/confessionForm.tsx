
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { MisdemeanoursContext } from "../../../router";
import { JUST_TALK, Misdemeanour } from "../../../types/misdemeanours.types";
import ConfessionTypeField from "../confessionTypeField/confessionTypeField";
import DetailsField from "../detailsField/detailsField";
import SubjectField from "../subjectField/subjectField";
import getPunishmentIdeaImageUrl from '../../misdemeanours/misdemeanours'
import { validateSubject, validateDetails } from "../validator";
import './confessionForm.css';

type serverData = {
    success : boolean, // true for success; false for an error
    justTalked : boolean; // true if this was just wanting to talk, false for a real confession. Not present if success is false.
    message: string; // a message
}

export const ConfessionForm: React.FC = () => {

    const [subject, setSubject] = useState('');
    const [confessionType, setConfessionType] = useState(JUST_TALK);
    const [details, setDetails] = useState('');

    const misdemeanourContext = useContext(MisdemeanoursContext);

    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {

        e.preventDefault();        

        const confessionData = {
            subject: subject,
            reason: confessionType,
            details: details
        }

        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(confessionData)
        };

        try {
            const apiResponse = await fetch('http://localhost:8080/api/confess', requestOptions);

            const data : serverData = await apiResponse.json();

            if(data.success === false)
            {
                alert(data.message);
            }
            else if(data.justTalked === false)
            {            
                // TODO: add confession in context??
                                
                navigate('/misdemeanours');
            }
        } catch (e) {
            return console.error(e);
        }    
        
     };

    const validateForm = () : boolean => {
        return validateSubject(subject) === undefined &&
            validateDetails(details) === undefined;
    }

    return (
        <>
            <form>  
                <section className="text">                
                    <p>It's very difficult to catch people committing misdemeanours so we
                        appreciate it whrn citizens confess to us directly.</p>
                    <p>However, if you're just having a hard day and need to vent then you're
                        welcome to contact us here too. Up to you!
                    </p>               
                
                <br /><br />
                <SubjectField subject={subject} setSubject={setSubject} />
                <br /><br />
                <ConfessionTypeField confessionType={confessionType} setConfessionType={setConfessionType} />
                <br /><br />
                <DetailsField details={details} setDetails={setDetails} />
                <br /><br />
                <input type='button' id='submit' name='submit' value='Submit' disabled={!validateForm()} onClick={handleSubmit} />
                <br /><br />
                </section>
            </form>
        </>
    );
};

export default ConfessionForm;