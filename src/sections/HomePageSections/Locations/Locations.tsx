import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';
import { locations } from '../../../data/locations';

import 'leaflet/dist/leaflet.css';
import '../../../utils/fixLeafletIcon';
import './Locations.css';

const Locations = () => {
  const { t } = useTranslation();

  return (
    <section className="locations-section overflow-hidden">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <div className="locations-grid">
          {/* CONTENT */}
          <div className="locations-copy">
            <motion.h2
              className="locations-title font-serif"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <span>
                <AnimatedText>
                  <em>{t('locations.title1')}</em> {t('locations.title1Accent')}
                </AnimatedText>
              </span>

              <span>
                <AnimatedText>{t('locations.title2')}</AnimatedText>
              </span>

              <span>
                <AnimatedText>
                  <em>{t('locations.title3')}</em> {t('locations.title3Accent')}
                </AnimatedText>
              </span>

              <span>
                <AnimatedText>{t('locations.title4')}</AnimatedText>
              </span>
            </motion.h2>
          </div>

          {/* MAP */}
          <motion.div
            className="locations-map-wrapper"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
