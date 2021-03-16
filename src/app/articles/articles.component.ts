import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Article } from "../models/article";
import { ArticleService } from "../services/article.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  
  private _articles: Observable<Article[]>; // { title: string; content: string; authors: string; }[];

  constructor(private articleService: ArticleService) {
  }
  articles(): Observable<Article[]> {
    return this._articles;
  }

  ngOnInit() {
    this._articles = this.articleService.get();
  }

  delete(article: Article) {
    this.articleService.delete(article.id).subscribe(()=>{
      this._articles = this.articleService.get();
    });
  }

  newArticles(article: Article){
    this._articles = this.articleService.get();
  }

}
