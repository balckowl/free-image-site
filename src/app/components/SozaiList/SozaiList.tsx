import SozaiCard from "../SozaiCard/SozaiCard"

const SozaiList = ({ title }: { title: string }) => {

    const Sozaies = [
        { src: "/images/free/cat.png", name: "こっちをじっと見つめる黒猫", href: "/sozai/111" },
        { src: "/images/free/lemon.png", name: "レモン", href: "/sozai/121" },
        { src: "/images/free/car.png", name: "赤い車", href: "/sozai/121" },
        { src: "/images/free/bird.png", name: "小鳥", href: "/sozai/121" },
    ]

    return (
        <div className="bg-[#eee]">
            <div className="container mx-auto py-[100px]">
                <h2 className="font-bold text-[25px] mb-[10px]">{title}</h2>
                <div className="grid grid-cols-3 gap-[100px]">
                    {Sozaies.map((sozai) => (
                        <SozaiCard src={sozai.src} name={sozai.name} href={sozai.href} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SozaiList