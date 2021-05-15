from django.conf import settings
from .models import Tweet
from rest_framework import serializers
from profiles.serializers import ProfileSerializer

class TweetLikeSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    action = serializers.CharField()
    content = serializers.CharField(allow_blank=True, required=False)


class TweetSerializer(serializers.ModelSerializer):
    user = ProfileSerializer(source='user.profile', read_only=True)
    likes = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Tweet
        fields = ['user', 'id', 'content', 'image', 'likes', 'timestamp']

    def get_likes(self, obj):
        return obj.likes.count()

class TweetDetailSerializer(serializers.ModelSerializer):
    user = ProfileSerializer(source='user.profile', read_only=True)
    likes = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Tweet
        fields = [
            'user',
            'id',
            'content',
            'image',
            'likes',
            'is_retweet',
            'timestamp',
        ]

    def get_likes(self, obj):
        return obj.likes.count()