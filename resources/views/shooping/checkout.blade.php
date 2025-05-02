@extends('layouts.app')

@section('content')
<div class="container" style="direction: rtl;">
  <div class="row">
    <div class="col-md-4 order-md-2 mb-4">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-muted">سلة المشتريات</span>
        <span class="badge badge-secondary badge-pill">3</span>
      </h4>
      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">ايباد</h6>
            <small class="text-muted">جهاز الكتروني</small>
          </div>
          <span class="text-muted">4099 SAR</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 class="my-0">سماعة</h6>
              <small class="text-muted">جهاز الكتروني</small>
            </div>
            <span class="text-muted">175 SAR</span>
          </li>

          <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 class="my-0">قلاية هوائية            </h6>
              <small class="text-muted">أدوات طبخ</small>
            </div>
            <span class="text-muted">599 SAR</span>
          </li>

          <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 class="my-0">روج</h6>
              <small class="text-muted">أدوات تجميل</small>
            </div>
            <span class="text-muted">34 SAR</span>
          </li>

          <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 class="my-0">ماسكرا            </h6>
              <small class="text-muted">أدوات تجميل </small>
            </div>
            <span class="text-muted">33 SAR</span>
          </li>
          
        <li class="list-group-item d-flex justify-content-between">
          <span>الإجمالي </span>
          <strong>4940 SAR</strong>
        </li>
      </ul>

      <form class="card p-2">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="رمز الترويج">
          <div class="input-group-append">
            <button type="submit" class="btn btn-secondary">تطبيق</button>
          </div>
        </div>
      </form>
    </div>

    <div class="col-md-8 order-md-1">
      <h4 class="mb-3">عنوان الفاتورة</h4>
      <form class="needs-validation" action="{{ route('shopping.pay') }}" method="POST">
        @csrf
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="firstName">الاسم الأول</label>
            <input type="text" class="form-control" id="name" name="name" required>
            <div class="invalid-feedback">
              الاسم الأول مطلوب.
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="Phone">الهاتف</label>
            <input type="text" class="form-control" id="Phone" name="phone" required>
            <div class="invalid-feedback">
              رقم الهاتف مطلوب.
            </div>
          </div>
        </div>

        <hr class="mb-4">

        <h4 class="mb-3">طريقة الدفع</h4>

        <div class="d-block my-3">
          <div class="custom-control custom-radio">
            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
            <label class="custom-control-label" for="credit">بطاقة ائتمان</label>
          </div>
          <div class="custom-control custom-radio">
            <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required>
            <label class="custom-control-label" for="debit">بطاقة خصم</label>
          </div>
          <div class="custom-control custom-radio">
            <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required>
            <label class="custom-control-label" for="paypal">بايبال</label>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="cc-name">الاسم على البطاقة</label>
            <input type="text" class="form-control" id="cc-name" required>
            <small class="text-muted">الاسم الكامل كما يظهر على البطاقة</small>
            <div class="invalid-feedback">
              الاسم على البطاقة مطلوب.
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="cc-number">رقم البطاقة الائتمانية</label>
            <input type="text" class="form-control" id="cc-number" required>
            <div class="invalid-feedback">
              رقم البطاقة الائتمانية مطلوب.
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3 mb-3">
            <label for="cc-expiration">تاريخ الانتهاء</label>
            <input type="text" class="form-control" id="cc-expiration" required>
            <div class="invalid-feedback">
              تاريخ الانتهاء مطلوب.
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="cc-cvv">CVV</label>
            <input type="text" class="form-control" id="cc-cvv" required>
            <div class="invalid-feedback">
              رمز الأمان مطلوب.
            </div>
          </div>
        </div>

        <hr class="mb-4">
        <button class="btn btn-primary btn-lg " type="submit" style="background-color:rgb(144, 48, 218);">مواصلة الدفع</button>
      </form>
    </div>
  </div>

  <footer class="my-5 pt-5 text-muted text-center text-small">
    <p class="mb-1">&copy; 2024-2025 عالم التسوق</p>
    <ul class="list-inline">
      <li class="list-inline-item"><a href="#">الخصوصية</a></li>
      <li class="list-inline-item"><a href="#">الشروط</a></li>
      <li class="list-inline-item"><a href="#">الدعم</a></li>
    </ul>
  </footer>
</div>
@endsection

