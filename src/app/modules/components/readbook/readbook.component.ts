import { Component, OnInit } from '@angular/core';
import { ReaderService } from 'src/app/reader.service';

@Component({
  selector: 'app-readbook',
  templateUrl: './readbook.component.html',
  styleUrls: ['./readbook.component.sass']
})
export class ReadbookComponent implements OnInit {

  book:any = {name: "",content: "", id: ""};

  constructor(private service: ReaderService) {
    this.book = this.service.book;
  }

  ngOnInit(): void {
  }

}
