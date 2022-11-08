export const polygonStrToLatLng = (
  polygonStr: string
): { lat: number; lng: number }[] => {
  // console.log("polygonStr:", polygonStr);
  const latAndLngArray = polygonStr.split(";");
  // console.log("latAndLngArray:", latAndLngArray);
  let ret: { lat: number; lng: number }[] = [];
  latAndLngArray.forEach((item: string) => {
    if (item == "") {
      return;
    }
    const latAndLng = item.split(",");
    // console.log("latAndLng:", latAndLng);
    ret.push({ lat: parseFloat(latAndLng[0]), lng: parseFloat(latAndLng[1]) });
  });
  // console.log("ret:", ret);
  return ret;
};

export const polygonStrToCenterLatLng = (polygonStr: string) => {
  const latAndLngArray = polygonStrToLatLng(polygonStr);
  let ret: { lat: number; lng: number } = { lat: 0, lng: 0 };
  latAndLngArray.forEach((item) => {
    ret.lat += item.lat;
    ret.lng += item.lng;
  });
  ret = {
    lat: ret.lat / latAndLngArray.length,
    lng: ret.lng / latAndLngArray.length,
  };
  return ret;
};

export const polygonToZoom = (polygonStr: string) => {
  const latAndLngArray = polygonStrToLatLng(polygonStr);
  const latArray = latAndLngArray.map((item) => item.lat);
  const lngArray = latAndLngArray.map((item) => item.lng);
  const maxLen = Math.max(
    Math.max(...latArray) - Math.min(...latArray),
    Math.max(...lngArray) - Math.min(...lngArray)
  );
  return 6.4 - Math.log(maxLen) / Math.log(2);
};
