import HomeButton from '../../components/UI/HomeButton/HomeButton'

function ErrorPage() {
  return (
    <>
      <div className="bg-darkPurple h-screen text-violet-400 flex items-center justify-center flex-col gap-10">
        <div className="text-5xl">
          <i className="fa-2xl fa-solid fa-triangle-exclamation text-pink-500"></i>
        </div>
        <p className="text-sm">Something went wrong</p>
        <HomeButton />
      </div>
    </>
  )
}

export default ErrorPage
