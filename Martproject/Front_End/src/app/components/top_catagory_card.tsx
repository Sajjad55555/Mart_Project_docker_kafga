import Image from 'next/image';

interface Catagori_Types {
    image: string;
    title: string;
    id: number;
    color: string; 
}

export default function Top_Catagory_Card() {
    const catagories_Card: Catagori_Types[] = [
        {
            id: 0,
            image: "/catagores picture/Electronic-High-Quality-PNG (1).png",
            title: "Electronics",
            color: "#4A90E2", 
        },
        {
            id: 1,
            image: "/catagores picture/cock_wear.png",
            title: "Cock Wear",
            color: "#FF7F50", 
        },
        {
            id: 3,
            image: "/catagores picture/Bakery-PNG.png",
            title: "Bakery Mix",
            color: "#FFD700", 
        },
        {
            id: 4,
            image: "/catagores picture/babycares2.png",
            title: "Baby Care",
            color: "#8A2BE2", 
        },
        {
            id: 5,
            image: "/catagores picture/personal_care.png",
            title: "Personal Care",
            color: "#32CD32", 
        }
    ];

    return (
        <>
            {catagories_Card.map((items: Catagori_Types) => (
                <div
                    key={items.id}
                    className="w-[200px] h-[160px] flex flex-col justify-center items-center rounded"
                    style={{ backgroundColor: items.color }}
                >
                    <div className="">
                        <Image src={items.image} width={170} height={100} alt="" />
                    </div>
                    <div className="font-semibold mt-6">{items.title}</div>
                </div>
            ))}
        </>
    );
}
