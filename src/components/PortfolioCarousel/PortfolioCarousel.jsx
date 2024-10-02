import "./PortfolioCarousel.css";
import "../../utils/portfolioData";
import { portfolioData } from "../../utils/portfolioData";

function PortfolioCarousel(data) {
  const { id, name, img, url, description, github } = data

  return(
    <>
    <div className="carousel w-full">
      <div id={id} className="carousel-item w-full">
        <a className="w-full" href={url}>
          <img className="rounded-t-lg" src={img}  alt="" />
        </a>
        <div className="p-5">
          <a href={name}>
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h3>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
          <a href={github} className="flex justify-center rounded-lg
            hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <button size="xs" color="gray" pill>
              GitHUb
            </button>
          </a>
        </div>
      </div>
    </div>
    <div className="flex w-full justify-center gap-2 py-2">
      <a href={portfolioData.id[1]} className="btn btn-xs">1</a>
      <a href={portfolioData.id[1]} className="btn btn-xs">2</a>
      <a href={portfolioData.id[1]} className="btn btn-xs">3</a>
      <a href={portfolioData.id[1]} className="btn btn-xs">4</a>
      <a href={portfolioData.id[1]}className="btn btn-xs">5</a>
      <a href="#item4" className="btn btn-xs">6</a> 
    </div>

{/* or like this???
    <div className="flex w-full justify-center gap-2 py-2">
      <a href={data.id[1]} className="btn btn-xs">1</a>
      <a href={data.id[2]} className="btn btn-xs">2</a>
      <a href={data.id[3]} className="btn btn-xs">3</a>
      <a href={data.id[4]} className="btn btn-xs">4</a>
      <a href={data.id[5]} className="btn btn-xs">5</a>
      <a href={data.id[6]} className="btn btn-xs">6</a> 
    </div>
*/ }
    </>
  )
}

export default PortfolioCarousel 