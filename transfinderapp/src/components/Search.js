// import React from 'react';
// import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';


// const Example = (props) => {
//   return (
//     <Form style={{width: "50%", margin: "4% auto"}}>
//       <FormGroup>
//         {/* <Label for="exampleSearch">Search</Label> */}
//         <Input
//           type="search"
//           name="search"
//           id="exampleSearch"
//           placeholder="search for an establishment"
//         />
//       </FormGroup>
//     </Form>
//   );
// }

// export default Example;

import React, {useState, useEffect} from 'react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete'
import Card from './Card'
import axios from 'axios'

const Search = () => {
  const [key] = useState("");
  const [address, setAddress] = useState("");
  // const [coordinates, setCoordinates] = useState({lat: null, lng: null});
  const [type, setType] = useState("");
  // const [urlInput, setUrlInput] = useState("");
  const [placeID, setPlaceID] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [name, setName] = useState("");
  const [formattedAddress, setFormattedAddress] = useState("");
  

  const convertString = (str) => {
    let address = str.split(",");
    let arr = address[0].split(" ");
    return arr.join("%20");
  }

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    
    console.log(value);
    // setCoordinates(latLng);
    setType(results[0].types[0]);
    // setUrlInput(convertString(value));
    // console.log(convertString(value));
    console.log(results);
    setPlaceID(results[0].place_id);
    console.log("place id ", results[0].place_id);
    setAddress(value);

  };



  useEffect(()=>{
    axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=photo,name,rating,formatted_phone_number,formatted_address&key=${key}`)
      .then(res => {
        console.log("axios results", res, placeID);
        setName(res.data.result.name);
        setFormattedAddress(res.data.result.formatted_address);
        let photoRef = res.data.result.photos[0].photo_reference;
        return photoRef;
      })
      .then(ref => {
        axios.get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${key}`)
        .then (res=> {
          setImgUrl(res.config.url);
          
        
        })
        .catch(err => console.log(err))
      })
      .catch(err => console.log(err));
  }, [address])




  return(
    <div>
      <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
      {({getInputProps, suggestions, getSuggestionItemProps, loading})=><div>

            {/* <p>Lattitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p> */}


          <input {...getInputProps({placeholder: "Type address"})}/>
          <div>
            {loading ? <div>...loading</div>: null}
            {suggestions.map((suggestion)=>{
              const style = {
                backgroundColor: suggestion.active ? "blue" : "#fff"
              };
              return <div {...getSuggestionItemProps(suggestion, {style})}>{suggestion.description}</div>
            })}
          </div>
          <div>
            {placeID && <Card type={type} imgUrl={imgUrl} name={name} formattedAddress={formattedAddress}/>}
          </div>
        </div>}
      </PlacesAutocomplete>
    </div>
  )
}

export default Search
