import { Autocomplete } from "@react-google-maps/api";
import { Dispatch, FC, ReactElement, SetStateAction, useState } from "react";
import { autocompleteStyle } from "styles/mapstyles";

const CreateAutocomplete: FC<{
  setCoordinates: Dispatch<
    SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
}> = ({ setCoordinates }): ReactElement => {
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete>();
  const onLoad = (autoC: google.maps.places.Autocomplete) =>
    setAutocomplete(autoC);
  const onPlaceChanged = () => {
    // console.log("autocomplete:", autocomplete);
    const lat = autocomplete?.getPlace()?.geometry?.location?.lat() || 0;
    const lng = autocomplete?.getPlace()?.geometry?.location?.lng() || 0;
    setCoordinates({ lat, lng });
  };
  return (
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
      <input
        type="text"
        placeholder="Customized your placeholder"
        style={autocompleteStyle}
      />
    </Autocomplete>
  );
};

export default CreateAutocomplete;
