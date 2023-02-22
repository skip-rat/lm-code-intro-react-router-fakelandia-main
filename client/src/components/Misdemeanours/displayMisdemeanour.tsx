import { getMisdemeanourEmoji, Misdemeanour } from "../../types/misdemeanours.types";

interface DisplayMisdemeanourProps {
    misdemeanour: Misdemeanour;
}

const DisplayMisdemeanour: React.FC<DisplayMisdemeanourProps> = ({ misdemeanour }: DisplayMisdemeanourProps) => {

    return (
        <>         
          {
            (misdemeanour.confession !== undefined ? (
              <tr>
                <td style={{ width: "15%", color: "#3474e6" }}>{misdemeanour.citizenId}</td>
                <td style={{ width: "15%", color: "#3474e6" }}>{misdemeanour.date}</td>
                <td style={{ width: "15%", color: "#3474e6" }}>{misdemeanour.misdemeanour + " "}{getMisdemeanourEmoji(misdemeanour.misdemeanour)}</td>                 
                <td style={{ width: "15%", color: "#3474e6" }}><img alt='Punishment idea' src={misdemeanour.punishmentIdeaImageUrl} /></td>                
                <td style={{ width: "40%", color: "#3474e6" }}>{misdemeanour.confession}</td>
              </tr>
            ) :
            <tr>
                <td style={{ width: "20%" }}>{misdemeanour.citizenId}</td>
                <td style={{ width: "20%" }}>{misdemeanour.date}</td>
                <td style={{ width: "20%" }}>{misdemeanour.misdemeanour + " "}{getMisdemeanourEmoji(misdemeanour.misdemeanour)}</td>                 
                <td style={{ width: "40%" }}><img alt='Punishment idea' src={misdemeanour.punishmentIdeaImageUrl} /></td>                
              </tr>
            )
          }
        </>
    );
}
export default DisplayMisdemeanour;