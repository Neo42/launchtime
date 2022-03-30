import React from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import Layout from './components/Layout'
import './assets/stylesheets/App.css'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

function App() {
  React.useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    })
  }, [])
  return (
    <Layout>
      <MapContainer center={[38.907132, -77.036546]} zoom={12}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAPBOX_USERID}/${process.env.REACT_APP_MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`}
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        <Marker position={[38.888369, -77.0199]}>
          <Popup>Smithsonian National Air and Space Museum</Popup>
        </Marker>
      </MapContainer>
    </Layout>
  )
}

export default App
