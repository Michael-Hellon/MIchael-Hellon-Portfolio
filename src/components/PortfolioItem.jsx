function PortfolioItem({data}) {
    const { name, img, url, description } = data
    console.log('hello',data)

    return(
        <>

         <td>
            <a href={url} title="Launch App"><img title="Click to Launch App" alt="Launch App" className="portfolioItem" src={img} /></a>
            <h3>{name}</h3>
            <div className="description">
                <p>{description}</p>
                <button className="cta" value="Launch App" title="LaunchApp"><a title="Launch App" href={url} >Launch the {name} App</a></button>
            </div>
            </td>

        </> 
    )

}

export default PortfolioItem