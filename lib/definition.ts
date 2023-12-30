interface goalsDefinition {
  goalsItem: string;
}

interface portofolioDefinition {
  portofolioName: string;
  portofolioDesc: string;
}

interface productCatalogDefinition {
  productName: string;
  productDesc: string;
  productPicture: string;
}

export interface clientDefinition {
  clientName: string;
  clientPic: string;
}

interface contactDefinition {
  contactName: string;
  contactPhone: string;
  contactAddress: string;
}

export interface headerDefinition {
  companyName: string;
  companySelfDefinition: string;
  companyCaption: string;
  vision: string;
  mission: string;
  goals: goalsDefinition[];
  portofolio: portofolioDefinition[];
  companyHistory: string;
  productCatalog: productCatalogDefinition[];
  client: clientDefinition[];
  contact: contactDefinition[];
}
