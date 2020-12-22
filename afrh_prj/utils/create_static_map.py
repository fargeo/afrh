import staticmaps
import os


class StaticMapCreator(object):
    def __init__(self, poly_fill = "#00FF003F", line_color = "#00FF00", outline_color = "#ff0000", marker_color= "#00FF00"):
        self.poly_fill = poly_fill
        self.line_color = line_color
        self.outline_color = outline_color
        self.marker_color = marker_color
        self.tile_provider_OSMH = staticmaps.TileProvider(
            "humanitarian",
            url_pattern="https://$s.tile.openstreetmap.fr/hot/$z/$x/$y.png",
            shards=["a", "b", "c"],
            attribution="Maps & Data (C) OpenStreetMap.org contributors",
            max_zoom=19,
        )
        self.context = staticmaps.Context()
        # context.set_tile_provider(staticmaps.tile_provider_StamenTerrain)
        self.context.set_tile_provider(self.tile_provider_OSMH)

    def convert_from_polygon(self, coords):
        coords = coords[0]
        geom = staticmaps.Area(
            [staticmaps.create_latlng(lat, lng) for lng, lat in coords],
            fill_color=staticmaps.parse_color(self.poly_fill),
            width=2,
            color=staticmaps.parse_color(self.outline_color),
        )
        self.context.add_object(geom)

    def convert_from_line(self, coords, halo=3):
        geom = staticmaps.Line(
            [staticmaps.create_latlng(lat, lng) for lng, lat in coords],
            color=staticmaps.parse_color(self.outline_color),
            width=halo
        )
        self.context.add_object(geom)
        geom = staticmaps.Line(
            [staticmaps.create_latlng(lat, lng) for lng, lat in coords],
            color=staticmaps.parse_color(self.line_color),
            width=2
        )
        self.context.add_object(geom)

    def convert_from_point(self, coords):
        geom = staticmaps.Marker(
            staticmaps.create_latlng(coords[1], coords[0]),
            color=staticmaps.parse_color(self.marker_color),
            size=5
        )
        self.context.add_object(geom)

    def create_map(self, geojson, output, height=500, width=800):
        for feature in geojson["features"]:
            coords = feature["geometry"]["coordinates"]
            geom_type = feature["geometry"]["type"]
            if geom_type == "Polygon":
                self.convert_from_polygon(coords)
            if geom_type == "LineString":
                self.convert_from_line(coords)
            if geom_type == "Point":
                self.convert_from_point(coords)
        self.context.set_zoom(17)
        image = self.context.render_cairo(width, height)
        image.write_to_png(output)
