import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists:any[] = [];

  urlSearch:string = "https://api.spotify.com/v1/";

  constructor( private http:Http ) { }

  getArtists( term:string ){
    let headers = new Headers();
    headers.append( 'authorization', 'Bearer BQAJ7X6M3KlBsZQnzchB5AhctQDiqkZHmfeQXQO3i8nFRntFMsOdPxeqIudziSTXk0zC54mb07Qdb8vznIX65A' );

    let query = `search?q=${ term }&type=Artist`;
    let url = this.urlSearch + query;

    return this.http.get( url, { headers } ).map( res => {
              this.artists = res.json().artists.items;
              console.log(this.artists);

              //return res.json().artists.items;

            } );
  }

  getArtist( id:string ){
    let headers = new Headers();
    headers.append( 'authorization', 'Bearer BQAJ7X6M3KlBsZQnzchB5AhctQDiqkZHmfeQXQO3i8nFRntFMsOdPxeqIudziSTXk0zC54mb07Qdb8vznIX65A' );

    let query = `artists/${ id }`;
    let url = this.urlSearch + query;

    return this.http.get( url, { headers } ).map( res => {
              console.log( res.json() );
              return res.json();

            } );
  }

  getTop( id:string ){
    let headers = new Headers();
    headers.append( 'authorization', 'Bearer BQAJ7X6M3KlBsZQnzchB5AhctQDiqkZHmfeQXQO3i8nFRntFMsOdPxeqIudziSTXk0zC54mb07Qdb8vznIX65A' );

    let query = `artists/${ id }/top-tracks?country=US`;
    let url = this.urlSearch + query;

    return this.http.get( url, { headers } ).map( res => {
              console.log( res.json().tracks );
              return res.json().tracks;

            } );
  }

}
