from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .serializers import RegisterSerializer
from drf_spectacular.utils import extend_schema
from rest_framework.permissions import IsAuthenticated

class RegisterView(APIView):
    @extend_schema(request=RegisterSerializer, responses={201: RegisterSerializer})
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Usuário registrado com sucesso."},
                    status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MeView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        return Response({
            'user_id': request.user.id,
            'email': request.user.email
        }, status=status.HTTP_200_OK)
            
