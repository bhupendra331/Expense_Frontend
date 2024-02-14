import React,{useState} from 'react'
import axios from 'axios';
const addtransction=(props)=>{
    const {addexpense}=props
    const [title,setTitle]=useState("");
    const [amount,setAmount]=useState(0);
    const [error,setError]=useState({})
    // const [errorA,setErrorA]=useState({})
    const onSumbit =(event)=>{
        event.preventDefault()
        axios.post('https://expensetracker-tea5.onrender.com/add-entry',{"title":title,"amount":parseInt(amount)})
        .then(result => { 
            console.log(result.data)
           
        
        })
        .catch(err=>console.log(err))
    
        console.log(title,amount)
        let err={}
        // if (title==''||amount==0){
        //     alert("please enter valid title")
        //     return
        // }
        if(title.length<3){
           setError({...error,title:"letter at least should be 3 letter"}) 
            return
        }
        if(!amount){
            setError({...error,Amount:"enter a valid amount"}) 
            return
        }
        if(Object.keys(err).length>0){
            setError({...err})
            return
        }
        addexpense(title,parseInt(amount))
        setTitle('')
        setAmount(0)
    }
    return(
        <> 
        <form onSubmit={onSumbit}>
            <div className='add'>
            <div className='form-control'>
                <label>Title</label>
               < input value={title}  onChange={(event)=> {
                setTitle(event.target.value) 
                setError({...error,title:''})
                  }
                  } placeholder='Enter Text...' type="text" />
              {error.title? <div className="error">{error.title}</div>:null}
            </div>
            <div className='form-control'>
                <label>Amount</label>
               < input value={amount} onChange={(event)=> setAmount(event.target.value)
            // setError({...error,amount:''})
            } placeholder='Enter Amount ...' type="number" />
               {error.Amount? <div className="error">{error.Amount}</div>:null}
            </div>
          
            <button className='btn' >Add Transaction</button>
            </div>
        </form>
        </>
    )
}
export default addtransction