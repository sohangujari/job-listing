import logo from "../assets/react.svg";

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                className="h-10 w-auto"
                src={logo}
                alt="React Jobs"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                React Jobs
              </span>
            </a>
          </div>
          <div className="md:ml-auto">
            <div className="flex space-x-4 text-white">
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
              <a href="/jobs" className="hover:text-gray-300">
                Jobs
              </a>
              <a href="/add-job" className="hover:text-gray-300">
                Add Job
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
