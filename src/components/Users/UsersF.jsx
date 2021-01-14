import axios from 'axios'
import React from 'react'
import s from './Users.module.css'


let Users = (props) => {

    let getUsers = () => {

        if(!props.users.length) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
                response => {
                     props.setUsers(response.data.items)
                }
            )
    
        }

    }
    

    return (
        <div>

<button onClick={getUsers}>Get Users</button>

        {
        
            props.users.map(user => {
                return (
                    <div className={s.userItem} key={user.id}>
                        <div className={s.left}>
                            <div className='img'>
                                <img src={ user.photos.small !== null  
                                        ? user.photos.small 
                                        : '/img/155.jpg' 
                                        } 
                                    className={s.usersPhoto} 
                                />
                            </div>
                            {
                                user.followed 
                                ? <button onClick={(e) => props.unfollow(user.id,e)}>Unfollow</button> 
                                : <button onClick={() => props.follow(user.id)}>Follow</button>
                            }
                            
                        </div>
                        <div className={s.right}>
                            <div className='name'>
                                {user.name}
                            </div>
                            <div className='location'>
                                <span>{"user.location.city"}</span>
                                <span>{"user.location.country"}</span>
                            </div>
                        </div>
                    </div>
                )

            })

        }

        </div>
        
    )
}

export default Users