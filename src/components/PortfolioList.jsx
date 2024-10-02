/* eslint-disable no-empty-pattern */
import PortfolioItem from "./PortfolioItem/PortfolioItem"
import { portfolioData } from "../utils/portfolioData"


console.log(portfolioData);

function PortfolioList( { } ){


    const list = portfolioData.map(portfolio => {
        return(
        <PortfolioItem
            key={portfolio.id}
            data={portfolio}
            />
        )
    })

    return(
      <>
        <div className="text-center">
          <h2>My Portfolio Projects</h2>
        </div>
            <table><tbody><tr>
            <div className="cards">    
            {list}
            </div>
            </tr></tbody></table>

      </>
    )
}

export default PortfolioList