import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';
import { prodottoModel } from '../../models/prodottoModel';
import { CardPiccolaComponent } from '../card-piccola/card-piccola.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ricerca-nome',
  standalone: true,
  imports: [
    CardPiccolaComponent,
    RouterModule,
    CommonModule,
    SearchBarComponent,
  ],
  templateUrl: './ricerca-nome.component.html',
  styleUrls: ['./ricerca-nome.component.css'],
})
// export class RicercaNomeComponent implements OnInit {
//   prodotti: prodottoModel[] = [];
//   searchText: string = '';
//   selectedCategory: number = 0;
//   selectedCategoryNome: string = 'All';
//   isLoading: boolean = false;

//   constructor(private prodottiService: ProdottiService, private route: ActivatedRoute) {}

//   can: boolean = this.prodottiService.getCan();

//   ngOnInit() {
//     this.route.queryParams.subscribe(params => {
//       this.searchText = params['searchText'] || '';
//       this.selectedCategory = params['selectedCategory'] || 0;
//       console.dir(this.searchText)
//       //if (this.searchText) {
//         this.prodottiService.setCan(true);
//         this.prodottiService.setSearchValue(this.searchText, this.selectedCategory);
//         this.cerca();
//       //}
//     });
//   }



//   cerca() {
//     this.prodottiService.getSearch(1).subscribe(
//       (prodotti) => {
//         this.prodotti = prodotti;
//         this.isLoading = false;//
//         console.log(this.prodotti);
//         console.log(this.prodotti.length);
//         console.log(this.prodottiService.can)
//       },
//       (error) => {
//         console.error(error);
//         this.isLoading = false;
//       }
//     );
//   }

// }



export class RicercaNomeComponent implements OnInit {
  prodotti: prodottoModel[] = [];
  searchText: string = '';
  selectedCategory: number = 0;
  selectedCategoryNome: string = 'All';
  isLoading: boolean = false;

  currentPage: number = 1;

  constructor(private prodottiService: ProdottiService, private route: ActivatedRoute) {
    // this.loadCards(this.currentPage);
    this.prodottiService.setCan(false);
  }

  can: boolean = this.prodottiService.getCan();
  totArray: number[] = [];
  tot: number = 0;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchText = params['searchText'] || '';
      this.selectedCategory = params['selectedCategory'] || 0;
      console.dir(this.searchText)
      //if (this.searchText) {
      this.prodottiService.setCan(true);
      this.prodottiService.setSearchValue(this.searchText, this.selectedCategory);
      this.cerca(this.currentPage);
      //}
    });
  }


  //questo sarebbe il load card
  cerca(page:number) {
    this.totArray = [];
    this.prodottiService.getTotProdotti(page).subscribe({
      next: (t) => {
        this.tot = t;
        this.tot = Math.ceil(this.tot / 10);
        console.log(this.tot);
        for (let i = 0; i < this.tot; i++) {
          this.totArray.push(i + 1);
        }
        console.log(this.totArray);
      },
      error: (error) => console.error(error),
    });

    // this.prodottiService.getProdotti(page).subscribe(
    //   (prodotti) => {
    //     this.prodotti = prodotti;
    //     console.log(this.currentPage);
    //     console.log(this.prodotti);
    //   },
    //   (error) => console.error(error)
    // );

    //numero pagine
    this.prodottiService.getSearch(page).subscribe(
      (prodotti) => {
        this.prodotti = prodotti;
        this.isLoading = false;//
        console.log(this.prodotti);
        console.log(this.prodotti.length);
        console.log(this.prodottiService.can)
      },
      (error) => {
        console.error(error);
        this.isLoading = false;
      }
    );

  }



  // loadCards(page: number) {
  //   this.totArray = [];
  //   this.prodottiService.getTotProdotti(page).subscribe({
  //     next: (t) => {
  //       this.tot = t;
  //       this.tot = Math.ceil(this.tot / 10);
  //       console.log(this.tot);
  //       for (let i = 0; i < this.tot; i++) {
  //         this.totArray.push(i + 1);
  //       }
  //       console.log(this.totArray);
  //     },
  //     error: (error) => console.error(error),
  //   });

  //   console.log(this.tot);
  //   console.log(this.prodotti);
  // }

  //serve per le pagine
  onPageSelect(page: number) {
    this.currentPage = page;
    this.cerca(page);
  }

}









// constructor(private prodottiService: ProdottiService) {
//   this.loadCards(this.currentPage);
//  this.prodottiService.setCan(false);

// }

// loadCards(page: number) {
//   this.totArray = [];
//   this.prodottiService.getTotProdotti(page).subscribe({
//     next: (t) => {
//       this.tot = t;
//       this.tot = Math.ceil(this.tot / 10);
//       console.log(this.tot);
//       for (let i = 0; i < this.tot; i++) {
//         this.totArray.push(i + 1);
//       }
//       console.log(this.totArray);
//     },
//     error: (error) => console.error(error),
//   });

//   this.prodottiService.getProdotti(page).subscribe(
//     (prodotti) => {
//       this.prodotti = prodotti;
//       console.log(this.currentPage);
//       console.log(this.prodotti);
//     },
//     (error) => console.error(error)
//   );


//   // this.prodottiService.getTotal(id, page).subscribe({
//   //   next: prodotti => this.tot = prodotti,
//   //   error: error => console.error(error)
//   // });

//   console.log(this.tot);
//   console.log(this.prodotti);
// }

// onPageSelect(page: number) {
//   this.currentPage = page;
//   this.loadCards(page);
// }