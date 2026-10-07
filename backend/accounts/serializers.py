from rest_framework import serializers

from .models import User

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password_confirm = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = ['email', 'password', 'password_confirm']
    
    def validate(self, dados):
        if dados['password'] != dados['password_confirm']:
            raise serializers.ValidationError({"password": "As senhas não coincidem."})
        return dados
    
    def create(self, dados_validos):
        dados_validos.pop('password_confirm')
        user = User.objects.create_user(**dados_validos)
        print(f"User created: {user.email}")
        return user
