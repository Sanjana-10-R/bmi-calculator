import React from'react'
function Employee(){
    const [employee,setEmployee]=useState({
        name:"Arul",
        age:20,
        salary:200000
    });
    return(
        <div>
            salary:
            <input type="number" value={employee.salary}
            onChange={(e)=>{setEmployee({...employee,salary: e.target.value})}}/>

</div>
    )
}
   export default Employee