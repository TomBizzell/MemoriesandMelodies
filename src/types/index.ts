export interface TimelineEntry {
  date: string;
  photos: Photo[];
  songs: Song[];
}

export interface Photo {
  id: string;
  url: string;
  caption: string;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  albumCover: string;
}