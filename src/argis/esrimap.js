import Map from "@arcgis/core/Map";
import Ground from "@arcgis/core/Ground";
import MapView from "@arcgis/core/views/MapView";
import SceneView from "@arcgis/core/views/SceneView";
import SceneLayer from "@arcgis/core/layers/SceneLayer";

export const createMap = () => {
  return new Map({
    basemap: "topo-vector",
    ground: new Ground({
      navigationConstraint: "stay-above",
    }),
  });
};
// from master

// changes from W2 branch
// changes from W3

export const createMap2D = (map, initialParam) => {
  const view = new MapView({
    map: map,
    container: initialParam.el,
    zoom: 8,
    center: [-118, 34],
    //   ui: {
    //     components: [],
    //   },
    //   constraints: {
    //     minZoom,
    //     maxZoom,
    //   },
  });

  return view;
};

export const createMap3D = (map, initialParam) => {
  const view = new SceneView({
    map: map,
    container: initialParam.el,
    zoom: 8,
    center: [-118, 34],
    //   ui: {
    //     components: [],
    //   },
    //   qualityProfile: 'low',
    //   environment: {
    //     background: {
    //       type: 'color',
    //       color: [0, 0, 0, 1]
    //     },
    //     starsEnabled: false,
    //     atmosphereEnabled: false,
    //     lighting: {
    //       date: new Date("June 22, 2019 04:00:00 UTC"),
    //       directShadowsEnabled: false,
    //       ambientOcclusionEnabled: false,
    //     }
    //   }
  });

  return view;
};

export const createSceneLayer = (params) => {
  const sl = new SceneLayer({
    url: params.url,
  });
  console.log("sl", sl);
  return sl;
};
