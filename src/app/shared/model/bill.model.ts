export class BillModel {
    home_amount: number = 0;
    electric_amount: number = 0;
    water_amount: number = 0;
    devided_to: number = 0;
    meal_amount: number = 0;
    total: number = 0;
    other_bills: OtherBillModel[] = [];
}
export class OtherBillModel {
    name: string = "";
    amount: number = 0;
}
