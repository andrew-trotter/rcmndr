import { useAuth0 } from '@auth0/auth0-react'

function ShowQR() {
  const { user } = useAuth0()

  return (
    <div>
      <p>Hi,{user?.nickname}</p>

      <p>Here is your QR code</p>
      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?data=${user?.sub}&amp;size=100x100`}
        alt=""
      />
    </div>
  )
}

export default ShowQR
