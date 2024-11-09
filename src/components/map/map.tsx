import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../hooks/for-Map';
import { CityType } from '../../exports/city-type';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../exports/const';
import { OfferType } from '../../mocks/offer';
import { MapType } from '../../exports/map-types';

type MapProps = {
    city: CityType;
    offers: OfferType[];
    mapType: MapType;  
  };
  
  export default function Map({ city, offers, mapType }: MapProps) {
    const mapContainerRef = useRef<HTMLElement | null>(null);
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
      if (!mapInstance) return;
  
      const markerLayer = leaflet.layerGroup();
  
      offers.forEach((offer) => {
        const { latitude, longitude } = offer.location;
  
        const marker = leaflet.marker(
          {
            lat: latitude,
            lng: longitude,
          },
          {
            icon: defaultMarkerIcon,
          }
        );
  
        marker.addTo(markerLayer);
      });
  
      markerLayer.addTo(mapInstance);
  
      return () => {
        markerLayer.clearLayers();
      };
    }, [mapInstance, offers, defaultMarkerIcon]);
  
    return <section className={mapType} ref={mapContainerRef}></section>; 
  }
  