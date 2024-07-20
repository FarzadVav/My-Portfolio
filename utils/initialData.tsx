export const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const indicatorClass = "indicator-item badge badge-sm badge-secondary"
export const HEADER_LINKS = [
  {
    href: "/articles",
    text: "مقالات",
    active: false,
    indicator: <span className={indicatorClass}>بزودی</span>,
  },
  {
    href: "/podcast",
    text: "پادکست",
    active: false,
    indicator: <span className={indicatorClass}>بزودی</span>,
  },
  { href: "/about", text: "درباره من", active: true, indicator: null },
  {
    href: "/contact",
    text: "ارتباط با من",
    active: true,
    indicator: <span className={indicatorClass}>6</span>,
  },
]
