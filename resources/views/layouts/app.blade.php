<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Almarai' rel='stylesheet'>
    <link rel="stylesheet" href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">


    <!-- Scripts -->
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
    <style>
        a{
            color:#ffffff
        }
        *{
            font-family: Almarai;
        }
        .cart-icon {
            position: relative;
            display: inline-block;
        }
        .cart-count {
            position: absolute;
            top: -10px;
            right: -10px;
            background-color: red;
            color: white;
            border-radius: 50%;
            padding: 2px 6px;
            font-size: 12px;
        }
    </style>
</head>
<body dir="rtl">
<header>
  <nav class="navbar navbar-expand-lg" style="background-color: rgb(126, 65, 223);">
    <div class="container py-2">
      
      <a class="navbar-brand text-white fw-bold" href="{{ route('index') }}">
        <i class="bi bi-shop me-1"></i> عالم التسوق
      </a>

      <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-between" id="navbarContent">
        
        <ul class="navbar-nav mx-auto">
          <li class="nav-item mx-2">
            <a class="nav-link text-white fw-semibold" href="{{ route('index') }}">الرئيسية</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link text-white fw-semibold" href="{{ route('callus') }}">اتصل بنا</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link text-white fw-semibold" href="{{ route('AboutUs') }}">حولنا</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link text-white fw-semibold" href="{{ route('myprod') }}">منتجاتنا</a>
          </li>
        </ul>

        <div class="d-flex align-items-center">
          <a href="{{route('shopping.checkout')}}" class="position-relative text-white">
            <i class="bi bi-cart4 fs-3"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {{session('count')}}
            </span>
          </a>
        </div>

      </div>
    </div>
  </nav>
</header>



<main class="mt-4">
  @yield('content')
</main>


<footer class="text-center text-lg-start bg-body-tertiary text-muted" dir="rtl">
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div class="ms-5 d-none d-lg-block">
      <span>تواصل معنا عبر وسائل التواصل الاجتماعي:</span>
    </div>
    <div>
      <a href="#" class="ms-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#" class="ms-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#" class="ms-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="#" class="ms-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="#" class="ms-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="#" class="ms-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </section>

  <section>
    <div class="container text-center text-md-end mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>عالم التسوق
          </h6>
          <p>
            عالم التسوق هي شركة رائدة في مجال التجارة الإلكترونية، متخصصة في توفير مجموعة واسعة من المنتجات الإلكترونية، وأدوات المطبخ، والتنظيف، والتجميل، والمفروشات. نسعى لتقديم تجربة تسوق سهلة وآمنة عبر الإنترنت، مع خيارات دفع متعددة وخدمة عملاء متميزة، لتلبية احتياجات كل منزل عصري.
          </p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">المنتجات</h6>
          <p><a href="#!" class="text-reset">آيفون</a></p>
          <p><a href="#!" class="text-reset">ماسكرا</a></p>
          <p><a href="#!" class="text-reset">آيباد</a></p>
          <p><a href="#!" class="text-reset">مفروشات منزلية</a></p>
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">روابط مفيدة</h6>
          <p><a href="#!" class="text-reset">التسعير</a></p>
          <p><a href="#!" class="text-reset">الإعدادات</a></p>
          <p><a href="#!" class="text-reset">الطلبات</a></p>
          <p><a href="#!" class="text-reset">المساعدة</a></p>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">التواصل</h6>
          <p><i class="fas fa-home me-3"></i> القصيم، بريدة، شارع البخاري</p>
          <p><i class="fas fa-envelope me-3"></i> ShoppingWorld@gmail.com</p>
          <p><i class="fas fa-phone me-3"></i> +966 590256499</p>
          <p><i class="fas fa-print me-3"></i> +966 540237564</p>
        </div>
      </div>
    </div>
  </section>

  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2025 جميع الحقوق محفوظة:
    <a class="text-reset fw-bold" href="#!">ShoppingWorld.com</a>
  </div>
</footer>

</body>
</html>
