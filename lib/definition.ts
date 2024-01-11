interface goalsDefinition {
  goalsItem: string;
}

interface portofolioDefinition {
  portofolioName: string;
  portofolioDesc: string;
}

interface productTypeDefinition {
  productTypeName: string;
  productWeight: string;
  productVolume: string;
  productDesc: string;
  productExample: string;
}

interface productCatalogDefinition {
  productName: string;
  productPicture: string;
  productType: productTypeDefinition[];
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

interface marketingDefinition {
  marketingPlace: string;
  marketingNumber: string;
  marketingEmail: string;
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
  marketing: marketingDefinition[];
}
