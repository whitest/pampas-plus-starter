import {
    defaultOpts
} from './defaultConf';
const init = (element) => {
    let map = new BMap.Map(element[0]);
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());
    map.enableScrollWheelZoom();
    return map;
}
export default init;
