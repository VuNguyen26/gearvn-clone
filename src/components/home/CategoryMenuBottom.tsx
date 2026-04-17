
import Link from "next/link";
import Image from "next/image";

const Menu_Data_Images = [ 
    {
        category: "case",
        image: "/home/categorybottom/case.png",
        title: "Vỏ máy tính",
        alt: "Vỏ máy tính"
    },
    {
        category: "cooler",
        image: "/home/categorybottom/cooler.png",
        title: "Tản nhiệt",
        alt: "Tản nhiệt"
    },
    {
        category: "cpu",
        image: "/home/categorybottom/cpu.png",
        title: "CPU",
        alt: "Bộ vi xử lý"
    },
    {
        category: "keyboard",
        image: "/home/categorybottom/keyboard.jpg",
        title: "Bàn phím",
        alt: "Bàn phím"
    },
    {
        category: "laptop",
        image: "/home/categorybottom/laptop.png",
        title: "Laptop",
        alt: "Laptop"
    },
    {
        category: "mainboard",
        image: "/home/categorybottom/mainboard.png",
        title: "Mainboard",
        alt: "Bo mạch chủ"
    },
    {
        category: "monitor",
        image: "/home/categorybottom/monitor.jpg",
        title: "Màn hình",
        alt: "Màn hình"
    },
    {
        category: "mouse",
        image: "/home/categorybottom/mouse.jpg",
        title: "Chuột",
        alt: "Chuột"
    },
    {
        category: "pc",
        image: "/home/categorybottom/PC.png",
        title: "PC",
        alt: "PC"
    },
    {
        category: "pus",
        image: "/home/categorybottom/pus.png",
        title: "Nguồn",
        alt: "Nguồn"
    },
    {
        category: "ram",
        image: "/home/categorybottom/ram.png",
        title: "RAM",
        alt: "Ram"
    },
    {
        category: "ssd",
        image: "/home/categorybottom/ssd.png",
        title: "Ổ cứng",
        alt: "Ổ cứng"
    },
    {
        category: "vga",
        image: "/home/categorybottom/vga.jpg",
        title: "VGA",
        alt: "Card màn hình"
    },
    {
        category: "accessory",
        image: "/home/categorybottom/accessory.png",
        title: "Phụ kiện",
        alt: "Phụ kiện"
    },
    {
        category: "handheld_console",
        image: "/home/categorybottom/handheld_console.png",
        title: "Console",
        alt: "Tay cầm"
    },
    {
        category: "headphone",
        image: "/home/categorybottom/headphone.jpg",
        title: "Tai nghe",
        alt: "Tai nghe"
    },
    {
        category: "speaker",
        image: "/home/categorybottom/speaker.png",
        title: "Loa",
        alt: "Loa"
    },
    {
        category: "chair",
        image: "/home/categorybottom/chair.jpg",
        title: "Ghế",
        alt: "Ghế"
    },
]

export default function CategoryMenuBottom(){
    return(
        <div className=" w-full p-3 hidden lg:block bg-white mt-3">
            <div className="grid grid-cols-9 grid-rows-2 gap-3">
                {
                    Menu_Data_Images.map((m, index) => (
                        <Link href={`/category/${m.category}`} key={index} >
                            <div className="relative w-20 h-20">
                                <Image src={m.image} alt={m.alt} fill unoptimized/>
                            </div>
                            <span className="text-sm text-center font-medium">
                                {m.title}
                            </span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}