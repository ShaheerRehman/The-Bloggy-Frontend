import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-900">
      <div className="fledisplayx items-center h-16 max-w-screen-2xl gap-8 px-4 mx-auto sm:px-6 lg:px-8">
        <Link className="block text-teal-300" to="/" component={NavLink}>
          <span className="sr-only">Home</span>
          <h1 className="text-2xl font-bold">The Bloggy</h1>
        </Link>

        <div className="flex items-center justify-end flex-1 md:justify-between">
          <nav className="hidden md:block" aria-labelledby="header-navigation">
            <h2 className="sr-only" id="header-navigation">
              Header navigation
            </h2>

            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-white transition hover:text-white/75"
                  href="/"
                >
                  Blogs
                </a>
              </li>
              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:gap-4 sm:flex">
              <Link
                className="block px-5 py-2.5 text-sm font-medium text-white bg-teal-600 hover:bg-teal-500 transition rounded-md shadow"
                to="/login"
              >
                Login
              </Link>

              <Link
                className="hidden sm:block px-5 py-2.5 text-sm font-medium text-white bg-gray-800 rounded-md hover:text-white/75 transition"
                to="/register"
                component={NavLink}
              >
                Register
              </Link>

              <Link
                className="hidden sm:block px-5 py-2.5 text-sm font-medium text-white bg-gray-800 rounded-md hover:text-white/75 transition"
                to="/logout"
                component={NavLink}
              >
                Logout
              </Link>
            </div>

            <button className="block p-2.5 text-white bg-gray-800 rounded md:hidden hover:text-white/75 transition">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
