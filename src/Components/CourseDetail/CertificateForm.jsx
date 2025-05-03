import React, { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import Certificate from "./Certificate";
import { MdClose } from "react-icons/md";

const CertificateForm = ({ data, setData }) => {
  const [recipientName, setRecipientName] = useState(""); 
  const [isCertificateVisible, setIsCertificateVisible] = useState(false);

  const handleChange = (e) => {
    setRecipientName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Scroll to the certificate section
    scroller.scrollTo("certificateSection", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    setIsCertificateVisible(true);
  };

  const handleClose = () => {
    setIsCertificateVisible(false);
  };

  return (
    <div className="bg-white border-4 border-black w-84 p-6 rounded-lg shadow-md relative">
      <h3 className="text-2xl font-bold mb-4">Enter Your Name for the Certificate</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={recipientName}
          onChange={handleChange}
          placeholder="Recipient Name"
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700"
        >
          Generate Certificate
        </button>
      </form>

      {isCertificateVisible && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div
            id="certificateSection"
            className="transform scale-0 transition-transform duration-500 ease-in-out rounded-lg w-full max-w-4xl p-8"
            style={{ animation: "zoomInOut 1s forwards" }}
          >
            <Certificate
              recipientName={recipientName}
              courseName={data.courseName}
              completionDate={data.date}
            />
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-2"
            >
              <MdClose size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateForm;
