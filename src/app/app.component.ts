import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

declare const Cesium: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
  title = 'cesium-demo';


  @ViewChild('cesiumContainer') cesiumContainer: ElementRef;

  constructor() {


  }

  ngAfterViewInit() {
    const cesiumBingLayer = new Cesium.BingMapsImageryProvider({
      url: 'https://dev.virtualearth.net',
      key: 'Ag9RlBTbfJQMhFG3fxO9fLAbYMO8d5sevTe-qtDsAg6MjTYYFMFfFFrF2SrPIZNq',
      mapStyle: Cesium.BingMapsStyle.AERIAL_WITH_LABELS
    });

    new Cesium.Viewer(this.cesiumContainer.nativeElement, {
      imageryProvider: cesiumBingLayer
    });
  }
}
