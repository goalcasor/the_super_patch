import { Owner } from "@/types/OwnerType";

export function PacksData(selectedOwner: Owner){

    const PacksData = [
        {
            id: 1,
            title: "Victory + Ignite",
            description: "Energía y metabolismo para mantener la figura",
            image: "/images/landing-navidad/pack1.png",
            url: selectedOwner ? `https://shop.superpatch.com/#/shop/from/${selectedOwner.shopId}?categoryID=63` : "#"
        },
        {
            id: 2,
            title: "Liberty + Freedom",
            description: " Movilidad y equilibrio para disfrutar sin límites",
            image: "/images/landing-navidad/pack2.png",
            url: selectedOwner ? `https://shop.superpatch.com/#/shop/from/${selectedOwner.shopId}?categoryID=64` : "#"
        },
        {
            id: 3,
            title: "Joy + Lumi",
            description: "Mejora del ánimo y cuidado de la piel",
            image: "/images/landing-navidad/pack3.png",
            url: selectedOwner ? `https://shop.superpatch.com/#/shop/from/${selectedOwner.shopId}?categoryID=76` : "#"
        },
    ];

    return PacksData
}