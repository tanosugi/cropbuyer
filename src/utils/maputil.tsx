export const polygonStrToLatLng = (polygonStr: string) => {
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