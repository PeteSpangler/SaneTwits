from django.urls import path
from . import views

urlpatterns = [
    path('', views.ProfileListAPIView.as_view(), name='profile_list'),
    path('create/', views.ProfileCreateAPIView.as_view(), name='profile_create'),
    path('<slug:slug>/', views.ProfileRetrieveAPIView.as_view(), name='profile_detail'),
    path('<slug:slug>/update/', views.ProfileRetrieveUpdateAPIView.as_view(), name='profile_update'),
    path('<slug:slug>/follow/', views.ProfileRetrieveUpdateAPIView.as_view(), name='profile_follow'),
]