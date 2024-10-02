import "./PortfolioItem.css";
import "../../utils/portfolioData";

function PortfolioItem() {
  // const { name, img, url, description, github } = data

  return(
    <>
    <div className="carousel w-full">
      <div id="item1" className="carousel-item w-full">
        <img
        src="https://michael-hellon.github.io/React-Portfolio/src/assets/images/TaskAttacker.png"
        className="w-full" />
      </div>
      <div id="item2" className="carousel-item w-full">
        <img
        src="https://michael-hellon.github.io/React-Portfolio/src/assets/images/PetFinder.png"
        className="w-full" />
      </div>
      <div id="item3" className="carousel-item w-full">
        <img
        src="https://michael-hellon.github.io/React-Portfolio/src/assets/images/MVC_screenshot.png"
        className="w-full" />
      </div>
      <div id="item4" className="carousel-item w-full">
        <img
        src="https://michael-hellon.github.io/React-Portfolio/src/assets/images/JATE_screenshot.png"
        className="w-full" />
      </div>
      <div id="item5" className="carousel-item w-full">
        <img
        src="https://michael-hellon.github.io/React-Portfolio/src/assets/images/NoSQL_Social_Networking.png"
        className="w-full" />
      </div>
      <div id="item6" className="carousel-item w-full">
        <img
        src="https://michael-hellon.github.io/React-Portfolio/src/assets/images/Task_Board.png"
        className="w-full" />
      </div>
    </div>
    <div className="flex w-full justify-center gap-2 py-2">
      <a href="#item1" className="btn btn-xs">1</a>
      <a href="#item2" className="btn btn-xs">2</a>
      <a href="#item3" className="btn btn-xs">3</a>
      <a href="#item4" className="btn btn-xs">4</a> 
    </div>
    </>
  )
}

export default PortfolioItem 