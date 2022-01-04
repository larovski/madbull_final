import React, { useState } from "react"

import { useStore } from "../utils/store"
import { InView } from "react-intersection-observer"

import { PieChart } from "react-minimal-pie-chart"
import Arrow from "./Arrow"

export default function News({ t }) {
  const { toggleNews, openNews } = useStore()
  const [showFirstPie, toggleFirstPie] = useState(false)
  const [showSecondPie, toggleSecondPie] = useState(false)

  return (
    <div
      className={`fixed flex flex-col inset-x-0 top-24 w-full bg-[#CDBFBB] p-4 md:p-7 rounded-t-3xl delay-75 duration-150 min-h-screen max-w-screen-2xl mx-auto ${
        openNews ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <style jsx="true">{`
        body {
          ${openNews ? "overflow: hidden" : ""};
        }
      `}</style>

      <div className="flex w-full justify-end">
        <button
          className="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none"
          type="button"
          onClick={() => toggleNews(!openNews)}
        >
          <span className="sr-only">{t("openMenu")}</span>
          <svg
            className="w-6 h-6"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 0.5C7.8875 0.5 0.5 7.8875 0.5 17C0.5 26.1125 7.8875 33.5 17 33.5C26.1125 33.5 33.5 26.1125 33.5 17C33.5 7.8875 26.1125 0.5 17 0.5ZM22.5605 13.5605C22.8337 13.2776 22.9849 12.8987 22.9815 12.5054C22.9781 12.1121 22.8203 11.7359 22.5422 11.4578C22.2641 11.1797 21.8879 11.0219 21.4946 11.0185C21.1013 11.0151 20.7224 11.1663 20.4395 11.4395L17 14.879L13.5605 11.4395C13.4221 11.2962 13.2566 11.182 13.0736 11.1033C12.8906 11.0247 12.6938 10.9834 12.4946 10.9816C12.2954 10.9799 12.0979 11.0178 11.9136 11.0933C11.7292 11.1687 11.5617 11.2801 11.4209 11.4209C11.2801 11.5617 11.1687 11.7292 11.0933 11.9136C11.0178 12.0979 10.9799 12.2954 10.9816 12.4946C10.9834 12.6938 11.0247 12.8906 11.1033 13.0736C11.182 13.2566 11.2962 13.4221 11.4395 13.5605L14.879 17L11.4395 20.4395C11.2962 20.5779 11.182 20.7434 11.1033 20.9264C11.0247 21.1094 10.9834 21.3062 10.9816 21.5054C10.9799 21.7046 11.0178 21.9021 11.0933 22.0864C11.1687 22.2708 11.2801 22.4383 11.4209 22.5791C11.5617 22.7199 11.7292 22.8313 11.9136 22.9067C12.0979 22.9822 12.2954 23.0201 12.4946 23.0184C12.6938 23.0166 12.8906 22.9753 13.0736 22.8967C13.2566 22.818 13.4221 22.7038 13.5605 22.5605L17 19.121L20.4395 22.5605C20.7224 22.8337 21.1013 22.9849 21.4946 22.9815C21.8879 22.9781 22.2641 22.8203 22.5422 22.5422C22.8203 22.2641 22.9781 21.8879 22.9815 21.4946C22.9849 21.1013 22.8337 20.7224 22.5605 20.4395L19.121 17L22.5605 13.5605Z"
              fill="#4A3732"
            />
          </svg>
        </button>
      </div>
      <div className="h-full max-h-screen text-[#4A3732] overflow-y-scroll pb-40 scrollbar-hide">
        <div className="py-4">
          <h1 className="text-center font-bold text-4xl md:text-6xl">
            {t("news")}
          </h1>
          <h3 className="text-center font-bold text-xl md:text-3xl">
            {t("newsSubHeading")}
          </h3>
        </div>
        <div className="font-semibold text-center md:text-left pt-4 py-4 max-w-4xl m-auto">
          <b>{t("newsParagraph0Heading")}</b>
          <br />
          <p className="pt-2">{t("newsParagraph0")}</p>
          <br />
          <p className="indent-7">{t("newsParagraph1")}</p>
          <p className="indent-7">{t("newsParagraph2")}</p>
          <p className="indent-7">{t("newsParagraph3")}</p>
          <p className="indent-7">{t("newsParagraph4")}</p>
          <p className="indent-7">{t("newsParagraph5")}</p>
          <br />
          <p>{t("newsParagraph6")}</p>
          <br />
          <b>{t("newsParagraph7Heading")}</b>
          <p>{t("newsParagraph7")}</p>
          <br />
          <b>{t("newsParagraph8Heading")}</b>
          <p>{t("newsParagraph8")}</p>
          <br />
          <b>{t("newsParagraph9Heading")}</b>
          <p>{t("newsParagraph9")}</p>
          <br />
          <p>{t("newsParagraph10")}</p>
        </div>

        <InView
          as="div"
          onChange={(inView, entry, ref) =>
            !showFirstPie && toggleFirstPie(inView)
          }
          threshold="0.6"
        >
          <div className="py-4 w-full max-w-4xl m-auto flex justify-center">
            <PieChart
              className="hidden md:flex px-14 sm:px-36 md:px-44"
              data={[
                {
                  title: `50% ${t("graphLable1")}`,
                  value: 50,
                  color: "#C13C37",
                },
                {
                  title: `50% ${t("graphLable2")}`,
                  value: 50,
                  color: "#6A2135",
                },
              ]}
              labelStyle={() => ({
                fontSize: "3px",
                fontWeight: "600",
                color: "#4A3732",
              })}
              style={{ overflow: "visible" }}
              label={({ dataEntry }) => dataEntry.title}
              animate
              startAngle={90}
              radius={42}
              labelPosition={110}
              reveal={showFirstPie ? 100 : 0}
            />
            <PieChart
              className="flex px-4 md:hidden"
              data={[
                {
                  title: `50% ${t("graphLable1")}`,
                  value: 50,
                  color: "#C13C37",
                },
                {
                  title: `50% ${t("graphLable2")}`,
                  value: 50,
                  color: "#6A2135",
                },
              ]}
              style={{ overflow: "visible" }}
              animate
              startAngle={90}
              radius={42}
              labelPosition={80}
              reveal={showFirstPie ? 100 : 0}
            />
          </div>
        </InView>
        <div className="py-4 w-full max-w-4xl m-auto flex justify-center">
          <Arrow />
        </div>
        <InView
          as="div"
          onChange={(inView, entry, ref) =>
            !showSecondPie && toggleSecondPie(inView)
          }
          threshold="0.6"
        >
          <div className="py-4 w-full max-w-4xl m-auto flex justify-center">
            <PieChart
              className="hidden md:flex px-14 sm:px-36 md:px-44"
              data={[
                {
                  title: `25% ${t("graphLable5")}`,
                  value: 25,
                  color: "#E38627",
                },
                {
                  title: `25% ${t("graphLable3")}`,
                  value: 25,
                  color: "#C13C37",
                },
                {
                  title: `25% ${t("graphLable4")}`,
                  value: 25,
                  color: "#6A2135",
                },
                {
                  title: `5% ${t("graphLable7")}`,
                  value: 5,
                  color: "#FFFFFF",
                },

                {
                  title: `20% ${t("graphLable6")}`,
                  value: 20,
                  color: "#FFD904",
                },
              ]}
              labelStyle={() => ({
                fontSize: "3px",
                fontWeight: "600",
                color: "#4A3732",
              })}
              style={{ overflow: "visible" }}
              label={({ dataEntry }) => dataEntry.title}
              animate
              startAngle={0}
              radius={42}
              labelPosition={110}
              reveal={showSecondPie ? 100 : 0}
            />
            <PieChart
              className="flex px-4 md:hidden"
              data={[
                {
                  title: `25% ${t("graphLable5")}`,
                  value: 25,
                  color: "#E38627",
                },
                {
                  title: `25% ${t("graphLable3")}`,
                  value: 25,
                  color: "#C13C37",
                },
                {
                  title: `25% ${t("graphLable4")}`,
                  value: 25,
                  color: "#6A2135",
                },
                {
                  title: `5% ${t("graphLable7")}`,
                  value: 5,
                  color: "#FFFFFF",
                },

                {
                  title: `20% ${t("graphLable6")}`,
                  value: 20,
                  color: "#FFD904",
                },
              ]}
              style={{ overflow: "visible" }}
              animate
              startAngle={0}
              radius={42}
              labelPosition={80}
              reveal={showSecondPie ? 100 : 0}
            />
          </div>
        </InView>
        <div className="font-semibold text-center md:text-left py-4 max-w-4xl m-auto">
          <b>{t("newsParagraph11Heading")}</b>
          <p>{t("newsParagraph11")}</p>
          <br />
          <b>{t("newsParagraph12Heading")}</b>
          <p>{t("newsParagraph12")}</p>
          <br />
          <b>{t("newsParagraph13Heading")}</b>
          <p>{t("newsParagraph13")}</p>
          <br />
          <b>{t("newsParagraph14Heading")}</b>
          <p>
            {t("newsParagraph14")}{" "}
            <a
              className="underline"
              href="https://madbull.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              madbull.io
            </a>
            .
          </p>
          <br />
          <b>{t("newsParagraph15Heading")}</b>
          <p>{t("newsParagraph15")} </p>
          <br />
          <p>
            {t("newsParagraph16")}{" "}
            {t("newsParagraph16") !== "" && (
              <a
                className="underline"
                href="https://www.DeepL.com/Translator"
                target="_blank"
                rel="noopener noreferrer"
              >
                DeepL.com/Translator.
              </a>
            )}
          </p>
        </div>
        <div className="py-10" />
      </div>
    </div>
  )
}
