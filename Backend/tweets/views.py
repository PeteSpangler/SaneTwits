from django.conf import settings
from django.shortcuts import render
from .models import Tweet
from .serializers import TweetSerializer, TweetLikeSerializer, TweetDetailSerializer
from rest_framework import generics, permissions
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

class TweetCreateAPIView(generics.CreateAPIView):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer

class TweetRetrieveAPIView(generics.RetrieveAPIView):
    lookup_field = "id"
    queryset = Tweet.objects.all()
    serializer_class = TweetDetailSerializer

class TweetDestroyAPIView(generics.DestroyAPIView):
    lookup_field = "id"
    queryset = Tweet.objects.all()

class TweetListAPIView(generics.ListAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetDetailSerializer