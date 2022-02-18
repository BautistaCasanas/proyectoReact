import "./Contact.css"
import { MenuItem } from '@mui/material';



import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsappRoundedIcon from '@mui/icons-material/WhatsappRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {

       

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
                            <input type="submit" name="enviar" value="Send" id="boton"/>   
    </form>
    <div className="social">

            <ul>
              <li className="socialLi"><MenuItem className="icon"><FacebookRoundedIcon sx={{cursor:"pointer", background:"blue", color:"white"}}  color="primary" fontSize="large"/></MenuItem></li>
              <li className="socialLi"><MenuItem className="icon"><WhatsappRoundedIcon sx={{cursor:"pointer", background:"green", color:"white"}}  color="success" fontSize="large"/></MenuItem></li>
              <li className="socialLi"><MenuItem className="icon"><EmailRoundedIcon    sx={{cursor:"pointer", background:"red", color:"white"}}  color="error" fontSize="large"/></MenuItem></li>
              <li className="socialLi"><MenuItem className="icon"><TwitterIcon         sx={{cursor:"pointer", background:"blue", color:"white"}}  color="primary" fontSize="large"/></MenuItem></li>
            </ul>

        </div>
    </main>
    </>
  };
  
  export default Contact;
