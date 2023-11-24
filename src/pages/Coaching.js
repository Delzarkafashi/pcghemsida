import React from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import './Coaching.css';
import bjj from './PI/bjj.jpg';
import cykling from './PI/cykling.jpg';
import fotboll from './PI/fotboll.jpg';
import Booking from '../components/Booking';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function Coaching() {
  const { speak, speaking, cancel } = useSpeechSynthesis();

  const headerTextBJJ = "Brazilian Jiu-Jitsu (BJJ)";
  const paragraphTextBJJ = `
    Brazilian Jiu-Jitsu (BJJ) är en kampsport och självförsvarskonst som fokuserar på markkamp och 
    subduering av motståndaren genom grepp och svep. 
    Målet är att använda teknik och smidighet för att övervinna fysisk styrka. 
    BJJ utvecklades från judo och betonar markkontroll, positionering och submission-tekniker som lås och strypningar. 
    Utövare, kända som "praktikanter" eller "grapplers", tävlar genom att försöka få sin 
    motståndare att ge upp genom att använda olika tekniker. 
    BJJ är inte bara en sport utan också en disciplin som främjar fysisk och mental utveckling samt självförtroende.
  `;

  const textToReadBJJ = `${headerTextBJJ}. ${paragraphTextBJJ}`;

  const headerTextCykling = "Cykling";
  const paragraphTextCykling = `
    Cykling är en mångsidig och populär aktivitet som inte bara främjar fysisk hälsa utan även bidrar till miljövänlig transport. 
    Genom att trampa pedalerna över landskapet eller längs stadsgator kan cyklister njuta av både motion och frihet. 
    Cykling främjar kondition, styrka och uthållighet samtidigt som det minskar koldioxidutsläpp och främjar en hållbar livsstil. 
    Oavsett om det är som motionär, pendlande eller tävlingsidrottare, ger cykling en känsla av äventyr och gemenskap. 
    Dessutom erbjuder det en möjlighet att utforska omgivningen på ett unikt sätt och uppleva friheten av vinden mot ansiktet.
  `;

  const textToReadCykling = `${headerTextCykling}. ${paragraphTextCykling}`;

  const headerTextFotboll = "Fotboll";
  const paragraphTextFotboll = `
    Fotboll är en passionerad och global sport som förenar människor över hela världen. 
    Spelet spelas på gräsplaner, gator och arenor och erbjuder en kombination av skicklighet, taktik och lagarbete. 
    Målet är enkelt: att göra fler mål än motståndaren genom precisionsskott och snygga passningar. 
    Fotboll är inte bara en fysisk utmaning utan också en källa till gemenskap och glädje. 
    Det bringar samman olika kulturer och generationer genom en gemensam kärlek för bollen. 
    Oavsett om det är på en proffsnivå eller på en enkel gräsplätt, är fotboll en kraftfull kraft 
    som skapar minnen och främjar hälsa och samhörighet.
  `;

  const textToReadFotboll = `${headerTextFotboll}. ${paragraphTextFotboll}`;

  const handleClick = (text) => {
    if (!speaking) {
      speak({ text });
    } else {
      cancel();
    }
  };
  return (
    <div className='wrapper'>
      <div className='coaching-bjj'>
        <p className='coaching-par'>
        <button className='coach-btn' onClick={() => handleClick(textToReadBJJ)}>
          <PlayArrowIcon fontSize='small' />
          {speaking ? 'Stoppa uppläsning' : 'Starta uppläsning'}
        </button>
          <h3>{headerTextBJJ}</h3>
          <p>{paragraphTextBJJ}</p>
          <Booking />
        </p>
        <a href='https://calendly.com/delzarkafashi/how-can-we-help-you' target='_blank' title='två man som tävlar i BJJ' rel='noopener noreferrer'>
          <img src={bjj} alt='Brazilian Jiu-Jitsu' width={450} height={320} />
        </a>
      </div>

      <div className='coaching-cykling'>
        <p className='coaching-par'>
        <button className='coach-btn' onClick={() => handleClick(textToReadCykling)}>
        <PlayArrowIcon fontSize='small' />
          {speaking ? 'Stoppa uppläsning' : 'Starta uppläsning'}
        </button>
          <h3>{headerTextCykling}</h3>
          <p>{paragraphTextCykling}</p>
          <Booking />
        </p>
        <a href='https://calendly.com/delzarkafashi/how-can-we-help-you' target='_blank'  title='en kvinna som cyklar' rel='noopener noreferrer'>
          <img src={cykling} alt='Cykling' width={450} />
        </a>
      </div>

      <div className='coaching-fotboll'>
        <p className='coaching-par'>
        <button className='coach-btn' onClick={() => handleClick(textToReadFotboll)}>
        <PlayArrowIcon fontSize='small' />
          {speaking ? 'Stoppa uppläsning' : 'Starta uppläsning'}
        </button>
          <h3>{headerTextFotboll}</h3>
          <p>{paragraphTextFotboll}</p>
          <Booking />
        </p>
        <a href='https://calendly.com/delzarkafashi/how-can-we-help-you' target='_blank'  title='en bild på en fotboll' rel='noopener noreferrer'>
          <img src={fotboll} alt='fotboll' width={450} />
        </a>
      </div>
    </div>
  );
}







// import React from 'react';
// import './Coaching.css';
// import { Link } from "react-router-dom"
// import bjj from "./PI/bjj.jpg"
// import cykling from "./PI/cykling.jpg"
// import fotboll from "./PI/fotboll.jpg"
// import Booking from '../components/Booking';


// export default function coaching() {
//     return (
//       <div className='wrapper'>
//         <div className="coaching-bjj">
//           <p className="coaching-par">
//             <h3>Brazilian Jiu-Jitsu (BJJ)</h3>
//             <p>Brazilian Jiu-Jitsu (BJJ) är en kampsport och självförsvarskonst som 
//               fokuserar på markkamp och subduering av motståndaren genom grepp och svep.
//                Målet är att använda teknik och smidighet för att övervinna fysisk styrka. 
//                BJJ utvecklades från judo och betonar markkontroll, positionering och 
//                submission-tekniker som lås och strypningar. Utövare, kända som 
//                "praktikanter" eller "grapplers", tävlar genom att försöka få sin motståndare 
//                att ge upp genom att använda olika tekniker. BJJ är inte bara en sport utan också 
//                en disciplin som främjar fysisk och mental utveckling samt självförtroende.<Booking /> </p>
//           </p>
//           <a href="https://calendly.com/delzarkafashi/how-can-we-help-you" target="_blank" rel="noopener noreferrer">
//              <img src={bjj} alt="Brazilian Jiu-Jitsu" width={450} height={320} />
//           </a>
//           {/* <img src={bjj} alt="Brazilian Jiu-Jitsu" width={450} height={320} /> */}
//         </div>

//         <div className="coaching-cykling">
//           <p className="coaching-par">
//             <h3>Cykling </h3>
//             Cykling är en mångsidig och populär aktivitet som inte bara främjar fysisk hälsa 
//             utan även bidrar till miljövänlig transport. Genom att trampa pedalerna över 
//             landskapet eller längs stadsgator kan cyklister njuta av både motion och frihet.
//              Cykling främjar kondition, styrka och uthållighet samtidigt som det minskar 
//              koldioxidutsläpp och främjar en hållbar livsstil. Oavsett om det är som motionär, 
//              pendlande eller tävlingsidrottare, ger cykling en känsla av äventyr och gemenskap.
//               Dessutom erbjuder det en möjlighet att utforska omgivningen på ett unikt sätt 
//               och uppleva friheten av vinden mot ansiktet.<Booking />
//           </p>
//           <a href="https://calendly.com/delzarkafashi/how-can-we-help-you" target="_blank" rel="noopener noreferrer">
//            <img src={cykling} alt="customer-service" width={450} /*height={320}*/ />
//           </a>
          
//         </div>

//         <div className="coaching-fotboll">
//           <p className="coaching-par">
//             <h3>Fotboll</h3>
//             Fotboll är en passionerad och global sport som förenar människor över hela världen. 
//             Spelet spelas på gräsplaner, gator och arenor och erbjuder en kombination av 
//             skicklighet, taktik och lagarbete. Målet är enkelt: att göra fler mål än motståndaren 
//             genom precisionsskott och snygga passningar. Fotboll är inte bara en fysisk utmaning 
//             utan också en källa till gemenskap och glädje. Det bringar samman olika kulturer och 
//             generationer genom en gemensam kärlek för bollen. Oavsett om det är på en proffsnivå 
//             eller på en enkel gräsplätt, är fotboll en kraftfull kraft som skapar minnen och 
//             främjar hälsa och samhörighet.<Booking />
//           </p>
//           <a href="https://calendly.com/delzarkafashi/how-can-we-help-you" target="_blank" rel="noopener noreferrer">
//           <img src={fotboll} alt="customer-service" width={450} /*height={320}*/ />
//           </a>
//         </div>
//       </div>
//     );
//   }
  
  