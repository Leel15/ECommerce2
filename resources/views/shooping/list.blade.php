@extends('layouts.app')
@section('content')

<div class="container my-5">
   <div class="row mt-5">
    <div class="col text-center">
      <h1 style="color:rgb(144, 48, 218);">أهلاً بكم في متجر عالم التسوق</h1>
      <small>نوفر لك كل ماتحتاجه في عالم الإلكترونيات وأدوات المطبخ وأدوات التنظيف</small>
      <p>طرق دفع متعددة</p>
    </div>
  </div>

  <div class="row g-4 mt-5">
    @foreach($products as $item)
      <div class="col-md-12">
        <div class="card shadow-sm rounded p-3">
          <div class="row g-3 align-items-center">
            <div class="col-md-3 text-center">
              <img src="{{$item->image}}" class="img-fluid rounded" style="max-height: 120px; object-fit: contain;" alt="صورة المنتج">
            </div>

            <div class="col-md-9">
              <h5 class=" mb-1" style="color:rgb(144, 48, 218);">{{$item->name}}</h5>
              <p class="mb-2 text-secondary" style="font-size: 0.95rem;">{{$item->descreption}}</p>
              <p class="text-muted small mb-2">تبقى من هذا المنتج: <span class="text-dark">{{$item->stocke}}</span></p>

              <div class="d-flex justify-content-between align-items-center">
                <span class="badge bg-success">{{$item->price}} ر.س</span>
                <a href="{{ route('shopping.details', ['id' => $item->id]) }}" class="btn btn-outline-primary btn-sm">تفاصيل المنتج</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    @endforeach
  </div>
</div>

@endsection

