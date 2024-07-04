import Tag from "../Tag"

type TagsCarouselT = {
  tags: { id: string; name: string }[]
}

const TagsCarousel = ({ tags }: TagsCarouselT) => {
  return (
    <div className="w-full h-12 mt-9 relative overflow-hidden group">
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
