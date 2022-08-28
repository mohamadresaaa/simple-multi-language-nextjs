import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { useTranslation } from "next-i18next"

const routes = [
  {
    name: "articles",
    url: "/articles"
  },
    {
    name: "about_us",
    url: "/about"
  },
  {
    name: "contact_us",
    url: "/contact"
  },
  {
    name: "help",
    url: "/help"
  },
]

export default function Navbar() {
  const { pathname, asPath, locale } = useRouter()
  const [navbarToggler, setNavbarToggler] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    if (navbarToggler) {
      setNavbarToggler(!navbarToggler)
    }
  }, [asPath])


  return (
    <div className="sticky top-0 left-0 z-40 w-full flex items-center bg-white shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between relative">
          <div className="px-4 w-60 max-w-full">
            <Link href="/">
              <a className="w-full block py-5 text-blue-600">
                <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fillRule="evenodd"
                    d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
                    clipRule="evenodd" />
                  <path fillRule="evenodd"
                    d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
                    clipRule="evenodd" />
                  <path fillRule="evenodd"
                    d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z"
                    clipRule="evenodd" />
                </svg>
              </a>
            </Link>
          </div>
          <div className="flex px-4 justify-between items-center w-full">
            <div>
              <button className={`${locale === "fa" ? "left-4" : "left-16"} block absolute top-1/2 -translate-y-1/2 lg:hidden focus:ring-2 px-3 py-[6px] rounded-lg`} onClick={() => (setNavbarToggler(!navbarToggler))}>
                <span className={`${navbarToggler ? "transform rotate-45 top-[7px]" : ""} relative w-[30px] h-[2px] my-[6px] block bg-black`}></span>
                <span className={`${navbarToggler ? "opacity-0" : ""} relative w-[30px] h-[2px] my-[6px] block bg-black`}></span>
                <span className={`${navbarToggler ? "top-[-8px] -rotate-45" : ""} relative w-[30px] h-[2px] my-[6px] block bg-black`}></span>
              </button>
              <nav className={`navbar_toggler ${navbarToggler == false ? "hidden" : ""} capitalize`}>
                <ul className="blcok lg:flex">
                  {
                    routes.map(route => (
                      <li key={route.name} className="relative">
                        <Link href={route.url}>
                          <a className={`menu_item ${pathname == route.url ? "menu_item_active" : "text-black lg:text-slate-500"}`}>
                            {t(route.name)}
                          </a>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-end pl-16 lg:pr-0">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}