import React from "react"
import playStoreLogo from "../assets/app-logo/googleBtn.png"
import appleStoreLogo from "../assets/app-logo/appleBtnOne.png"

const DownloadButton = ({ store }) => {
  // Function to handle button click, redirecting to the respective store
  const handleDownload = () => {
    // Replace the URL with your app's actual download link on Google Play Store or App Store
    window.open(
      store === "google"
        ? "https://play.google.com/store"
        : "https://www.apple.com/app-store/"
    )
  }

  return (
    <button
      className="hover:bg-gray-200 hover:bg-opacity-50 text-white font-bold rounded focus:outline-none focus:shadow-outline"
      onClick={handleDownload}
    >
      {/* Display the respective store's logo and text */}
      {store === "google" ? (
        <>
          <img
            src={playStoreLogo}
            alt="Google Play Store"
            className="h-6"
            style={{ width: "300px", height: "120px" }}
          />
        </>
      ) : (
        <>
          <img
            src={appleStoreLogo}
            alt="App Store"
            className="h-6"
            style={{ width: "300px", height: "120px" }}
          />
        </>
      )}
    </button>
  )
}

export default DownloadButton
