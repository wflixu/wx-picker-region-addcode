interface IResult {
    province: string;
    province_id: string;
    city: string;
    city_id: string;
    district: string;
    district_id: string;
    address: string;
}
declare function addCode(arr: string[]): IResult | null;
