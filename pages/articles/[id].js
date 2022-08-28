import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Navbar from "../../components/navbar"

export default function DetailsArticle({ id }) {
  const {t} = useTranslation()

  return (
    <>
      <Navbar/>
      <div className="text-red-500 text-3xl text-center mt-5">
        {t("articles")} page
      </div>
      <div className="mt-5 rounded-md bg-gray-500 p-5 text-center justify-center mx-5 text-8xl">
        article {id}
      </div>
    </>
  )
}

export async function getServerSideProps({ locale, params }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      id: params.id
    }
  }
}