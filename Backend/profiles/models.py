from django.db import models
from django.utils.text import slugify
from django.conf import settings
from django.db.models.signals import post_save


User = settings.AUTH_USER_MODEL

class FollowerRelation(models.Model):
    follower_id = models.ForeignKey(User, on_delete=models.CASCADE)
    followed_id = models.ForeignKey("Profile", on_delete=models.CASCADE)
    timestamp = models.DateField(auto_now_add=True)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    followers = models.ManyToManyField(User, related_name="following", blank=True)
    slug = models.SlugField(max_length=50, unique=True)
    
    def user_did_save(sender, instance, created, *args, **kwargs):
        if created:
            Profile.objects.get_or_create(user=instance)

    post_save.connect(user_did_save, sender=User)    
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.user)
        super(Profile, self).save(*args, **kwargs)