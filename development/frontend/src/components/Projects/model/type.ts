import {ImageDataType} from "@shared/index";


export interface TProjectSettings {

}

export interface TDProjectCategory<I = ImageDataType> {
    title: string;
    slug: string;
    description: string;
    image: I | null;
}

export interface TProjectCategory extends TDProjectCategory {
    link: string;
}

export interface TDProject<I = ImageDataType, C = TDProjectCategory> {
    title: string;
    slug: string;
    description: string;
    totalArea: number;
    livingArea: number;
    profile: TProjectProfile;
    image: I | null;
    category: C | null;
    gallery?: [I | null];
    floors?: [{
        name: string;
        height: number;
        area: number;
        image: I | null;
        rooms: [{
            name: string;
            area: number;
        }];
    }];
}

export interface TProject extends TDProject {
    link: string;
}

export interface TProjectProfile {
    length: number;
    width: number;
    height: number;
    gable: number;
}
