import Tag from "../Tag"

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
  { id: 13, name: "Node.js" },
  { id: 14, name: "Database" },
  { id: 15, name: "Next.js" },
  { id: 16, name: "Go Language" },
]

const TagsCarousel = () => {
  return (
    <div className="mt-element w-full h-12 relative overflow-hidden group">
      <ul className="tags-animation row min-w-full absolute top-0 right-0 group-hover:animation-pause">
        {tags.map((tag) => (
          <li className="center min-w-max flex-1 ml-1.5" key={tag.id}>
            <Tag name={tag.name} />
          </li>
        ))}
      </ul>
      <ul
        style={{ animationDelay: "20s" }}
        className="tags-animation row min-w-full absolute top-0 right-0 group-hover:animation-pause"
      >
        {tags.map((tag) => (
          <li className="center min-w-max flex-1 ml-1.5" key={tag.id}>
            <Tag name={tag.name} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TagsCarousel
