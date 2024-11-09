import { OfferType } from '../mocks/offer';

export type NearbyOffer = {
    id: string,
    nearbyOffersIds: OfferType[]
}

export const nearbyOffers: NearbyOffer[] = [
    {
        id: "337fc635-709d-4c54-9fed-3a20f68f67ef",
        nearbyOffersIds: [
            {
                id: "fb768e57-b767-41a2-909f-f950f2fd6855",
                title: "Loft Studio in the Central Area",
                type: "room",
                price: 118,
                previewImage: "https://14.design.htmlacademy.pro/static/hotel/10.jpg",
                description: "A small but stylish studio in the heart of Amsterdam.",
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
                isFavorite: false,
                isPremium: false,
                rating: 1.7,
                goods: ["Wi-Fi", "TV", "Air Conditioning"],
                bedrooms: 1,
                maxAdults: 2,
                host: {
                    isPro: true,
                    name: "John Doe",
                    avatarUrl: "https://example.com/host-avatar.jpg"
                }
            },
            {
                id: "6fb62ba1-b15e-4022-a1fc-90d3872e1d32",
                title: "Tile House",
                type: "house",
                price: 474,
                previewImage: "https://14.design.htmlacademy.pro/static/hotel/3.jpg",
                description: "A cozy family house with a modern design.",
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
                isFavorite: false,
                isPremium: false,
                rating: 1.8,
                goods: ["Wi-Fi", "Washing Machine", "Kitchen"],
                bedrooms: 3,
                maxAdults: 6,
                host: {
                    isPro: false,
                    name: "Jane Smith",
                    avatarUrl: "https://example.com/host-avatar.jpg"
                }
            },
            {
                id: "2a31dd82-5ae8-465e-b836-55fad5c9b75b",
                title: "Beautiful & luxurious apartment at great location",
                type: "apartment",
                price: 177,
                previewImage: "https://14.design.htmlacademy.pro/static/hotel/2.jpg",
                description: "A luxurious apartment in a prime location, perfect for a romantic getaway.",
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
                isFavorite: false,
                isPremium: true,
                rating: 3.4,
                goods: ["Wi-Fi", "Air Conditioning", "Dishwasher"],
                bedrooms: 2,
                maxAdults: 4,
                host: {
                    isPro: true,
                    name: "Alice Cooper",
                    avatarUrl: "https://example.com/host-avatar.jpg"
                }
            }
        ]
    },
    {
        id: "fb768e57-b767-41a2-909f-f950f2fd6855",
        nearbyOffersIds: [
            {
                id: "337fc635-709d-4c54-9fed-3a20f68f67ef",
                title: "Penthouse, 4-5 rooms + 5 balconies",
                type: "room",
                price: 248,
                previewImage: "https://14.design.htmlacademy.pro/static/hotel/10.jpg",
                description: "An upscale penthouse with stunning city views.",
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
                isFavorite: false,
                isPremium: true,
                rating: 1.6,
                goods: ["Wi-Fi", "Hot Tub", "Barbecue"],
                bedrooms: 5,
                maxAdults: 10,
                host: {
                    isPro: false,
                    name: "Mark Lee",
                    avatarUrl: "https://example.com/host-avatar.jpg"
                }
            },
            {
                id: "6fb62ba1-b15e-4022-a1fc-90d3872e1d32",
                title: "Tile House",
                type: "house",
                price: 474,
                previewImage: "https://14.design.htmlacademy.pro/static/hotel/3.jpg",
                description: "A cozy family house with a modern design.",
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
                isFavorite: false,
                isPremium: false,
                rating: 1.8,
                goods: ["Wi-Fi", "Washing Machine", "Kitchen"],
                bedrooms: 3,
                maxAdults: 6,
                host: {
                    isPro: false,
                    name: "Jane Smith",
                    avatarUrl: "https://example.com/host-avatar.jpg"
                }
            },
            {
                id: "2a31dd82-5ae8-465e-b836-55fad5c9b75b",
                title: "Beautiful & luxurious apartment at great location",
                type: "apartment",
                price: 177,
                previewImage: "https://14.design.htmlacademy.pro/static/hotel/2.jpg",
                description: "A luxurious apartment in a prime location, perfect for a romantic getaway.",
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
                isFavorite: false,
                isPremium: true,
                rating: 3.4,
                goods: ["Wi-Fi", "Air Conditioning", "Dishwasher"],
                bedrooms: 2,
                maxAdults: 4,
                host: {
                    isPro: true,
                    name: "Alice Cooper",
                    avatarUrl: "https://example.com/host-avatar.jpg"
                }
            }
        ]
    },
    {
        id: "6fb62ba1-b15e-4022-a1fc-90d3872e1d32",
        nearbyOffersIds: [
            {
                id: "337fc635-709d-4c54-9fed-3a20f68f67ef",
                title: "Penthouse, 4-5 rooms + 5 balconies",
                type: "room",
                price: 248,
                previewImage: "https://14.design.htmlacademy.pro/static/hotel/10.jpg",
                description: "An upscale penthouse with stunning city views.",
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
                isFavorite: false,
                isPremium: true,
                rating: 1.6,
                goods: ["Wi-Fi", "Hot Tub", "Barbecue"],
                bedrooms: 5,
                maxAdults: 10,
                host: {
                    isPro: false,
                    name: "Mark Lee",
                    avatarUrl: "https://example.com/host-avatar.jpg"
                }
            },
            {
                id: "fb768e57-b767-41a2-909f-f950f2fd6855",
                title: "Loft Studio in the Central Area",
                type: "room",
                price: 118,
                previewImage: "https://14.design.htmlacademy.pro/static/hotel/10.jpg",
                description: "A small but stylish studio in the heart of Amsterdam.",
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
                isFavorite: false,
                isPremium: false,
                rating: 1.7,
                goods: ["Wi-Fi", "TV", "Air Conditioning"],
                bedrooms: 1,
                maxAdults: 2,
                host: {
                    isPro: true,
                    name: "John Doe",
                    avatarUrl: "https://example.com/host-avatar.jpg"
                }
            },
            {
                id: "2a31dd82-5ae8-465e-b836-55fad5c9b75b",
                title: "Beautiful & luxurious apartment at great location",
                type: "apartment",
                price: 177,
                previewImage: "https://14.design.htmlacademy.pro/static/hotel/2.jpg",
                description: "A luxurious apartment in a prime location, perfect for a romantic getaway.",
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
                isFavorite: false,
                isPremium: true,
                rating: 3.4,
                goods: ["Wi-Fi", "Air Conditioning", "Dishwasher"],
                bedrooms: 2,
                maxAdults: 4,
                host: {
                    isPro: true,
                    name: "Alice Cooper",
                    avatarUrl: "https://example.com/host-avatar.jpg"
                }
            }
        ]
    }
];
