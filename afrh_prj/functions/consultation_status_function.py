import uuid
import json
from arches.app.functions.base import BaseFunction
from arches.app.models import models
from arches.app.models.tile import Tile
from arches.app.datatypes.datatypes import DataTypeFactory


details = {
    'name': 'Consultation Status',
    'type': 'node',
    'description': 'Triggers change in status node of consultation instance',
    'defaultconfig': {"triggering_nodegroups": []},
    'classname': 'ConsultationStatusFunction',
    'component': '',
    'functionid':'96efa95a-1e2c-4562-ac1f-b415796f9f75'
}

class ConsultationStatusFunction(BaseFunction): 

    def save(self, tile, request):
        activitity_status_nodegroupid = "83f05a05-3c8c-11ea-b9b7-027f24e6fd6b"
        default_status_concept_value = "3f462246-9d5b-586b-cdeb-bbf4e328278f" # Activity Initiatted

        if not Tile.objects.exists(nodegroupid=activitity_status_nodegroupid, resourceinstance=tile.resourceinstance):
            new_tile = Tile()
            new_tile.resourceinstance = tile.resourceinstance
            new_tile.data = {}
            new_tile.data[activitity_status_nodegroupid] = default_status_concept_value
            new_tile.data["83f05a08-3c8c-11ea-b9b7-027f24e6fd6b"] = '' # Current Status Desc, rich text
            new_tile.nodegroup = tile.nodegroup
            new_tile.save()

        return

    
    def delete(self,tile,request):
        raise NotImplementedError

    
    def on_import(self,tile):
        activitity_status_nodegroupid = "83f05a05-3c8c-11ea-b9b7-027f24e6fd6b"
        default_status_concept_value = "3f462246-9d5b-586b-cdeb-bbf4e328278f" # Activity Initiatted

        if not Tile.objects.exists(nodegroupid=activitity_status_nodegroupid, resourceinstance=tile.resourceinstance):
            new_tile = Tile()
            new_tile.resourceinstance = tile.resourceinstance
            new_tile.data = {}
            new_tile.data[activitity_status_nodegroupid] = default_status_concept_value
            new_tile.data["83f05a08-3c8c-11ea-b9b7-027f24e6fd6b"] = '' # Current Status Desc, rich text
            new_tile.nodegroup = tile.nodegroup
            new_tile.save()

        return

    
    def after_function_save(self,tile,request):
        raise NotImplementedError
    
    
    def get(self):
        raise NotImplementedError
