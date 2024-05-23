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
                        var edad = $('#Edad').val();

                        let valido = true;

                        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  //regex para email en una variable
                        var soloTextoRegex = /^[a-zA-Z\s]+$/;           //regex para que entre solo texto
                        var numRegex = /^\d+$/;                         //regex para numeros enteros

                        //Validación front
                        if(nombre==""||apellido==""||email==""||edad==""){
                            event.preventDefault();
                            valido = false;
                            const toastLiveExample = document.getElementById('liveToast');
                            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                            toastBootstrap.show();
                        }

                        else if(!soloTextoRegex.test(nombre)||nombre.length>51){
                            event.preventDefault();
                            valido = false;
                            alert("el nombre debe contener solo letras")
                        }

                        else if(!soloTextoRegex.test(apellido)||nombre.length>51){
                            event.preventDefault();
                            valido = false;
                            alert("el apellido debe contener solo letras")
                        }


                        else if(!emailRegex.test(email))//metodo para validar la expresion regular
                        {
                            event.preventDefault();
                            valido = false;
                            const toastLiveExample = document.getElementById('liveToastMail');
                            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                            toastBootstrap.show(); //podria usar una funcion y cambiar parametros
                        }
                        else if(!numRegex.test(edad)||edad<18||edad>120)
                        {
                            event.preventDefault();
                            valido = false;
                            // const toastLiveExample = document.getElementById('liveToastMail');
                            // const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                            // toastBootstrap.show();
                            alert("La edad debe ser un número entero entre 18 y 120 ")
                        }

                        else if(valido = true)
                        {
                            alert("Se envió correctamente");
                            $.ajax
                            (
                                {
                                    url:'insertar.php',
                                    method:'post',
                                    data:{Uname:nombre,Uapellido:apellido,Uemail:email,Uedad:edad},
                                    success:function(){alert("Se envió correctamente:");},
                                    error:function(){alert("Error de conexión con el servidor");}
                                }
                            )
                        }
                    }
                  )    
// }
}  )