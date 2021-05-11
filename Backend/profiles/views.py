from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Profile
from .serializers import ProfileSerializer, UserSerializer
from django.contrib.auth import get_user_model
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response

class ProfileCreateAPIView(generics.CreateAPIView):
    parser_classes = (MultiPartParser, FormParser)
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class ProfileRetrieveAPIView(generics.RetrieveAPIView):
    lookup_field = "username"
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class ProfileListAPIView(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class ProfileRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    lookup_field = "username"
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    parser_classes = [MultiPartParser, FormParser]

class UserCreateView(generics.CreateAPIView):
	model = get_user_model()
	parser_classes = [MultiPartParser]
	serializer_class = UserSerializer
	permission_classes = [permissions.AllowAny]