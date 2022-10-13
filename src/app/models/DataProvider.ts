import { PreviewDataModel } from './PreviewDataModel';

export class DataProvider {

    loadPreview(): PreviewDataModel[] {
        var dataOne = new PreviewDataModel();
        dataOne.Id = '1',
        dataOne.Label = 'Data 1';
                
        var dataTwo = new PreviewDataModel();
        dataTwo.Id = '2';
        dataTwo.Label = 'Data 2';

        var data: PreviewDataModel[] = [dataOne, dataTwo];

        return data;
    }
  
  }
  