from django.contrib import admin
from .models import Todolist
# Register your models here.
class TodolistAdmin(admin.ModelAdmin):
    list_display = ("title", "description", "completed")


admin.site.register(Todolist, TodolistAdmin)
