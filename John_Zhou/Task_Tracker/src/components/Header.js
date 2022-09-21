

// const Header = (props) => {
//   return (
//     <header>
//         <h1>Task Tracker</h1>
//         <h1>{props.title}</h1>
//     </header>
//   )
// }
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title, onAdd2, showAdd}) => {

  // const onclick1 = () =>{
  //   console.log('click header')
  // }



    return (
      <header className='header'>
          {/* <h1>Task Tracker</h1> */}
          <h1>{title}</h1>
          <Button 
          // color='green' 
          color={showAdd ? 'red' : 'green'}
          // text = 'Add'
          text = {showAdd ? 'Close' : 'Add'}
          // onClick={onclick1}
          onClick={onAdd2}/>
          {/* <Button color='blue' text = 'Hello 1'/>
          <Button color='red' text = 'Hello 2'/> */}
          {/* <button className='btn'>Add</button> */}
      </header>
    )
  }
// CSS in JS
// const headingStyle ={
//   color:'red', 
//   backgroundColor:'black'
// }


Header.defaultProps = {
    title:'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}



export default Header