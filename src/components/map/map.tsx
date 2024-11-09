import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../hooks/for-Map';
import { CityType } from '../../exports/city-type';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../exports/const';
import { OfferType } from '../../mocks/offer';

type MapProps = {
  city: CityType;
  offers: OfferType[];
};

export default function Map({ city, offers }: MapProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useMap(mapContainerRef, city);

  const defaultMarkerIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const activeMarkerIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (mapInstance) {
      offers.forEach(({ location }) => {
        const { latitude, longitude } = location;

        leaflet
          .marker(
            { lat: latitude, lng: longitude },
            { icon: defaultMarkerIcon }
          )
          .addTo(mapInstance);
      });
    }
  }, [mapInstance, offers]);

  return <div className="cities__map map" ref={mapContainerRef}></div>;
}
