import { getMisdemeanourEmoji, Misdemeanour } from "../../types/misdemeanours.types";

interface DisplayMisdemeanourProps {
    misdemeanour: Misdemeanour;
}

const DisplayMisdemeanour: React.FC<DisplayMisdemeanourProps> = ({ misdemeanour }: DisplayMisdemeanourProps) => {

    return (
        <>
            <tr>
                <td style={{ width: "20%" }}>{misdemeanour.citizenId}</td>
                <td style={{ width: "20%" }}>{misdemeanour.date}</td>
                <td style={{ width: "20%" }}>{misdemeanour.misdemeanour + " "}{getMisdemeanourEmoji(misdemeanour.misdemeanour)}</td>                 
                <td style={{ width: "40%" }}><img alt='Punishment idea' src={misdemeanour.punishmentIdeaImageUrl} /></td>                
            </tr>
        </>
    );
}
export default DisplayMisdemeanour;