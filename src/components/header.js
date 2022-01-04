import * as React from "react"
import PropTypes from "prop-types"

import { Link, useI18next } from "gatsby-plugin-react-i18next"

import { useStore } from "../utils/store"

import twitterWhite from "../images/twitter.svg"
import twitterBrown from "../images/twitter2.svg"
import telegramWhite from "../images/telegram.svg"
import telegramBrown from "../images/telegram2.svg"
import discordWhite from "../images/discord.svg"
import discordBrown from "../images/discord2.svg"

const Header = ({ location, t }) => {
  const { openNavbar, toggleNavbar } = useStore()

  const { languages, language, originalPath } = useI18next()

  return (
    <nav className="absolute top-0 inset-x-0 z-50 flex flex-wrap items-center justify-between p-7 mb-3 text-white max-w-screen-2xl mx-auto">
      <div className="w-full flex-1 relative flex justify-between md:w-auto md:static md:block md:justify-start">
        <div className="flex items-start text-3xl font-bold">
          <Link to="/" onClick={() => toggleNavbar(false)}>
            {t("madbullLabel")}
          </Link>
        </div>

        <button
          className="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => {
            toggleNavbar(!openNavbar)
          }}
        >
          <span className="sr-only">{"openMenu"}</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={
          "hidden md:flex flex-1 flex-grow font-bold items-center justify-center"
        }
      >
        <ul className="flex flex-col md:flex-row list-none m-auto">
          <li
            className={`nav-item text-right ${
              location.pathname === "home" ? "underline font-bold" : ""
            }`}
          >
            <Link to="/" onClick={() => toggleNavbar(false)}>
              {t("homeLabel")}
            </Link>
          </li>
          <div className="hidden md:block px-8" />
          <li
            className={`nav-item text-right ${
              location.pathname === "rodeo" ? "underline font-bold" : ""
            }`}
          >
            <Link to="/rodeo" onClick={() => toggleNavbar(false)}>
              rodeo
            </Link>
          </li>
          <ul className="flex md:hidden flex-row list-none md:ml-auto mt-2">
            <li className="nav-item flex items-center justify-center px-1">
              <a
                href="https://twitter.com/fLiGhtofMAdbuLL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <img
                  src={twitterWhite}
                  width={18}
                  height={18}
                  alt="Twitter Icon"
                />
              </a>
            </li>
            <li className="nav-item flex items-center justify-center  px-1">
              <a
                href="https://t.me/fLiGhtofMAdbuLL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <img
                  src={telegramWhite}
                  width={18}
                  height={18}
                  alt="Telegram Icon"
                />
              </a>
            </li>
            <li className="nav-item flex items-center justify-center px-1">
              <a
                href="https://discord.gg/TuqDtWDD"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <img
                  src={discordWhite}
                  width={18}
                  height={18}
                  alt="Discord Icon"
                />
              </a>
            </li>
            <li className="nav-item flex items-center px-1">
              <nav className="flex flex-row">
                <Link to={originalPath} language={languages[0]}>
                  <p
                    className={`px-1 ${
                      language === "en" ? "underline font-bold" : ""
                    }`}
                  >
                    EN
                  </p>
                </Link>
                {"  "}|{"  "}
                <Link to={originalPath} language={languages[1]}>
                  <p
                    className={`pl-1 ${
                      language === "es" ? "underline font-bold" : ""
                    }`}
                  >
                    ES
                  </p>
                </Link>
              </nav>
            </li>
          </ul>
        </ul>
      </div>
      <div
        className={"hidden md:flex flex-1 flex-grow items-center"}
        id="example-navbar-danger"
      >
        <ul className="flex flex-row list-none md:ml-auto">
          <li className="nav-item flex items-center px-2">
            <nav className="flex flex-row">
              <Link to={originalPath} language={languages[0]}>
                <p
                  className={`px-1 ${
                    language === "en" ? "underline font-bold" : ""
                  }`}
                >
                  EN
                </p>
              </Link>
              {"  "}|{"  "}
              <Link to={originalPath} language={languages[1]}>
                <p
                  className={`pl-1 ${
                    language === "es" ? "underline font-bold" : ""
                  }`}
                >
                  ES
                </p>
              </Link>
            </nav>
          </li>
          <li className="nav-item flex items-center justify-center px-1">
            <a
              href="https://twitter.com/fLiGhtofMAdbuLL"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <img
                src={twitterWhite}
                width={36}
                height={36}
                alt="Twitter Icon"
              />
            </a>
          </li>
          <li className="nav-item flex items-center justify-center px-1">
            <a
              href="https://t.me/fLiGhtofMAdbuLL"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <img
                src={telegramWhite}
                width={36}
                height={36}
                alt="Telegram Icon"
              />
            </a>
          </li>
          <li className="nav-item flex items-center justify-center px-1">
            <a
              href="https://discord.gg/TuqDtWDD"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <img
                src={discordWhite}
                width={36}
                height={36}
                alt="Discord Icon"
              />
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`absolute flex md:hidden inset-x-0 top-0 w-full bg-[#CDBFBB] rounded-b-3xl delay-75 duration-150 ${
          openNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col w-full text-[#4A3732] font-bold">
          <div className="flex w-full justify-between p-7">
            <div className="flex-1 flex items-start text-3xl font-bold">
              <Link to="/" onClick={() => toggleNavbar(false)}>
                {t("madbullLabel")}
              </Link>
            </div>
            <button
              className="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => toggleNavbar(!openNavbar)}
            >
              <span className="sr-only">{"openMenu"}</span>
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
          <div className="flex flex-col pb-7 px-7">
            <ul className="">
              <li className="nav-item text-right">
                <Link to="/" onClick={() => toggleNavbar(false)}>
                  <p
                    className={`${
                      location.pathname === "home" ? "underline font-bold" : ""
                    }`}
                  >
                    {t("homeLabel")}
                  </p>
                </Link>
              </li>
              <li
                className={`nav-item text-right ${
                  location.pathname === "rodeo" ? "underline font-bold" : ""
                }`}
              >
                <Link to="/rodeo" onClick={() => toggleNavbar(false)}>
                  rodeo
                </Link>
              </li>
            </ul>
            <ul className="flex flex-row justify-end list-none md:ml-auto pt-4">
              <li className="nav-item">
                <nav className="flex flex-row">
                  <Link to={originalPath} language={languages[0]}>
                    <p
                      className={`px-1 ${
                        language === "en" ? "underline font-bold" : ""
                      }`}
                    >
                      EN
                    </p>
                  </Link>
                  {"  "}|{"  "}
                  <Link to={originalPath} language={languages[1]}>
                    <p
                      className={`pl-1 ${
                        language === "es" ? "underline font-bold" : ""
                      }`}
                    >
                      ES
                    </p>
                  </Link>
                </nav>
              </li>
            </ul>
            <ul className="flex flex-row justify-end list-none md:ml-auto pt-4">
              <li className="nav-item px-1">
                <a
                  href="https://twitter.com/fLiGhtofMAdbuLL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={twitterBrown}
                    width={25}
                    height={25}
                    alt="Twitter Icon"
                  />
                </a>
              </li>
              <li className="nav-item px-1">
                <a
                  href="https://t.me/fLiGhtofMAdbuLL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={telegramBrown}
                    width={25}
                    height={25}
                    alt="Telegram Icon"
                  />
                </a>
              </li>
              <li className="nav-item pl-1">
                <a
                  href="https://discord.gg/TuqDtWDD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={discordBrown}
                    width={25}
                    height={25}
                    alt="Discord Icon"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
