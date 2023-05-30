/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeturesOverridesProps = {
    Fetures?: PrimitiveOverrideProps<FlexProps>;
    "Frame 210"?: PrimitiveOverrideProps<FlexProps>;
    Features?: PrimitiveOverrideProps<TextProps>;
    "Record Farm Data with Polygon on the Map"?: PrimitiveOverrideProps<TextProps>;
    "On Map Page, you can write polygon and save as farm with name, description, latest status (rating) To start writing polygon, please click polygon button top write of the map."?: PrimitiveOverrideProps<TextProps>;
    Button35493448?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 211"?: PrimitiveOverrideProps<FlexProps>;
    "Recorded farm are shown on the map as polygon."?: PrimitiveOverrideProps<TextProps>;
    "Recorded farm are shown on the map as polygon. If you turn on \u201CFarm Info.\u201D Switch, you can see farm information on the map as information window which you input. If you turn off the switch, you can see single farm information by mouse over or click the translucent marker at the center of the polygon."?: PrimitiveOverrideProps<TextProps>;
    Button35493452?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 212"?: PrimitiveOverrideProps<FlexProps>;
    "Upload Image with GPS data and See on the Map with Timeline"?: PrimitiveOverrideProps<TextProps>;
    "On the Add Images Page, you can upload image from PC or mobile. If with PC, you can drag and drop pictures. Most of pictures taken by mobile of modern digital camera, GPS data where you take the picture and timeline data when pictures were taken are recorded in the picture image file. Uploaded pictures are shown on the map and. If you turn on \u201CYearly Switch\u201D, you can choose year to show. For an example you choose 2018, only picture taken on 2018 are shown on the map."?: PrimitiveOverrideProps<TextProps>;
    Button35493456?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 213"?: PrimitiveOverrideProps<FlexProps>;
    "Show yearly status of the farm on the map with colors"?: PrimitiveOverrideProps<TextProps>;
    "If you turn off \u201CFarm Info.\u201D and \u201CPictures\u201D switch, and turn on \u201CYearly\u201D switch, you can see polygon are filled with colors. Meaning of the colors are as follows. Yellow: Rice Green: Soybean Filled with dark yellow (or blue): Status is Good Filled with light yellow (or blue): Status is bad You can move slider control and change the year, and you can see that soy bean (green color) were grown in 2017, 18, changed to rice (yellow color) after 2019, only rice was grown on 2022"?: PrimitiveOverrideProps<TextProps>;
    Button35493460?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 214"?: PrimitiveOverrideProps<FlexProps>;
    "Add or Edit Crops, Growers, Farm, Yearly Record of Farm."?: PrimitiveOverrideProps<TextProps>;
    "On Crops Page, you can add and edit crop in addition to pre-set crops. On Growers Page, you can add and edit growers. You can start writing email or calling over the phone by clicking those icons. Farm List Page of the grower are shown if you click the icon. If you want to add Farm, you need to start by clicking polygon button top write of the map on Map Page. After you write polygon, you can enter the name, description, area (hectare), latest status (rating) of the farm before saving. If you want to edit saved farms, you can open Farm List Page from Growers Page. Add or Edit Yearly Record of Farms Choose the Grower on Growers Page who have the farm. -> Choose the Farm on Farm List Page -> Then, you can visit Record List Page to add or edit Yearly Record of Farms."?: PrimitiveOverrideProps<TextProps>;
    Button35493464?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type FeturesProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FeturesOverridesProps | undefined | null;
}>;
export default function Fetures(props: FeturesProps): React.ReactElement;
