import { useEffect, useState } from "react"
import Addtransaction from "./components/Addtransaction"
import ExpenseItem from "./components/Expenseitem"
import axios from "axios"
const App=()=>{
  // const [title,setTitle]=useState()
  //   const [amount,setAmount]=useState()
  const [expenses,setExpense]= useState([
    // { id:1,title :"cinema" ,amount:-140},
    // { id:2 ,title :"food", amount:-210},
    // { id:3 ,title :"outing", amount:400},   
])
useEffect(()=>{
  axios.get('https://expensetracker-tea5.onrender.com/get-entries')
  .then(res =>{
    console.log(res.data)
    setExpense(res.data)
  })
},[])
const addexpense=(title,amount)=>{
  const nextId=expenses.length===0?1:expenses[expenses.length-1].id+1  
  setExpense([...expenses,{id:nextId, title:title, amount:amount}])
 }
const deleteExpense =(id)=>{
  setExpense(expenses.filter((exp)=>exp.id!==id))
}
// const details={
//   id:0,
//   text:text,
//   amount:amount
// }
var expense=0
var income=0
expenses.forEach(element => {
  if(element.amount<0){
    expense=expense-element.amount
  }
  else{
    income=income+element.amount
  } 
});
  return(
    <>
    <div className="balance">Balance:{income-expense}</div>
    <div className="incomeexpense">
      <div className="Income">
    <span className="title">Income:</span>
    <span>{income}</span>
    </div>
    <div className="block">.</div>
    <div className="Expense">
      <span className="title">Expense:</span>
      <span>{expense}</span>
      </div>
      </div>
      <Addtransaction addexpense={addexpense}/>
         {expenses.map((expense)=>{
              return (
                <ExpenseItem key={expense.id} title={expense.title} id={expense.id} amount={expense.amount} deleteExpense={deleteExpense} />
            )
            })}
    </>
  )
}
export default App