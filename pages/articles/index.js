import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Navbar from "../../components/navbar"
import Link from "next/link"

export default function Articles({ articles }) {
  const {t} = useTranslation()

  return (
    <>
      <Navbar/>
      <div className="text-red-500 text-3xl text-center mt-5">
        {t("articles")} page
      </div>
      <div className="mt-5 rounded-md bg-gray-500 p-5 text-center justify-center mx-5">
        <ul>
          {
            articles.map(article => (
              <li key={article.name}>
                <Link href={`/articles/${article.id}`}>
                  <a className="text-white text-base hover:text-blue-300">
                    {article.name}
                  </a>
                </Link>
              </li>
          ))
          }
        </ul>
      </div>
    </>
  )
}

export async function getStaticProps({ locale }) {
  const articles = [
    {
      name: "article one",
      id: 1
    },
    {
      name: "article two",
      id: 2
    },
    {
      name: "article three",
      id: 3
    },
    {
      name: "article four",
      id: 4
    },
    {
      name: "article five",
      id: 5
    },
  ]

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      articles
    }
  }
}
