import { useState } from "react";
import {QRCodeCanvas} from "qrcode.react";
import {FiDownload, FiCopy, FiCheck, FiX} from "react-icons/fi";
import {BsQrCode} from "react-icons/bs";

function SimpleQrGenerator() {

  const [inputText, setInputText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    const canvas = document.querySelector("canvas");
    if(!canvas) return;

    const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // to download image
    const link = document.createElement("a");  // to download image
    link.href = pngUrl;
    link.download = "qr-code.png";
    link.click();
  }

  const handleCopy = async () =>{
    try {
      await navigator.clipboard.writeText(inputText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log("Copy Failed", err);
    }
  }

  const handleClear = () => {
    setInputText("");
  }

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
