import Geocode from 'react-geocode';

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
Geocode.setLanguage('ko');
Geocode.setRegion('ko');
Geocode.setLocationType('ROOFTOP');
Geocode.enableDebug();
