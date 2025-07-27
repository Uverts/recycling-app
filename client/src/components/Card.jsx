import { Link } from 'react-router'
export default function Card({ image, title, desc }) {
  return (
    <Link
      To="/"
      className="flex flex-col bg-green-600 items-center border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100"
    >
      <img
        className="object-cover h-40 w-20 rounded-t-lg md:h-auto md:rounded-none md:rounded-s-lg"
        src={image}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {title}
        </h5>
        <p className="mb-3 text-xs text-white">{desc}</p>
      </div>
    </Link>
  )
}
