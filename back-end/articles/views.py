from rest_framework import viewsets

from articles.models import ArticleModel, ArticleTagsModel
from articles.serializers import ArticleSerializer, ArticleTagSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = ArticleModel.objects.all().order_by('-created_time')
    serializer_class = ArticleSerializer


class TagViewSet(viewsets.ModelViewSet):
    queryset = ArticleTagsModel.objects.all()
    serializer_class = ArticleTagSerializer
