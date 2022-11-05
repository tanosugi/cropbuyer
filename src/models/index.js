// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Record, Crop, Grower, Farm } = initSchema(schema);

export {
  Record,
  Crop,
  Grower,
  Farm
};