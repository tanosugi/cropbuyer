import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type RecordMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CropMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GrowerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FarmMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Record {
  readonly id: string;
  readonly farmID: string;
  readonly year?: number | null;
  readonly statusRating?: number | null;
  readonly yield?: number | null;
  readonly volume?: number | null;
  readonly memo?: string | null;
  readonly cropID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Record, RecordMetaData>);
  static copyOf(source: Record, mutator: (draft: MutableModel<Record, RecordMetaData>) => MutableModel<Record, RecordMetaData> | void): Record;
}

export declare class Crop {
  readonly id: string;
  readonly name?: string | null;
  readonly Records?: (Record | null)[] | null;
  readonly image_url?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Crop, CropMetaData>);
  static copyOf(source: Crop, mutator: (draft: MutableModel<Crop, CropMetaData>) => MutableModel<Crop, CropMetaData> | void): Crop;
}

export declare class Grower {
  readonly id: string;
  readonly Farms?: (Farm | null)[] | null;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly address?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Grower, GrowerMetaData>);
  static copyOf(source: Grower, mutator: (draft: MutableModel<Grower, GrowerMetaData>) => MutableModel<Grower, GrowerMetaData> | void): Grower;
}

export declare class Farm {
  readonly id: string;
  readonly growerID: string;
  readonly name?: string | null;
  readonly area?: string | null;
  readonly Records?: (Record | null)[] | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Farm, FarmMetaData>);
  static copyOf(source: Farm, mutator: (draft: MutableModel<Farm, FarmMetaData>) => MutableModel<Farm, FarmMetaData> | void): Farm;
}