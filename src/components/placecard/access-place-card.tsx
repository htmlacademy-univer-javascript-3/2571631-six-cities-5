export type SimpleCard = {
    isPremium : boolean,
    imageLink : string,
    price : number,
    isFavourite : boolean,
    rating : number,
    description : string,
    placeType : string;
}

export const cardArray : SimpleCard[] = [
    {
        isPremium : true,
        imageLink : "img/apartment-01.jpg",
        price : 20,
        isFavourite : false,
        rating : 80,
        description : "Beautiful and luxurious apartment at great location",
        placeType : "Apartment"
    },
    {
        isPremium : false,
        imageLink : "img/room.jpg",
        price : 30,
        isFavourite : true,
        rating : 80,
        description : "Wood and stone place",
        placeType : "Room"
    },
    {
        isPremium : false,
        imageLink : "img/apartment-02.jpg",
        price : 40,
        isFavourite : false,
        rating : 80,
        description : "Canal View Prinsengracht",
        placeType : "Apartment"
    },
    {
        isPremium : true,
        imageLink : "img/apartment-03.jpg",
        price : 50,
        isFavourite : false,
        rating : 100,
        description : "Nice, cozy, warm big bed apartment",
        placeType : "Apartment"
    },
    {
        isPremium : false,
        imageLink : "img/room.jpg",
        price : 60,
        isFavourite : true,
        rating : 80,
        description : "Wood and stone place",
        placeType : "Room"
    }
]