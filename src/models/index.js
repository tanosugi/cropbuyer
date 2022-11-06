// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Grower, Farm, Crop, Record, PersonalSetting } = initSchema(schema);

export {
  Grower,
  Farm,
  Crop,
  Record,
  PersonalSetting
};