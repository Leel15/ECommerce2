var delete_id ;
function delete_categories(id){

    delete_id = id ;

    const modal= new bootstrap.Modal(document.getElementById('delete'));
    modal.show();

}

function ConfirmDelete_Categories(){

    $.ajax({
        url : '/deleteitemcategories/' + delete_id,
        type : 'GET' ,

        success:function(){
            Swal.fire({
                toast: true,
                icon: 'success',
                title: 'تم الحذف بنجاح!',
                position: 'top-end',
                showConfirmButton: false,
                timer: 5000, // يختفي بعد 3 ثوانٍ
                timerProgressBar: true
            });
            location.reload();
        },

        error:function(){
            Swal.fire({
                toast: true,
                icon: 'error',
                title: 'حدث خطأ: ' ,
                position: 'top-end',
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true
            });
        }
});

}
