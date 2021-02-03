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
                { !this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.acivateEditMode } >
                            {this.state.statusText}
                        </span>
                    </div>
                }
                {this.state.editMode &&
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