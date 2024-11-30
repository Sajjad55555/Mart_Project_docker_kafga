import Image from "next/image"

interface Brand_Card_Types {
    image: string;
    color?: string; // Optional color prop
    id: number;
}

export default function Brand_Card() {
    const brand_cards: Brand_Card_Types[] = [
        {
            image: "/brands/gucci.png",
            color: "bg-slate-300",
            id: 0,
        },
        {
            image: "/brands/2.png",
            id: 1,
        },
        {
            image: "/brands/parada.png",
            color: "bg-slate-300",
            id: 2,
        },
        {
            image: "/brands/4.jpg",
            id: 3,
        },
        {
            image: "/brands/adidas.png",
            id: 4,
        },
        {
            image: "/brands/6.png",
            color: "bg-slate-300",
            id: 5,
        },
        {
            image: "/brands/7.png",
            id: 6,
        },
        {
            image: "/brands/8.png",
            color: "bg-slate-300",
            id: 7,
        },
        {
            image: "/brands/9.png",
            id: 8,
        },
        {
            image: "/brands/10.png",
            color: "bg-slate-300",
            id: 9,
        },
        {
            image: "/brands/11.png",
            id: 10,
        },
        {
            image: "/brands/12.png",
            color: "bg-slate-300",
            id: 11,
        },
    ];

    return (
        <>
            {brand_cards.map((brand) => (
                <div
                    key={brand.id}
                    className={`w-[150px] h-[100px] flex justify-center items-center border shadow-xl ${
                        brand.color ? brand.color :""
                    }`}
                >
                    <Image
                        className="flex"
                        src={brand.image}
                        width={90}
                        height={80}
                        alt=""
                    />
                </div>
            ))}
        </>
    );
}

