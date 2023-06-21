import { Link } from "react-router-dom"

function HomeButton() {
  return (
    <>
      <button className="bg-white rounded-lg py-2 px-4 text-pink-500 w-20 hover:text-white hover:bg-pink-500 hover:shadow-[0px_0px_9px_2px_#FF17CE]">
        <Link className="font-bold" to="/">
          Home
        </Link>
      </button>
    </>
  )
}

export default HomeButton
