import React from 'react'
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

    onChangeStatus = (e) => {
        let text = e.currentTarget.value
        this.setState({
            statusText: text
        })
    }

    ////////////////

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Update ProfileStatus!')

        if(prevProps.status !== this.props.status) {
            this.setState({
                statusText: this.props.status
            })
        }

    }


    render() {
        return (
            <div className={s.statusBlock}>
                { !this.state.editMode
                    ?
                    <div>
                        <span onClick={ this.acivateEditMode } >
                            {this.props.status || 'Status...'}
                        </span>
                    </div>
                    :
                    <div>
                        <input type='text'
                               value={this.state.statusText}
                               autoFocus={true}
                               onBlur={ this.deacivateEditMode }
                               onChange={ this.onChangeStatus }
                        />
                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;