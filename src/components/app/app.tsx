import { MainPage } from "../../pages/main/main-page";

export type SimpleCard = {
    isPremium : boolean,
    imageLink : string,
    price : number,
    isFavourite : boolean,
    rating : number,
    description : string,
    placeType : string;
}

type warp = {
    availableCards : SimpleCard[]
}

export function App({availableCards} : warp){
    return (
        MainPage(availableCards)
    )
}