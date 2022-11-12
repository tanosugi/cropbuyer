import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type PictureMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GrowerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FarmMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CropMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RecordMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PersonalSettingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerPicture = {
  readonly id: string;
  readonly s3KeyRaw?: string | null;
  readonly s3KeyResized?: string | null;
  readonly urlRaw?: string | null;
  readonly urlResized?: string | null;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly createYear?: number | null;
  readonly createDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPicture = {
  readonly id: string;
  readonly s3KeyRaw?: string | null;
  readonly s3KeyResized?: string | null;
  readonly urlRaw?: string | null;
  readonly urlResized?: string | null;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly createYear?: number | null;
  readonly createDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Picture = LazyLoading extends LazyLoadingDisabled ? EagerPicture : LazyPicture

export declare const Picture: (new (init: ModelInit<Picture, PictureMetaData>) => Picture) & {
  copyOf(source: Picture, mutator: (draft: MutableModel<Picture, PictureMetaData>) => MutableModel<Picture, PictureMetaData> | void): Picture;
}

type EagerGrower = {
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly description?: string | null;
  readonly s3Key?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGrower = {
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly description?: string | null;
  readonly s3Key?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Grower = LazyLoading extends LazyLoadingDisabled ? EagerGrower : LazyGrower

export declare const Grower: (new (init: ModelInit<Grower, GrowerMetaData>) => Grower) & {
  copyOf(source: Grower, mutator: (draft: MutableModel<Grower, GrowerMetaData>) => MutableModel<Grower, GrowerMetaData> | void): Grower;
}

type EagerFarm = {
  readonly id: string;
  readonly name?: string | null;
  readonly growerName?: string | null;
  readonly area?: string | null;
  readonly latestStatus?: number | null;
  readonly polygonString?: string | null;
  readonly imaga_url?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFarm = {
  readonly id: string;
  readonly name?: string | null;
  readonly growerName?: string | null;
  readonly area?: string | null;
  readonly latestStatus?: number | null;
  readonly polygonString?: string | null;
  readonly imaga_url?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Farm = LazyLoading extends LazyLoadingDisabled ? EagerFarm : LazyFarm

export declare const Farm: (new (init: ModelInit<Farm, FarmMetaData>) => Farm) & {
  copyOf(source: Farm, mutator: (draft: MutableModel<Farm, FarmMetaData>) => MutableModel<Farm, FarmMetaData> | void): Farm;
}

type EagerCrop = {
  readonly id: string;
  readonly name?: string | null;
  readonly image_url?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCrop = {
  readonly id: string;
  readonly name?: string | null;
  readonly image_url?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Crop = LazyLoading extends LazyLoadingDisabled ? EagerCrop : LazyCrop

export declare const Crop: (new (init: ModelInit<Crop, CropMetaData>) => Crop) & {
  copyOf(source: Crop, mutator: (draft: MutableModel<Crop, CropMetaData>) => MutableModel<Crop, CropMetaData> | void): Crop;
}

type EagerRecord = {
  readonly id: string;
  readonly year?: number | null;
  readonly cropName?: string | null;
  readonly statusRating?: number | null;
  readonly yield?: number | null;
  readonly volume?: number | null;
  readonly farmName?: string | null;
  readonly image_url?: string | null;
  readonly memo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRecord = {
  readonly id: string;
  readonly year?: number | null;
  readonly cropName?: string | null;
  readonly statusRating?: number | null;
  readonly yield?: number | null;
  readonly volume?: number | null;
  readonly farmName?: string | null;
  readonly image_url?: string | null;
  readonly memo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Record = LazyLoading extends LazyLoadingDisabled ? EagerRecord : LazyRecord

export declare const Record: (new (init: ModelInit<Record, RecordMetaData>) => Record) & {
  copyOf(source: Record, mutator: (draft: MutableModel<Record, RecordMetaData>) => MutableModel<Record, RecordMetaData> | void): Record;
}

type EagerPersonalSetting = {
  readonly id: string;
  readonly mapLat?: string | null;
  readonly mapLng?: string | null;
  readonly mapZoom?: string | null;
  readonly mapTilt?: string | null;
  readonly mapRotate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPersonalSetting = {
  readonly id: string;
  readonly mapLat?: string | null;
  readonly mapLng?: string | null;
  readonly mapZoom?: string | null;
  readonly mapTilt?: string | null;
  readonly mapRotate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PersonalSetting = LazyLoading extends LazyLoadingDisabled ? EagerPersonalSetting : LazyPersonalSetting

export declare const PersonalSetting: (new (init: ModelInit<PersonalSetting, PersonalSettingMetaData>) => PersonalSetting) & {
  copyOf(source: PersonalSetting, mutator: (draft: MutableModel<PersonalSetting, PersonalSettingMetaData>) => MutableModel<PersonalSetting, PersonalSettingMetaData> | void): PersonalSetting;
}