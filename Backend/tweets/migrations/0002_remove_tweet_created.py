# Generated by Django 3.2.2 on 2021-06-01 21:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tweets', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tweet',
            name='created',
        ),
    ]
