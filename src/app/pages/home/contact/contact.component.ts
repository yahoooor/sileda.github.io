import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Browser, Map, map, tileLayer, marker, DivIcon} from 'leaflet';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  iconUrl = "https://decisionfarm.ca/assets/images/marker-icon-2x.png";

  ngAfterViewInit(): void {
    const initialState = { lng: 11, lat: 49, zoom: 4 };

    const lefletMap: Map = map(this.mapContainer.nativeElement).setView(
      [initialState.lat, initialState.lng],
      initialState.zoom
    );

    const baseUrl =
      'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

    tileLayer(baseUrl, {
      apiKey: '18c85a44a76042788847e2fb74d27386',
      maxZoom: 20,
      id: 'osm-bright',
    } as any).addTo(lefletMap);


    let icon;
    icon = new DivIcon({
      html: `<img src='${this.iconUrl}' width='8px'/>`
    });
    var mrk = marker([50.890505, 23.153990], {icon: icon}).addTo(lefletMap);
    lefletMap.setView(mrk.getLatLng(), 13)
  }
}

