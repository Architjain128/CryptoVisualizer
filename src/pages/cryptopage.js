import React from 'react';
import { useEffect, useState } from 'react';
import { createChart } from 'lightweight-charts';
import Button from '../components/button';
import Chart from '../components/chart';


const CryptoPage = (props) => {
  const [theme,setTheme]=useState("#000000")

  // function to change the theme of the chart
  const toggleTheme=()=>{ 
    var chartContainer = document.getElementById('chart-div');
    var cont=document.getElementsByClassName("main-center");
    var label=document.getElementsByClassName("text");
    var label1=document.getElementById("label-1");
    if(theme=="#ffffff"){
      setTheme("#303030")
      cont[0].style.backgroundColor='#303030';
      chartContainer.style.backgroundColor='#303030';
      for(var i=0;i<label.length;i++){
        label[i].style.color='#ffffff';
      }
      label1.style.color='#ffffff';
    }
    else{
      setTheme("#ffffff")
      cont[0].style.backgroundColor='#fefefe';
      chartContainer.style.backgroundColor='#fefefe';
      for(var i=0;i<label.length;i++){
        label[i].style.color='#000000';
      }
      label1.style.color='#000000';
    }
  }

  return (
    <div>
        <div class="row ">
            <div class="col-3 menu main-left"></div>
            <div class="col-6 main-center">
                <div class="row">
                    <div class="col-8" id="label-1" ><h2>{props.label}</h2></div>
                    <div class="col-4"><Button label="Toggle Theme" fun={toggleTheme}/></div>
                </div>
                <div class="chart-cont">
                  <div class="text"><h3 class="text-center">Price and Quantity for {props.label}</h3></div>
                  {
                    props.webSocLink!=null?<Chart id="chart-div" webSocLink={props.webSocLink} theme={theme} />:null
                  }
                  <h5 class="text text-align" style={{textAlign:'center'}} >Date Time Axis</h5>
                </div>
            </div>
            <div class="col-3 right main-right"></div>
        </div>
    </div>
  );
};
export default CryptoPage
