import React, { useEffect, useState,useRef  } from "react";
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function Dashboard(){
    const [apiData,setData]=useState([]);
    const chartRef = useRef(null);
    useEffect(()=>{
        fetch('http://localhost:4400/getdata')
        .then(response => response.json())
        .then(data => {
        
          console.log(data);
          setData(data);
        })
        .catch(error => {
        
          console.error(error);
        });
    },[]);

    useEffect(()=>{
        if (chartRef.current) {
            chartRef.current.destroy();
          }
        renderChart();
    },[apiData])
    

    const renderChart = async () => {
        const labels=apiData.map(item=>item.fname);
        const curryr=new Date().getFullYear();
        const vals=apiData.map(item=>curryr-new Date(item.dob).getFullYear());
        const myChartCanvas = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(myChartCanvas, {
          type: 'bar',
          data: {
            labels: labels, 
            datasets: [
              {
                label: 'My Data', 
                data:vals, 
                backgroundColor: 'rgba(75, 192, 192, 0.2)', 
                borderColor: 'rgba(75, 192, 192, 1)', 
                borderWidth: 1, 
              },
            ],
          },
          options: {
            responsive: true, 
            scales: {
              y: {
                beginAtZero: true, 
              },
            },
          },
        });
      };



    return(
        <>
           <canvas id="myChart"></canvas>
        </>
    )
}

export default Dashboard;