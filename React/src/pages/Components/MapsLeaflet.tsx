import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import { Circle, FeatureGroup, LayerGroup, MapContainer, Marker, Polygon, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"

// Leaflet.Icon.Default.mergeOptions({
//     iconUrl: "http://localhost:3000/assets/libs/leaflet/images/marker-icon.png",
//     shadowUrl: "http://localhost:3000/assets/libs/leaflet/images/marker-shadow.png"
// })

const MapsLeaflet = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Leaflet" pageTitle="Maps" />
                <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-gray-800 text-15 dark:text-white">Example</h6>
                            <MapContainer center={[51.505, -0.09]} zoom={6} scrollWheelZoom={true} style={{ height: "300px" }} className="leaflet-map">
                                <TileLayer
                                    attribution={'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,' +
                                        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                                        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'}
                                    url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGhlbWVzYnJhbmQiLCJhIjoiY2xmbmc3bTV4MGw1ejNzbnJqOWpubzhnciJ9.DNkdZVKLnQ6I9NOz7EED-w"
                                    id='mapbox/streets-v11'
                                />
                            </MapContainer>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-gray-800 text-15 dark:text-white">Markers, Circles and Polygons</h6>
                            <MapContainer center={[51.508, -0.11]} zoom={13} style={{ height: "300px" }} className="leaflet-map">
                                <TileLayer
                                    attribution={'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                                        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                                        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'}
                                    url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGhlbWVzYnJhbmQiLCJhIjoiY2xmbmc3bTV4MGw1ejNzbnJqOWpubzhnciJ9.DNkdZVKLnQ6I9NOz7EED-w"
                                    id='mapbox/streets-v11'
                                />
                                <LayerGroup>
                                    <Circle center={[51.508, -0.11]} fillColor="0ab39c" color=" 0ab39c" radius={500} />
                                    <Circle center={[51.508, -0.11]} color='#0ab39c' fillColor='#0ab39c' radius={500} />
                                    <LayerGroup>
                                        <Circle center={[51.508, -0.11]} color='#0ab39c' fillColor='#0ab39c' fillOpacity={0.5} radius={500} />
                                    </LayerGroup>
                                </LayerGroup>
                                <FeatureGroup>
                                    <Circle center={[51.508, -0.11]} radius={500} color="0ab39c" />
                                    <Polygon positions={[[51.509, -0.08], [51.503, -0.06], [51.51, -0.047]]} color='#405189' fillColor='#405189' />
                                </FeatureGroup>
                            </MapContainer>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-gray-800 text-15 dark:text-white">Working with Popups</h6>
                            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} style={{ height: "300px" }} className="leaflet-map">
                                <TileLayer
                                    attribution={'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                                        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                                        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'}
                                    url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGhlbWVzYnJhbmQiLCJhIjoiY2xmbmc3bTV4MGw1ejNzbnJqOWpubzhnciJ9.DNkdZVKLnQ6I9NOz7EED-w"
                                    id='mapbox/streets-v11'
                                />
                                <LayerGroup>
                                    {/* Circle with opacity */}
                                    <Circle center={[51.508, -0.11]} color='#f06548' fillColor='#f06548' fillOpacity={0.5} radius={500}>
                                        <Popup>I am a circle.</Popup>
                                    </Circle>

                                    {/* Polygon */}
                                    <Polygon positions={[[51.509, -0.08], [51.503, -0.06], [51.51, -0.047]]} color='#405189' fillColor='#405189'>
                                        <Popup>I am a polygon.</Popup>
                                    </Polygon>

                                    {/* Marker */}
                                    <Marker position={[51.505, -0.09]}>
                                        <Popup>
                                            <b>Hello world!</b> <br /> I am a popup.
                                        </Popup>
                                    </Marker>
                                </LayerGroup>
                            </MapContainer>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-gray-800 text-15 dark:text-white">Markers with Custom Icons</h6>
                            <MapContainer center={[51.505, -0.09]} zoom={6} scrollWheelZoom={true} style={{ height: "300px" }} className="leaflet-map">
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    id='mapbox/streets-v11'
                                />
                            </MapContainer>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-gray-800 text-15 dark:text-white">Interactive Choropleth Map</h6>
                            <MapContainer center={[51.505, -0.09]} zoom={6} scrollWheelZoom={true} style={{ height: "300px" }} className="leaflet-map">
                                <TileLayer
                                    attribution={'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                                        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                                        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'}
                                    url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGhlbWVzYnJhbmQiLCJhIjoiY2xmbmc3bTV4MGw1ejNzbnJqOWpubzhnciJ9.DNkdZVKLnQ6I9NOz7EED-w"
                                    id='mapbox/light-v9'
                                />
                            </MapContainer>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-gray-800 text-15 dark:text-white">Layer Groups and Layers Control</h6>
                            <MapContainer center={[51.505, -0.09]} zoom={6} scrollWheelZoom={true} style={{ height: "300px" }} className="leaflet-map">
                                <TileLayer
                                    attribution={'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                                        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                                        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'}
                                    url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGhlbWVzYnJhbmQiLCJhIjoiY2xmbmc3bTV4MGw1ejNzbnJqOWpubzhnciJ9.DNkdZVKLnQ6I9NOz7EED-w"
                                    id='mapbox/streets-v11'
                                />
                            </MapContainer>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

export default MapsLeaflet;