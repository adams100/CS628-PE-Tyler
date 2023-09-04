import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   summary: "",
   ingredients: "",
   other: ""
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
   console.log(newPerson);
   await fetch("http://localhost:5050/record", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       "Access-Control-Allow-Origin": "true"
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", summary: "", ingredients: "", other: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Recipie</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="Summary">Summary</label>
         <textarea
           type="text"
           className="form-control"
           id="summary"
           value={form.summary}
           onChange={(e) => updateForm({ summary: e.target.value })}
         />
       </div>
       <div className="form-group">
       <label htmlFor="Ingredients">Ingredients</label>
         <textarea
           type="text"
           className="form-control"
           id="ingredients"
           value={form.ingredients}
           onChange={(e) => updateForm({ ingredients: e.target.value })}
         />
       </div>
       <div className="form-group">
       <label htmlFor="Other">Other</label>
         <textarea
           type="text"
           className="form-control"
           id="other"
           value={form.other}
           onChange={(e) => updateForm({ other: e.target.value })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create recipe"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}