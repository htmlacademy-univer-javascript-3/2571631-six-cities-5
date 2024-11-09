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
      id: "337fc635-709d-4c54-9fed-3a20f68f67ef",
      title: "Penthouse with 4-5 Rooms and 5 Balconies",
      description: "A spacious, modern villa with all amenities and a jacuzzi, all on one floor with beautiful views. Ideal for families or groups of friends.",
      type: "room",
      price: 248,
      images: [
        "https://14.design.htmlacademy.pro/static/hotel/10.jpg",
        "https://14.design.htmlacademy.pro/static/hotel/7.jpg",
        "https://14.design.htmlacademy.pro/static/hotel/12.jpg",
        "https://14.design.htmlacademy.pro/static/hotel/1.jpg",
        "https://14.design.htmlacademy.pro/static/hotel/2.jpg",
        "https://14.design.htmlacademy.pro/static/hotel/3.jpg"
      ],
      city: {
        name: "Amsterdam",
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.36554,
        longitude: 4.911976,
        zoom: 16
      },
      goods: [
        "Heating",
        "Coffee machine",
        "Breakfast",
        "Dishwasher",
        "Kitchen",
        "Baby seat",
        "Fridge"
      ],
      host: {
        isPro: true,
        name: "Angelina",
        avatarUrl: "https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg"
      },
      isPremium: true,
      isFavorite: false,
      rating: 1.6,
      bedrooms: 1,
      maxAdults: 1
    },
    {
      id: "fb768e57-b767-41a2-909f-f950f2fd6855",
      title: "Loft Studio in the City Center",
      description: "A peaceful studio located in the most popular part of town. Quiet building close to everything. Recently renovated, in a lovely neighborhood with trendy shops, restaurants, and bars within walking distance.",
      type: "room",
      price: 118,
      images: [
        "https://14.design.htmlacademy.pro/static/hotel/10.jpg",
        "https://14.design.htmlacademy.pro/static/hotel/18.jpg",
        "https://14.design.htmlacademy.pro/static/hotel/13.jpg",
        "https://14.design.htmlacademy.pro/static/hotel/16.jpg",
        "https://14.design.htmlacademy.pro/static/hotel/20.jpg",
        "https://14.design.htmlacademy.pro/static/hotel/15.jpg"
      ],
      city: {
        name: "Amsterdam",
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.385540000000006,
        longitude: 4.902976,
        zoom: 16
      },
      goods: [
        "Washing machine",
        "Wi-Fi",
        "Baby seat",
        "Fridge",
        "Laptop friendly workspace",
        "Towels",
        "Air conditioning"
      ],
      host: {
        isPro: true,
        name: "Angelina",
        avatarUrl: "https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg"
      },
      isPremium: false,
      isFavorite: false,
      rating: 1.7,
      bedrooms: 1,
      maxAdults: 1
    },
    {
      id: "6fb62ba1-b15e-4022-a1fc-90d3872e1d32",
      title: "Tile House",
      description: "Designer interior in a charming neighborhood! Completely renovated, well-equipped, and cozy studio in a 100-year-old wooden house. Quiet street, with fast connections to the center and airport.",
      type: "house",
      price: 474,
      images: [
        "https://14.design.htmlacademy.pro/static/hotel/9.jpg",
        "https://14.design.htmlacademy.pro/static/hotel/1.jpg",
        "https://14.design.htmlacademy.pro/static/hotel/7.jpg",
        "https://14.design.htmlacademy.pro/static/hotel/10.jpg",
        "https://14.design.htmlacademy.pro/static/hotel/19.jpg",
        "https://14.design.htmlacademy.pro/static/hotel/11.jpg"
      ],
      city: {
        name: "Amsterdam",
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.397540000000006,
        longitude: 4.9099759999999995,
        zoom: 16
      },
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
      host: {
        isPro: true,
        name: "Angelina",
        avatarUrl: "https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg"
      },
      isPremium: false,
      isFavorite: false,
      rating: 1.8,
      bedrooms: 4,
      maxAdults: 7
    },
    {
      id: "2a31dd82-5ae8-465e-b836-55fad5c9b75b",
      title: "Beautiful & Luxurious Apartment in a Prime Location",
      description: "A bright, sunny apartment just a 7-minute walk from the metro station. Spacious living room with a kitchen, one bedroom, a bathroom with a bathtub, and a summer terrace.",
      type: "apartment",
      price: 177,
      images: [
        "https://14.design.htmlacademy.pro/static/hotel/8.jpg",
        "https://14.design.htmlacademy.pro/static/hotel/20.jpg",
        "https://14.design.htmlacademy.pro/static/hotel/3.jpg",
        "https://14.design.htmlacademy.pro/static/hotel/11.jpg",
        "https://14.design.htmlacademy.pro/static/hotel/13.jpg",
        "https://14.design.htmlacademy.pro/static/hotel/4.jpg"
      ],
      city: {
        name: "Amsterdam",
        location: {
          latitude: 52.37454,
          longitude: 4.897976,
          zoom: 13
        }
      },
      location: {
        latitude: 52.37454,
        longitude: 4.881976,
        zoom: 16
      },
      goods: [
        "Laptop friendly workspace",
        "Washing machine",
        "Dishwasher",
        "Wi-Fi",
        "Coffee machine",
        "Breakfast",
        "Fridge",
        "Washer",
        "Air conditioning",
        "Baby seat"
      ],
      host: {
        isPro: true,
        name: "Angelina",
        avatarUrl: "https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg"
      },
      isPremium: true,
      isFavorite: false,
      rating: 3.4,
      bedrooms: 5,
      maxAdults: 9
    }
  ];
  