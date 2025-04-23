@extends('layouts.admin')
@section('content')
   <div class="container">
      <div class="row mt-5">
         <div class="col d-flex justify-content-center">
            <div class="card">
                <div class="card-header" style="background-color: rgb(109, 24, 200);">
                   <h3 class="text-white">إضافة منتج </h3>
                </div>
                <div class="card-body">
                 <form action="{{route('products.create')}}" method="POST">
                    @csrf
                    <div class="row">
                        <div class="col">
                            <select name = "categories_id" class = "form-select">
                                @foreach($categoreis as $item)
                            <option value = "{{$item->id}}">{{$item->name}}</option>
                            @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                          <label class="form-label">اسم المنتج</label>
                          <input type="text" class="form-control" name="name" >
                          @error('name')
                           <small class = "text-danger">{{$message}}</small>
                          @enderror
                        </div>
                        <div class="col">
                            <label class="form-label">وصف المنتج</label>
                            <input type="text" class="form-control" name="descreption" >
                            @error('descreption')
                           <small class = "text-danger">{{$message}}</small>
                          @enderror
                        </div>
                        <div class="col">
                            <label class="form-label">الكمية </label>
                            <input type="number" class="form-control" name="stocke" >
                            @error('stocke')
                           <small class = "text-danger">{{$message}}</small>
                          @enderror
                        </div>
                    </div>
                    <div class="row mt-3">
                    <div class="col">
                            <label class="form-label">السعر </label>
                            <input type="number" class="form-control" name="price" >
                            @error('price')
                           <small class = "text-danger">{{$message}}</small>
                          @enderror
                        </div>
                        <div class="col">
                        <label class="form-label">الصورة </label>
                            <input type="file" class="form-control" name="image" >
                            @error('image')
                           <small class = "text-danger">{{$message}}</small>
                          @enderror
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col text-center">
                            <button type="submit " class="btn btn-primary">حفظ</button>
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
                  <td class = "text-center">رقم المنتج</td>
                  <td class = "text-center">اسم المنتج</td>
                  <td class = "text-center">وصف المنتج</td>
                  <td class = "text-center">سعر المنتج</td>
                  <td class = "text-center">الكمية المخزنية</td>
                  <td class = "text-center">صورة المنتج</td>
                  <td class = "text-center" colspan="2">اجراء </td>
               </tr>
            </thead>
            <tbody>
               @foreach($products as $item)
               <tr>
                  <td class = "text-center">{{$item->id}}</td>
                  <td class = "text-center">{{$item->name}}</td>
                  <td class = "text-center">{{$item->descreption}}</td>
                  <td class = "text-center">{{$item->price}}</td>
                  <td class = "text-center">{{$item->stocke}}</td>
                  <td class = "text-center">{{$item->image}}</td>
                  <td class = "text-center"><a href="{{route('products.Edit',['id'=>$item->id])}}"><i class="bi bi-pencil-fill text-success"></i></a></td>
                  <td class = "text-center"><a href="{{route('products.Delete' , ['id'=>$item->id])}}"><i class="bi bi-trash text-danger"></i></a></td>

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
