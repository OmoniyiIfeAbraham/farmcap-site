# Generated by Django 3.2.7 on 2021-11-24 13:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20211116_2020'),
    ]

    operations = [
        migrations.AddField(
            model_name='customusers',
            name='type',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='customusers',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]