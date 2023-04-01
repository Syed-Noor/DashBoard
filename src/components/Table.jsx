import React, { useState } from 'react';

const Table=()=>{

const dummydata=[
            // {id:1,Name:'Noor',FatherName:'Huda',Address:'Peshawar',class:'1st', DOB:'2005',PhoneNumber:'03322645699'},
            // {id:2,Name:'Noor',FatherName:'Huda',Address:'Peshawar',class:'1st',DOB:'2005',PhoneNumber:'03322645699'},
            // {id:3,Name:'Noor',FatherName:'Huda',Address:'Peshawar',class:'1st',DOB:'2005',PhoneNumber:'03322645699'},
            // {id:4,Name:'Noor',FatherName:'Huda',Address:'Peshawar',class:'1st',DOB:'2005',PhoneNumber:'03322645699'},
            // {id:5,Name:'Noor',FatherName:'Huda',Address:'Peshawar',class:'1st',DOB:'2005',PhoneNumber:'03322645699'},
            // {id:6,Name:'Noor',FatherName:'Huda',Address:'Peshawar',class:'1st',DOB:'2005',PhoneNumber:'03322645699'},
            // {id:7,Name:'kamran',FatherName:'shah',Address:'kohat',class:'1st',DOB:'2008',PhoneNumber:'03322645699'},
            // {id:8,Name:'Noor',FatherName:'Huda',Address:'Peshawar',class:'1st',DOB:'2005',PhoneNumber:'03322645699'},
            // {id:9,Name:'Noor',FatherName:'Huda',Address:'Peshawar',class:'1st',DOB:'2005',PhoneNumber:'03322645699'},
            // {id:10,Name:'Noor',FatherName:'Huda',Address:'Peshawar',class:'1st',DOB:'2005',PhoneNumber:'0332264099'},
            // {id:11,Name:'Saad',FatherName:'Fida',Address:'Malakand',class:'2nd',DOB:'2012',PhoneNumber:'03322645699'},
            // {id:12,Name:'Noor',FatherName:'Huda',Address:'Peshawar',class:'1st',DOB:'2005',PhoneNumber:'03322645699'},
            // {id:13,Name:'Noor',FatherName:'Huda',Address:'Peshawar',class:'1st',DOB:'2005',PhoneNumber:'03322645699'},
            // {id:14,Name:'Noor',FatherName:'Huda',Address:'Peshawar',class:'1st',DOB:'2005',PhoneNumber:'03322645699'},
            // {id:15,Name:'Noor',FatherName:'Huda',Address:'Peshawar',class:'1st',DOB:'2005',PhoneNumber:'03322645699'},
            {Name:'kamran',class:'1st',Session:2019,section:'A',},
            {Name:'Saad',class:'2nd',Session:2020,section:'B',},
            {Name:'Noor',class:'3rd',Session:2021,section:'C',},
            {Name:'Moaiz',class:'4th',Session:2019,section:'A',},
            {Name:'Saad',class:'5th',Session:2019,section:'A',},{Name:'kamran',class:'1st',Session:2019,section:'A',},
            {Name:'Saad',class:'2nd',Session:2020,section:'B',},
            {Name:'Noor',class:'3rd',Session:2021,section:'C',},
            {Name:'Moaiz',class:'4th',Session:2019,section:'A',},
            {Name:'Saad',class:'5th',Session:2019,section:'A',} 
            ]

            const [value, setValue] = useState('');
            const[dataSource,setDataSource]=useState(dummydata);
            const[tableFilter,setTableFilter]=useState([]);

            const filterData=(e)=>{
                if(e.target.value !==""){
                    setValue(e.target.value);
                    const filterTable=dataSource.filter(o=>Object.keys(o).some(k=>String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
                    setTableFilter([...filterTable])

                }
                else{
                    setValue(e.target.value);
                    setDataSource([...dataSource])
                }
              }
        return (
            <div > 
            <div className="input-group mb-3">
  
        <input type="text" class="form-control" placeholder="Search" aria-label="Search" 
        aria-describedby="basic-addon1"
        value={value} onChange={filterData}
       />
        </div>
                <table class="table">
  <thead>
    <tr>
      {/* <th scope="col">#</th> */}
      <th scope="col">Name</th>
      <th scope="col">Class</th>
      <th scope="col">Session</th>
      <th scope="col">Section</th>
      {/* <th scope="col">DOB</th>
      <th scope="col">Phone Number</th> */}
    </tr>
  </thead>
  <tbody>
    {value.length > 0 ? tableFilter.map((data)=>{
        return(
            <tr>
                {/* <td>{data.id}</td> */}
                <td>{data.Name}</td>
                <td>{data.class}</td>
                <td>{data.Session}</td>
                <td>{data.section}</td>
                {/* <td>{data.class}</td>
                <td>{data.PhoneNumber}</td> */}
            </tr>
        )

    })
        : dataSource.map((data)=>{
    return(
        <tr>
                {/* <td>{data.id}</td> */}
                <td>{data.Name}</td>
                <td>{data.class}</td>
                <td>{data.Session}</td>
                <td>{data.section}</td>
                {/* <td>{data.class}</td>
                <td>{data.PhoneNumber}</td> */}
            </tr>
        
    )
})
}
  </tbody>
</table>
            </div>
        );
    }


export default Table;
