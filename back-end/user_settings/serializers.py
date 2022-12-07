from rest_framework import serializers

from user_settings.models import UserSettings


class UserSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='usersettings-detail',
        lookup_field='pk',
    )

    class Meta:
        model = UserSettings
        # fields = '__all__'
        # exclude = ['last_login', 'password']
        fields = [
            'pk',
            'url',
            'email',
            'avatar',
            'username',
            'first_name',
            'last_name',
            'start_date',
            'about',
            'is_active',
            'is_staff',
            'is_superuser'
        ]
