import React from 'react'
import s from './Users.module.css'

let Users = (props) => {

    if(!props.users.length) {
        props.setUsers(
            [
                {id: 1, url:'129.jpg', followed: true, fullname: 'Vasja P', status: 'Boss', location: { country: 'Ukraine', city: 'Kiev' } },

         {id: 2, url:'129.jpg', followed: true, fullname: 'Sasha G', status: 'Boss', location: { country: 'Ukraine', city: 'Kiev' } },

         {id: 3, url:'129.jpg', followed: false, fullname: 'Yura Mo', status: 'miniBoss', location: { country: 'Ukraine', city: 'Poltavassss' } },
            ]
        )
    }


    return (
        props.users.map(user => {
            return (
                <div className={s.userContainer} key={user.id}>
                    <div className={s.left}>
                        <div className='img'>
                            <img src={'/img/' + user.url} className={s.usersPhoto} />
                        </div>
                        {
                            user.followed 
                            ? <button onClick={(e) => props.unfollow(user.id,e)}>Unfollow</button> 
                            : <button onClick={() => props.follow(user.id)}>Follow</button>
                        }
                        
                    </div>
                    <div className={s.right}>
                        <div className='name'>
                            {user.fullname}
                        </div>
                        <div className='location'>
                            <span>{user.location.city}</span>
                            <span>{user.location.country}</span>
                        </div>
                    </div>
                </div>
            )

        })
        
    )
}

export default Users