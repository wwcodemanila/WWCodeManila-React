import React, { Component } from 'react'

class Increment extends Component {
   constructor(props) {
       super(props)
       this.state = {
           total: 0
       }
   }

   increment = () => {
       this.setState(previousState => {
          return {total: previousState.total + 1}
       })
   }

   render() {
       return(
           <div id="increment">
               <h1>{this.state.total}</h1>
               <button 
                 className="button"
                 onClick={this.increment}>+1</button>
           </div>
       )
   }
}

export default Increment
