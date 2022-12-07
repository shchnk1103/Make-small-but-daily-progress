from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from user_settings.models import UserSettings
from user_settings.serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = UserSettings.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
