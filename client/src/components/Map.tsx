import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useCountryData } from '../hooks';

const Map: React.FC = () => {
  const { data } = useCountryData();

  if (!data) {
    return <div>Loading map data...</div>;
  }

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {data.map((country: any) => (
        <Marker key={country.country} position={[country.countryInfo.lat, country.countryInfo.long]}>
          <Popup>
            <div>
              <h2>{country.country}</h2>
              <p>Total Active Cases: {country.active}</p>
              <p>Total Recovered Cases: {country.recovered}</p>
              <p>Total Deaths: {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
