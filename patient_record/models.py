from django.db import models


# Create your models here.
class Report(models.Model):
    patient = models.ForeignKey("authenticator.Patient", on_delete=models.CASCADE)
    doctor = models.ForeignKey("authenticator.Doctor", on_delete=models.CASCADE)
    date = models.DateTimeField(auto_created=True)
    test_for = models.TextField(default="Phenomenia")
    result = models.BooleanField(null=False)
