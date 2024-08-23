/* eslint-disable no-empty-pattern */
import PortfolioItem from "./PortfolioItem"
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
    <h2>My Portfolio Projects</h2>
    <table><tbody><tr>
    {list}
    </tr></tbody></table>
    </>
    )
}

export default PortfolioList