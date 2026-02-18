function Employee(){
    const[emp,setEmp]=useState({
        fullName:" ",
        phone:" ",
        skill:[]
    })
    const handleEmployee=()=>{
    return(
        <div>
            <form>
                <label>Name</label>
                <input type='text' name="fullName" value={emp.fullName} onChange={handleEmployee}/>
                <label>Phone Number</label>
                 <input type='text' name="phone" value={emp.phone} onChange={handleEmployee}/>
                    <label>Skills</label>
                 <input type='checkbox' name="skill" value={"JAVA"} onChange={handleEmployee}/>
                  <input type='checkbox' name="skill" value={"REACT"} onChange={handleEmployee}/>
                   <input type='checkbox' name="skill" value={"ANGULAR"} onChange={handleEmployee}/>
            </form>
        </div>
    )
}
}
export default EmployeeInfo;