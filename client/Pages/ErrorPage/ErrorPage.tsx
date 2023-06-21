function ErrorPage() {
  return (
    <>
      <div className="bg-darkPurple h-screen text-violet-400 flex items-center justify-center flex-col gap-10">
        <div className="text-5xl">
          <i className="fa-2xl fa-solid fa-triangle-exclamation text-pink-500"></i>
        </div>
        <p className="text-sm">Something went wrong</p>
        <button className="bg-white rounded-lg py-2 px-4 text-pink-500 w-20 hover:text-white hover:bg-pink-500 hover:shadow-[0px_0px_9px_2px_#FF17CE]">
          <a className="font-bold" href="/">
            Home
          </a>
        </button>
      </div>
    </>
  )
}

export default ErrorPage
