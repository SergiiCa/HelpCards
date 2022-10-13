import { PreviewDataModel } from './PreviewDataModel';

export class DataProvider {

    loadPreview(): PreviewDataModel[] {
        const num = 6;
        let data: Array<PreviewDataModel> = [];

        for (var index = 1; index <= num; index++) {
            var card = this.createFakeCard(index);
            data.push(card);
        }

        return data;
    }

    createFakeCard(id:number): PreviewDataModel {
        var card = new PreviewDataModel();
        card.Id = id.toString(),
        card.Label = 'Data ' + id;
        card.Description = "Data Description " + id;

        return card;
    }
  
  }
  