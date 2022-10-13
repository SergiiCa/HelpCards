import { Component, OnInit } from '@angular/core';
import { DataProvider } from 'src/app/models/DataProvider';
import { PreviewDataModel } from 'src/app/models/PreviewDataModel';

@Component({
  selector: 'app-preview-grid',
  templateUrl: './preview-grid.component.html',
  styleUrls: ['./preview-grid.component.css']
})

export class PreviewGridComponent implements OnInit {

  Provider: DataProvider;
  PreviewData: PreviewDataModel[];
  
  constructor() {  
    this.Provider = new DataProvider();
    this.PreviewData = this.Provider.loadPreview();
  }

  ngOnInit(): void {
  }

}
