import { useEffect, useState, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { City } from '../types/types-data';

type ListProps = {
  mapRef: React.MutableRefObject<HTMLElement | null>;
  city: City;
};

function useMap({ mapRef, city }: ListProps) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city?.location?.latitude,
          lng: city?.location?.longitude,
        },
        zoom: city?.location?.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]); //вызов побочных эффектов только при наличии условий

  return map;
}

export default useMap;
