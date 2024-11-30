import { TbTruckDelivery } from "react-icons/tb";
import { MdHeadsetMic } from "react-icons/md";
import { LuRefreshCw } from "react-icons/lu";
import { SiGoogleauthenticator } from "react-icons/si";
export default function Shipping_Card() {
    interface Shipping_Card_Types {
        id: number;
        title: string;
        icon: JSX.Element;
        para: string;
    }

    const shipping_data: Shipping_Card_Types[] = [
        {
            id: 0,
            icon: <TbTruckDelivery />, 
            title: "Quick Delivery",
            para: "from 3am",
        },
        {
            id: 1,
            icon: <MdHeadsetMic />, 
            title: "After sale service",
            para: "glotelho:authorized",
        },
        {
            id: 2,
            icon: <SiGoogleauthenticator />, 
            title: "Authentic products",
            para: "100% guaranteed",
        },
        {
            id: 3,
            icon: <LuRefreshCw  />, 
            title: "Quick and easy return",
            para: "Over 7 days",
        },
    ];

    return (
        <>
            {shipping_data.map((item) => (
                <div key={item.id} className="flex items-center gap-4 justify-between">
                    <div className="text-4xl text-orange-600">{item.icon}</div>
                    <div>
                        <h1 className="font-semibold">{item.title}</h1>
                        <p className="text-sm">{item.para}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

