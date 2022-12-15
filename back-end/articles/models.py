import datetime
import uuid

from django.db import models

from user_settings.models import UserSettings


class ArticleTagsModel(models.Model):
    id = models.IntegerField(primary_key=True)
    tag_title = models.CharField(max_length=200)

    def __str__(self):
        return self.tag_title


class ArticleModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    author = models.ForeignKey(to=UserSettings, on_delete=models.CASCADE, related_name='articles')
    article_tag = models.ForeignKey(to=ArticleTagsModel, on_delete=models.CASCADE, related_name='tags')
    article_title = models.CharField(max_length=1000)
    article_image = models.ImageField(blank=True)
    article_content = models.TextField()
    created_time = models.DateTimeField(default=datetime.datetime.now)

    def __str__(self):
        return self.article_title
