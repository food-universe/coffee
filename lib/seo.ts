export const seo = {
  title: 'Coffee Web | 咖啡網站',
  description:
    'Coffee Web 在這你將看到全台灣的咖啡店，以及咖啡店的評論，來找尋你下一間拜訪的咖啡廳吧。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://coffee-web.vercel.app'
      : 'http://localhost:3000',
  ),
} as const
