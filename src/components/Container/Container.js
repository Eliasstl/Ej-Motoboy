import React, {Component, component} from 'react';
import './Container.css';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from '@material-ui/core';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import EmailIcon from '@material-ui/icons/Email';


const useStyles = makeStyles({
    root:{
        color: 'rgb(0,0,56)',
        marginTop:-5,
        fontSize:200,
        paddingBottom: 8,

    }

});
function Container(){
    const classes=useStyles();
    return(
        <div class="container">
            <ul>
            <h1 class="titu1">CONTATO</h1>
                <li>
                    <div class="title">WhatsApp</div>
                    <div class="iconeDiv">< WhatsAppIcon className={classes.root}></ WhatsAppIcon></div>
                </li>
                <li>
                    <div class="title">Ligue Agora</div>
                    <div class="iconeDiv"><PhoneIcon className={classes.root} EmailIcon></PhoneIcon></div>
                </li>
                <li>
                    <div class="title">Email</div>
                    <div class="iconeDiv"><EmailIcon className={classes.root} EmailIcon></EmailIcon></div>
                </li>
                <li>
                    <div class="title">Entregas Já</div>
                    <div class="iconeDiv"><MotorcycleIcon className={classes.root}></MotorcycleIcon></div>
                   
                </li>
              
            </ul>
        </div>
    )
        
}

export default Container;
