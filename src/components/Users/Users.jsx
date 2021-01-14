import axios from 'axios'
import React from 'react'
import s from './Users.module.css'


class Users extends React.Component {

    constructor(props) {
        super(props)

    }

    componentDidMount() {

        if(!this.props.users.length) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                }
            )
        }

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.setUsers(response.data.items)
                }
            )
    }

    onPageFirst = () => {
        this.props.setCurrentPage(1)

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.setUsers(response.data.items)
                }
            )
    }

    onPagePrev = () => {
        let pageNumber = this.props.currentPage - 1;
        if(pageNumber < 1) return
        this.props.setCurrentPage(pageNumber)

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.setUsers(response.data.items)
                }
            )
    }

    onPageNext = () => {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pageNumber = this.props.currentPage + 1;
        if(pageNumber > pagesCount) return
        this.props.setCurrentPage(pageNumber)

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.setUsers(response.data.items)
                }
            )
    }

    onPageLast = () => {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        this.props.setCurrentPage(pagesCount)

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagesCount}&count=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.setUsers(response.data.items)
                }
            )
    }

    //////////////////////////

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for(let i=1; i < pagesCount + 1; i++ ) {
            pages.push(i)
        }
        
        return <div>

            <div className={s.paginator}>
                <span onClick={ this.onPageFirst }> &le; </span>
                <span onClick={ this.onPagePrev }> &lt; </span>
                {
                    pages.map(p => {
                        return (
                            <span className={p===this.props.currentPage ? s.selected : ''} 
                                    onClick={(e) => { this.onPageChanged(p) }}
                                    key={p}>{p}</span>
                        )
                    })
                }
                <span onClick={ this.onPageNext }> &gt; </span>
                <span onClick={ this.onPageLast }> &ge; </span>
            </div>

            {
        
                this.props.users.map(user => {
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
                                ? <button onClick={(e) => this.props.unfollow(user.id,e)}>Unfollow</button> 
                                : <button onClick={() => this.props.follow(user.id)}>Follow</button>
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

    }

}

export default Users