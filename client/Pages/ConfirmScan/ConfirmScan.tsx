import { useParams } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'

function ConfirmScan() {
  const code = useParams().code as string

  return (
    <div className="flex flex-col justify-center items-center w-auto">
      <div className='w-1/4 h-1/4 mt-20 mb-6'>
        <img src="https://www.qrcode-monkey.com/img/default-preview-qr.svg" alt="QR code" className='w- rounded-full' />
      </div>
      <div className='text-lightPurple font-serif flex items-center flex-col mb-28'>
        <p className='mb-5'>Sacn is Successful</p>
        <p>Would like to follow <span className='text-darkPink'>{code}</span></p>
      </div>
      <div className='mt-20 flex flex-row justify-between'>
        <Button >FOLLOW</Button>
        <Button className="bg-white text-primary ml-16" >
          CANCEL
        </Button>
      </div>



    </div>
  )
}

export default ConfirmScan
