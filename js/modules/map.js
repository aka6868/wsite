/**
 * AkaTek

 **/
"use strict";

const _KEY = 'PasteYourGoogleMapsApiKeyHere';

import {Loader} from "@googlemaps/js-api-loader";
import mapTheme from "./map-theme";

function initMap() {
    const loader = new Loader({
        apiKey: _KEY,
        version: "weekly",

    });
    const mapContainer = document.querySelector('#map');
    const coords = [
        {
            lat: 40.74881584652125,
            lng: -73.98561648634562
        },
        {
            lat: 40.80886299662628,
            lng: -73.8791304171755
        }
    ]

    if (mapContainer) {
        loader.load().then(() => {
            const map = new google.maps.Map(mapContainer, {
                center: coords[1],
                zoom: 10,
                styles: [...mapTheme],
                disableDefaultUI: true,
            });
            coords.forEach(el => {
                const marker = new google.maps.Marker({
                    position: el,
                    map: map,
                    icon: './svg/marker.svg'
                });
            })
        });
    }
}

export default initMap;