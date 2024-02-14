const ExpenseItem=(props)=>{
  const {title,amount,id,deleteExpense}=props
  const handleDelete=()=>{
    deleteExpense(id)
  }
    return(
      <>
      <div className="table">
      <div className={`extable ${amount>0?'positive':'negative'}`}>
      <div className="ex-title">{title}</div>
      <div className="ex-amount">{amount}</div> 
      </div>  
      <button className="delete"onClick={handleDelete}>delete</button>
    
      </div>
      </>
    )
  }
  export default ExpenseItem
