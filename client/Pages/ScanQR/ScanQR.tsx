import { useState } from 'react'
import { OnResultFunction, QrReader } from 'react-qr-reader'
import { useNavigate } from 'react-router-dom'

function ScanQR() {
  const [data, setData] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleResult: OnResultFunction = (result, error) => {
    if (result) {
      setData(() => result.getText())
      console.log(result.getText())
      navigate(`/confirm-scan/${result.getText()}`)
      return
    }
    console.error(error)
  }

  return (
    <>
      <QrReader constraints={{ width: 100 }} onResult={handleResult} />
      <p>{data}</p>
    </>
  )
}

export default ScanQR
