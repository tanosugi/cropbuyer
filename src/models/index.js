// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Picture, Grower, Farm, Crop, Record, PersonalSetting } = initSchema(schema);

export {
  Picture,
  Grower,
  Farm,
  Crop,
  Record,
  PersonalSetting
};