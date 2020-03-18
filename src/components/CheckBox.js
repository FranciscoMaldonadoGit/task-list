import React,{Component} from 'react';

class CheckBox extends Component {
      
    constructor(props) {
        super(props);
        this.state = { 
            isSelected: this.props.isSelected,
        };
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
     }  

    
     handleCheckboxChange(e) {
            this.setState({  isSelected : !this.state.isSelected });
            this.props.onSendTaskWithUpdate( e.target.id , !this.state.isSelected );
    }

    render(){            
        return (
            <div>
                <label>
                        <input
                            type="checkbox"
                            name={this.props.nameTaskText}
                            checked= {this.state.isSelected}
                            onChange={this.handleCheckboxChange}
                            //className="form-check-input"
                            id= { this.props.id }
                        />
                        {this.props.nameTaskText}
                </label>
            </div>
        );
        
    }
}
export default CheckBox;