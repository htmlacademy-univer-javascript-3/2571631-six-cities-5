import { useEffect, useState, useRef, MutableRefObject } from 'react';
import leaflet, { Map as LeafletMap, TileLayer } from 'leaflet';
import { CityType } from '../exports/city-type';

export function useMap(mapContainerRef: MutableRefObject<HTMLElement | null>, city: CityType) {
  const [mapInstance, setMapInstance] = useState<LeafletMap | null>(null);
  const isMapInitialized = useRef(false);

  const initializeMap = () => {
    const container = mapContainerRef.current;

    if (container && !isMapInitialized.current) {
      const map = leaflet.map(container, {
        center: [city.location.latitude, city.location.longitude],
        zoom: city.location.zoom,
      });

      const tileLayer: TileLayer = leaflet.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );

      tileLayer.addTo(map);
      setMapInstance(map);
      isMapInitialized.current = true;
    }
  };

  useEffect(initializeMap, [mapContainerRef, city]);

  return mapInstance;
}
