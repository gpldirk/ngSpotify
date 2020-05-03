import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ParamMap} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {
  private searchURL: string;
  private artistURL: string;
  private albumsURL: string;
  private albumURL: string;
  private token = 'BQCNyhzcHRYmcS2DXf4OfqnRu-UaARFOd0v01Tc23Xuh-Da04Wr_f_nKb0ZMnaKeqf0nJ2UvSRd36Un31I-3KcO2vdB0rGwNKVVTdSR7-ywafX6IL0h-888rjt9z1jFmwyHHdAq_71uaJeqffIXzNKwCHhypl9tfyEY';
  
  constructor(private http: HttpClient) { }

  searchMusic(str: string, type = 'artist') {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.token);
    this.searchURL = 'https://api.spotify.com/v1/search?q=' + str + '&type=' + type + '&market=US&offset=0&limit=20';
    return this.http.get(this.searchURL, {headers}).pipe(map(res => res));
  }

  getArtist(id: string) {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.token);
    this.artistURL = 'https://api.spotify.com/v1/artists/' + id;
    return this.http.get(this.artistURL, {headers}).pipe(map(res => res));
  }

  getAlbums(artistId: string) {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.token);
    this.albumsURL = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
    return this.http.get(this.albumsURL, {headers}).pipe(map(res => res));
  }

  getAlbum(albumId: string) {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.token);
    this.albumURL = 'https://api.spotify.com/v1/albums/' + albumId;
    return this.http.get(this.albumURL, {headers}).pipe(map(res => res));
  }
}
