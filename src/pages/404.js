import * as React from "react"

import soonMP4 from "../images/soon.mp4"

const IndexPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-between h-screen sm:max-h-screen overflow-y-hidden bg-[#4A3732]">
      <div className="flex-1"></div>
      <div className="flex-2">
        <video width="320" height="240" autoPlay muted loop>
          <source src={soonMP4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex-1">
        <h1 className="text-gray-100 text-lg md:text-xl font-bold pt-10">
          Page not found!
        </h1>
      </div>
    </div>
  )
}

export default IndexPage
