import { DataStore } from "aws-amplify";
import { Picture } from "models";
import { useEffect, useState } from "react";

const useQueryPictures = () => {
  const [pictures, setPictures] = useState<Picture[]>([]);
  console.log("pictures:", pictures);
  const fetchPictures = async () => {
    const respPictures = await DataStore.query(Picture);
    if (respPictures) {
      setPictures(respPictures);
    }
  };
  useEffect(() => {
    fetchPictures();
    const subscription = DataStore.observe(Picture).subscribe(fetchPictures);
    return () => subscription.unsubscribe();
  }, []);
  return { pictures };
};

export default useQueryPictures;
