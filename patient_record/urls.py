from django.urls import path

from . import views

# URL conf
urlpatterns = [
    path("<str:patient_key>/record/", views.record),
]
