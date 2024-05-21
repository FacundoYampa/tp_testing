$(document).ready(function()
{
        // insertar_registro();

// function insertar_registro()
// {
    
    $(document).on("click",'#btn_registrar',function() //Evento click
                    {
                        var nombre = $('#Nombre').val();
                        var apellido = $('#Apellido').val();
                        var email = $('#Email').val();

                        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//regex para email en una variable

                        //Validación front
                        if(nombre==""|apellido==""|email==""){
                            event.preventDefault();
                            
                            const toastLiveExample = document.getElementById('liveToast');
                            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                            toastBootstrap.show();
                        }

                        else if(!emailRegex.test(email))//metodo para validar la expresion regular
                        {
                            event.preventDefault();
                            
                            const toastLiveExample = document.getElementById('liveToastMail');
                            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                            toastBootstrap.show();
                        }
                        else
                        {
                            $.ajax
                            (
                                {
                                    url:'insertar.php',
                                    method:'post',
                                    data:{Uname:nombre,Uapellido:apellido,Uemail:email},
                                    success:function(data){
                                        alert("Se envió correctamente");
                                    },
                                    error:function(){alert("Error de conexión con el servidor");}
                                }
                            )
                        }
                    }
                  )    
// }
}  )