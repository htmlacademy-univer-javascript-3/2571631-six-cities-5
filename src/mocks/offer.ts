export type OfferType = {
    id: string,
    title: string,
    type: string,
    previewImage: string,
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
}

export const offers: OfferType[] = [
    {
        id: "f6821b5e-8c4a-4a56-a17f-7e9e5c7b16d1",
        title: "Modern Loft in City Center",
        type: "apartment",
        price: 320,
        previewImage: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/92892144.jpg?k=0b3ae971f1059a215e185dccd5ebd709f9808d4a593cc8acbed6d685b9298b8d&o=&hp=1",
        city: {
            name: "Berlin",
            location: {
                latitude: 52.520008,
                longitude: 13.404954,
                zoom: 12
            }
        },
        location: {
            latitude: 52.530008,
            longitude: 13.414954,
            zoom: 15
        },
        isFavorite: true,
        isPremium: true,
        rating: 4.5
    },
    {
        id: "a1b2c3d4-5678-9101-1121-314151617181",
        title: "Cozy House by the Lake",
        type: "house",
        price: 450,
        previewImage: "https://allaboutglamping.com/wp-content/uploads/2021/12/big-lakebig.jpg",
        city: {
            name: "Zurich",
            location: {
                latitude: 47.376886,
                longitude: 8.541694,
                zoom: 11
            }
        },
        location: {
            latitude: 47.380886,
            longitude: 8.551694,
            zoom: 14
        },
        isFavorite: false,
        isPremium: true,
        rating: 4.7
    },
    {
        id: "99887766-5544-3322-1100-112233445566",
        title: "Charming Cottage Escape",
        type: "cottage",
        price: 180,
        previewImage: "https://i.pinimg.com/originals/c9/ca/a9/c9caa95ce3227d9e8c21b78df32f790d.jpg",
        city: {
            name: "Amsterdam",
            location: {
                latitude: 52.3676,
                longitude: 4.9041,
                zoom: 10
            }
        },
        location: {
            latitude: 52.3776,
            longitude: 4.9141,
            zoom: 13
        },
        isFavorite: true,
        isPremium: false,
        rating: 3.9
    },
    {
        id: "4e3f2g1h-5i6j-7k8l-9m0n-o1p2q3r4s5t6",
        title: "Luxury Suite with Ocean View",
        type: "hotel",
        price: 600,
        previewImage: "https://i.pinimg.com/736x/e0/18/5d/e0185d72514d17cb3929f6a4d3b3f7c3.jpg",
        city: {
            name: "Barcelona",
            location: {
                latitude: 41.3851,
                longitude: 2.1734,
                zoom: 12
            }
        },
        location: {
            latitude: 41.3901,
            longitude: 2.1804,
            zoom: 15
        },
        isFavorite: false,
        isPremium: true,
        rating: 4.8
    }
]
