import Category from "../Category/Category"

const CategorList = () => {

    const Categories = [
        { name: "動物", src: "/images/free/cat.png", href: "/category/animal" },
        { name: "乗り物", src: "/images/free/car.png", href: "/category/automobile" },
        { name: "果物", src: "/images/free/lemon.png", href: "/category/lemon" }
    ]

    return (
        <div className="flex gap-3 flex-wrap">
            {Categories.map((category) => (
                <Category name={category.name} src={category.src} href={category.href} />
            ))}
        </div>
    )
}

export default CategorList