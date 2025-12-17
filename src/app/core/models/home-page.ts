export interface HomePageHeadline {
  title: string;
  description: string;
}
export interface Feature extends HomePageHeadline {
  id: number;
  icon: string;
}
export interface DataHomePagePhoto extends HomePageHeadline  {
  images: string[];
}

export interface HomePageData {
  backgroundHomePage: string;
  heroSection: {
    title: string;
    subtitle: string;
    oldButtonText: string;
    regButtonText: string;
  },
  projectIdeaSection: {
    title: string;
    description: string;
  }
  parkFeaturesSection:{
    title: string;
    features: Feature[];
  }
  DataHomePagePhotosDialog:{
    oldPhoto:DataHomePagePhoto;
    regPhoto:DataHomePagePhoto;
  }
  footerText: string;
}
