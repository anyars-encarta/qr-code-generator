import QRCode from "react-qr-code";
import { useState } from "react";
import './styles.css';

const QRCodeGenerator = () => {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    const handleGenerateQrCode = () => {
      setQrCode(input);
      setInput('');
    };

    return (
        <div>
          <h1>QR Code Generator</h1>

          <div className='input-section'>
            <input onChange={(e) => setInput(e.target.value)} type="text" name="qr-code" value={input} placeholder="Enter your value here..."/>
            <button
              className={input && input.trim() !== '' ? 'generate-button' : ''}
              disabled={input && input.trim() !== '' ? false : true}
              onClick={handleGenerateQrCode}>
                Generate
            </button>
          </div>

          <div>
            <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff"/>
          </div>
    </div>
    )
};

export default QRCodeGenerator;