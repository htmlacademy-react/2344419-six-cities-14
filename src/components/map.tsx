import {useRef, useEffect} from 'react';
import leaflet, {layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { TypeOffer } from '../types/types-data';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../const';
import useMap from './use-map';


type ListProps = {
  offers: TypeOffer[];
  selectedPoint?:TypeOffer;
}

const defaultCustomIcon = leaflet.icon({//дефолтный маркер
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const currentCustomIcon = leaflet.icon({//выбранный маркер
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

function MyMap({ offers, selectedPoint}:ListProps) {
  const mapRef = useRef(null);
  const map = useMap({mapRef, city: offers[0].city});

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((elem) => {
        const marker = new Marker({
          lat: elem?.location?.latitude,
          lng: elem?.location?.longitude,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && elem?.id === selectedPoint?.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });
    }
  }, [map, offers, selectedPoint, selectedPoint?.city?.name]);

  return (
    <div
      style={{height: 772, width:'100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default MyMap;

