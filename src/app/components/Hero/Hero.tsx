import Image from "next/image"
import CategorList from "../CategoryList/CategorList"

const Hero = () => {
    return (
        <div className="h-[calc(100vh-80px)]">
            <Image src="/images/hero.png" width={1000} height={500} alt="" className="w-full h-[70%] object-cover" />
            <CategorList />
        </div>
    )
}

export default Hero