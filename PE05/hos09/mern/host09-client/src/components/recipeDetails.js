import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Details() {
 const [detail, setDetails] = useState({
   name: "",
   summary: "",
   ingredients: "",
   other: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5050/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setDetails(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Recipe Details</h3>
        <div className="form-group">
          <h4>Name</h4>
            {detail.name}
        </div>


        <div className="form-group">
          <h4>Summary</h4>
          {detail.summary}
        </div>


        <div className="form-group">
          <h4>Ingredients</h4>
          {detail.ingredients}
        </div>


        <div className="form-group">
          <h4>Other</h4>
          {detail.other}
        </div>

    </div>
);}