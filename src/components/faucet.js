import React from "react"

import { useStore } from "../utils/store"

export default function Faucet({ t }) {
  const { toggleFaucet, openFaucet } = useStore()

  return (
    <div
      className={`fixed flex flex-col inset-x-0 top-24 w-full bg-[#CDBFBB] p-7 rounded-t-3xl delay-75 duration-150 min-h-screen max-w-screen-2xl mx-auto ${
        openFaucet ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <style jsx="true">{`
        body {
          ${openFaucet ? "overflow: hidden" : ""};
        }
      `}</style>
      <div className="flex w-full justify-end">
        <button
          className="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none"
          type="button"
          onClick={() => toggleFaucet(!openFaucet)}
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
      <div className="flex flex-1 flex-col h-full max-h-screen text-[#4A3732] overflow-y-scroll scrollbar-hide pb-10">
        <div className="pt-4">
          <h1 className="text-center font-bold text-4xl md:text-6xl">
            {t("faucet")}
          </h1>
        </div>
        <div className="flex-1 flex justify-center items-center py-4 min-h-[400px]">
          <div className="font-semibold text-center md:text-left max-w-5xl m-auto">
            <p>{t("faucetHeading")}</p>
            <br />
            <ol className="text-left list-decimal list-inside">
              <li>{t("faucetListItem1")}</li>
              <li>{t("faucetListItem2")}</li>
              <li>{t("faucetListItem3")}</li>
              <li>{t("faucetListItem4")}</li>
            </ol>
          </div>
        </div>
        <div className="flex-2 sm:flex-1">
          <div className="flex flex-col items-center font-semibold text-center md:text-left max-w-5xl m-auto">
            <a
              href="https://handle.me/madbul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center font-bold text-5xl md:text-7xl animate-blink m-auto py-2 uppercase"
            >
              $madbul
            </a>
          </div>
          <div className="font-semibold text-center pt-8 pb-14 max-w-5xl m-auto">
            <p>{t("faucetSend")}</p>
          </div>
        </div>
        <div className="min-h-[200px]" />
      </div>
    </div>
  )
}
