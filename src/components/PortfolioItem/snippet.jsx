


// return(
//     <>

//     {/* <td> */}
//     <div className="row justify-center">
//     <div className="card-column"> 
//       <figure className="code-card">
//         <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-900 dark:text-white">{name}</h5>
//         <div className="card-body">
//             <p className="mb-3 font-normal text-red-700 dark:text-red-400">{description}.</p>
//             <a href={github} className="flex justify-center rounded-lg
//              hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                 <button size="xs" color="gray" pill>
//                 GitHUb
//                 </button>
//             </a>
//         </div>
//       </figure>
//     </div>                                            
//     </div> 
//     </> 
// )


function PortfolioItem({data}) {
    const { name, img, url, description, github } = data

    return(
        <>

        {/* <td> */}
        <div className="row justify-center">
        <div className="card-column"> 
          <figure className="code-card">
            <a href={url}>
                <img className="rounded-t-lg" src={img}  alt="" />
            </a>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-900 dark:text-white">{name}</h5>
            <div className="card-body">
                <p className="mb-3 font-normal text-red-700 dark:text-red-400">{description}.</p>
                <a href={github} className="flex justify-center rounded-lg
                 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <button size="xs" color="gray" pill>
                    GitHUb
                    </button>

                </a>
            </div>
          </figure>
        </div>                                         
        </div> 

        {/* <section className="row justify-center">
          <div className="card-column">


          <div className="container">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={url}>
                <img className="rounded-t-lg" src={img}  alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-900 dark:text-white">{name}</h5>
                </a>
                <p className="mb-3 font-normal text-red-700 dark:text-red-400">{description}.</p>
                <a href={github} className="flex justify-center rounded-lg
                 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <button size="xs" color="gray" pill>
                    GitHUb
                    </button>

                </a>
            </div>
          {/* </div> */}
        {/* </div>
        </div>
        </section>  */}


        </> 
    )

}

export default PortfolioItem