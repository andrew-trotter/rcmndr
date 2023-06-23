import { useParams } from 'react-router-dom'

function ConfirmScan() {
  const code = useParams().code as string
  console.log(code)
  return <p>{code}</p>
}

export default ConfirmScan
