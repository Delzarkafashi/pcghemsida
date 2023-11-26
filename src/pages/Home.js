import "./Home.css"
import { useSpeechSynthesis } from 'react-speech-kit';
import bike from "./PI/bicycle.jpg"
import coach from "./PI/Coaching.jpg"
import bjj from "./PI/bjj-gi.jpg"
import customer from "./PI/customer-service.jpg"
import { Link } from "react-router-dom"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';


export default function Home() {
  const { speak, speaking, cancel } = useSpeechSynthesis();

  const headerTextCoaching = "Coaching";
  const paragraphTextCoaching = `
  Coachingtjänster är avgörande för personlig och professionell
  utveckling genom att erbjuda skräddarsydd vägledning och stöd.
  Oavsett om det gäller karriär, kompetensutveckling eller livsbalans,
  ger coaching en strukturerad metod för att nå mål. Genom aktivt
  lyssnande och konstruktiv feedback hjälper coacher klienter att
  identifiera styrkor och övervinna utmaningar. Denna interaktion
  främjar självmedvetenhet och ger en känsla av riktning, vilket
  befäster individens förmåga att navigera genom livets komplexiteter
  för kontinuerlig tillväxt och framgång.`;

    const textToReadCoaching = `${headerTextCoaching}. ${paragraphTextCoaching}`;  
    
    const headerTextProducts = "Products";
    const paragraphTextProducts = `
    Sportprodukter spelar en central roll i att möjliggöra och förbättra
    idrottsprestationer. Oavsett om det handlar om specialiserad
    utrustning för träning, kläder för optimal prestanda eller
    avancerade redskap för specifika sporter, är sportprodukter
    utformade för att möta atleters unika behov. Dessa produkter
    sträcker sig från avancerade löparskor och tekniska sportkläder till
    specialiserade redskap som golfklubbor eller cykelutrustning. Genom
    att erbjuda högpresterande och ergonomiskt designade produkter
    bidrar sportutrustning inte bara till atletisk prestation, utan
    också till en övergripande positiv upplevelse av idrott. I en värld
    där teknologiska innovationer ständigt utvecklas, fortsätter
    sportprodukter att vara en drivkraft för framsteg och prestation
    inom olika idrottsdiscipliner.`;

    const textToReadProducts = `${headerTextProducts}. ${paragraphTextProducts}`;
    
    
    const headerTextCustomerService = "Customer Service";
    const paragraphTextCustomerService = `
    Kundservice är hjärtat i varje företags relation med sina kunder och
    utgör grunden för att skapa en positiv varumärkesupplevelse.
    Kundserviceprodukter, såsom interaktiva digitala plattformar,
    chattfunktioner och kundsupportverktyg, spelar en central roll i att
    underlätta kommunikation och lösa problem. Genom att erbjuda
    användarvänliga gränssnitt och snabb tillgänglighet skapar dessa
    produkter en effektiv och smidig kanal för kunder att få stöd och
    information. Dessutom möjliggör avancerade analyssystem och
    feedbackverktyg en kontinuerlig förbättring av kundtjänstprocesser
    och anpassning efter kundernas behov. Med fokus på att skapa en
    sömlös och positiv kundupplevelse är kundserviceprodukter avgörande
    för att bygga långsiktiga relationer och upprätthålla en stark
    företagsimage.`;

    const textToReadCustomerService = `${headerTextCustomerService}. ${paragraphTextCustomerService}`;

    const handleClick = (text) => {
      if (!speaking) {
        speak({ text });
      } else {
        cancel();
      }
    };


    return (
      <div className="wrapper">
        <div className="home-div">
          <p className="home-par">
          <button className='coach-btn' onClick={() => handleClick(textToReadCoaching)}>
            {speaking ? <StopIcon fontSize='small' /> : <PlayArrowIcon fontSize='small' />}
            {speaking ? 'Stoppa uppläsning' : 'Starta uppläsning'}
          </button>
          <h3>{headerTextCoaching}</h3>
          <p>{paragraphTextCoaching}</p>
          </p>
          <Link to="/coaching" rel="noreferrer">
            <img src={coach} alt="Coaching" width={450} />
          </Link>
        </div>

        <div className="home-div2">
          <Link to="/product" rel="noreferrer">
            <img src={bike} alt="Bike" width={450} />
          </Link>
          <p className="home-par">
          <button className='coach-btn' onClick={() => handleClick(textToReadProducts)}>
            {speaking ? <StopIcon fontSize='small' /> : <PlayArrowIcon fontSize='small' />}
            {speaking ? 'Stoppa uppläsning' : 'Starta uppläsning'}
          </button>
          <h3>{headerTextProducts}</h3>
          <p>{paragraphTextProducts}</p>
          </p>
        </div>

        <div className="home-div3">
          <p className="home-par">
          <button className='coach-btn' onClick={() => handleClick(textToReadCustomerService)}>
            {speaking ? <StopIcon fontSize='small' /> : <PlayArrowIcon fontSize='small' />}
            {speaking ? 'Stoppa uppläsning' : 'Starta uppläsning'}
          </button>
          <h3>{headerTextCustomerService}</h3>
          <p>{paragraphTextCustomerService}</p>
          </p>
          <Link to="/customerservice" rel="noreferrer">
            <img src={customer} alt="customer-service" width={500} height={320} />
          </Link>
        </div>
      </div>
    );
}
