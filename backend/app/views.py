from rest_framework.views import APIView
from rest_framework.response import Response


class HomeAPIView(APIView):
    
    def get(self, request, format=None):
        data = {"name": "Idelfrides", "age": 32}
        return Response(data, status=200)