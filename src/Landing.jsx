import { motion as m } from 'framer-motion';
import './App.css'

const Landing = () => {


  return (
    <>
   <div className="align"> 
<m.div initial={{ opacity: 0 }} animate={{ opacity: 3 }} transition={{ duration: 20}} className="box1">
<div className="logo">
   <center>
  <h3>InfraBlog</h3>
  </center>
   </div>
<p>The ultimate Blog Platform For Tech Student&rsquo;s even though others.  </p>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur itaque illum, temporibus nulla doloribus quod quo optio nemo, cumque adipisci praesentium quidem.</p>

</m.div>

</div>
</>
)
}




export default Landing



