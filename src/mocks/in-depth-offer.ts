export type FullOfferType = {
    id: string;
    title: string;
    description: string;
    type: string;
    price: number;
    images: string[];
    city: {
        name: string;
        location: {
            latitude: number;
            longitude: number;
            zoom: number;
        };
    };
    location: {
        latitude: number;
        longitude: number;
        zoom: number;
    };
    goods: string[];
    host: {
        isPro: boolean;
        name: string;
        avatarUrl: string;
    };
    isPremium: boolean;
    isFavorite: boolean;
    rating: number;
    bedrooms: number;
    maxAdults: number;
};

export const fullOffers: FullOfferType[] = [
    {
        id: "3dfb4c8d-7444-46a4-8f5b-ce80ad0cffbf",
        title: "Perfectly located Castro",
        description: "Sunny apartment located 7 minutes from the metro, featuring a spacious living room, kitchen, bedroom, and a bathroom with a bathtub. A terrace is available during summer.",
        type: "apartment",
        price: 294,
        images: [
            "https://14.design.htmlacademy.pro/static/hotel/16.jpg",
            "https://14.design.htmlacademy.pro/static/hotel/13.jpg",
            "https://14.design.htmlacademy.pro/static/hotel/9.jpg",
            "https://14.design.htmlacademy.pro/static/hotel/4.jpg",
            "https://14.design.htmlacademy.pro/static/hotel/10.jpg",
            "https://14.design.htmlacademy.pro/static/hotel/8.jpg"
        ],
        city: {
            name: "Paris",
            location: {
                latitude: 48.85661,
                longitude: 2.351499,
                zoom: 13
            }
        },
        location: {
            latitude: 48.86861,
            longitude: 2.342499,
            zoom: 16
        },
        goods: [
            "Air conditioning",
            "Washing machine",
            "Fridge",
            "Towels",
            "Coffee machine",
            "Wi-Fi",
            "Dishwasher",
            "Heating",
            "Baby seat",
            "Cable TV",
            "Breakfast"
        ],
        host: {
            isPro: true,
            name: "Angelina",
            avatarUrl: "https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg"
        },
        isPremium: false,
        isFavorite: false,
        rating: 2.6,
        bedrooms: 5,
        maxAdults: 9
    },
    {
        id: "3153c353-38b8-4e54-b689-2df57295f450",
        title: "Nice, cozy, warm big bed apartment",
        description: "A cozy apartment just 7 minutes from the metro, with a spacious living room, kitchen, and bathroom with a bathtub. A terrace can be used in the summer.",
        type: "apartment",
        price: 428,
        images: [
            "https://14.design.htmlacademy.pro/static/hotel/9.jpg",
            "https://14.design.htmlacademy.pro/static/hotel/1.jpg",
            "https://14.design.htmlacademy.pro/static/hotel/16.jpg",
            "https://14.design.htmlacademy.pro/static/hotel/11.jpg",
            "https://14.design.htmlacademy.pro/static/hotel/4.jpg",
            "https://14.design.htmlacademy.pro/static/hotel/10.jpg"
        ],
        city: {
            name: "Paris",
            location: {
                latitude: 48.85661,
                longitude: 2.351499,
                zoom: 13
            }
        },
        location: {
            latitude: 48.83461,
            longitude: 2.335499,
            zoom: 16
        },
        goods: [
            "Air conditioning",
            "Washing machine",
            "Kitchen",
            "Wi-Fi",
            "Washer",
            "Breakfast",
            "Cable TV",
            "Towels"
        ],
        host: {
            isPro: true,
            name: "Angelina",
            avatarUrl: "https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg"
        },
        isPremium: false,
        isFavorite: false,
        rating: 1.1,
        bedrooms: 3,
        maxAdults: 6
    },
    {
        id: "2405a442-7189-4ba5-86af-3a71ce85c813",
        title: "Wood and stone place",
        description: "Experience local life in the city center with nearby attractions like a clandestine casino, karaoke, and artist studios.",
        type: "room",
        price: 258,
        images: [
            "https://14.design.htmlacademy.pro/static/hotel/18.jpg",
            "https://14.design.htmlacademy.pro/static/hotel/20.jpg",
            "https://14.design.htmlacademy.pro/static/hotel/17.jpg",
            "https://14.design.htmlacademy.pro/static/hotel/6.jpg",
            "https://14.design.htmlacademy.pro/static/hotel/13.jpg",
            "https://14.design.htmlacademy.pro/static/hotel/8.jpg"
        ],
        city: {
            name: "Paris",
            location: {
                latitude: 48.85661,
                longitude: 2.351499,
                zoom: 13
            }
        },
        location: {
            latitude: 48.87561,
            longitude: 2.375499,
            zoom: 16
        },
        goods: [
            "Baby seat",
            "Wi-Fi",
            "Laptop friendly workspace",
            "Breakfast",
            "Washer",
            "Heating",
            "Kitchen",
            "Air conditioning",
            "Towels",
            "Fridge",
            "Dishwasher"
        ],
        host: {
            isPro: true,
            name: "Angelina",
            avatarUrl: "https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg"
        },
        isPremium: true,
        isFavorite: false,
        rating: 1.8,
        bedrooms: 1,
        maxAdults: 2
    },
    {
        id: "e72fa761-c6f0-4ed3-8ace-5b39ade314f4",
        title: "The house among olive trees",
        description: "Peaceful studio in a trendy neighborhood, close to shops, restaurants, and bars. Recently renovated and perfect for relaxation.",
        type: "hotel",
        price: 226,
        images: [
            "https://14.design.htmlacademy.pro/static/hotel/17.jpg",
            "https://14.design.htmlacademy.pro/static/hotel/9.jpg",
            "https://14.design.htmlacademy.pro/static/hotel/16.jpg",
            "https://14.design.htmlacademy.pro/static/hotel/1.jpg",
            "https://14.design.htmlacademy.pro/static/hotel/4.jpg",
            "https://14.design.htmlacademy.pro/static/hotel/7.jpg"
        ],
        city: {
            name: "Paris",
            location: {
                latitude: 48.85661,
                longitude: 2.351499,
                zoom: 13
            }
        },
        location: {
            latitude: 48.86161,
            longitude: 2.340499,
            zoom: 16
        },
        goods: [
            "Kitchen",
            "Washer",
            "Dishwasher",
            "Washing machine",
            "Heating"
        ],
        host: {
            isPro: true,
            name: "Angelina",
            avatarUrl: "https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg"
        },
        isPremium: true,
        isFavorite: false,
        rating: 1.9,
        bedrooms: 1,
        maxAdults: 3
    }
];
