import CategorList from "../CategoryList/CategorList"
import TagList from "../TagList/TagList"

const Footer = () => {
    return (
        <div>
            <div className="container mx-auto py-[100px]">
                <h2 className="font-bold text-[25px] mb-[30px]">キーワードから探す</h2>
                <div className="mb-[30px]">
                    <CategorList />
                </div>
                <div className="mb-[20px]">
                    <TagList />
                </div>
                <div className="h-[200px] w-full bg-[#eee] mb-[20px] flex items-center justify-center">
                    <p>Adsense</p>
                </div>
                <div className="border-t-[1px] border-[#eee] py-[20px]">
                    <p className="text-right text-[12px]">&copy; SOZAI 2024</p>
                </div>
            </div>
        </div>
    )
}

export default Footer