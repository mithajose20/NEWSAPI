import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';
import { ElementSchemaRegistry } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	mArticles:Array<any>;
	mSources:Array<any>;


	constructor(private newsapi:NewsApiService){
		  
	}

	ngOnInit() {
        //load articles
		this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
	
		//load news sources
		this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);	
	
    }


	searchArticles(source){
		this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
	}
	addlike(art){
    if(art.like==undefined)
	art.like=true;
	else
	art.like=!art.like;
	}

  
}
