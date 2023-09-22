import Button from "./Buttton"
import style from "./Actions.module.css"
const Actions = (props) => {
  const doActionResetHandler = () =>{
    props.reset()
  }
  // const doActionSubmitHandler = ()=>{
  //   props.submit()
  // }

  return (
    <p className={style.actions}>
        <Button type = "reset" className = "buttonAlt" onClick = {doActionResetHandler}  >Reset</Button>
        <Button type = "submit" className ="button">Calculate</Button> 
    </p>
  )
}
export default Actions