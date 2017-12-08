from django.conf.urls import url
from .views import checkout, thankyou

urlpatterns = [
    url(r'^$', checkout, name='checkout'),
    url(r'^thankyou/', thankyou, name='thankyou'),
]