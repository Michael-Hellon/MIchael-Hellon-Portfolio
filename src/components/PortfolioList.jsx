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
        <div className="mt-20 text-center text-6xl font-semibold">
          <h2>My Portfolio Projects</h2>
        </div>
            <table><tbody><tr>
            <div className="flex flex-wrap justify-center py-8">    
            {list}
            </div>
            </tr></tbody></table>

      </>
    )
}

export default PortfolioList