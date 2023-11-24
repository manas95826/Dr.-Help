from django.urls import path

from . import views

# URL conf
urlpatterns = [
    path("register-doctor/", views.register_doctor),
    path("login-doctor/", views.login_doctor),
    path("register-patient/", views.register_patient),
    path("login-patient/", views.login_patient),
]
