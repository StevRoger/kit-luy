import { Component, Inject, OnInit } from '@angular/core';
import { BillModel, OtherBillModel } from 'src/app/shared/model/bill.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {

  record: BillModel = new BillModel();
  name: string = "";
  isSaving: boolean = false;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  onNewMoreBill() {
    const dialogRef = this.dialog.open(DialogComponent, { width: "300px", autoFocus: true, data: { name: this.name } });

    dialogRef.afterClosed().subscribe(result => {
      let name: string = result;

      if (name) {
        this.onAddMoreBill(name)
      }
    });
  }

  onAddMoreBill(name: string) {
    let subBill: OtherBillModel = new OtherBillModel();
    subBill.name = name;
    this.record.other_bills.push(subBill);
  }

  onCuculate() {
    let totalBill: number = 0;
    let result: number = 0;

    totalBill = ((this.record.home_amount ? this.record.home_amount : 0) + (this.record.electric_amount ? this.record.electric_amount : 0) + (this.record.water_amount ? this.record.water_amount : 0));

    if (this.record.other_bills && this.record.other_bills.length) {
      this.record.other_bills.forEach(subBill => {
        totalBill += (subBill.amount ? subBill.amount : 0);
      });
    }

    if (totalBill && this.record.devided_to) {
      this.isSaving = true;
      result = (totalBill / this.record.devided_to);
      console.log(result);
      this.record.total = totalBill;

    } else {
      this.isSaving = false;
    }

  }
}


@Component({
  selector: 'dialog-component',
  templateUrl: 'dialog-component.html',
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

}