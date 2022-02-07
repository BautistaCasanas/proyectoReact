import "./Contact.css"
import Swal from 'sweetalert';
const Contact = () => {

        const sendForm =()=>{
            Swal({
                title: 'submitted form',
                text: 'we will contact you shortly',
                icon: "success"
                
            })
        }



    return <>
        <main className="main-Contacto">
        <form action="">
                            <label for="nombre-apellido"><strong>Name:</strong></label>
                            <input type="text" name="nombre" placeholder="Marcos Ramirez"/>                   
                            <label for="email"><strong>Email:</strong></label>
                            <input type="email" required name="email" placeholder="email@email.com"/>                  
                            <label for="telefono"><strong>Phone:</strong></label>
                            <input type="text" required name="telefono" placeholder="+5491138956845"/>                    
                            <label for="textarea"><strong>Comment:</strong></label> <br/>                        
                            <textarea name="textarea" id="" cols="15" rows="5" placeholder="Comment.."></textarea>                   
                            <input type="submit" name="enviar" onClick={sendForm} value="Send" id="boton"/>   
    </form>
    </main>
    </>
  };
  
  export default Contact;
