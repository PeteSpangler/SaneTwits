from django.conf import settings
from django.shortcuts import render
from .models import Tweet
from .serializers import TweetSerializer
from rest_framework import generics, permissions, serializers
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken

class TweetCreateAPIView(generics.CreateAPIView):
    parser_classes = (MultiPartParser, FormParser, JSONParser)
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer

class TweetRetrieveAPIView(generics.RetrieveAPIView):
    lookup_field = "id"
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer

class TweetDestroyAPIView(generics.DestroyAPIView):
    lookup_field = "id"
    queryset = Tweet.objects.all()

class TweetListAPIView(generics.ListAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer


class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
            context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, create = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'username': user.username,
            'user_id': user.id
        })
