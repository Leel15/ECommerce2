@extends('layouts.app')
@section('content')

<div class="container">
  <div class="row mt-5">
    <div class="col text-center">
      <h1 style="color:rgb(144, 48, 218);">أهلاً بكم في متجر عالم التسوق</h1>
      <small>نوفر لك كل ماتحتاجه في عالم الإلكترونيات وأدوات المطبخ وأدوات التنظيف</small>
      <p>طرق دفع متعددة</p>
    </div>
  </div>

  <div class="row mt-5">
    <div class="col">
      <div class="row">
        @foreach ($categories as $item)
          <div class="col-sm-6 col-md-6 col-12 mb-4 d-flex justify-content-center">
            <a href="{{ route('shooping.list', ['categories_id' => $item->id]) }}" class="text-decoration-none">
              <div class="card" style="width: 300px; color:aliceblue; background-color: {{'rgb('.rand(0,255).','.rand(0,255).','.rand(0,255).')'}} ;">
                <div class="card-header bg-dark">
                  <h3 class="text-white">{{ $item->name }}</h3>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col d-flex justify-content-center align-items-center">
                      <strong class="text-white">{{ $item->description }}</strong>
                    </div>
                    <div class="col d-flex justify-content-center align-items-center">
                      <i class="b{{ $item->icon }}" style="font-size: 100px;"></i>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        @endforeach
      </div>
    </div>
  </div>
</div>

@endsection

