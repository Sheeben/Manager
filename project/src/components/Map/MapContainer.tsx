import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { MAPS_CONFIG } from '../../config/maps';
import { MapLoading } from './components/MapLoading';
import { MapError } from './components/MapError';
import { useGoogleMaps } from './hooks/useGoogleMaps';

export function MapContainer() {
  const { isLoaded, loadError, handleLoad, handleError } = useGoogleMaps();

  if (loadError) {
    return <MapError message="Failed to load the map. Please try again later." />;
  }

  if (!isLoaded) {
    return <MapLoading />;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">Location Map</h3>
      <div className="rounded-lg overflow-hidden shadow-md">
        <GoogleMap
          mapContainerStyle={MAPS_CONFIG.styles.container}
          zoom={MAPS_CONFIG.defaultZoom}
          center={MAPS_CONFIG.defaultCenter}
          onLoad={handleLoad}
          onError={handleError}
          options={{
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: true,
          }}
        >
          <Marker 
            position={MAPS_CONFIG.defaultCenter}
            title="Yoshitha Housing & Infra"
          />
        </GoogleMap>
      </div>
    </div>
  );
}