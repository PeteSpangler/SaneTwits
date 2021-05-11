from django.conf import settings
from django.shortcuts import render
from .models import Tweet
from .serializers import TweetSerializer, TweetLikeSerializer, TweetDetailSerializer
from rest_framework import generics, permissions
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

class TweetCreateAPIView(generics.CreateAPIView):
    parser_classes = (MultiPartParser, FormParser)
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

# @permission_classes([IsAuthenticated])
@api_view(['POST'])
def tweet_action_view(request, *args, **kwargs):
    serializer = TweetLikeSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        data = serializer.validated_data
        tweet_id = data.get("id")
        action = data.get("action")
        content = data.get("content")
        qs = Tweet.objects.filter(id=tweet_id)
        if not qs.exists():
            return Response({}, status=404)
        obj = qs.first()
        if action == "like":
            obj.likes.add(request.user)
            serializer = TweetDetailSerializer(obj)
            return Response(serializer.data, status=200)
        elif action == "unlike":
            obj.likes.remove(request.user)
            serializer = TweetDetailSerializer(obj)
            return Response(serializer.data, status=200)
        elif action == "retweet":
            new_tweet = Tweet.objects.create(
                    user=request.user, 
                    parent=obj,
                    content=content,
                    )
            serializer = TweetDetailSerializer(new_tweet)
            return Response(serializer.data, status=201)
    return Response({}, status=200)


def get_paginated_queryset_response(qs, request):
    paginator = PageNumberPagination()
    paginator.page_size = 20
    paginated_qs = paginator.paginate_queryset(qs, request)
    serializer = TweetDetailSerializer(paginated_qs, many=True, context={"request": request})
    return paginator.get_paginated_response(serializer.data)

# @permission_classes([IsAuthenticated])
@api_view(['GET'])
def tweet_feed_view(request, *args, **kwargs):
    user = request.user
    qs = Tweet.objects.feed(user)
    return get_paginated_queryset_response(qs, request)