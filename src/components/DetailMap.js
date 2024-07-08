import React, { useEffect, useRef } from 'react';
import '../App.css';

function DetailMap({ lat, lng }) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMapScript = () => {
      const existingScript = document.getElementById('kakao-map-script');
      if (existingScript) {
        initMap();
        return;
      }

      const script = document.createElement('script');
      script.id = 'kakao-map-script';
      script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=f4d8a0f60cdebb3a27a6148e5ec42fc8&libraries=services,clusterer,drawing';
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    };

    const initMap = () => {
      if (mapContainerRef.current) {
        const options = {
          center: new window.kakao.maps.LatLng(lat, lng),
          level: 3,
          mapTypeId: window.kakao.maps.MapTypeId.HYBRID,
        };
        const map = new window.kakao.maps.Map(mapContainerRef.current, options);
        mapRef.current = map;

        const markerPosition = new window.kakao.maps.LatLng(lat, lng);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);

        // Ensure map relayout after a short delay
        setTimeout(() => {
          map.relayout();
          map.setCenter(new window.kakao.maps.LatLng(lat, lng)); // Re-center the map
        }, 100);
      }
    };

    loadMapScript();
  }, [lat, lng]);

  const resizeAndRelayoutMap = () => {
    if (mapContainerRef.current && mapRef.current) {
      mapContainerRef.current.style.width = '100%';
      mapContainerRef.current.style.height = '300px';
      mapRef.current.relayout();
      mapRef.current.setCenter(new window.kakao.maps.LatLng(lat, lng)); // Re-center the map
    }
  };

  useEffect(() => {
    resizeAndRelayoutMap();
  }, [lat, lng]);

  return (
    <div 
      ref={mapContainerRef} 
      className="map-container"
    ></div>
  );
}

export default DetailMap;
