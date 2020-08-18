define([
    'knockout',
    'arches',
    'viewmodels/workflow',
    'viewmodels/workflow-step',
    'views/components/workflows/new-tile-step',
    'views/components/workflows/select-resource-step'
], function(ko, arches, Workflow, Step) {
    return ko.components.register('correspondence-workflow', {
        viewModel: function(params) {
            var self = this;
            params.steps = [
                {
                    title: 'Select Related Consultation',
                    description: 'New Correspondence',
                    component: 'views/components/workflows/select-resource-step',
                    componentname: 'select-resource-step',
                    graphid: '6da8cd00-3c8a-11ea-b9b7-027f24e6fd6b',
                    nodegroupid: "086248f4-e0c7-11ea-8120-784f435179ea",
                    resourceid: null,
                    tileid: null,
                    parenttileid: null,
                    required: true,
                    icon: 'fa-tag',
                    wastebin: {tile: null, description: 'a communication instance'}
                },
                {
                    title: 'Correspondence Workflow Complete',
                    name: 'correspondencecomplete',
                    description: '',
                    component: 'views/components/workflows/correspondence-final-step',
                    componentname: 'correspondence-final-step',
                    graphid: '6da8cd00-3c8a-11ea-b9b7-027f24e6fd6b',
                    nodegroupid: "2541f898-e0c7-11ea-8120-784f435179ea",
                    resourceid: null,
                    tileid: null,
                    parenttileid: null,
                    icon: 'fa-cloud-upload',
                    nameheading: 'New Correspondence',
                    namelabel: '[no label]'
                }
            ];

            Workflow.apply(this, [params]);
            // this.quitUrl = arches.urls.plugin('init-workflow');
            self.getJSON('correspondence-workflow');

            self.activeStep.subscribe(this.updateState);

            self.ready(true);
        },
        template: { require: 'text!templates/views/components/plugins/correspondence-workflow.htm' }
    });
});
