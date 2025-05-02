@extends('layouts.admin')

@section('content')
  <div class="container-fluid">
      <div class="row">
          <div class="col-md-12">
              <h1 class="page-title text-center mb-4" style="color:rgb(85, 46, 115);">Dashboard</h1>
              
              <div class="card shadow-lg border-0 rounded-lg mb-5">
                  <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center">
                          <div>
                              <h5 class="card-title" style="color:rgb(151, 91, 197);">مرحبًا بك في  (Dashboard)</h5>
                              <p class="card-text">هذه الصفحة الرئيسية الخاصة بك كمدير، يمكنك الوصول إلى مختلف الأقسام من خلال القائمة الجانبية. قم باستكشاف الأدوات المتاحة لتحكم كامل في النظام.</p>
                          </div>
                          <div>
                              <img src="{{ asset('assets/images/Dashboard.png') }}" alt="Dashboard Image" class="img-fluid" style="max-width: 200px;">
                          </div>
                      </div>
                  </div>
              </div>
              
              <div class="row">
                  <div class="col-md-4">
                      <div class="card text-white shadow-sm rounded-lg" style="background-color: rgb(160, 94, 203);">
                          <div class="card-body text-center">
                              <i class="fas fa-users fa-3x mb-3"></i>
                              <h4 class="card-title">عدد المستخدمين</h4>
                              <p class="card-text">5000+</p>
                          </div>
                      </div>
                  </div>
                  
                  <div class="col-md-4">
                      <div class="card text-white shadow-sm rounded-lg" style="background-color: rgb(140, 84, 183);">
                          <div class="card-body text-center">
                              <i class="fas fa-cogs fa-3x mb-3"></i>
                              <h4 class="card-title">المنتجات</h4>
                              <p class="card-text">1200+</p>
                          </div>
                      </div>
                  </div>
                  
                  <div class="col-md-4">
                      <div class="card text-white shadow-sm rounded-lg"  style="background-color: rgb(116, 74, 149);">
                          <div class="card-body text-center">
                              <i class="fas fa-dollar-sign fa-3x mb-3"></i>
                              <h4 class="card-title">الإيرادات</h4>
                              <p class="card-text">80,000 ريال</p>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="card mt-4 shadow-lg border-0 rounded-lg">
                  <div class="card-body">
                      <h5 class="card-title text-dark">تحليل البيانات</h5>
                      <p class="card-text mb-3">اطلع على البيانات بشكل مرئي وتحليل الأداء بشكل أفضل باستخدام الرسوم البيانية.</p>
                      <div class="text-center">
                          <img src="{{ asset('assets/images/graph.png') }}"  alt="Graph" class="img-fluid rounded">
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
@endsection
