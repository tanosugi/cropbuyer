# Inspiration

## Target User

Target user of our app is buyers of crops (agricultural products).

Most of our food are come from farm. They are transported and processed at the plant and then alive to our home. When food start their travel from farm, “buyers of crops” play the important role.

Some of buyers belong to trading companies and procure crops such as rice or wheat to export. Some of buyers belong to plants such as dry potato plant and procure crops as their raw material.

## Problem and our Motivation

Status of farm is important for buyers of crops because they have to forecast volume of procurement.

Buyers visit farms and growers often, talk with growers, take pictures to know the status of farms.

We know there are already many apps for growers to record their own farm but there are no apps for buyers and demand for this kind of app is great, hence we decide to develop MVP with Google map!!

# What it does - Feature of “Crop Buyer” -

## Record Farm Data with Polygon on the Map

On [Map Page](https://crop-buyer.tanosugi.com/map), you can write polygon and save as farm with name, description, latest status (rating)
To start writing polygon, please click polygon button top write of the map.

## Show Farm Information on the Map

Recorded farm are shown on the map as polygon.
If you turn on “Farm Info.” Switch, you can see farm information on the map as information window which you input. If you turn off the switch, you can see single farm information by mouse over or click the translucent marker at the center of the polygon.

## Upload Image with GPS data and See on the Map with Timeline

On the [Add Images Page](https://crop-buyer.tanosugi.com/add-images), you can upload image from PC or mobile. If with PC, you can drag and drop pictures. Most of pictures taken by mobile of modern digital camera, GPS data where you take the picture and timeline data when pictures were taken are recorded in the picture image file. Uploaded pictures are shown on the map and. If you turn on “Yearly Switch”, you can choose year to show. For an example you choose 2018, only picture taken on 2018 are shown on the map.

## Show yearly status of the farm on the map with colors

If you turn off “Farm Info.” and “Pictures” switch, and turn on “Yearly” switch, you can see polygon are filled with colors.

Meaning of the colors are as follows.

Yellow: Rice
Green: Soybean
Filled with dark yellow (or blue): Status is Good
Filled with light yellow (or blue): Status is bad

You can move slider control and change the year, and you can see that soy bean (green color) were grown in 2017, 18, changed to rice (yellow color) after 2019, only rice was grown on 2022

## Add or Edit Crops, Growers, Farm, Yearly Record of Farm.

### Add or Edit Crops

On [Crops Page](https://crop-buyer.tanosugi.com/crops), you can add and edit crop in addition to pre-set crops.

### Add or Edit Growers

On [Growers Page](https://crop-buyer.tanosugi.com/growers), you can add and edit growers. You can start writing email or calling over the phone by clicking those icons. [Farm List Page](https://crop-buyer.tanosugi.com/farm-list/22529bf5-2e46-45f0-9290-efaa48dddbc4) of the grower are shown if you click the icon.

### Add or Edit Farms

If you want to add Farm, you need to start by clicking polygon button top write of the map on [Map Page](https://crop-buyer.tanosugi.com/map). After you write polygon, you can enter the name, description, area (hectare), latest status (rating) of the farm before saving.

If you want to edit saved farms, you can open [Farm List Page](https://crop-buyer.tanosugi.com/farm-list/22529bf5-2e46-45f0-9290-efaa48dddbc4) from [Growers Page](https://crop-buyer.tanosugi.com/growers).

### Add or Edit Yearly Record of Farms

Choose the Grower on [Growers Page](https://crop-buyer.tanosugi.com/growers) who have the farm.

->

Choose the Farm on [Farm List Page](https://crop-buyer.tanosugi.com/farm-list/22529bf5-2e46-45f0-9290-efaa48dddbc4)

->

Then, you can visit [Record List Page](https://crop-buyer.tanosugi.com/record-list/8ce85b1d-557b-49b9-b959-7f1e723bd134) to add or edit Yearly Record of Farms.

# How we built it

I build front end with React, Nextjs.
To use Google Maps JavaScript API v3 with React, I utilize [@react-google-maps/api](https://github.com/JustFly1984/react-google-maps-api) ([how to use](https://react-google-maps-api-docs.netlify.app/])

## Vector Map, Tilt and Rotate Button

I and set map style and 3D style for the building. It is useful to understand the place of the farms if the farms are small and near the town.

```typescript
options={{
  mapId: String(process.env.NEXT_PUBLIC_GOOGLE_MAP_ID),
}}
```

I setup map ID to use vector map, hence you can tilt down and up the map by button at the bottom, rotate the map by button on right and left edge. I could add this feature by just copy paste of document but it is very useful because user can have experience like see farms flying with drone or helicopter.

```typescript
export const addTiltRotateControl = (mapInstance: google.maps.Map) => {
  const buttons: [
    string,
    string,
    number,
    google.maps.ControlPosition,
    string
  ][] = [
    [
      "Rotate Left",
      "rotate",
      20,
      google.maps.ControlPosition.LEFT_CENTER,
      "20px",
    ],
    [
      "Rotate Right",
      "rotate",
      -20,
      google.maps.ControlPosition.RIGHT_CENTER,
      "20px",
    ],
    [
      "Tilt Down",
      "tilt",
      20,
      google.maps.ControlPosition.BOTTOM_CENTER,
      "40px",
    ],
    ["Tilt Up", "tilt", -20, google.maps.ControlPosition.BOTTOM_CENTER, "40px"],
  ];

  buttons.forEach(([text, mode, amount, position, buttonHeight]) => {
    const controlDiv = document.createElement("div");
    const controlUI = document.createElement("button");

    // controlUI.style.width = "100px"; // setting the width to 200px
    controlUI.style.height = buttonHeight; // setting the height to 200px
    // controlUI.style.background = "teal"; // setting the background color to teal
    // controlUI.style.color = "white"; // setting the color to white
    controlUI.style.fontSize = "14px"; // setting the font size to 20px

    controlUI.classList.add("ui-button");
    controlUI.innerText = `${text}`;
    controlUI.addEventListener("click", () => {
      adjustMap(mode, amount);
    });
    controlDiv.appendChild(controlUI);
    mapInstance.controls[position].push(controlDiv);
  });

  const adjustMap = function (mode: string, amount: number) {
    switch (mode) {
      case "tilt":
        mapInstance.setTilt(mapInstance.getTilt()! + amount);
        break;
      case "rotate":
        mapInstance.setHeading(mapInstance.getHeading()! + amount);
        break;
      default:
        break;
    }
  };
};
```

## Separate Code with React Component

```typescript
<GoogleMap
  onLoad={mapOnLoad}
  mapContainerStyle={containerStyle}
  center={coordinates}
  zoom={15}
  mapTypeId="satellite"
  options={{
    mapId: String(process.env.NEXT_PUBLIC_GOOGLE_MAP_ID),
  }}
>
  <CreateAutocomplete setCoordinates={setCoordinates} />
  <CreateDrawingManager polygons={polygons} setPolygons={setPolygons} />
  <CreatePolygons
    isShowFarmInfo={isShowFarmInfo}
    isYearly={isYearly}
    yearToShow={yearToShow}
  />
  {isShowPictures && (
    <CreatePictureInfoWindows isYearly={isYearly} yearToShow={yearToShow} />
  )}
</GoogleMap>
```

## Drawing Manager

```typescript
<DrawingManager
  onLoad={onLoadDrawingManager}
  onPolygonComplete={onPolygonComplete}
  options={{
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT,
      drawingModes: [google.maps.drawing.OverlayType.POLYGON],
    },
  }}
/>
```

## Pylygon, InfoWindow and Marker to show Farm on the Map

```typescript
<Polygon
  draggable={true}
  editable={true}
  key={`${farm?.polygonString}-Polygon`}
  paths={paths}
  options={poligonOptions}
/>;
{
  (farm.id == idMouseOvered || isShowFarmInfo) && (
    <InfoWindow
      // key={`${farm?.polygonString}-InfoWindow`}
      position={polygonStrToCenterLatLng(farm?.polygonString || "")}
    >
      <FarmInfoWindowView farm={farm} />
    </InfoWindow>
  );
}
<Marker
  // key={`${farm?.polygonString}-Marker`}
  position={polygonStrToCenterLatLng(farm?.polygonString || "")}
  onMouseOver={() => setIdMouseOvered(farm.id)}
  onClick={() => setIdMouseOvered(farm.id)}
  opacity={0.1}
/>;
```

## Show Pictures in InfoWindow

```typescript
pictures.map((picture: Picture) => {
  return !isYearly || yearToShow == picture?.createYear ? (
    <InfoWindow
      key={picture.s3KeyResized}
      position={{ lat: picture.lat || 0, lng: picture.lng || 0 }}
      options={{ maxWidth: 250 }}
    >
      <AmplifyS3Image
        style={{ height: "100px" }}
        imgKey={picture.s3KeyResized || ""}
      />
    </InfoWindow>
  ) : (
    <></>
  );
});
```

## Autocomplete Window on top of the Map

```typescript
<Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
  <input
    type="text"
    placeholder="Search Place to Jump"
    style={autocompleteStyle}
  />
</Autocomplete>
```

## Drag and Drop to Upload Images

I used react-dropzone.

```typescript
<section className="container">
  <div
    {...getRootProps()}
    style={
      isDragActive ? { ...dropzoneStyles, ...dropzoneActive } : dropzoneStyles
    }
  >
    <input {...getInputProps()} />
    <p>Drag & Drop Picture or Click Here to Upload</p>
  </div>
  {/* <AmplifyS3Album path={"resized/"} picker={false} /> */}
  {pictures?.map((picture) => (
    <AmplifyS3Image
      key={picture?.s3KeyResized || ""}
      imgKey={picture?.s3KeyResized || ""}
    />
  ))}
</section>
```

## Resize and obtain GPS, timeline data before Update Images

I used react-image-file-resizer to resize image, exifr to obtain GPS and timeline data.

```typescript
const onDrop = useCallback(async (acceptedFiles: FileWithPath[]) => {
  acceptedFiles.forEach(async (acceptedFile: FileWithPath) => {
    const fileName = acceptedFile.name;
    const resizedBlob = dataURIToBlob(await resizeFile(acceptedFile));
    let resizedFile = new File([resizedBlob], acceptedFile.name);
    await uploadImage(acceptedFile, "raw/" + fileName);
    await uploadImage(resizedFile, "resized/" + fileName);
    const respExifrGps = await exifr.gps(acceptedFile);
    if (respExifrGps?.latitude && respExifrGps?.longitude) {
      const { latitude: lat, longitude: lng } = respExifrGps;
    }
    const respExifrParse = await exifr.parse(acceptedFile, {
      pick: ["CreateDate"],
    });
    if (respExifrParse?.CreateDate) {
      const { CreateDate } = respExifrParse;
    }
    console.log(
      "respExifrParse?.CreateDate.toISOString():",
      respExifrParse?.CreateDate.toISOString()
    );
    const picture = new Picture({
      s3KeyRaw: `raw/${fileName}`,
      s3KeyResized: `resized/${fileName}`,
      urlRaw: `https://${config.aws_user_files_s3_bucket}.s3.${config.aws_user_files_s3_bucket_region}.amazonaws.com/public/raw/${fileName}`,
      urlResized: `https://${config.aws_user_files_s3_bucket}.s3.${config.aws_user_files_s3_bucket_region}.amazonaws.com/public/resized/${fileName}`,
      lat: respExifrGps?.latitude,
      lng: respExifrGps?.longitude,
      createDate: respExifrParse?.CreateDate.toISOString(),
      createYear: respExifrParse?.CreateDate?.getFullYear(),
    });
    console.log("picture:", picture);
    await DataStore.save(picture);
  });
}, []);
```

## Challenges we ran into

This was my first-time using Google map API, so it took some time for getting used to. Also, most of the Google map document are JavaScript only, not React, so it was a bit difficult to utilize things that are mentioned in the Google map document but not in the @react-google-maps/api manual.

I am wondering if showing so many polygon and info windows. It was no problem on PC but it is slower on web browser on mobile phone.

I wanted to use advanced markers and animation for the app but they were not covered in @react-google-maps/api and I could not find good tutorial and code example other than official document, hence, I gave up to use.

## Accomplishments that we're proud of
We are proud that we were able to create a web application that is practical to a certain degree, despite the fact that it was the first time we developed using Google maps.
Before Google map API, it would have taken a lot of time, effort, and money to create a software application that records information on farmland and visualizes the photos and locations where the photos were taken, but thanks to Google map API, it is now possible to create such an application in a hackathon. I am proud of the fact that we have started to use Google map API, but before that, I would like to thank Google for providing us with a great API.

## What we learned
This time, thanks to Google map API, we were able to create something close to MVP. However, although there were other functions we wanted to achieve, it took about three times as long as expected to create the basic functions, and we were not able to get to that point.

It is often said that development takes 3 to 5 times longer than expected, so think carefully before starting development. However, since we were able to create a basic function and submit it, we were able to accomplish one of our goals first.

## What's next for a
At first, I wanted to make a travel app based on the sample app which show airplane flying animation, but I gave up because the React library was not yet available and I could not find good sample code. I think the code submitted by other teams in this hackathon will give me an idea of how to achieve this, so next time I would like to make a travel app with animation.

