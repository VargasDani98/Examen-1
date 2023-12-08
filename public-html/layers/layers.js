var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Departamentos_1 = new ol.format.GeoJSON();
var features_Departamentos_1 = format_Departamentos_1.readFeatures(json_Departamentos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_1.addFeatures(features_Departamentos_1);
var lyr_Departamentos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_1, 
                style: style_Departamentos_1,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_1.png" /> Departamentos'
            });
var format_m2501vA042008_HN_2 = new ol.format.GeoJSON();
var features_m2501vA042008_HN_2 = format_m2501vA042008_HN_2.readFeatures(json_m2501vA042008_HN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_m2501vA042008_HN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_m2501vA042008_HN_2.addFeatures(features_m2501vA042008_HN_2);
var lyr_m2501vA042008_HN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_m2501vA042008_HN_2, 
                style: style_m2501vA042008_HN_2,
                interactive: true,
                title: '<img src="styles/legend/m2501vA042008_HN_2.png" /> m2501vA042008_HN'
            });
var format_Asentamiento_Humanos_3 = new ol.format.GeoJSON();
var features_Asentamiento_Humanos_3 = format_Asentamiento_Humanos_3.readFeatures(json_Asentamiento_Humanos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Asentamiento_Humanos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Asentamiento_Humanos_3.addFeatures(features_Asentamiento_Humanos_3);
var lyr_Asentamiento_Humanos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Asentamiento_Humanos_3, 
                style: style_Asentamiento_Humanos_3,
                interactive: true,
                title: '<img src="styles/legend/Asentamiento_Humanos_3.png" /> Asentamiento_Humanos'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Departamentos_1.setVisible(true);lyr_m2501vA042008_HN_2.setVisible(true);lyr_Asentamiento_Humanos_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Departamentos_1,lyr_m2501vA042008_HN_2,lyr_Asentamiento_Humanos_3];
lyr_Departamentos_1.set('fieldAliases', {'Admin1name': 'Admin1name', 'CodigoNiv1': 'CodigoNiv1', });
lyr_m2501vA042008_HN_2.set('fieldAliases', {'NUMEROS': 'NUMEROS', 'NOMBRE': 'NOMBRE', 'CATEGORIA': 'CATEGORIA', 'DECRETO_NO': 'DECRETO_NO', 'PERIMETER_': 'PERIMETER_', 'HECTARES': 'HECTARES', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Asentamiento_Humanos_3.set('fieldAliases', {'COD': 'COD', 'DEPTO': 'DEPTO', 'MUNIC': 'MUNIC', 'ALDEA': 'ALDEA', 'CASERIO': 'CASERIO', 'POB_2001': 'POB_2001', 'POB_2013': 'POB_2013', 'X_NAD27': 'X_NAD27', 'Y_NAD27': 'Y_NAD27', 'X_WGS84': 'X_WGS84', 'X_WGS841': 'X_WGS841', 'POB_2013_': 'POB_2013_', });
lyr_Departamentos_1.set('fieldImages', {'Admin1name': '', 'CodigoNiv1': '', });
lyr_m2501vA042008_HN_2.set('fieldImages', {'NUMEROS': '', 'NOMBRE': '', 'CATEGORIA': '', 'DECRETO_NO': '', 'PERIMETER_': '', 'HECTARES': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Asentamiento_Humanos_3.set('fieldImages', {'COD': '', 'DEPTO': '', 'MUNIC': '', 'ALDEA': '', 'CASERIO': '', 'POB_2001': '', 'POB_2013': '', 'X_NAD27': '', 'Y_NAD27': '', 'X_WGS84': '', 'X_WGS841': '', 'POB_2013_': '', });
lyr_Departamentos_1.set('fieldLabels', {'Admin1name': 'inline label', 'CodigoNiv1': 'inline label', });
lyr_m2501vA042008_HN_2.set('fieldLabels', {'NUMEROS': 'inline label', 'NOMBRE': 'inline label', 'CATEGORIA': 'inline label', 'DECRETO_NO': 'inline label', 'PERIMETER_': 'inline label', 'HECTARES': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_Asentamiento_Humanos_3.set('fieldLabels', {'COD': 'inline label', 'DEPTO': 'inline label', 'MUNIC': 'inline label', 'ALDEA': 'inline label', 'CASERIO': 'inline label', 'POB_2001': 'inline label', 'POB_2013': 'inline label', 'X_NAD27': 'inline label', 'Y_NAD27': 'inline label', 'X_WGS84': 'inline label', 'X_WGS841': 'inline label', 'POB_2013_': 'inline label', });
lyr_Asentamiento_Humanos_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});