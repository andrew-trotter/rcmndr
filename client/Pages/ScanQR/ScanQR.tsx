

import { useState } from 'react';
import { OnResultFunction, QrReader } from 'react-qr-reader';




function ScanQR() {
  const [data, setData] = useState<string | null>(null)

  const handleResult: OnResultFunction = (result, error) => {
    if (result) {
      setData(() => result.getText());
      console.log(result.getText())
      // Navigate('/confirm/auth0|2323432')
      return
    }
    console.error(error);
  }

  return (
    <>
      <QrReader
        constraints={{ width: 100 }}
        onResult={handleResult}
      />
      <p>{data}</p>
    </>
  );
}

export default ScanQR;



