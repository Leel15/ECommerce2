<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="importmap"></script>

    <link rel="stylesheet" href="{{asset('assets/css/common.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/style.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/styles/all-themes.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/styles/all-themes.css')}}">



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
                    <a class="navbar-brand" href="index.html">
                        <img src="assets/images/logo.png" alt="" />
                        <span class="logo-name"> لوحة المدير   </span>
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
                        <!-- Full Screen Button -->
                        <li class="fullscreen">
                            <a href="javascript:;" class="fullscreen-btn">
                                <i class="fas fa-expand"></i>
                            </a>
                        </li>
                        <!-- #END# Full Screen Button -->
                        <!-- #START# Notifications-->
                        <li class="dropdown">
                            <a href="#" onClick="return false;" class="dropdown-toggle" data-bs-toggle="dropdown"
                               role="button">
                                <i class="far fa-bell"></i>
                                <span class="notify"></span>
                                <span class="heartbeat"></span>
                            </a>
                            <ul class="dropdown-menu pullDown">
                                <li class="header">NOTIFICATIONS</li>
                                <li class="body">
                                    <ul class="menu">
                                        <li>
                                            <a href="#" onClick="return false;">
                                                <span class="table-img msg-user">
                                                    <img src="assets/images/user/user1.jpg" alt="">
                                                </span>
                                                <span class="menu-info">
                                                    <span class="menu-title">Sarah Smith</span>
                                                    <span class="menu-desc">
                                                        <i class="material-icons">access_time</i> 14 mins ago
                                                    </span>
                                                    <span class="menu-desc">Please check your email.</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick="return false;">
                                                <span class="table-img msg-user">
                                                    <img src="assets/images/user/user2.jpg" alt="">
                                                </span>
                                                <span class="menu-info">
                                                    <span class="menu-title">Airi Satou</span>
                                                    <span class="menu-desc">
                                                        <i class="material-icons">access_time</i> 22 mins ago
                                                    </span>
                                                    <span class="menu-desc">Please check your email.</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick="return false;">
                                                <span class="table-img msg-user">
                                                    <img src="assets/images/user/user3.jpg" alt="">
                                                </span>
                                                <span class="menu-info">
                                                    <span class="menu-title">John Doe</span>
                                                    <span class="menu-desc">
                                                        <i class="material-icons">access_time</i> 3 hours ago
                                                    </span>
                                                    <span class="menu-desc">Please check your email.</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick="return false;">
                                                <span class="table-img msg-user">
                                                    <img src="assets/images/user/user4.jpg" alt="">
                                                </span>
                                                <span class="menu-info">
                                                    <span class="menu-title">Ashton Cox</span>
                                                    <span class="menu-desc">
                                                        <i class="material-icons">access_time</i> 2 hours ago
                                                    </span>
                                                    <span class="menu-desc">Please check your email.</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick="return false;">
                                                <span class="table-img msg-user">
                                                    <img src="assets/images/user/user5.jpg" alt="">
                                                </span>
                                                <span class="menu-info">
                                                    <span class="menu-title">Cara Stevens</span>
                                                    <span class="menu-desc">
                                                        <i class="material-icons">access_time</i> 4 hours ago
                                                    </span>
                                                    <span class="menu-desc">Please check your email.</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick="return false;">
                                                <span class="table-img msg-user">
                                                    <img src="assets/images/user/user6.jpg" alt="">
                                                </span>
                                                <span class="menu-info">
                                                    <span class="menu-title">Charde Marshall</span>
                                                    <span class="menu-desc">
                                                        <i class="material-icons">access_time</i> 3 hours ago
                                                    </span>
                                                    <span class="menu-desc">Please check your email.</span>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick="return false;">
                                                <span class="table-img msg-user">
                                                    <img src="assets/images/user/user7.jpg" alt="">
                                                </span>
                                                <span class="menu-info">
                                                    <span class="menu-title">John Doe</span>
                                                    <span class="menu-desc">
                                                        <i class="material-icons">access_time</i> Yesterday
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
                        <!-- #END# Notifications-->
                        <li class="dropdown user_profile">
                            <div class="dropdown-toggle" data-bs-toggle="dropdown">
                                <img src="assets/images/user.jpg" alt="user">
                            </div>
                            <ul class="dropdown-menu pullDown">
                                <li class="body">
                                    <ul class="user_dw_menu">
                                        <li>
                                            <a href="#" onClick="return false;">
                                                <i class="material-icons">person</i>Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick="return false;">
                                                <i class="material-icons">feedback</i>Feedback
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick="return false;">
                                                <i class="material-icons">help</i>Help
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick="return false;">
                                                <i class="material-icons">power_settings_new</i>Logout
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <!-- #END# Tasks -->
                        <li class="pull-right">
                            <a href="#" onClick="return false;" class="js-right-sidebar" data-close="true">
                                <i class="fas fa-cog"></i>
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
                                        <img src="assets/images/user/user.png" class="user-img-style" alt="User Image" />
                                    </div>
                                </div>
                                <div class="profile-usertitle">
                                    <div class="sidebar-userpic-name"> سعد سالم  </div>
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
                                        <a >   المنتجات   </a>
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


</body>
</html>