import { useRouter } from 'next/router'

const Index = () => {
  const { locales, defaultLocale, locale } = useRouter()

  console.log('locales:', locales, ', defaultLocale:', defaultLocale, ', locale:', locale)

  return (
    <div>Index</div>
  )
}

export default Index