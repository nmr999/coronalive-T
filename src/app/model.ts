export class SummaryData {  
    Global: GlobalData;  
    Countries: Array<CountryData>;  
    Date: Date;  
}  
  
export class GlobalData {  
    NewConfirmed: number;  
    NewDeaths: number;  
    NewRecovered: number;  
    TotalConfirmed: number;  
    TotalDeaths: number;  
    TotalRecovered: number  
}  
  
export class CountryData extends GlobalData {  
    Country: string;  
    CountryCode: string;  
    Date: Date;  
    Slug: string  
}  

//Data coming from state api
export class Data {  
    active: number;  
    confirmed: number;  
    deaths: number;  
    deltaconfirmed: number;  
    deltadeaths: number;  
    deltarecovered: number;  
    lastupdatedtime: string;  
    migratedother: number;  
    recovered: number;  
    state: string;  
    statecode: string;  
}  
  
export class ChildData {  
    id: string;  
    state: string;  
    districtData: DistrictData[];  
}  
  
export class DistrictData {  
    confirmed: number;  
    id: string;  
    name: string;  
}  