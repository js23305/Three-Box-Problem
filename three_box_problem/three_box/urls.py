from django.urls import path
from . import views

urlpatterns = [
    path('', views.three_box, name='three_box'),
]