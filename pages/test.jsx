import { useRouter } from 'next/router'

const Test = () => {
  const { locales, defaultLocale, locale } = useRouter()

  console.log('locales:', locales, ', defaultLocale:', defaultLocale, ', locale:', locale)

  return (
    <div>Test</div>
  )
}

export default Test