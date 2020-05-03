import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: string;
  album: any;

  constructor(private spotifyService: SpotifyService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe((map) => {
        this.spotifyService.getAlbum(map.get('id'))
          .subscribe(album => {
            this.album = album;
          });
      });
  }

}
