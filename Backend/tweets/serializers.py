from django.conf import settings
from .models import Tweet
from rest_framework import serializers
from rest_framework.reverse import reverse
from profiles.serializers import ProfileSerializer

class TweetSerializer(serializers.ModelSerializer):
    user = ProfileSerializer(source='user.profile', read_only=True)
    slug = ProfileSerializer(source='slug.profile', read_only=True)
    absolute_url = serializers.SerializerMethodField()
    delete = serializers.SerializerMethodField()
    class Meta:
        model = Tweet
        fields = [ 'id', 'author', 'user', 'slug', 'content', 'absolute_url', 'delete',]

    def get_absolute_url(self, obj):
        return reverse('tweet_detail', args=(obj.pk,))

    def get_delete(self, obj):
        return reverse('tweet_delete', args=(obj.pk,))