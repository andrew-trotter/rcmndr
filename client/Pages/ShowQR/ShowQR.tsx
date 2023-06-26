import { useAuth0 } from '@auth0/auth0-react'
import Button from '../../components/UI/Button/Button'

function ShowQR() {
  const { user } = useAuth0()

  return (
    <div className="flex flex-col justify-center items-center w-auto">
      <div className="w-1/5 h-1/5 mt-20 mb-6">
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?data=${user?.sub}&amp;size=100x100`}
          alt="user QR code"
        />
      </div>

      <div className="text-lightPurple font-serif flex items-center flex-col mb-28">
        <p>Hey, {user?.nickname}</p>

        <p>Here is your QR code</p>
      </div>
      <div className="mt-8 flex justify-center">
        <Button className="bg-white text-primary">Home</Button>
      </div>
    </div>
  )
}

export default ShowQR
