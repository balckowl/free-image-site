import Image from "next/image"
import CategorList from "../CategoryList/CategorList"

const Hero = () => {
    return (
        <div className="h-[calc(100vh-80px)]">
            <Image src="/images/hero.png" width={1000} height={500} alt="" className="w-full h-[70%] object-cover" />
            <div className="h-[30%]">
                <div className="container mx-auto h-full flex items-center">
                    <CategorList />
                </div>
            </div>
        </div>
    )
}

export default Hero