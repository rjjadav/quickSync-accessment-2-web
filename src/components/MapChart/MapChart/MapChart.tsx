import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
  // @ts-ignore
} from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';

const geoUrl = 'https://projects.datameet.org/maps/data/geojson/states.geojson';

// Replace with your own order counts
const orderData: Record<string, number> = {
  Maharashtra: 3500,
  Gujarat: 2800,
  Karnataka: 3200,
  'Tamil Nadu': 2100,
  'Uttar Pradesh': 3900,
  Rajasthan: 1800,
  'West Bengal': 1600,
  Bihar: 1400,
  'Madhya Pradesh': 2600,
  'Andhra Pradesh': 1950,
  Telangana: 2300,
  Kerala: 1700,
  Punjab: 1350,
  Haryana: 1500,
  Chhattisgarh: 900,
  Jharkhand: 950,
  Assam: 800,
  Odisha: 1100,
  'Himachal Pradesh': 600,
  Uttarakhand: 650,
  'Jammu & Kashmir': 700,
  Tripura: 300,
  Meghalaya: 250,
  Manipur: 200,
  Nagaland: 180,
  Mizoram: 150,
  'Arunanchal Pradesh': 120,
  Sikkim: 90,
  Goa: 500,

  // Union Territories
  'NCT of Delhi': 1800,
  Chandigarh: 400,
  Puducherry: 350,
  Lakshadweep: 80,
  AndamanAndNicobarIslands: 100,
  DadraAndNagarHaveliAndDamanAndDiu: 200,
  Ladakh: 220,
};

const total = Object.values(orderData).reduce((a, b) => a + b, 0);

const hotspots = [
  { name: 'Mumbai', coordinates: [72.8777, 19.0760], intensity: 9 },
  { name: 'Delhi', coordinates: [77.1025, 28.7041], intensity: 8 },
  { name: 'Bengaluru', coordinates: [77.5946, 12.9716], intensity: 7 },
  { name: 'Chennai', coordinates: [80.2707, 13.0827], intensity: 6 },
  { name: 'Lucknow', coordinates: [80.9462, 26.8467], intensity: 5 },
];

const colorScale = scaleLinear<string>()
  .domain([0, Math.max(...Object.values(orderData))])
  .range(['#e0f3f8', '#08589e']);

const sizeScale = scaleLinear()
  .domain([1, 10])
  .range([4, 14]);

const IndiaHeatMap: React.FC = () => {
  const [tooltip, setTooltip] = useState('');

  return (
    <div style={{ position: 'relative', width: '500px', height: '500px' }}>
      <ComposableMap projection="geoMercator" projectionConfig={{ scale: 1000 }}>
        <ZoomableGroup center={[80, 22]} zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }: any) =>
              geographies.map((geo: any) => {
                const name = geo.properties.ST_NM;
                const count = orderData[name] || 0;
                const pct = ((count / total) * 100).toFixed(1);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={count ? colorScale(count) : '#f0f0f0'}
                    stroke="#999"
                    onMouseEnter={() =>
                      setTooltip(`${name}: ${count} orders (${pct}%)`)
                    }
                    onMouseLeave={() => setTooltip('')}
                    style={{
                      default: { outline: 'none' },
                      hover: { fill: '#fcbba1', outline: 'none' },
                    }}
                  />
                );
              })
            }
          </Geographies>

        {hotspots.map(({ name, coordinates, intensity }: any) => (
          <Marker key={name} coordinates={coordinates}>
            <circle
              r={sizeScale(intensity)}
              fill="red"
              fillOpacity={0.4}
              stroke="darkred"
              strokeWidth={1}
            />
            <text
              textAnchor="middle"
              y={-sizeScale(intensity) - 4}
              style={{ fontFamily: 'system-ui', fontSize: '10px', fill: '#333' }}
            >
              {name}
            </text>
          </Marker>
        ))}
        </ZoomableGroup>
      </ComposableMap>
      {tooltip && (
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            left: 20,
            background: 'white',
            padding: '8px',
            borderRadius: '4px',
            boxShadow: '0 0 4px rgba(0,0,0,0.3)',
          }}
        >
          {tooltip}
        </div>
      )}
    </div>
  );
};

export default IndiaHeatMap;
