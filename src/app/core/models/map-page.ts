export interface Zone {
  id:number;
  name: string;
  description: string;
  x:number;
  y:number;
  image: string;
}

export interface MapPageData {
  imageMap: string;
  zones: Zone[];
}



