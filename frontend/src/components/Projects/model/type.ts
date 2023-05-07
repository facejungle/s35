export interface projectPreviewType {
   title: string;
   link: string;
   area: number;
   image: string;
   category: {
      title: string;
      link: string;
   };
}

export interface CategoriesDataType {
   data: [{
      id: number;
      attributes: {
         title: string;
         description: string;
         slug: string;
         image: {};
      }
   }];
}
export interface CategoryDataType {
   id: number;
   title: string;
   description: string;
   slug: string;
   image: {};
}
export interface CategoryType {
   title: string;
   description: string;
   slug: string;
   image: {};
};

export type projectType = {
   title: string;
   description: string;
   totalArea: number;
   livingArea: number;
   profile: {
      length: number;
      width: number;
      height: number;
      gable: number;
   };
   category: {
      title: string;
      slug: string;
   };
   image?: {};
   gallery?: [{}];
   floors?: [{
      name: string;
      height: number;
      area: number;
      image: {};
      rooms: [{
         name: string;
         area: number;
      }];
   }];
}