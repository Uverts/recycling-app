import { Link } from 'react-router'

export default function Header() {
  return (
    <>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select your country
        </label>
        <select
          id="tabs"
          className="bg-green-600 text-white border border-green-600 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
        >
          <option>Garbage classifier</option>
          <option>Dashboard</option>
          <option>Setting</option>
          <option>Invoice</option>
        </select>
      </div>
      <ul className="hidden text-sm font-medium text-center text-white rounded-lg shadow-sm sm:flex divide-x divide-white">
        <li className="w-full bg-white">
          <Link
            to="/"
            className="inline-block w-full p-4 bg-green-600 shadow-lg text-white rounded-e-lg hover:text-white  hover:bg-green-700"
          >
            Garbage classifier
          </Link>
        </li>
        <li className="w-full bg-white">
          <Link
            to="/guide"
            className="inline-block w-full p-4 bg-green-600 shadow-lg text-white rounded-lg hover:text-white  hover:bg-green-700"
          >
            Guide
          </Link>
        </li>
        <li className="w-full bg-white">
          <Link
            to="/"
            className="inline-block w-full p-4 bg-green-600 shadow-lg text-white rounded-s-lg hover:text-white  hover:bg-green-700"
          >
            History
          </Link>
        </li>
      </ul>
    </>
  )
}
