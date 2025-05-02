<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script type="importmap"></script>
    <script src="{{asset('js/script.js')}}"></script>

    <link rel="stylesheet" href="{{asset('assets/css/common.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/style.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/styles/all-themes.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/styles/all-themes.css')}}">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">


    <link href='https://fonts.googleapis.com/css?family=Almarai' rel='stylesheet'>
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
    <style>
        a{
            color:#ffffff
        }
        *{
            font-family: Almarai;
        }
    </style>
    <title>Dasboard</title>
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a href="#" onClick="return false;" class="navbar-toggle collapsed" data-bs-toggle="collapse"
                       data-bs-target="#navbar-collapse" aria-expanded="false"></a>
                    <a href="#" onClick="return false;" class="bars"></a>
                    <a class="navbar-brand" href="{{ url('/') }}">
                        <span class="logo-name">لوحة المدير</span>
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="navbar-collapse">
                    <ul class="float-start">
                        <li>
                            <a href="#" onClick="return false;" class="sidemenu-collapse">
                                <i data-feather="menu"></i>
                            </a>
                        </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="fullscreen">
                            <a href="javascript:;" class="fullscreen-btn">
                                <i class="fas fa-expand" style="color: rgb(149, 21, 204);"></i>
                            </a>
                        </li>
                        <li class="dropdown" >
                            <a href="#" onClick="return false;" class="dropdown-toggle" data-bs-toggle="dropdown"
                               role="button">
                                <i class="far fa-bell" style="color: rgb(149, 21, 204);"></i>
                                <span class="notify" ></span>
                                <span class="heartbeat" ></span>
                            </a>
                            <ul class="dropdown-menu pullDown">
                                <li class="header">NOTIFICATIONS</li>
                                <li class="body">
                                    <ul class="menu">
                                        <li>
                                            <a href="#" onClick="return false;">
                                                <span class="table-img msg-user">
                                                <img src="{{ asset('assets/images/user3.png') }}" alt="">
                                                </span>
                                                <span class="menu-info">
                                                    <span class="menu-title">Sarah Smith</span>
                                                    <span class="menu-desc">
                                                        <i class="material-icons" style="color: rgb(149, 21, 204);">access_time</i> 14 mins ago
                                                    </span>
                                                    <span class="menu-desc">Please check your email.</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick="return false;">
                                                <span class="table-img msg-user">
                                                <img src="{{ asset('assets/images/user3.png') }}" alt="">
                                                </span>
                                                <span class="menu-info">
                                                    <span class="menu-title">Airi Satou</span>
                                                    <span class="menu-desc">
                                                        <i class="material-icons" style="color: rgb(149, 21, 204);">access_time</i> 22 mins ago
                                                    </span>
                                                    <span class="menu-desc">Please check your email.</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick="return false;">
                                                <span class="table-img msg-user">
                                                <img src="{{ asset('assets/images/user3.png') }}" alt="">
                                                </span>
                                                <span class="menu-info">
                                                    <span class="menu-title">John Doe</span>
                                                    <span class="menu-desc">
                                                        <i class="material-icons" style="color: rgb(149, 21, 204);">access_time</i> 3 hours ago
                                                    </span>
                                                    <span class="menu-desc">Please check your email.</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick="return false;">
                                                <span class="table-img msg-user">
                                                <img src="{{ asset('assets/images/user3.png') }}" alt="">
                                                </span>
                                                <span class="menu-info">
                                                    <span class="menu-title">Ashton Cox</span>
                                                    <span class="menu-desc">
                                                        <i class="material-icons" style="color: rgb(149, 21, 204);">access_time</i> 2 hours ago
                                                    </span>
                                                    <span class="menu-desc">Please check your email.</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick="return false;">
                                                <span class="table-img msg-user">
                                                <img src="{{ asset('assets/images/user3.png') }}" alt="">
                                                </span>
                                                <span class="menu-info">
                                                    <span class="menu-title">Cara Stevens</span>
                                                    <span class="menu-desc">
                                                        <i class="material-icons"  style="color: rgb(149, 21, 204);">access_time</i> 4 hours ago
                                                    </span>
                                                    <span class="menu-desc">Please check your email.</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick="return false;">
                                                <span class="table-img msg-user">
                                                <img src="{{ asset('assets/images/user3.png') }}" alt="">
                                                </span>
                                                <span class="menu-info">
                                                    <span class="menu-title">Charde Marshall</span>
                                                    <span class="menu-desc">
                                                        <i class="material-icons"  style="color: rgb(149, 21, 204);">access_time</i> 3 hours ago
                                                    </span>
                                                    <span class="menu-desc">Please check your email.</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick="return false;">
                                                <span class="table-img msg-user">
                                                <img src="{{ asset('assets/images/user3.png') }}" alt="">
                                                </span>
                                                <span class="menu-info">
                                                    <span class="menu-title">John Doe</span>
                                                    <span class="menu-desc">
                                                        <i class="material-icons"  style="color: rgb(149, 21, 204);">access_time</i> Yesterday
                                                    </span>
                                                    <span class="menu-desc">Please check your email.</span>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="footer">
                                    <a href="#" onClick="return false;">View All Notifications</a>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown user_profile">
                            <div class="dropdown-toggle" data-bs-toggle="dropdown">
                            <i class="bi bi-person-square"  style="color: rgb(149, 21, 204);"></i>                            </div>
                            <ul class="dropdown-menu pullDown">
                                <li class="body">
                                    <ul class="user_dw_menu">
                                        <li>
                                            <a href="#">
                                                <i class="material-icons">person</i>Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" >
                                                <i class="material-icons">feedback</i>Feedback
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" >
                                                <i class="material-icons">help</i>Help
                                            </a>
                                        </li>
                                        <li class="active">
                                        @auth
                                        <form action = "{{route('logout')}}" method = 'POST' style = "display:inline;">
                                            @csrf
                                            <button type='submit' class = 'btn btn-link text-decoration-none'><i class = 'bi bi-box-arrow-in-right text-danger'>Logout</i></button>
                                        </form>
                                        @endauth
                                    </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="pull-right">
                            <a href="#" onClick="return false;" class="js-right-sidebar" data-close="true">
                                <i class="fas fa-cog" style="color: rgb(149, 21, 204);"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <main role="main" class="pb-3">
        <div class="row">
            <div class="col-sm-2 col-md-2 ">
                <aside id="leftsidebar" class="sidebar">
                    <!-- Menu -->
                    <div class="menu">
                        <ul class="list">
                            <li class="sidebar-user-panel active">
                                <div class="user-panel">
                                    <div class=" image">
                                        <img src="{{ asset('assets/images/user.jpg') }}" alt="Logo" style="height: 80px; width:400px;" />                                    </div>
                                </div>
                                <div class="profile-usertitle">
                                    <div class="sidebar-userpic-name">{{ Auth::user()->name }}</div>
                                    <div class="profile-usertitle-job ">  مدير النظام</div>
                                </div>
                            </li>
                            <li class="header">-- Main</li>
                            <li class="active">
                                <a asp-controller="Dashboard" asp-action="Index" class="menu-toggle">
                                    <i data-feather="monitor"></i>
                                    <span>الرئيسية</span>
                                </a>
                
                                <ul class="ml-menu">
                                  
                                   <!--
                                    <li class="active">
                                       <a asp-action="Station">توزيع اموال</a>
                                    </li>
                                   --> 
                                   <li class="active">
                                    <a  href="{{route('categories.index')}}">   الفئات   </a>
                                </li>
                                    <li class="active">
                                        <a href = "{{route('products.index')}}">   المنتجات   </a>
                                    </li>
                
                                   
                                    <li class="active">
                                        <a >تفاصيل المنتجات </a>
                                    </li>
                                    <li class="active">
                                        <a asp-controller="PurchaseOrder" asp-action="Create">الموظفين  </a>
                                    </li>
                                    <li class="active">
                                        <a asp-controller="PurchaseOrder" asp-action="Create">الفواتير  </a>
                                    </li>
                                    <li class="active">
                                        <a asp-controller="PurchaseOrder" asp-action="Create">تحليلات  </a>
                                    </li>
                
                                    <li class="active">
                                        @auth
                                        <form action = "{{route('logout')}}" method = 'POST' style = "display:inline;">
                                            @csrf
                                            <button type='submit' class = 'btn btn-link text-decoration-none'><i class = 'bi bi-box-arrow-in-right'></i></button>
                                        </form>
                                        @endauth
                                    </li>
                                  
                                </ul>
                                                                                                                
                </li>
                 <li>
                                                                          
                                                                            <ul class="ml-menu">
                                                                            
                                                                               
                                                                              
                                                                              
                                                                               
                                                                              
                                                                             
                                                                               
                                                                               
                                                                               
                                                                      
                                                                       
                                                                      
                                                                        <li class="header">-- Apps</li>
                                                                        
                                                                        
                                                                       
                                                                      
                                                                       
                                                                        <li>
                                                                          
                                                                          
                                                                        </li>
                                                                        <li>
                                                                          
                                                                          
                                                                        </li>
                                                                        <li>
                                                                           
                                                                           
                                                                        </li>
                                                                        <li class="header">-- Extra</li>
                                                                       
                                                                      
                                                                        <li>
                                                                           
                                                                            
                                                                    
                                                                              
                
                           
                       
                    </div>
                    <!-- #Menu -->
                </aside>
            </div>
            <div class="col-sm-10 col-md-10">
                @yield('content')
            </div>
        </div>
    </main>


    <footer>

    </footer>
    <script  src="{{asset('assets/js/common.min.js')}}"></script>
    <script  src="{{asset('assets/js/admin.js')}}"></script>
    <script  src="{{asset('assets/js/bundles/amcharts5/index.js')}}"></script>
    <script  src="{{asset('assets/js/bundles/amcharts5/animated.js')}}"></script>
    <script  src="{{asset('assets/js/bundles/amcharts5/flow.js')}}"></script>

    <script  src="{{asset('assets/js/bundles/amcharts5/map.js')}}"></script>

    <script  src="{{asset('assets/js/bundles/amcharts5/percent.js')}}"></script>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"></script>



</body>
</html>