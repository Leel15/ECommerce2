@extends('layouts.admin')
@section('content')
   <div class="container">
      <div class="row mt-5">
         <div class="col d-flex justify-content-center">
            <div class="card">
                <div class="card-header" style="background-color: rgb(109, 24, 200);">
                   <h3 class="text-white">إضافة فئة </h3>
                </div>
                <div class="card-body">
                 <form action="{{route('categories.create')}}" method="POST">
                    @csrf
                    <div class="row">
                        <div class="col">
                          <label class="form-label">اسم الفئة</label>
                          <input type="text" class="form-control" name="categ_name" >
                          @error('categ_name')
                           <small class = "text-danger">{{$message}}</small>
                          @enderror
                        </div>
                        <div class="col">
                            <label class="form-label">وصف الفئة</label>
                            <input type="text" class="form-control" name="categ_descreption" >
                            @error('categ_descreption')
                           <small class = "text-danger">{{$message}}</small>
                          @enderror
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <button type="submit" class="btn btn-primary">حفظ</button>
                        </div>
                    </div>
                 </form>
                </div>
            </div>
         </div>
      </div>
      <div class="row mt-5">
         <div class="col">
            <div class="card">
               <div class="card-header" style = "background-color: rgb(109, 24, 200);">
               <h3 class = "text-white">الفئات</h3>

            </div>
            <div class="card-body">
               <table class = "table">
                  <thead>
               <tr class = 'text-center'>
                  <td class = "text-center">رقم الفئة</td>
                  <td class = "text-center">اسم الفئة</td>
                  <td class = "text-center">وصف الفئة</td>
                  <td class = "text-center" colspan="2">اجراء </td>
               </tr>
            </thead>
            <tbody>
               @foreach($categoreis as $item)
               <tr>
                  <td class = "text-center">{{$item->id}}</td>
                  <td class = "text-center">{{$item->name}}</td>
                  <td class = "text-center">{{$item->description}}</td>
                  <td class = "text-center"><a href="{{route('categories.edit',['id'=>$item->id])}}"><i class="bi bi-pencil-fill text-success"></i></a></td>
                  <td class = "text-center"><a href="{{route('categories.Delete' , ['id'=>$item->id])}}"><i class="bi bi-trash text-danger"></i></a></td>

               </tr>
               @endforeach
            </tbody>
            </table>
         </div>
            </div>
         </div>
      </div>
   </div>
@endsection