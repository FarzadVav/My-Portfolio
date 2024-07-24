import { AttributesT } from "@/types/datas.types"
import SafeInnerHtml from "../SafeInnerHtml"

const AboutAttribute = ({ id, svg, name }: AttributesT) => {
  return (
    <div key={id} className="attribute">
      <SafeInnerHtml className="attribute-icon-wrapper" html={svg} />
      <p className="font-base-bold mr-4 text-lg max-sm:text-sm">{name}</p>
    </div>
  )
}

export default AboutAttribute
