import {TImageData, TImageFormat, TApiData, TImagesData} from "@shared/index";
import {TSeo, TSeoData} from "@components/MetaSeo";
import {TImage} from "@shared/model/image";


/*
 * CATEGORY TYPE
 */
export type TProjectCatAttributes<S = TSeoData> = {
    seo: S;
    slug: string;
}

export interface TProjectCategory extends TProjectCatAttributes<TSeo> {
    link: string;
}


type ProjectCatData = {
    id: number;
    attributes: TProjectCatAttributes;
}

export type TProjectCatData = TApiData<ProjectCatData>;
export type TProjectCatsData = TApiData<ProjectCatData[]>;


/*
 * PROJECT TYPE
 */
export interface TProjectProfile {
    length: number;
    width: number;
    height: number;
    gable: number;
}

export type TProjectAttributes<I = TImageData, C = TProjectCatData, S = TSeoData> = {
    seo: S;
    slug: string;
    totalArea: number;
    livingArea: number;
    profile: TProjectProfile;
    category: C;
    gallery?: TImagesData;
    floors?: [{
        name: string;
        height: number;
        area: number;
        image: I;
        rooms: [{
            name: string;
            area: number;
        }];
    }];
}


export interface TProject extends TProjectAttributes<TImage, TProjectCategory, TSeo> {
    link: string;
}


type ProjectData = {
    id: number;
    attributes: TProjectAttributes;
}
export type TProjectData = TApiData<ProjectData>;
export type TProjectsData = TApiData<ProjectData[]>;




