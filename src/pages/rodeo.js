import * as React from "react"
import Header from "../components/header"

import { useTranslation, useI18next } from "gatsby-plugin-react-i18next"

import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import soonMP4 from "../images/soon.mp4"

const Rodeo = () => {
  const { t } = useTranslation()
  const { language } = useI18next()

  return (
    <div className="relative flex items-center justify-center h-screen sm:max-h-screen bg-[#4A3732]">
      <Header location={{ pathname: "rodeo" }} t={t} />
      {language === "en" ? (
        <StaticImage
          src="../images/rodeoenglish.png"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            bottom: 0,
            objectFit: "cover",
          }}
          alt="Rodeo English image"
          width={1080}
          height={720}
          objectFit="cover"
          objectPosition="bottom"
          quality={90}
        />
      ) : (
        <StaticImage
          src="../images/rodeospanish.png"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            bottom: 0,
            objectFit: "cover",
          }}
          alt="Rodeo Spanish image"
          width={1080}
          height={720}
          objectFit="cover"
          objectPosition="bottom"
          quality={90}
        />
      )}
      <video
        className={`z-20`}
        width="320"
        height="240"
        autoPlay
        muted
        loop
        playsinline
      >
        <source src={soonMP4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Rodeo

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
