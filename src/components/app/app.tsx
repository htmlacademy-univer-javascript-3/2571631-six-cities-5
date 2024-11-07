import { MainPage } from "../../pages/main/main-page";
import { Error404 } from "../../pages/error404/error404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute } from "../../exports/app-route-types";
import { PrivateRoutes } from "../private-routes/private-routes";
import { OfferType } from "../../mocks/offer"; 

type SimpleCard = {
    isPremium: boolean;
    imageLink: string;
    price: number;
    isFavourite: boolean;
    rating: number;
    description: string;
    placeType: string;
};

type AppProps = {
    availableCards: SimpleCard[];
    offers: OfferType[];
};

export function App({ availableCards, offers }: AppProps) {
    let isUserAuthorized = false;

    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoute.Main} element={<MainPage availableCards={availableCards} offers={offers} />} />
                <Route path={AppRoute.Error404} element={<Error404 />} />
                <Route element={<PrivateRoutes isAuthorized={isUserAuthorized} offers={offers} />} /> 
            </Routes>
        </BrowserRouter>
    );
}
