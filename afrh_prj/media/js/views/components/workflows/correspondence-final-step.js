define([
    'jquery',
    'arches',
    'knockout',
    'views/components/workflows/new-tile-step',
    'viewmodels/alert'
], function($, arches, ko, NewTileStep, AlertViewModel) {
    function viewModel(params) {

        NewTileStep.apply(this, [params]);
        var self = this;
        self.loading(true);
        params.tile = self.tile;
        this.letterFileNodeId = "2541f898-e0c7-11ea-8120-784f435179ea";
        this.letterTypeNodegroupId = "086248f4-e0c7-11ea-8120-784f435179ea";
        this.letterTypeNodeId = "3cde0f6e-e0c7-11ea-8120-784f435179ea";
        this.urls = arches.urls;
        this.report = ko.observable();

        params.parenttileid(params.workflow.state.steps[0].tileid)
        this.nodegroupids = params.workflow.steps
            .filter(function(step){return ko.unwrap(step.nodegroupid);})
            .map(function(x){return ko.unwrap(x.nodegroupid);});

        this.workflowJSON = ko.observable();
        this.workflows = ko.observableArray();
        this.getJSON = function() {
            $.ajax({
                type: "GET",
                data: {
                    "json":true
                },
                context: self,
                success: function(data){
                    self.workflowJSON(data);
                },
                error: function(response) {
                    if(response.statusText !== 'abort'){
                        self.viewModel.alert(new AlertViewModel('ep-alert-red', arches.requestFailed.title, response.responseText));
                    }
                }
            });
            self.loading(false);
        };
        this.getJSON();


        self.requirements = params.requirements;
        params.tile = self.tile;
        this.dataURL = ko.observable(false);

        this.retrieveFile = function(tile) {
            var templateId = '';
            $.ajax({
                type: "POST",
                url: arches.urls.root + 'filetemplate',
                data: {
                    "resourceinstance_id": tile.resourceinstance_id,
                    "template_id": templateId,
                    "parenttile_id":tile.parenttile_id
                },
                context: self,
                success: function(data){
                    self.dataURL(data.tile.data[self.letterFileNodeId][0].url);
                    self.loading(false);
                },
                error: function(response) {
                    if(response.statusText !== 'abort'){
                        self.alert(new AlertViewModel('ep-alert-red', arches.requestFailed.title, response.responseText));
                    }
                }
            });
            self.loading(false);
        };

        var createDocxTileOnLoad = self.tile.subscribe(function(val) {
            if(val) {
                params.resourceid(val.resourceinstance_id);
                self.retrieveFile(val);
                createDocxTileOnLoad.dispose();
            }
        });
    }

    return ko.components.register('correspondence-final-step', {
        viewModel: viewModel,
        template: { require: 'text!templates/views/components/workflows/correspondence-final-step.htm' }
    });
});
