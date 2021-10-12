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
      url : 'http://mapproxy-dev-map-proxy-map-proxy-route-raster-dev.apps.v0h0bdx6.eastus.aroapp.io/wmts/blue_marb_2/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.png',
      layer : 'blue_marb_2',
      style : 'default',
      format : 'image/png',
      tileMatrixSetID : 'newGrids',
      tilingScheme: new Cesium.GeographicTilingScheme(),
      rectangle : Cesium.Rectangle.fromDegrees(34, 30, 36, 34),
    });
    const viewer = new Cesium.Viewer(this.cesiumContainer.nativeElement, {
      imageryProvider: mapProxyWmtsWGS84,
      sceneMode : Cesium.SceneMode.COLUMBUS_VIEW,
      mapProjection : new Cesium.GeographicProjection()
    });
    viewer.entities.add({
      rectangle : {
        coordinates : Cesium.Rectangle.fromDegrees(34, 30, 36, 34),
        material : Cesium.Color.GREEN.withAlpha(0.0),
        height : 0.0,
        outline : true,
        outlineColor : Cesium.Color.WHITE
      }
    });
  }
}
