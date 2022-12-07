from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import PermissionsMixin
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.db import models


class AccountManager(BaseUserManager):

    def create_user(self, email, username, first_name, password, **other_fields):
        if not email:
            return ValueError(_("You must provide an email address"))

        email = self.normalize_email(email)
        user = self.model(email=email, username=username, first_name=first_name, **other_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, username, first_name, password, **other_fields):
        other_fields.setdefault('is_active', True)
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)

        if other_fields.get('is_active') is not True:
            raise ValueError("Superuser must have is_active=True")

        if other_fields.get('is_staff') is not True:
            raise ValueError("Superuser must have is_staff=True")

        if other_fields.get('is_superuser') is not True:
            raise ValueError("Superuser must have is_superuser=True")

        return self.create_user(email, username, first_name, password, **other_fields)


class UserSettings(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_("email address"), unique=True)
    avatar = models.ImageField(blank=True, upload_to="user/&Y/%m/%d", default='DefaultAccountImage.png')
    username = models.CharField(_("username"), max_length=150, unique=True)
    first_name = models.CharField(_("first name"), max_length=150, blank=True)
    last_name = models.CharField(_("last name"), max_length=150, blank=True)
    start_date = models.DateTimeField(default=timezone.now)
    about = models.TextField(_("about"), max_length=500, blank=True)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    objects = AccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name']

    def __str__(self):
        return self.username
