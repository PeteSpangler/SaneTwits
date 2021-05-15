from django.urls import path
from . import views

urlpatterns = [
    path('', views.TweetListAPIView.as_view(), name='tweet_list'),
    path('create/', views.TweetCreateAPIView.as_view(), name='tweet_create'),
    path('<int:id>/', views.TweetRetrieveAPIView.as_view(), name='tweet_detail'),
    path('<int:id/delete', views.TweetDestroyAPIView.as_view(), name='tweet_delete'),
]