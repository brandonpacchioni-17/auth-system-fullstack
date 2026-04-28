from django.shortcuts import render

# Create your views here.

from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view
from rest_framework.response import Response

User = get_user_model()

@api_view(['POST'])
def register(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response({'error': 'Faltan datos'}, status=400)

    if User.objects.filter(username=username).exists():
        return Response({'error': 'Usuario ya existe'}, status=400)

    user = User.objects.create_user(username=username, password=password)
    return Response({'message': 'Usuario creado'})