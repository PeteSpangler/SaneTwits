from django.urls import path
from . import views

urlpatterns = [
    path('', views.ProfileListAPIView.as_view(), name='profile_list'),
    path('create/', views.ProfileCreateAPIView.as_view(), name='profile_create'),
    path('<str:username>/', views.ProfileRetrieveAPIView.as_view(), name='profile_detail'),
    path('<str:username>/update/', views.ProfileRetrieveUpdateAPIView.as_view(), name='profile_update'),
    path('<str:username>/follow', views.ProfileRetrieveUpdateAPIView.as_view(), name='profile_follow'),
]