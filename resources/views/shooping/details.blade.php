@extends('layouts.app')
@section('content')

<style>
    .product-image {
        max-height: 300px;
        object-fit: contain;
        border-radius: 10px;
        border: 1px solid #dee2e6;
    }
    .product-details {
        background-color: #fff;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
    }
</style>

<div class="container my-5">
<div class="row mt-5">
    <div class="col text-center">
      <h1 style="color:rgb(144, 48, 218);">أهلاً بكم في متجر عالم التسوق</h1>
      <small>نوفر لك كل ماتحتاجه في عالم الإلكترونيات وأدوات المطبخ وأدوات التنظيف</small>
      <p>طرق دفع متعددة</p>
    </div>
  </div>
    <div class="row justify-content-center mt-5" >
        <div class="col-md-10">
            <div class="row g-4 product-details">
                <div class="col-md-5 text-center">
                    <img src="{{ $product->image }}" class="img-fluid product-image" alt="صورة المنتج">
                </div>

                <div class="col-md-7">
                    <h3 class="mb-2" style="color:rgb(144, 48, 218);">{{ $product->name }}</h3>

                    <span class="badge bg-secondary mb-3" style="font-size: 0.85rem;">إلكترونيات</span>

                    <h4 class="text-success mb-3">{{ $product->price }} ر.س</h4>

                    <p class="text-muted" style="line-height: 1.7;">{{ $product->descreption }}</p>
<div class="row">

<div class="col">
    <form action="{{ route('shopping.cart') }}" method="POST">
        @csrf
        <input type="hidden" name="id_product" value="{{ $product->id }}">
        <button type="submit" class="btn btn-lg btn-outline-primary mt-3">
            <i class="bi bi-cart-plus-fill me-2"></i>
            إضافة إلى السلة
        </button>
    </form>
</div>

<div class="col">

<a href = "{{route('shopping.checkout')}}" class="btn btn-lg btn-outline-success mt-3">
                        <i class="bi bi-currency-dollar mt-3"></i>
الذهاب إلى صفحة الدفع</a></div>
</div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
