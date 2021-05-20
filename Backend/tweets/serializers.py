from django.conf import settings
from .models import Tweet
from rest_framework import serializers
from profiles.serializers import ProfileSerializer

class TweetSerializer(serializers.ModelSerializer):
    user = ProfileSerializer(source='user.profile', read_only=True)
    class Meta:
        model = Tweet
        fields = [ 'id', 'user', 'user_id', 'content', 'timestamp']