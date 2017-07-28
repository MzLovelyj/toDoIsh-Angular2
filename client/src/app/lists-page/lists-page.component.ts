import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
// import { RouterLink } from '@angular/router';
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
  toast: string;

  newCardTitles: string[] = [];

  constructor(
    private listThang: ListService,
    private cardThang: CardService,

  ) { }

  ngOnInit() {
      this.listThang.lists()
        .then((listsFromApi) => {
            this.myLists = listsFromApi;
        })
        .catch((errResponse) => {
            alert('List error ');
        });
  }

  makeAList() {
      this.listThang.createList(this.newListTitle)
        .then((newListFromApi) => {
            this.myLists.push(newListFromApi);
            this.newListTitle = '';
        })
        .catch((errResponse) => {
            alert('List create error');
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
            alert('Card create error');
        });
  }

//     deleteItem(card) {
//     this.cardThang.remove(card)
//       .then(() => {})
//       .catch((err) => {
//         this.errorMessage = 'Could not retrieve item details. Try again later.';
//       });
//     //   console.log(list.cards[1].title);
//     // console.log(list.cards[1].title + ' was deleted');
//   }


}