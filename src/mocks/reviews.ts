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
}

export const reviews: ReviewType[] = [
    {
        id: "9abc1234-5678-9101-1121-314151617181",
        comment: "Amazing experience! The place was spotless and had everything we needed.",
        date: "2024-11-01T21:00:00.456Z",
        rating: 5,
        user: {
            name: "Alex",
            avatarUrl: "https://14.design.htmlacademy.pro/static/avatar/8.jpg",
            isPro: true
        }
    },
    {
        id: "1234abcd-5678-9101-1121-314151617181",
        comment: "Good location, but a bit noisy at night. Overall, a nice stay.",
        date: "2024-10-25T21:00:00.456Z",
        rating: 3,
        user: {
            name: "Jordan",
            avatarUrl: "https://14.design.htmlacademy.pro/static/avatar/9.jpg",
            isPro: false
        }
    },
    {
        id: "abcd1234-5678-9101-1121-314151617181",
        comment: "Beautiful decor and spacious rooms. Will definitely come back!",
        date: "2024-10-30T21:00:00.456Z",
        rating: 4,
        user: {
            name: "Morgan",
            avatarUrl: "https://14.design.htmlacademy.pro/static/avatar/10.jpg",
            isPro: true
        }
    },
    {
        id: "efgh5678-9101-1121-314151617181",
        comment: "The best stay I've ever had. The host was super helpful, and the view was breathtaking.",
        date: "2024-11-02T21:00:00.456Z",
        rating: 5,
        user: {
            name: "Jamie",
            avatarUrl: "https://14.design.htmlacademy.pro/static/avatar/9.jpg",
            isPro: false
        }
    }
]
