SET CLIENT_ENCODING TO UTF8;
SET STANDARD_CONFORMING_STRINGS TO ON;
BEGIN;

-- INSERT INTO map_sources(name, source)
--     VALUES ('master-plan-zone', '{
--         "data": "/geojson?nodeid=c1033fc2-46d3-11ea-b9b7-027f24e6fd6b&include_geojson_link=true",
--         "type": "geojson"
--     }');

-- INSERT INTO map_sources(name, source)
--     VALUES ('archaeology-zone', '{
--         "data": "/geojson?nodeid=b25075f4-46c3-11ea-b9b7-027f24e6fd6b&include_geojson_link=true",
--         "type": "geojson"
--     }');

-- INSERT INTO map_sources(name, source)
--     VALUES ('historic-area', '{
--         "data": "/geojson?nodeid=faa37040-46c3-11ea-b9b7-027f24e6fd6b&include_geojson_link=true",
--         "type": "geojson"
--     }');

-- INSERT INTO map_sources(name, source)
--     VALUES ('inventory-resource', '{
--         "data": "/geojson?nodeid=87fad7bc-46c4-11ea-b9b7-027f24e6fd6b&include_geojson_link=true",
--         "type": "geojson"
--     }');

-- INSERT INTO map_sources(name, source)
--     VALUES ('character-area', '{
--         "data": "/geojson?nodeid=c7121254-46c3-11ea-b9b7-027f24e6fd6b&include_geojson_link=true",
--         "type": "geojson"
--     }');

INSERT INTO map_sources(name, source)
    VALUES ('archaeology-and-historic-and-inventory', '{
        "data": "/geojson?nodeids=b25075f4-46c3-11ea-b9b7-027f24e6fd6b,faa37040-46c3-11ea-b9b7-027f24e6fd6b,87fad7bc-46c4-11ea-b9b7-027f24e6fd6b&include_geojson_link=true",
        "type": "geojson"
    }');

INSERT INTO map_sources(name, source)
VALUES ('character-areas-and-master-plans', '{
    "data": "/geojson?nodeids=c7121254-46c3-11ea-b9b7-027f24e6fd6b,c1033fc2-46d3-11ea-b9b7-027f24e6fd6b&include_geojson_link=true",
    "type": "geojson"
}');