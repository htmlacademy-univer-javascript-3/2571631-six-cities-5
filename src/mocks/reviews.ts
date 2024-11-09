export type ReviewType = {
    id: string,
    comment: string,
    user: {
        name: string,
        avatarUrl: string,
        isPro: boolean
    },
    date: string,
    rating: number
};

export const reviews: ReviewType[] = [
    {
        id: "fb768e57-b767-41a2-909f-f950f2fd6855",
        comment: "This villa exceeded our expectations! The stunning mountain views, relaxing hot tub, and cozy interior made it a memorable stay. We loved every moment and can't wait to return.",
        date: "2024-10-19T21:00:00.439Z",
        rating: 5,
        user: {
            name: "Emely",
            avatarUrl: "https://14.design.htmlacademy.pro/static/avatar/9.jpg",
            isPro: false
        }
    },
    {
        id: "3153c353-38b8-4e54-b689-2df57295f450",
        comment: "We had an amazing time! The house was beautiful, the view was breathtaking, and the location was perfect. Highly recommend this place for a relaxing getaway!",
        date: "2024-10-13T21:00:00.456Z",
        rating: 4,
        user: {
            name: "Kendall",
            avatarUrl: "https://14.design.htmlacademy.pro/static/avatar/9.jpg",
            isPro: true
        }
    },
    {
        id: "2405a442-7189-4ba5-86af-3a71ce85c813",
        comment: "An absolutely stunning villa! The mountain views and serene atmosphere made our stay unforgettable. A perfect spot for a relaxing vacation.",
        date: "2024-10-15T21:00:00.456Z",
        rating: 4,
        user: {
            name: "Corey",
            avatarUrl: "https://14.design.htmlacademy.pro/static/avatar/10.jpg",
            isPro: false
        }
    },
    {
        id: "6fb62ba1-b15e-4022-a1fc-90d3872e1d32",
        comment: "What a wonderful experience! The location is ideal, and the atmosphere of the place is truly special. We felt right at home and will definitely be back.",
        date: "2024-10-19T21:00:00.439Z",
        rating: 3,
        user: {
            name: "Kendall",
            avatarUrl: "https://14.design.htmlacademy.pro/static/avatar/8.jpg",
            isPro: true
        }
    },
    {
        id: "6fb62ba1-b15e-4022-a1fc-90d3872e1d32",
        comment: "The house was very clean and comfortable. We felt welcomed and enjoyed the quiet surroundings. Would love to visit again. Thank you for a great stay!",
        date: "2024-10-18T21:00:00.439Z",
        rating: 5,
        user: {
            name: "Mollie",
            avatarUrl: "https://14.design.htmlacademy.pro/static/avatar/9.jpg",
            isPro: true
        }
    },
    {
        id: "6fb62ba1-b15e-4022-a1fc-90d3872e1d32",
        comment: "Unfortunately, my stay was disappointing. The room did not meet my expectations, and the noise from the nearby road made it hard to relax.",
        date: "2024-10-18T21:00:00.439Z",
        rating: 2,
        user: {
            name: "Emely",
            avatarUrl: "https://14.design.htmlacademy.pro/static/avatar/4.jpg",
            isPro: false
        }
    },
    {
        id: "2a31dd82-5ae8-465e-b836-55fad5c9b75b",
        comment: "An incredible experience! Surrounded by nature, we felt completely unplugged and relaxed. A perfect retreat for anyone looking to escape the city.",
        date: "2024-10-18T21:00:00.439Z",
        rating: 3,
        user: {
            name: "Emely",
            avatarUrl: "https://14.design.htmlacademy.pro/static/avatar/1.jpg",
            isPro: true
        }
    }
];
