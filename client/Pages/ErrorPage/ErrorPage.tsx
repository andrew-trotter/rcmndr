function ErrorPage() {
  return (
    <div className="bg-darkPurple h-screen text-violet-400">
      <img src="error-symbol.svg" alt="error symbol" />
      <p className="text-sm">Something went wrong</p>
      <button className="bg-white rounded-lg py-2 px-4 text-pink-500">
        <a href="/">Home</a>
      </button>
    </div>
  )
}

export default ErrorPage
