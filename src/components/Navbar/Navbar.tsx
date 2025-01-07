import { Link } from "react-router-dom";
import Logo from '/image.png'

export default function Navbar() {
  return (
    <header className="w-full px-6 text-gray-700 bg-white shadow print:hidden">
      <div className="container flex flex-col flex-wrap items-center justify-between py-2 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
          <Link
            to="/"
            className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            <img title="React hook form" src={Logo} alt="Logo" width={40} />
            <span title="React hook form" className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
              RF<span className="text-indigo-600">.</span>
            </span>
          </Link>
          <nav className="  flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
           {
            menus.map(menu=>{
              return(
                <Link
                key={menu.id}
                to={menu.link}
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 capitalize"
              >
               {menu.name}
              </Link>
              )
            })
           }
           
          
          </nav>
        </div>

        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          <Link
            to="sign-in"
            className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
          >
            Sign in
          </Link>
          <Link
            to="sign-up"
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}



const menus = [
  {
    id:1,
    name:'shopping invoice',
    link:'/'
  },
  {
    id:2,
    name:'multi step form',
    link:'/multi'
  },
  {
    id:3,
    name:'Contact Management',
    link:'/contact-management'
  },
  {
    id:4,
    name:'Condition Form',
    link:'contion-form'
  },
]