import LoginButton from '../../components/Login/Login'
import RegisterButton from '../../components/RegisterButton/RegisterButton'
import Slogan from '../../components/UI/Slogan/Slogan'

function Home() {
  return (
    <div className="pt-44 pl-4 flex flex-col gap-4">
      <Slogan>
        <p className="text-4xl">collate.</p>
        <p className="text-4xl">recommend.</p>
        <p className="text-4xl">discover.</p>
      </Slogan>
      <div className="flex gap-2">
        <LoginButton />
        <RegisterButton />
      </div>
    </div>
  )
}

export default Home
