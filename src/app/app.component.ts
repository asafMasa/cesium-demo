import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

declare const Cesium: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'cesium-demo';


  @ViewChild('cesiumContainer') cesiumContainer: ElementRef;

  constructor() {


  }

  ngAfterViewInit() {
    const cesiumOSMLayer = new Cesium.OpenStreetMapImageryProvider({
      url : 'https://a.tile.openstreetmap.org/'
    });

    // const mapProxyWmtsWGS84 = new Cesium.WebMapTileServiceImageryProvider({
    //   url : '../wmts/bluemarble_il/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.png',
    //   layer : 'bluemarble_il',
    //   style : 'default',
    //   format : 'image/png',
    //   tileMatrixSetID : 'newGrids',
    //   tilingScheme: new Cesium.GeographicTilingScheme()
    // });

    new Cesium.Viewer(this.cesiumContainer.nativeElement, {
      imageryProvider: cesiumOSMLayer
    });
  }
}
