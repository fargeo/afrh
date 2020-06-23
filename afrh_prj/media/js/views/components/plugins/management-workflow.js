define([
    'knockout',
    'jquery',
    'arches',
    'viewmodels/workflow',
    'viewmodels/workflow-step'
], function(ko, $, arches, Workflow) {
    return ko.components.register('management-workflow', {
        viewModel: function(params) {

            var self = this;

            params.steps = [
                {
                    title: 'Management Activity Name',
                    name: 'setname',
                    description: 'Name this Activity',
                    component: 'views/components/workflows/new-tile-step',
                    componentname: 'new-tile-step',
                    graphid: '6da8cd00-3c8a-11ea-b9b7-027f24e6fd6b',
                    nodegroupid: '6da8cd37-3c8a-11ea-b9b7-027f24e6fd6b',
                    resourceid: null,
                    tileid: null,
                    parenttileid: null,
                    required: true,
                    icon: 'fa-code-fork',
                    wastebin: {resourceid: null, description: 'a consulation instance'}
                },
                // {
                //     title: 'Related Application Area',
                //     name: 'setrelatedapplicationarea',
                //     description: 'Identify the Development Area for this Consultation',
                //     component: 'views/components/workflows/new-tile-step',
                //     componentname: 'new-tile-step',
                //     graphid: '6da8cd00-3c8a-11ea-b9b7-027f24e6fd6b',
                //     nodegroupid: '8d41e4ba-a250-11e9-9b20-00224800b26d',
                //     resourceid: null,
                //     tileid: null,
                //     parenttileid: null,
                //     required: true,
                //     icon: 'fa-code-fork',
                //     wastebin: {resourceid: null, description: 'a consulation instance'}
                // },
                {
                    title: 'Consultation Statement',
                    name: 'consultationstatement',
                    description: 'Write a scope of work',
                    component: 'views/components/workflows/new-tile-step',
                    componentname: 'new-tile-step',
                    graphid: '6da8cd00-3c8a-11ea-b9b7-027f24e6fd6b',
                    nodegroupid: '5a8422ad-3cac-11ea-b9b7-027f24e6fd6b',
                    resourceid: null,
                    tileid: null,
                    parenttileid: null,
                    required: false,
                    icon: 'fa-map-marker'
                },
                {
                    title: 'Consultation GeoJSON',
                    name: 'consultationlocation',
                    description: 'Set geospatial data for this consultation',
                    component: 'views/components/workflows/new-tile-step',
                    componentname: 'new-tile-step',
                    graphid: '6da8cd00-3c8a-11ea-b9b7-027f24e6fd6b',
                    nodegroupid: '429130d2-6b27-11ea-b9b7-027f24e6fd6b',
                    resourceid: null,
                    tileid: null,
                    parenttileid: null,
                    required: false,
                    icon: 'fa-map-marker'
                },
                {
                    title: 'Consultation Details',
                    name: 'setdetails',
                    description: 'Consultation Details',
                    component: 'views/components/workflows/new-tile-step',
                    componentname: 'new-tile-step',
                    graphid: '6da8cd00-3c8a-11ea-b9b7-027f24e6fd6b',
                    nodegroupid: '6da8cd16-3c8a-11ea-b9b7-027f24e6fd6b',
                    resourceid: null,
                    tileid: null,
                    parenttileid: null,
                    required: true,
                    class: '',
                    icon: 'fa-calendar-o'
                },
                // {
                //     title: 'Consultation Type',
                //     name: 'setconstype',
                //     description: 'Consultation Type',
                //     component: 'views/components/workflows/new-tile-step',
                //     componentname: 'new-tile-step',
                //     graphid: '6da8cd00-3c8a-11ea-b9b7-027f24e6fd6b',
                //     nodegroupid: '502f401e-3cae-11ea-b9b7-027f24e6fd6b',
                //     resourceid: null,
                //     tileid: null,
                //     parenttileid: null,
                //     required: true,
                //     icon: 'fa-list-alt'
                // },
                {
                    title: 'Action Agents',
                    description: 'Identify the key people/organizations associated with this consultation',
                    component: 'views/components/workflows/new-multi-tile-step',
                    componentname: 'new-multi-tile-step',
                    graphid: '6da8cd00-3c8a-11ea-b9b7-027f24e6fd6b',
                    nodegroupid: '6da8cd28-3c8a-11ea-b9b7-027f24e6fd6b',
                    resourceid: null,
                    tileid: null,
                    parenttileid: null,
                    required: false,
                    icon: 'fa-users'
                },
                {
                    title: 'Consultation Status',
                    name: 'setstatus',
                    description: 'Consultation Status',
                    component: 'views/components/workflows/new-tile-step',
                    componentname: 'new-tile-step',
                    graphid: '6da8cd00-3c8a-11ea-b9b7-027f24e6fd6b',
                    nodegroupid: '83f05a05-3c8c-11ea-b9b7-027f24e6fd6b',
                    resourceid: null,
                    tileid: null,
                    parenttileid: null,
                    required: true,
                    class: '',
                    icon: 'fa-calendar-o'
                },
                {
                    title: 'Add Consulation Complete',
                    description: 'Choose an option below',
                    component: 'views/components/workflows/final-step',
                    componentname: 'final-step',
                    graphid: '6da8cd00-3c8a-11ea-b9b7-027f24e6fd6b',
                    nodegroupid: '83f05a05-3c8c-11ea-b9b7-027f24e6fd6b', // consultation status
                    icon: 'fa-check',
                    resourceid: null,
                    tileid: null,
                    parenttileid: null
                }
            ];

            Workflow.apply(this, [params]);
            // this.quitUrl = "/arches-her" + arches.urls.plugin('init-workflow');
            // console.log(this.quitUrl);
            self.getJSON('management-workflow');

            self.activeStep.subscribe(this.updateState);

            self.ready(true);
        },
        template: { require: 'text!templates/views/components/plugins/management-workflow.htm' }
    });
});
