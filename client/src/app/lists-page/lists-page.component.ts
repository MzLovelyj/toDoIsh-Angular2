import { Component, OnInit } from '@angular/core';

import { ListService } from '../services/list.service';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-lists-page',
  templateUrl: './lists-page.component.html',
  styleUrls: ['./lists-page.component.css']
})
export class ListsPageComponent implements OnInit {
  myLists: any[] = [];

  newListTitle: string;
  errorMessage: string;
  newCardTitles: string[] = [];

  constructor(
    private listThang: ListService,
    private cardThang: CardService
  ) { }

  ngOnInit() {
      this.listThang.lists()
        .then((listsFromApi) => {
            this.myLists = listsFromApi;
        })
        .catch((errResponse) => {
            alert('List error DID NOT WORK');
        });
  }

  makeAList() {
      this.listThang.createList(this.newListTitle)
        .then((newListFromApi) => {
            this.myLists.push(newListFromApi);
            this.newListTitle = '';
        })
        .catch((errResponse) => {
            alert('List create DID NOT WORK');
        });
  }

  makeACard(theList, titleIndex) {
      const theTitle = this.newCardTitles[titleIndex];

      this.cardThang.createCard(theList._id, theTitle)
        .then((newCardFromApi) => {
            theList.cards.push(newCardFromApi);
            this.newCardTitles[titleIndex] = '';
        })
        .catch((errResponse) => {
            alert('Card create DID NOT WORK');
        });
  }

  delete(list, card) {
  this.cardThang.remove(list._id, card._id)
    .then((res) => {console.log(res)})
    .catch((err) => {
      this.errorMessage = 'Could not retrieve item details. Try again later.';
    });

  console.log(card.title + ' delete request sent');
  this.listThang.lists()
    .then((listsFromApi) => {
        this.myLists = listsFromApi;
    })
    .catch((errResponse) => {
        alert('List error');
    });
}

// update() {
//   this.cardThang.shoppingItems()
//   .then( fetchedData => {
//     if (JSON.stringify(this.myItems) != JSON.stringify(fetchedData)) {
//       this.myItems = fetchedData
//     }
//   })
//   .catch(err => console.log(err));
// }


}