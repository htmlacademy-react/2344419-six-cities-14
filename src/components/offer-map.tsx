import {useRef, useEffect} from 'react';
import leaflet, {layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { TypeOfferMock } from '../types/types-mock';
import { URL_MARKER_DEFAULT } from '../const';
import useMap from './use-map';


type ListProps = {
  offers: TypeOfferMock[];
  selectedPoint?:TypeOfferMock;
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


function OfferMap({ offers, selectedPoint}:ListProps) {
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
          .setIcon(defaultCustomIcon)
          .addTo(markerLayer);
      });
    }
  }, [map, offers, selectedPoint, selectedPoint?.city?.name]);

  return (
    <div
      style={{
        height:'100%',
        minHeight:'500px',
        width:'100%',
        maxWidth:'1144px',
        margin:'0 auto',}}
      ref={mapRef}
    >
    </div>
  );
}

export default OfferMap;
