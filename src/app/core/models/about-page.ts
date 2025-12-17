export interface Stage {
  id: number;
  title: string;
  description: string;
}

export interface StageWithIcon extends Stage {
  icon: string;
}

export interface SectionParkHistoryDialog{
  paragraph?: string;
  heading?: string;
  list?: string[];
}

export interface AboutPageData {
  title: string;
  subtitle: string;
  button: string;
  parkHistoryDialog: {
    title: string;
    sections: SectionParkHistoryDialog[];
  }
  transformationSection: {
    title: string;
    stages: Stage[];
  };
  sectionArchitecturalElements: {
    title: string;
    stages: StageWithIcon[];
  };
  footer: {
    quote: string;
    year: string;
  };
}
