from django.shortcuts import render
from django.http import JsonResponse
import json

# Create your views here.
def home(request):
    return render(request, 'index.html')


def ajax(request):
    if request.method == 'POST':
        data = json.loads(request.body)

        print(data)

        context = {
            'result': data
        }

        return JsonResponse(context)
