import React from 'react'
import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            editMode: false,
            statusText: this.props.status
        }
    }

    // ------------------ Methods ---------

    acivateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deacivateEditMode = () => {
        this.props.updateStatus(this.state.statusText)
        this.setState({
            editMode: false
        })
    }

    changeStatus = (e) => {
        let text = e.target.value
        this.setState({
            statusText: text
        })
    }

    //////////////////////

    render() {
        return (
            <div className={s.statusBlock}>
                { !this.state.editMode
                    ?
                    <div>
                        <span onClick={ this.acivateEditMode } >
                            {this.state.statusText}
                        </span>
                    </div>
                    :
                    <div>
                        <input type='text'
                               value={this.state.statusText}
                               autoFocus={true}
                               onBlur={ this.deacivateEditMode }
                               onChange={ this.changeStatus }
                        />
                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;