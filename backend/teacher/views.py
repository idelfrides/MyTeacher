from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_200_OK, HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST
)

from teacher.serializers import (
    ProfessorSerializer, AulaSerializer, 
    CadastroAulaSerializer
)
from teacher.models import Aula, Professor


class ProfessorAPIView(APIView):
    def get(self, request, format=None):
        profs = Professor.objects.all()
        serializer = ProfessorSerializer(profs, many=True)
        return Response(serializer.data, status=HTTP_200_OK)
    

class CadastrarAulaAPIView(APIView):
    def post(self, request, id, format=None):
        professor = get_object_or_404(Professor, id=id)
        serializer = CadastroAulaSerializer(data=request.data)
        
        if serializer.is_valid():
            new_aula = Aula(
                name=serializer.validated_data.get("name"),
                email=serializer.validated_data.get("email"),
                professor=professor
            )

            new_aula.save()
            aula_serializar = AulaSerializer(new_aula, many=False)
            return Response(aula_serializar.data, status=HTTP_201_CREATED)
        
        errors_sms = {"message": "Validation errors", "errors": serializer.errors}
        return Response(errors_sms, status=HTTP_400_BAD_REQUEST)
