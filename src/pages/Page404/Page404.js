import "../Page404/Page404.css"
import underCon from "./websites-why-you-should-never-use-under-construction-pages.jpg"

const NoPage = () => {
    return(
    <div>
      <h1>Sidan är under utveckling</h1>
      <div>
        <img className="construction" src={underCon} alt="Under Construction"></img>
      </div>
    </div>
    )
  };
  
  export default NoPage;