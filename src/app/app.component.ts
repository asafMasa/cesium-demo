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
    // const cesiumOSMLayer = new Cesium.OpenStreetMapImageryProvider({
    //   url : 'https://a.tile.openstreetmap.org/'
    // });

    const mapProxyWmtsWGS84 =new Cesium.WebMapTileServiceImageryProvider({
      url : 'http://mapproxy-dev-map-proxy-map-proxy-route-raster-dev.apps.v0h0bdx6.eastus.aroapp.io/wmts',
      layer : 'MAS_6_ORT_247993-1.0',
      style : 'newGrids',
      format : 'image/jpeg',
      tileMatrixSetID : 'default028mm',
      // tileMatrixLabels : ['default028mm:0', 'default028mm:1', 'default028mm:2' ...],
      maximumLevel: 19,
      rectangle : Cesium.Rectangle.fromDegrees(34, 34, 36, 36)
    })
    // const mapProxyWmtsWGS84 = new Cesium.WebMapTileServiceImageryProvider({
    //   url : '../wmts/bluemarble_il/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.png',
    //   layer : 'bluemarble_il',
    //   style : 'default',
    //   format : 'image/png',
    //   tileMatrixSetID : 'newGrids',
    //   tilingScheme: new Cesium.GeographicTilingScheme()
    // });

    const viewer = new Cesium.Viewer(this.cesiumContainer.nativeElement, {
      imageryProvider: mapProxyWmtsWGS84
    });
    viewer.entities.add({
      rectangle : {
        coordinates : Cesium.Rectangle.fromDegrees(34, 34, 36, 36),
        material : Cesium.Color.GREEN.withAlpha(0.0),
        height : 0.0,
        outline : true,
        outlineColor : Cesium.Color.WHITE
      }
    });
  }
}
