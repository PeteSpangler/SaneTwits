from django.urls import path
from . import views
from .views import (tweet_feed_view,tweet_action_view,)

urlpatterns = [
    path('', views.TweetListAPIView.as_view(), name='tweet_list'),
    path('feed/', tweet_feed_view),
    path('action/', tweet_action_view),
    path('create/', views.TweetCreateAPIView.as_view(), name='tweet_create'),
    path('<int:id>/', views.TweetRetrieveAPIView.as_view(), name='tweet_detail'),
    path('<int:id/delete', views.TweetDestroyAPIView.as_view(), name='tweet_delete'),
]