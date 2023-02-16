from rest_framework import serializers
from .models import Todolist

class TodoSerializers(serializers.ModelSerializer):
    class Meta:
        model = Todolist
        fields = ('id', 'title', 'description', 'completed')
