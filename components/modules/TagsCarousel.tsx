import Tag from "../Tag"
import { ArticlesTagsT } from "@/types/datas.types"

type TagsCarouselT = {
  tags: ArticlesTagsT[]
}

const TagsCarousel = ({ tags }: TagsCarouselT) => {
  return (
    <div className="mt-element row w-full h-12 relative overflow-hidden group">
      <ul className="tags-animation">
        {tags.map((tag) => (
          <li key={tag.id}>
            <Tag name={tag.name} />
          </li>
        ))}
      </ul>
      <ul className="tags-animation">
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
