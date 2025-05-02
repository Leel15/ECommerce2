@extends('layouts.app')

@section('content')
<div class="card" style="direction: rtl;">
  <div class="card-body mx-4">
    <div class="container">
      <p class="my-5 mx-5" style="font-size: 30px; text-align: center;">شكرًا لشرائك!</p>
      <div class="row">
        <ul class="list-unstyled">
          <li class="text-black">{{ session('customer_name') }}</li>
          <li class="text-muted mt-1"><span class="text-black">رقم الفاتورة</span> #12345</li>
          <li class="text-black mt-1">5 مايو 2025</li>
        </ul>
        <hr>
        <div class="col-xl-10">
          <p>مبلغ الشراء</p>
        </div>
        <div class="col-xl-2">
          <p class="float-end"> 4940 SAR</p>
        </div>
        <hr>
      </div>
      <div class="row">
        <div class="col-xl-10">
          <p>القيمة المضافة</p>
        </div>
        <div class="col-xl-2">
          <p class="float-end text-success">+741 SAR</p>
        </div>
        <hr>
      </div>
      <div class="row">
        <div class="col-xl-10">
          <p>كود الخصم</p>
        </div>
        <div class="col-xl-2">
          <p class="float-end text-danger">-500 SAR</p>
        </div>
        <hr style="border: 2px solid black;">
      </div>
      <div class="row text-black">
        <div class="col-xl-12">     
         <p class="float-end fw-bold"> الاجمالي</p>
        </div>
        <div class="col-xl-2">
        <p class="float-end fw-bold"> 5181.00 SAR</p>
        </div>
        <hr style="border: 2px solid black;">
      </div>
     
    </div>
  </div>
</div>
@endsection
