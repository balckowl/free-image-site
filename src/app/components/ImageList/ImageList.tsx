"use client"
import { Dialog, useDisclosure } from "@yamada-ui/react"
import Image from "next/image"

const ImageList = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <div className="bg-[#eee]">
            <div className="container mx-auto py-[100px]">
                <h2 className="font-bold text-[30px] mb-[10px]">新しいイラスト</h2>
                <div className="grid grid-cols-3 gap-[100px]">
                    <div className="col-span-1">
                        <div className="border-2 p-[30px] rounded-[10px] mb-[10px] bg-gray-50" onClick={() => { onOpen() }}>
                            <Image src="/images/free/cat.png" width={100} height={100} alt="cat" className="w-full" />
                        </div>
                        <Dialog isOpen={isOpen} size={"6xl"} onClose={onClose}>
                            <h3 className="font-bold text-[30px]">こちらをじっと見ている黒猫</h3>

                            <div className="flex gap-3 flex-wrap">
                                <div className="border-[1px] px-3 py-2 rounded-[20px] flex items-center gap-2">
                                    <div className="rounded-full border-2">
                                        <Image src="/images/free/cat.png" width={20} height={20} alt="" className="rounded-full" />
                                    </div>
                                    <p>どうぶつ</p>
                                </div>
                            </div>

                            <div className="grid grid-flow-col grid-rows-4 w-full gap-5">
                                <div className="row-span-4">
                                    <div className="border-2 p-[30px] rounded-[10px] bg-gray-50 w-full" onClick={() => { onOpen() }}>
                                        <Image src="/images/free/cat.png" width={700} height={700} alt="cat" className="w-full" />
                                    </div>
                                </div>
                                <div className="col-span-2 row-span-3 bg-[#eee] flex items-center justify-center rounded-md">
                                    <p className="text-[40px]">Adsence</p>
                                </div>
                                <div className="row-span-1 col-span-2 flex items-center justify-center">
                                    <button className="bg-black text-white px-[100px] py-[10px] rounded-md">png</button>
                                </div>
                            </div>
                        </Dialog>
                        <p>こちらをじっと見ている黒猫</p>
                    </div>
                    <div className="col-span-1">
                        <div className="border-2 p-[30px] rounded-[10px] mb-[10px] bg-gray-50">
                            <Image src="/images/free/lemon.png" width={100} height={100} alt="cat" className="w-full" />
                        </div>
                        <p>レモン</p>
                    </div>
                    <div className="col-span-1">
                        <div className="border-2 p-[30px] rounded-[10px] mb-[10px] bg-gray-50">
                            <Image src="/images/free/car.png" width={100} height={100} alt="cat" className="w-full" />
                        </div>
                        <p>赤い車</p>
                    </div>
                    <div className="col-span-1">
                        <div className="border-2 p-[30px] rounded-[10px] mb-[10px] bg-gray-50">
                            <Image src="/images/free/bird.png" width={100} height={100} alt="cat" className="w-full" />
                        </div>
                        <p>青い鳥</p>
                    </div>
                    <div className="col-span-1">
                        <div className="border-2 p-[30px] rounded-[10px] mb-[10px] bg-gray-50">
                            <Image src="/images/free/cat.png" width={100} height={100} alt="cat" className="w-full" />
                        </div>
                        <p>黒猫</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageList