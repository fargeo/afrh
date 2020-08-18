from django.conf.urls import include, url
from django.conf import settings
from django.conf.urls.static import static
from afrh_prj.views.active_consultations import ActiveConsultationsView
from afrh_prj.views.file_template import FileTemplateView

urlpatterns = [
    url(r'^', include('arches.urls')),
    url(r'^activeconsultations', ActiveConsultationsView.as_view(),
        name='activeconsultations'),
    url(r'^filetemplate', FileTemplateView.as_view(), name='filetemplate'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
