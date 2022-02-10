import { React, useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";



const PlaceAutoComplete = (props) => {
    // const [address, setAddress] = useState("");
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
      });
    
      const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        props.onChange(value);
        setCoordinates(latLng);
      };
      return (
        
          <PlacesAutocomplete
            value={props.address}
            onChange={props.onChange}
            onSelect={handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <>
                {/* <p>Latitude: {coordinates.lat}</p>
                <p>Longitude: {coordinates.lng}</p> */}
    
                <input className="location-input" style={{
                  height: suggestions ? '100% !important': '50px'
                }}{...getInputProps({ placeholder: props.placeholder })} />
    
                <div>
                  {loading ? <div>...loading</div> : null}
    
                  {suggestions.map(suggestion => {
                    const style = {
                      backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                      height: '100% !important'
                    };
    
                    return (
                      <div {...getSuggestionItemProps(suggestion, { style })}>
                        <p style={{padding: '5px 0'}}>{suggestion.description}</p>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </PlacesAutocomplete>
        
      );
}
export default PlaceAutoComplete;