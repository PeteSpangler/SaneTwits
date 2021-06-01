from django.db import models
from django.conf import settings
from django.utils.text import slugify

User = settings.AUTH_USER_MODEL

class Tweet(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="tweets")
    content = models.TextField(blank=True, null=True)
    # slug = models.SlugField(max_length=50, unique=True)

    class Meta:
        ordering = ['-id']

    # def save(self, *args, **kwargs):
    #     if not self.slug:
    #         self.slug = slugify(self.author)
    #     super(Tweet, self).save(*args, **kwargs)

