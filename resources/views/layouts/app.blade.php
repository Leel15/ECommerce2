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


    <!-- Scripts -->
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
    <style>
        a{
            color:#ffffff
        }
        *{
            font-family: Almarai;
        }
    </style>
</head>
<body dir="rtl">
  <header>
    <nav class="navbar" style="background-color: rgb(126, 65, 223);">
      <div class="container-fluid">
        <ul class="list-inline">
            <li class="list-inline-item p-1"><a href="{{route("index")}}">الرئيسية</a></li>
            <li class="list-inline-item p-1"><a href="{{route('callus')}}">اتصل بنا </a> </li>
            <li class="list-inline-item p-1"><a href="{{route('AboutUs')}}">حولنا</a></li>
            <li class="list-inline-item p-1"><a href="{{route('myprod')}}">منتجاتنا</a></li>
        </ul>
      </div>
    </nav>
  </header>


<main class="mt-4">
  @yield('content')
</main>


<footer>
    @cpyright 2025
</footer>
</body>
</html>
