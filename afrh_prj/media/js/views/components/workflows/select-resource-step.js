define([
    'underscore',
    'jquery',
    'arches',
    'knockout',
    'knockout-mapping',
    'views/components/workflows/new-tile-step'
], function(_, $, arches, ko, koMapping, NewTileStep) {
    function viewModel(params) {
        var self = this;
        NewTileStep.apply(this, [params]);
        this.resValue = ko.observable();
        this.disableResourceSelection = ko.observable(false);
        this.loading(true);
        this.graphids = [params.graphid()];
        this.nameheading = params.nameheading;
        this.namelabel = params.namelabel;
        this.resValue.subscribe(function(val){
            if (ko.unwrap(self.tile) && !self.tile().resourceinstance_id) {
                self.tile().resourceinstance_id = ko.unwrap(val[0].resourceId);
            }
            params.resourceid(ko.unwrap(val[0].resourceId));
        }, this);
        this.resourceDisplayName = ko.observable();
        var lookupResourceInstanceData = function(resourceid) {
            return window.fetch(arches.urls.search_results + "?id=" + resourceid)
                .then(function(response){
                    if(response.ok) {
                        return response.json();
                    }
                })
                .then(function(json) {
                    return json["results"]["hits"]["hits"][0]["_source"];
                })
        };

        this.card.subscribe(function(val){ if(ko.unwrap(val) != undefined) { this.loading(false); } }, this);
        this.tile.subscribe(function(val){ 
            if(ko.unwrap(val) != undefined) { 
                this.loading(false); 
            } 
            if (val.resourceinstance_id) {
                var resourceInfo = lookupResourceInstanceData(val.resourceinstance_id);
                resourceInfo.then(function(instance){
                    self.resourceDisplayName(instance.displayname);
                });
            }
        }, this);
        params.tile = self.tile;

        self.onSaveSuccess = function(tiles) {
            var tile;
            if (tiles.length > 0 || typeof tiles == 'object') {
                tile = tiles[0] || tiles;
            }
            self.setStateProperties();
            if (params.workflow) {
                params.workflow.updateUrl();
            }
            if (self.completeOnSave === true) { self.complete(true); }
        };
    }

    ko.components.register('select-resource-step', {
        viewModel: viewModel,
        template: {
            require: 'text!templates/views/components/workflows/select-resource-step.htm'
        }
    });

    return viewModel;
});
