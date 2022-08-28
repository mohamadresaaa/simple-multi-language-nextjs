import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Navbar from "../components/navbar"


export default function Home() {
  const {t} = useTranslation()

  return (
    <>
      <Navbar/>
      <div className="text-red-500 text-3xl text-center mt-5">
        {t("hello")} Nextjs
      </div>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  }
}
