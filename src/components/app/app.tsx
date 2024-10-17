import { MainPage } from "../../pages/main/main-page";
import { Error404 } from "../../pages/error404/error404";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { AppRoute } from "../../exports/app-route-types";
import { PrivateRoutes } from "../private-routes/private-routes";

type SimpleCard = {
    isPremium : boolean,
    imageLink : string,
    price : number,
    isFavourite : boolean,
    rating : number,
    description : string,
    placeType : string;
}

export function App({ availableCards }: { availableCards: SimpleCard[] }) {
    let isUserAuthorized = false;
    let authorizedRoutes = PrivateRoutes({ isAuthorized: isUserAuthorized });
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoute.Main} element={<MainPage availableCards={availableCards} />} />
                <Route path={AppRoute.Error404} element={<Error404 />} />
                {authorizedRoutes}
            </Routes>
        </BrowserRouter>
    );
}
