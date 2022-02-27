import React from "react";
import { useEffect, useState } from 'react';
import { createChart } from 'lightweight-charts';


function Chart({id,webSocLink,theme,data}) {
    let price = []
    let quantity = []
    let quantity2 = []
    let last=-1
    useEffect(() => {
        let socket;
        if (!data){
            socket = new WebSocket(webSocLink);
        }
        var graph=document.getElementById("chart-div");
        var chart = createChart(graph, {
            width: 600,
            height: 300,
            rightPriceScale: {
            visible: true,
            borderColor: 'rgba(197, 203, 206, 1)',
            },
            leftPriceScale: {
            visible: true,
            borderColor: 'rgba(197, 203, 206, 1)',
            },
            layout: {
            backgroundColor: 'rgba(255,0,0, 0)',
            textColor: 'rgba(255,0,255, 1)',
            },
            grid: {
            vertLines: {
                color: 'rgba(197, 203, 206, 1)',
            },
            horzLines: {
                color: 'rgba(197, 203, 206, 1)',
            },
            },
            timeScale: {
            timeVisible: true,
            secondsVisible: true,
            borderColor: 'rgba(197, 203, 206, 1)',

            },
        });
        var hist_pro = chart.addHistogramSeries({
            priceFormat: {
                type: 'volume',
            },
            priceLineVisible: false,
            color: 'rgba(76, 175, 80, 0.5)',
            priceScaleId:'',
            scaleMargins: {
                top: 0.85,
                bottom: 0,
            },
        });
        var hist_low = chart.addHistogramSeries({
            priceFormat: {
            type: 'volume',
            },
            priceLineVisible: false,
            color: 'rgba(255, 0, 0, 0.5)',
            priceScaleId:'',
            scaleMargins: {
            top: 0.85,
            bottom: 0,
            },
            
        });
        var lineSeries_right = chart.addLineSeries({priceScaleId:'right'});
        if(data ==null){
            socket.onmessage = val => {
                val=JSON.parse(val.data);
                let sample_data={time:Math.floor(new Date(val.E).getTime() / 1000),value:parseFloat(val.p)}
                let sample_data_quant={time:Math.floor(new Date(val.E).getTime() / 1000),value:parseFloat(val.q)}
                if (last!=sample_data.time){
                    price=[...price,sample_data]
                    if(val.m){
                    quantity=[...quantity,sample_data_quant]
                    }
                    else{
                    quantity2=[...quantity2,sample_data_quant]
                    }
                    last=sample_data.time
                }
                lineSeries_right.setData(price)
                hist_pro.setData(quantity)
                hist_low.setData(quantity2)
            };
        }
        else{
            lineSeries_right.setData(data[0])
            hist_pro.setData(data[1])
            hist_low.setData(data[2])
        }
        
    }, []);
    return <div id="chart-div"></div>
}
export default Chart;