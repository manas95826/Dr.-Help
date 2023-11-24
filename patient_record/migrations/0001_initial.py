# Generated by Django 4.2.7 on 2023-11-24 16:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('authenticator', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Report',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(auto_created=True)),
                ('test_for', models.TextField(default='Phenomenia')),
                ('result', models.BooleanField()),
                ('doctor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='authenticator.doctor')),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='authenticator.patient')),
            ],
        ),
    ]
