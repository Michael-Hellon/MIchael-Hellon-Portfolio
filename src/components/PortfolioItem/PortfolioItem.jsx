import "./PortfolioItem.css";

function PortfolioItem({data}) {
  const { name, img, url, description, github } = data

  return(
    <>
    <td>
    <div className="container grid grid-cols-4 gap-4">

      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href={url}>
          <img className="card-image rounded-t-lg" src={img}  alt="" />
        </a>
        <div className="p-5">
          <a href="#">
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
    </td>
    </> 

  )

}

export default PortfolioItem 


