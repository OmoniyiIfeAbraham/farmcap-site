from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html')  


def about(request):
    return render(request, 'about.html')  



from django.views.generic import ListView
from .models import Membership, UserMembership, Subscription
class MembershipView(ListView):
    model = Membership
    template_name = 'list.html'
    def get_user_membership(self):
        user_membership_qs = UserMembership.objects.filter()#user=self.request.user
        if user_membership_qs.exists():
            return user_membership_qs.first()
        return None
    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        current_membership = self.get_user_membership()#self.request
        context['current_membership'] = str()#current_membership.membership
        return context