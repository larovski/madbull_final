import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import { graphql } from "gatsby"

import { useTranslation, useI18next } from "gatsby-plugin-react-i18next"

import { useStore } from "../utils/store"

import Header from "../components/header"
import Faucet from "../components/faucet"
import News from "../components/news"

const IndexPage = () => {
  const { toggleFaucet, toggleNews, openFaucet, openNews } = useStore()

  const { t } = useTranslation()
  const { language } = useI18next()

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[600px] h-screen sm:max-h-screen overflow-y-hidden bg-[#4A3732]">
      <Header location={{ pathname: "home" }} t={t} />

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center max-w-screen-2xl mx-auto lg:overflow-hidden">
        <div className="flex flex-col lg:flex-row h-full w-full">
          <div className="block w-full lg:min-w-[15rem] flex-1"></div>
          <div className="flex flex-3 w-full justify-center items-center">
            <div className="w-full pt-14 m-auto max-h-[500px] max-w-[500px] relative">
              {language === "en" ? (
                <StaticImage
                  className="animate-fade-in-down delay-75"
                  src={"../images/madbull.png"}
                  alt="Picture of the MAdbuLL"
                  placeholder="blurred"
                  height={500}
                  width={500}
                />
              ) : (
                <StaticImage
                  className="animate-fade-in-down delay-75"
                  src={"../images/toroloco.png"}
                  alt="Foto del MAdbuLL"
                  placeholder="blurred"
                  height={500}
                  width={500}
                />
              )}
            </div>
          </div>
          <div className="flex flex-row flex-1 lg:flex-col w-full lg:min-w-[15rem] justify-between md:justify-end items-end pb-[32px] sm:pb-0">
            <div
              className="pb-8 sm:pb-4 pt-8 px-8 lg:pr-8 hover:scale-125 delay-75 duration-150 cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => toggleNews(!openNews)}
              onKeyDown={e => e.key === "Enter" && toggleNews(!openNews)}
            >
              {language === "en" ? (
                <StaticImage
                  src={"../images/newsenglish.png"}
                  alt="Picture of the News Bull"
                  placeholder="blurred"
                  height={150}
                  width={165}
                />
              ) : (
                <StaticImage
                  src={"../images/newsspanish.png"}
                  alt="Foto del News Bull"
                  placeholder="blurred"
                  height={150}
                  width={165}
                />
              )}
            </div>
            <div
              className="pt-8 sm:pt-4 pb-8 px-8 hover:scale-125 delay-75 duration-150 cursor-pointer "
              role="button"
              tabIndex={0}
              onClick={() => {
                toggleFaucet(!openFaucet)
              }}
              onKeyDown={e => e.key === "Enter" && toggleFaucet(!openFaucet)}
            >
              <StaticImage
                src={"../images/faucet.png"}
                alt="Picture of the Faucet Bull"
                placeholder="blurred"
                height={150}
                width={150}
              />
            </div>
          </div>
          <div className="block sm:hidden w-full lg:min-w-[15rem] flex-1"></div>
        </div>
      </main>
      <Faucet t={t} />
      <News t={t} />
    </div>
  )
}

export default IndexPage

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
