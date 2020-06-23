from django.conf.urls import include, url
from django.conf import settings
from django.conf.urls.static import static
from afrh_prj.views.active_consultations import ActiveConsultationsView

urlpatterns = [
    url(r'^', include('arches.urls')),
    url(r'^activeconsultations', ActiveConsultationsView.as_view(),
        name='activeconsultations'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
