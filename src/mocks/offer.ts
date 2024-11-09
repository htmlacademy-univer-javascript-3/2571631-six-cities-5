export type OfferType = {
    id: string,
    title: string,
    type: string,
    previewImage: string,
    description: string,
    city: {
        name: string,
        location: {
            latitude: number,
            longitude: number,
            zoom: number
        }
    },
    location: {
        latitude: number,
        longitude: number,
        zoom: number
    },
    price: number,
    isFavorite: boolean,
    isPremium: boolean,
    rating: number,
    goods: string[],
    bedrooms: number,
    maxAdults: number,
    host: {
        isPro: boolean,
        name: string,
        avatarUrl: string
    }
};

export const offers: OfferType[] = [
    {
        id: "337fc635-709d-4c54-9fed-3a20f68f67ef",
        title: "Penthouse with 4-5 Rooms and 5 Balconies",
        type: "room",
        previewImage: "https://14.design.htmlacademy.pro/static/hotel/10.jpg",
        description: "A spacious, modern villa with all amenities and a jacuzzi, all on one floor with beautiful views.",
        city: {
            name: "Amsterdam",
            location: {
                latitude: 52.37454,
                longitude: 4.897976,
                zoom: 13
            }
        },
        location: {
            latitude: 52.3909553943508,
            longitude: 4.85309666406198,
            zoom: 16
        },
        price: 248,
        isFavorite: false,
        isPremium: true,
        rating: 1.6,
        goods: [
            "Heating",
            "Coffee machine",
            "Breakfast",
            "Dishwasher",
            "Kitchen",
            "Baby seat",
            "Fridge"
        ],
        bedrooms: 1,
        maxAdults: 1,
        host: {
            isPro: true,
            name: "Angelina",
            avatarUrl: "https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg"
        }
    },
    {
        id: "fb768e57-b767-41a2-909f-f950f2fd6855",
        title: "Loft Studio in the City Center",
        type: "room",
        previewImage: "https://14.design.htmlacademy.pro/static/hotel/10.jpg",
        description: "A peaceful studio located in the most popular part of town. Quiet building close to everything.",
        city: {
            name: "Amsterdam",
            location: {
                latitude: 52.37454,
                longitude: 4.897976,
                zoom: 13
            }
        },
        location: {
            latitude: 52.3609553943508,
            longitude: 4.85309666406198,
            zoom: 16
        },
        price: 118,
        isFavorite: false,
        isPremium: false,
        rating: 1.7,
        goods: [
            "Washing machine",
            "Wi-Fi",
            "Baby seat",
            "Fridge",
            "Laptop friendly workspace",
            "Towels",
            "Air conditioning"
        ],
        bedrooms: 1,
        maxAdults: 1,
        host: {
            isPro: true,
            name: "Angelina",
            avatarUrl: "https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg"
        }
    },
    {
        id: "6fb62ba1-b15e-4022-a1fc-90d3872e1d32",
        title: "Tile House",
        type: "house",
        previewImage: "https://14.design.htmlacademy.pro/static/hotel/3.jpg",
        description: "Designer interior in a charming neighborhood. Completely renovated, well-equipped, and cozy studio in a 100-year-old wooden house.",
        city: {
            name: "Amsterdam",
            location: {
                latitude: 52.37454,
                longitude: 4.897976,
                zoom: 13
            }
        },
        location: {
            latitude: 52.3909553943508,
            longitude: 4.929309666406198,
            zoom: 16
        },
        price: 474,
        isFavorite: false,
        isPremium: false,
        rating: 1.8,
        goods: [
            "Kitchen",
            "Air conditioning",
            "Laptop friendly workspace",
            "Breakfast",
            "Wi-Fi",
            "Fridge",
            "Heating",
            "Dishwasher",
            "Cable TV"
        ],
        bedrooms: 4,
        maxAdults: 7,
        host: {
            isPro: true,
            name: "Angelina",
            avatarUrl: "https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg"
        }
    },
    {
        id: "2a31dd82-5ae8-465e-b836-55fad5c9b75b",
        title: "Beautiful & Luxurious Apartment in a Prime Location",
        type: "apartment",
        previewImage: "https://14.design.htmlacademy.pro/static/hotel/2.jpg",
        description: "A bright, sunny apartment just a 7-minute walk from the metro station. Spacious living room with a kitchen, one bedroom, a bathroom with a bathtub, and a summer terrace.",
        city: {
            name: "Amsterdam",
            location: {
                latitude: 52.37454,
                longitude: 4.897976,
                zoom: 13
            }
        },
        location: {
            latitude: 52.3809553943508,
            longitude: 4.939309666406198,
            zoom: 16
        },
        price: 177,
        isFavorite: false,
        isPremium: true,
        rating: 3.4,
        goods: [
            "Laptop friendly workspace",
            "Washing machine",
            "Dishwasher",
            "Wi-Fi",
            "Coffee machine",
            "Breakfast",
            "Fridge",
            "Air conditioning",
            "Baby seat"
        ],
        bedrooms: 5,
        maxAdults: 9,
        host: {
            isPro: true,
            name: "Angelina",
            avatarUrl: "https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg"
        }
    }
];
