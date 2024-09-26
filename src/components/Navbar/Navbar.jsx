

export default function Nav({ links }) {
  return (

    <nav>  
      {/* className="navbar container-fluid space-x-3"> */}
      <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg dark:bg-black/20 bg-white/15 py-3 backdrop-blur-lg lg:flex">
      
        <div className="flex items-center gap-6">
          <ul className="text-2xl font-medium hover:opacity-80 drop-shadow-lg text-black  dark:text-slate-100 dark:drop-shadow-glow dark:hover:text-yellow-200">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  

);
}
