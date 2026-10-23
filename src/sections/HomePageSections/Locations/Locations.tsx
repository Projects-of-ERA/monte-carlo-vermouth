import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useTranslation } from 'react-i18next';

import { locations } from '../../../data/locations';

import 'leaflet/dist/leaflet.css';
import '../../../utils/fixLeafletIcon';
import './Locations.css';

const Locations = () => {
  const { t } = useTranslation();

  return (
    <section className="locations-section">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <div className="locations-grid">
          <div className="locations-copy">
            <h2 className="locations-title font-serif">
              <span>
                <em>{t('locations.title1')}</em> {t('locations.title1Accent')}
              </span>

              <span>{t('locations.title2')}</span>

              <span>
                <em>{t('locations.title3')}</em> {t('locations.title3Accent')}
              </span>

              <span>{t('locations.title4')}</span>
            </h2>
          </div>

          <div className="locations-map-wrapper">
            <MapContainer center={[43.7384, 7.4246]} zoom={14} className="locations-map">
              <TileLayer
                attribution="&copy; Stadia Maps &copy; OpenMapTiles &copy; OpenStreetMap contributors"
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
              />

              {locations.map((location) => (
                <Marker key={location.id} position={[location.lat, location.lng]}>
                  <Popup>
                    <div className="locations-info-window">
                      <h3>{location.name}</h3>

                      <p>{location.address}</p>
                      <p>{location.city}</p>

                      {location.phone && <p>{location.phone}</p>}

                      {location.googleMapsUrl && (
                        <a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                          View on Google Maps
                        </a>
                      )}
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
