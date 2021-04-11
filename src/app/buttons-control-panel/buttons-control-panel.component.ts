import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buttons-control-panel',
  templateUrl: './buttons-control-panel.component.html',
  styleUrls: ['./buttons-control-panel.component.css']
})
export class ButtonsControlPanelComponent implements OnInit {
  public firstName: string;
    public lastName: string; 
    public data: string[] = ['foo', 'bar', 'baz'];
    public comboBoxValue: string;
    public dropDownValue: string;
    public autoCompleteValue: string;
    public multiSelectValue: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
