from django.urls import path
from . import views
# app_name = 'membership'

urlpatterns = [
    path('', views.index, name="index"),
    path('zbout/', views.about, name="about"),
    path('memberships/', views.MembershipView.as_view(), name='select'),
]