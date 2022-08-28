import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"


export default function Home() {
  const {t} = useTranslation()

  return (
    <div className="text-red-500 text-3xl text-center">
      {t("hello")} Nextjs
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  }
}
