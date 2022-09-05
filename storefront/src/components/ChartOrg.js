import React from "react";
import { Chart } from "react-google-charts";


export const data = [
  [
    {
      v: "Order:000009",
      f: 'Mike<div style="color:red; font-style:italic">President</div>',
    },
    "",
    "The President",
  ], 
  ['Status:Integrated', 
   'Order:000009', 
   'Combo:000012; \n Products:00001;00002;00003;00004;00005; \n Total Value: 45.25; \n Date: 2022-08-21; \n Customers:000045; '],
   ['Status:Producing', 
    'Status:Integrated', 
    'Combo:000012; \n Products:00001;00002;00003;00004;00005; \n Total Value: 45.25; \n Date: 2022-08-21; \n Customers:000045; '],
   ['Status:Produced', 
   'Status:Producing', 
   'Combo:000012; \n Products:00001;00002;00003;00004;00005; \n Total Value: 45.25; \n Date: 2022-08-21; \n Customers:000045; '],
   ['Status:Delivery', 
   'Status:Produced', 
   'Combo:000012; \n Products:00001;00002;00003;00004;00005; \n Total Value: 45.25; \n Date: 2022-08-21; \n Customers:000045; '],  
   ['Status:Received', 
   'Order:000009', 
   'Combo:000012; \n Products:00001;00002;00003;00004;00005; \n Total Value: 45.25; \n Date: 2022-08-21; \n Customers:000045; '],        
   ['Status:Canceled', 
   'Order:000009', 
   'Combo:000012; \n Products:00001;00002;00003;00004;00005; \n Total Value: 45.25; \n Date: 2022-08-21; \n Customers:000045; '], 
];

export const options = {
  allowHtml: true,
};

export function ChartOrg() {
  return (
    <Chart
      chartType="OrgChart"
      data={data}
      options={options}
      width="100%"
      height="400px"
    />
  );
}