import Tags from "../Tag/Tag"

const TagList = () => {

    const tags = [
        { name: "ねこ", href: "/tag/cat" },
        { name: "フルーツ", href: "/tag/fruit" }
    ]


    return (
        <div className="flex gap-3 flex-wrap">
            {tags.map((tag) => (
                <Tags name={tag.name} href={tag.href} />
            ))}
        </div>
    )
}

export default TagList