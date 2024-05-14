import Image from "next/image"

const CategorList = () => {
    return (
        <div className="h-[30%]">
            <div className="container mx-auto h-full flex items-center">
                <div className="flex gap-3 flex-wrap">
                    <div className="border-[1px] px-3 py-2 rounded-[20px] flex items-center gap-2">
                        <div className="rounded-full border-2">
                            <Image src="/images/free/cat.png" width={20} height={20} alt="" className="rounded-full" />
                        </div>
                        <p>どうぶつ</p>
                    </div>
                    <div className="border-[1px] px-3 py-2 rounded-[20px] flex items-center gap-2">
                        <div className="rounded-full border-2">
                            <Image src="/images/free/lemon.png" width={20} height={20} alt="" className="rounded-full" />
                        </div>
                        <p>くだもの</p>
                    </div>
                    <div className="border-[1px] px-3 py-2 rounded-[20px] flex items-center gap-2">
                        <div className="rounded-full border-2">
                            <Image src="/images/free/car.png" width={20} height={20} alt="" className="rounded-full" />
                        </div>
                        <p>くるま</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategorList