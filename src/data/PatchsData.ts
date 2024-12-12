import { Owner } from "@/types/OwnerType";

export interface IPatch {
    id: number;
    title: string;
    description: string;
    image: string;
    url: string;
}


export function PatchsData(selectedOwner:Owner) {
    const patchsData = [
        {
            id: 1,
            title: 'Victory',
            description: 'La fuerza, el poder, el equilibrio, la agilidad y la recuperación son los pilares para alcanzar los niveles más altos de rendimiento atlético. Obtén todo esto con Victory Patch. Victory Patch es una tecnología no invasiva y sin fármacos que puede mejorar el bienestar general al mejorar el flujo de energía, el sentido del equilibrio, la resistencia y la fuerza del usuario, facilitando que el cuerpo mantenga un rendimiento en el nivel más alto.',
            image: '/images/patchs/victory.png',
            url: selectedOwner ? `https://shop.superpatch.com/#/shop/from/${selectedOwner.shopId}?categoryID=63` : "#"
        },
        {
            id: 2,
            title: 'Liberty',
            description: 'El parche Liberty puede ayudarle a mejorar la movilidad, el equilibrio y la estabilidad, que son aspectos importantes de la rehabilitación, la recuperación y un estilo de vida activo. Encuentre el equilibrio y la energía de forma 100% natural, nuestra tecnología no invasiva y sin fármacos puede ayudar a mejorar el equilibrio y la estabilidad, componentes clave para mantener el bienestar.',
            image: '/images/patchs/liberty.png',
            url: selectedOwner ? `https://shop.superpatch.com/#/shop/from/${selectedOwner.shopId}?categoryID=64` : "#"
        },
        {
            id: 3,
            title: 'Peace',
            description: 'El estrés es uno de los mayores enemigos de nuestra calidad de vida. Enfrentarse a ella nunca ha sido tan fácil. El parche Peace es una tecnología no invasiva y sin fármacos que puede mejorar el bienestar general a través de la estimulación vibrotáctil, lo que puede permitir a los usuarios experimentar de forma natural una mayor claridad y calma.',
            image: '/images/patchs/peace.png',
            url: selectedOwner ? `https://shop.superpatch.com/#/shop/from/${selectedOwner.shopId}?categoryID=62` : "#"
        },
        {
            id: 4,
            title: 'Freedom',
            description: 'Freedom Patch, una tecnología no invasiva y libre de medicamentos que puede ofrecer alivio sobre la marcha de dolores y molestias menores en músculos y articula- ciones, comúnmente asociados con el ejercicio, las tareas domésticas y las actividades diarias.',
            image: '/images/patchs/freedom.png',
            url: selectedOwner ? `https://shop.superpatch.com/#/shop/from/${selectedOwner.shopId}?categoryID=65` : "#"
        },
        {
            id: 5,
            title: 'REM',
            description: 'Un sueño reparador juega un papel vital en revitalizar tanto los aspectos cognitivos como fisiológicos del bienestar. REM Super Patch es una tecnología no invasiva y sin fármacos que puede mejorar tu sueño, promoviendo el bienestar general y siendo un elemento fundamental para fomentar un estilo de vida vibrante y equilibrado.',
            image: '/images/patchs/rem.png',
            url: selectedOwner ? `https://shop.superpatch.com/#/shop/from/${selectedOwner.shopId}?categoryID=61` : "#"
        },
        {
            id: 6,
            title: 'Defend',
            description: 'Un sistema inmunológico sano es un factor clave de la salud general. Defend Patch es una tecnología no invasiva y libre de medicamentos que puede respaldar la inmunidad mediante estimulación vibrotáctil, lo que facilita el mantenimiento de la salud general.',
            image: '/images/patchs/defend.png',
            url: selectedOwner ? `https://shop.superpatch.com/#/shop/from/${selectedOwner.shopId}?categoryID=68` : "#"
        },
        {
            id: 7,
            title: 'Focus',
            description: 'El enfoque es la clave para jugar, aprender y crear. Las distracciones y los desafíos para enfocarse pueden quitar la diversión y el rendimiento de lo que queremos hacer en la escuela u otros lugares. Focus Patch es una tecnología no invasiva y libre de fármacos que puede mejorar el bienestar general a través de la estimulación vibrotáctil, lo que permite a los usuarios experimentar naturalmente un mejor enfoque y claridad.',
            image: '/images/patchs/focus.png',
            url: selectedOwner ? `https://shop.superpatch.com/#/shop/from/${selectedOwner.shopId}?categoryID=66` : "#"
        },
        {
            id: 8,
            title: 'Joy',
            description: 'La esperanza y la felicidad son quizás dos de los aspectos más importantes del espíritu humano. ¡Nunca ha sido más fácil encontrar esa alegría y optimismo en nuestras vidas! ¡Joy Super Patch es una tecnología no invasiva y libre de drogas que puede mejorar el sentido de bienestar y felicidad a través de la estimulación vibrotáctil que permite a los usuarios sentirse naturalmente lo mejor posible!',
            image: '/images/patchs/joy.png',
            url: selectedOwner ? `https://shop.superpatch.com/#/shop/from/${selectedOwner.shopId}?categoryID=76` : "#"
        },

    ];
    
    return patchsData
}