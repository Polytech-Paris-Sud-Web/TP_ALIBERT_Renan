import {Component, Input, Output, OnInit} from '@angular/core';
import {Article} from '../models/article';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  @Input() //article? : { title? :string, content? : string, authors? : string }
  article : Article;

  @Output()
  deletedArticle : EventEmitter<Article> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  delete(){
    this.deletedArticle.emit(this.article);
  }
}
