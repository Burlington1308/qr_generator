import { useState } from "react";
import {QRCodeCanvas} from "qrcode.react";
import {FiDownload, FiCopy, FiCheck, FiX} from "react-icons/fi";
import {BsQrCode} from "react-icons/bs";

function SimpleQrGenerator() {

  const [inputText, setInputText] = useState("");
  const [copied, setCopied] = useState(false);
  

  return (
    <>
      <div className="min-h-screen w-full flex
        items-center justify-center bg-linear-to-br
        from-rose-400 to-indigo-400
      ">
          <h1 className="text-6xl font-bold text-white">
            React QR Code Generator Starter Code
          </h1>
      </div>
    </>
  )
}

export default SimpleQrGenerator;
