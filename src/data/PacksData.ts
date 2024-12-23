import { Owner } from "@/types/OwnerType";

export function PacksData(selectedOwner: Owner){

    const PacksData = [
        {
            id: 1,
            title: "Victory + Ignite",
            description: "Aumenta tu energía y acelera tu metabolismo para mantener la figura",
            image: "/images/landing-navidad/pack2.png",
            url: selectedOwner ? `https://shop.superpatch.com/#/shop/from/${selectedOwner.shopId}?categoryID=63` : "#"
        },
        {
            id: 2,
            title: "Joy + Lumi",
            description: " Eleva el ánimo y cuida la salud de tu piel",
            image: "/images/landing-navidad/pack1.png",
            url: selectedOwner ? `https://shop.superpatch.com/#/shop/from/${selectedOwner.shopId}?categoryID=76` : "#"
        },
        {
            id: 3,
            title: "Liberty + Freedom",
            description: "Mejora la movilidad y el equilibrio para disfrutar sin límites",
            image: "/images/landing-navidad/pack3.png",
            url: selectedOwner ? `https://shop.superpatch.com/#/shop/from/${selectedOwner.shopId}?categoryID=64` : "#"
        },
        
    ];

    return PacksData
}