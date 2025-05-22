var wms_layers = [];


        var lyr_Mapa_0 = new ol.layer.Tile({
            'title': 'Mapa',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_puntosdedescargadeaguasresiduales_1 = new ol.format.GeoJSON();
var features_puntosdedescargadeaguasresiduales_1 = format_puntosdedescargadeaguasresiduales_1.readFeatures(json_puntosdedescargadeaguasresiduales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puntosdedescargadeaguasresiduales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puntosdedescargadeaguasresiduales_1.addFeatures(features_puntosdedescargadeaguasresiduales_1);
var lyr_puntosdedescargadeaguasresiduales_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_puntosdedescargadeaguasresiduales_1, 
                style: style_puntosdedescargadeaguasresiduales_1,
                popuplayertitle: 'puntos de descarga de aguas residuales ',
                interactive: true,
                title: '<img src="styles/legend/puntosdedescargadeaguasresiduales_1.png" /> puntos de descarga de aguas residuales '
            });

lyr_Mapa_0.setVisible(true);lyr_puntosdedescargadeaguasresiduales_1.setVisible(true);
var layersList = [lyr_Mapa_0,lyr_puntosdedescargadeaguasresiduales_1];
lyr_puntosdedescargadeaguasresiduales_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', });
lyr_puntosdedescargadeaguasresiduales_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_puntosdedescargadeaguasresiduales_1.set('fieldLabels', {'id': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', });
lyr_puntosdedescargadeaguasresiduales_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});