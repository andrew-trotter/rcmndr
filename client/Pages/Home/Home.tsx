import LoginButton from '../../components/Login/Login'
import RegisterButton from '../../components/RegisterButton/RegisterButton'
import Slogan from '../../components/UI/Slogan/Slogan'

function Home() {
  return (
    <div className="pt-44 pl-4 flex flex-col gap-4">
      <Slogan />
      <div className="flex gap-2">
        <LoginButton />
        <RegisterButton />
      </div>
    </div>
  )
}

export default Home
