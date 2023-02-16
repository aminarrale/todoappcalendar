from django.shortcuts import render

from rest_framework import viewsets
from .serializers import TodoSerializers
from .models import Todolist

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializers
    queryset = Todolist.objects.all()
