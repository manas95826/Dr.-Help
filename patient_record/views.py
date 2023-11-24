from rest_framework.decorators import api_view
from rest_framework.response import Response

from authenticator.models import Patient, Doctor

from .models import Report
from .serializers import ReportSerializer

# Create your views here.


@api_view(["GET"])
def record(request, patient_key):
    try:
        patient = Patient.objects.get(api_token=patient_key)
        reports = Report.objects.filter(patient=patient)
        serializer = ReportSerializer(reports, many=True)
        return Response({
            "success": 1,
            "reports": serializer.data
        })
    except:
        return Response({"success": 0})
