from rest_framework import serializers

from articles.models import ArticleModel, ArticleTagsModel


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleModel
        fields = '__all__'


class ArticleTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleTagsModel
        fields = '__all__'
