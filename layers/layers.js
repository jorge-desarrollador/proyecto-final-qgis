var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_distanciadetramo_1 = new ol.format.GeoJSON();
var features_distanciadetramo_1 = format_distanciadetramo_1.readFeatures(json_distanciadetramo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_distanciadetramo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_distanciadetramo_1.addFeatures(features_distanciadetramo_1);
var lyr_distanciadetramo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_distanciadetramo_1, 
                style: style_distanciadetramo_1,
                popuplayertitle: 'distancia de tramo',
                interactive: true,
                title: '<img src="styles/legend/distanciadetramo_1.png" /> distancia de tramo'
            });
var format_nuevos_puntos_empadronamiento_2 = new ol.format.GeoJSON();
var features_nuevos_puntos_empadronamiento_2 = format_nuevos_puntos_empadronamiento_2.readFeatures(json_nuevos_puntos_empadronamiento_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nuevos_puntos_empadronamiento_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nuevos_puntos_empadronamiento_2.addFeatures(features_nuevos_puntos_empadronamiento_2);
var lyr_nuevos_puntos_empadronamiento_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nuevos_puntos_empadronamiento_2, 
                style: style_nuevos_puntos_empadronamiento_2,
                popuplayertitle: 'nuevos_puntos_empadronamiento',
                interactive: true,
    title: 'nuevos_puntos_empadronamiento<br />\
    <img src="styles/legend/nuevos_puntos_empadronamiento_2_0.png" /> 1<br />\
    <img src="styles/legend/nuevos_puntos_empadronamiento_2_1.png" /> 2<br />\
    <img src="styles/legend/nuevos_puntos_empadronamiento_2_2.png" /> 3<br />\
    <img src="styles/legend/nuevos_puntos_empadronamiento_2_3.png" /> 4<br />\
    <img src="styles/legend/nuevos_puntos_empadronamiento_2_4.png" /> 5<br />\
    <img src="styles/legend/nuevos_puntos_empadronamiento_2_5.png" /> 6<br />\
    <img src="styles/legend/nuevos_puntos_empadronamiento_2_6.png" /> 7<br />\
    <img src="styles/legend/nuevos_puntos_empadronamiento_2_7.png" /> 8<br />\
    <img src="styles/legend/nuevos_puntos_empadronamiento_2_8.png" /> 9<br />\
    <img src="styles/legend/nuevos_puntos_empadronamiento_2_9.png" /> 10<br />\
    <img src="styles/legend/nuevos_puntos_empadronamiento_2_10.png" /> 11<br />\
    <img src="styles/legend/nuevos_puntos_empadronamiento_2_11.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_distanciadetramo_1.setVisible(true);lyr_nuevos_puntos_empadronamiento_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_distanciadetramo_1,lyr_nuevos_puntos_empadronamiento_2];
lyr_distanciadetramo_1.set('fieldAliases', {'id': 'id', 'tipo': 'tipo', 'distancia': 'distancia', });
lyr_nuevos_puntos_empadronamiento_2.set('fieldAliases', {'id': 'id', 'Distrito': 'Distrito', 'Direccion': 'Direccion', 'distancia de tramo_tipo': 'distancia de tramo_tipo', 'distancia de tramo_distancia': 'distancia de tramo_distancia', });
lyr_distanciadetramo_1.set('fieldImages', {'id': 'TextEdit', 'tipo': 'TextEdit', 'distancia': '', });
lyr_nuevos_puntos_empadronamiento_2.set('fieldImages', {'id': 'ValueRelation', 'Distrito': 'TextEdit', 'Direccion': 'TextEdit', 'distancia de tramo_tipo': 'TextEdit', 'distancia de tramo_distancia': '', });
lyr_distanciadetramo_1.set('fieldLabels', {'id': 'no label', 'tipo': 'inline label - always visible', 'distancia': 'no label', });
lyr_nuevos_puntos_empadronamiento_2.set('fieldLabels', {'id': 'no label', 'Distrito': 'no label', 'Direccion': 'header label - always visible', 'distancia de tramo_tipo': 'no label', 'distancia de tramo_distancia': 'no label', });
lyr_nuevos_puntos_empadronamiento_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});