# Generated by Django 3.1 on 2020-12-30 00:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rest_api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='article',
            old_name='Date_Posted',
            new_name='date_posted',
        ),
        migrations.RenameField(
            model_name='article',
            old_name='Is_sold',
            new_name='is_sold',
        ),
        migrations.RenameField(
            model_name='article',
            old_name='ShippingFee',
            new_name='shipping_fee',
        ),
        migrations.AlterField(
            model_name='tag',
            name='name',
            field=models.CharField(max_length=20, unique=True),
        ),
    ]
