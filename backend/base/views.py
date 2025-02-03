from django.shortcuts import render
from django.http import JsonResponse
from .products import products
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/products/ - GET',
        '/api/products/ - POST',
        '/api/products/ - PUT',
        '/api/products/ - DELETE',
        '/api/products/<id>/ - GET',
        '/api/products/<id>/ - PUT',
        '/api/products/<id>/ - DELETE',
     ]
    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    return Response(products)

@api_view(['GET'])
def getProduct(request, pk):
    product = None
    for i in products:
        if i['_id'] == pk:
            product = i
            break
    return Response(product)