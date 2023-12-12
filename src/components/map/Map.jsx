import GoogleMapReact from "google-map-react";
import LocationPin from "../location-pin/LocationPin";
// import styles from "./Map.module.css"

// const defaultProps = {
//     center: [59.88855119088319, 11.563317897768165],
//     text: "DDD AUTO!",
//     lat: 59.88855119088319,
//     lng: 11.563317897768165,
//     zoomLvl: 15
// }
const Map = () => {

    return (
        <div style={{height: '50vh', width: '100%'}}>
            {/*<GoogleMapReact*/}
            {/*    bootstrapURLKeys={{key: ""}}*/}
            {/*    defaultCenter={defaultProps.center}*/}
            {/*    defaultZoom={defaultProps.zoomLvl}*/}
            {/*>*/}
            {/*    <LocationPin*/}
            {/*        lat={defaultProps.lat}*/}
            {/*        lng={defaultProps.lng}*/}
            {/*        text={defaultProps.text}*/}
            {/*    />*/}
            {/*</GoogleMapReact>*/}
        </div>
    );
};

export default Map;