import {useRef, useEffect} from 'react';
import leaflet, {layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { TypeOfferMock } from '../types/types-mock';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../const';
import useMap from './use-map';
import { DEFAULT_CITY } from '../store/reducer';


type ListProps = {
  offers: TypeOfferMock[];
  selectedPoint?:TypeOfferMock;
}

const defaultCustomIcon = leaflet.icon({//дефолтный маркер
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({//выбранный маркер
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function MainMap({ offers, selectedPoint}:ListProps) {
  const mapRef = useRef(null);
  const map = useMap({mapRef, city: offers?.[0]?.city || DEFAULT_CITY});

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
  }, [map, offers, selectedPoint]);

  return (
    <div
      style={{height: 772, width:'100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default MainMap;
