SET CLIENT_ENCODING TO UTF8;
SET STANDARD_CONFORMING_STRINGS TO ON;
BEGIN;

INSERT INTO map_sources(name, source)
    VALUES ('master-plan-zone', '{
        "data": "/geojson?nodeid=c1033fc2-46d3-11ea-b9b7-027f24e6fd6b&include_geojson_link=true",
        "type": "geojson"
    }');