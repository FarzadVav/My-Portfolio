import { HashtagIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const tags = [
  { id: 1, name: "Javascript" },
  { id: 2, name: "Typescript" },
  { id: 3, name: "React.js" },
  { id: 4, name: "Node.js" },
  { id: 5, name: "Database" },
  { id: 6, name: "Next.js" },
  { id: 7, name: "MySql" },
  { id: 8, name: "MongoDB" },
  { id: 9, name: "Vue.js" },
  { id: 10, name: "Nuxt.js" },
  { id: 11, name: "Cloud" },
  { id: 12, name: "Server" },
]

const TagsCarousel = () => {
  return (
    <div className="mt-element w-full h-12 relative overflow-hidden group">
      <ul className="tags-animation row absolute top-0 right-0 group-hover:animation-pause">
        {tags.map((tag) => (
          <li className="min-w-max flex-1 ml-1.5" key={tag.id}>
            <Link className="btn rounded-full" href={""}>
              <span>{tag.name}</span>
              <HashtagIcon className="icon-sm" />
            </Link>
          </li>
        ))}
      </ul>
      <ul
        style={{ animationDelay: "15s" }}
        className="tags-animation row absolute top-0 right-0 group-hover:animation-pause"
      >
        {tags.map((tag) => (
          <li className="min-w-max flex-1 ml-1.5" key={tag.id}>
            <Link className="btn rounded-full" href={""}>
              <span>{tag.name}</span>
              <HashtagIcon className="icon-sm" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TagsCarousel
