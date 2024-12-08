import { Header } from '@components/header';
import Map from '@components/map';
import { OffersList } from '@components/offersList';
import { Cities, getCityByName } from '@appTypes/city';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '@hooks/index';
import { CitiesList } from '@components/citiesList';
import { Offers } from '@appTypes/offer';
import SortingOptions from '@components/sorting';

export function MainPage(): JSX.Element {
  const offers = useAppSelector((state) => state.offersList);
  const city = useAppSelector((state) => state.city);

  const [currentCityOffers, setCurrentCityOffers] = useState<Offers>(offers);
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const [currentSortingType, setCurrentSortingType] = useState<string>('popular');

  const activeOffer = offers.find((offer) => offer.id === activeOfferId);

  useEffect(() => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city);

    const sortedOffers = [...filteredOffers].sort((a, b) => {
      switch (currentSortingType) {
        case 'lowToHigh':
          return a.price - b.price;
        case 'highToLow':
          return b.price - a.price;
        case 'topRated':
          return b.rating - a.rating;
        default:
          return 0; 
      }
    });

    setCurrentCityOffers(sortedOffers);
  }, [city, offers, currentSortingType]);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header offers={offers} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={Cities} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${currentCityOffers.length} places to stay in ${city}`}</b>

              <SortingOptions
                currentSortingType={currentSortingType}
                onSortingChange={setCurrentSortingType}
              />

              <OffersList
                offers={currentCityOffers}
                onActiveOfferChange={setActiveOfferId}
                className="cities__places-list places__list tabs__content"
              />
            </section>
            <div className="cities__right-section">
              <Map city={getCityByName(city)} offers={currentCityOffers} selectedOffer={activeOffer} className="cities__map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
