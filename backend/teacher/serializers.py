from django.forms import ValidationError
from rest_framework import serializers

from teacher.models import Aula, Professor


class ProfessorSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Professor
        fields = "__all__"
        

class CadastroAulaSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField(max_length=255)
    
    def validate_name(self, value):
        if len(value) < 3:
            raise ValidationError("Must have at least 3 characters!!!")
        return value
    

class AulaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Aula
        fields = '__all__'