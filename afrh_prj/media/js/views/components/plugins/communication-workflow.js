define([
    'knockout',
    'arches',
    'viewmodels/workflow',
    'viewmodels/workflow-step',
    'views/components/workflows/new-tile-step',
    'views/components/workflows/select-resource-step'
], function(ko, arches, Workflow, Step) {
    return ko.components.register('communication-workflow', {
        viewModel: function(params) {
            var self = this;
            params.steps = [
                {
                    title: 'Related Activity / Communication Type',
                    name: 'relatedconsultation',
                    description: 'Select the related consultation and select a type for the Communication',
                    component: 'views/components/workflows/select-resource-step',
                    componentname: 'select-resource-step',
                    graphid: '6da8cd00-3c8a-11ea-b9b7-027f24e6fd6b',
                    nodegroupid: 'b8c57f42-e115-11ea-b3e5-784f435179ea',
                    resourceid: null,
                    tileid: null,
                    parenttileid: null,
                    required: true,
                    icon: 'fa-tag',
                    nameheading: 'Communication',
                    namelabel: '[no label]',
                    wastebin: {tile: null, description: 'a communication instance'}
                },
                {
                    title: 'Dates',
                    description: 'Date of Communication',
                    component: 'views/components/workflows/new-tile-step',
                    componentname: 'new-tile-step',
                    graphid: '6da8cd00-3c8a-11ea-b9b7-027f24e6fd6b',
                    nodegroupid: '9ecb3658-e116-11ea-b3e5-784f435179ea',
                    resourceid: null,
                    tileid: null,
                    parenttileid: null,
                    required: false,
                    icon: 'fa-calendar'
                },
                {
                    title: 'Notes',
                    description: ' Meeting notes',
                    component: 'views/components/workflows/new-tile-step',
                    componentname: 'new-tile-step',
                    graphid: '6da8cd00-3c8a-11ea-b9b7-027f24e6fd6b',
                    nodegroupid: '0dc5a6d4-e116-11ea-b3e5-784f435179ea',
                    resourceid: null,
                    tileid: null,
                    parenttileid: null,
                    required: false,
                    icon: 'fa-lightbulb-o'
                },
                {
                    title: 'Follow-On Actions',
                    description: 'Follow-on actions, To-Dos',
                    component: 'views/components/workflows/new-tile-step',
                    componentname: 'new-tile-step',
                    graphid: '6da8cd00-3c8a-11ea-b9b7-027f24e6fd6b',
                    nodegroupid: 'd218a19e-e116-11ea-b3e5-784f435179ea',
                    resourceid: null,
                    tileid: null,
                    parenttileid: null,
                    required: false,
                    icon: 'fa-clipboard'
                },
                {
                    title: 'Upload Documents',
                    description: 'Document Upload',
                    component: 'views/components/workflows/new-tile-step',
                    componentname: 'new-tile-step',
                    graphid: '6da8cd00-3c8a-11ea-b9b7-027f24e6fd6b',
                    nodegroupid: 'b5a46b9c-e116-11ea-b3e5-784f435179ea',
                    resourceid: null,
                    tileid: null,
                    parenttileid: null,
                    required: false,
                    icon: 'fa-file-o'
                },
                {
                    title: 'List Attendees',
                    description: 'Select one or multiple Persons privy to this Communication',
                    component: 'views/components/workflows/new-tile-step',
                    componentname: 'new-tile-step',
                    graphid: '6da8cd00-3c8a-11ea-b9b7-027f24e6fd6b',
                    nodegroupid: '11a691ea-e117-11ea-b3e5-784f435179ea',
                    resourceid: null,
                    tileid: null,
                    parenttileid: null,
                    required: false,
                    icon: 'fa-file-o'
                },
                {
                    title: 'Add Communication Complete',
                    description: 'Choose an option below',
                    component: 'views/components/workflows/final-step',
                    componentname: 'final-step',
                    graphid: '6da8cd00-3c8a-11ea-b9b7-027f24e6fd6b',
                    icon: 'fa-check',
                    resourceid: null,
                    tileid: null,
                    parenttileid: null
                }
            ];

            Workflow.apply(this, [params]);
            // this.quitUrl = arches.urls.plugin('init-workflow');
            self.getJSON('communication-workflow');

            self.activeStep.subscribe(this.updateState);

            self.ready(true);
        },
        template: { require: 'text!templates/views/components/plugins/communication-workflow.htm' }
    });
});
