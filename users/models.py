from django.contrib.auth.models import AbstractUser
from django.db import models


CHOICES = (
    ('Farmer', 'farm'),
    ('Investor', 'invest')
)

class CustomUsers(AbstractUser):
    age = models.PositiveIntegerField(null=True, blank=True)
    phone_number =models.IntegerField(null=True, blank=True)
    address = models.CharField(max_length=255, null=True, blank=True)
    type = models.CharField(
    choices=CHOICES, default='farm',
    max_length=30
      )