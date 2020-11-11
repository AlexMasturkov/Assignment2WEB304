import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {

  constructor() { }

  calculation: string = '';
  shortside : number =null;
  longside : number =null;
  resultError: string;

  // Checking the input values and if correct make calculation / or created warning messages
  onCalculate(){
    if(this.shortside > this.longside){
      this.resultError ='short side must be less or equal long side!';
    }else{
      this.resultError ='';
      this.calculation = (Math.sqrt(Math.pow(this.shortside, 2) + Math.pow(this.longside, 2))).toFixed(2);   
    }    
  }
  onReset(){
    this.calculation ='';
    this.shortside =null;
    this.longside =null;
    this.resultError='';
  }
  ngOnInit(): void {
  }

}
