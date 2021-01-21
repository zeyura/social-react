import axios from 'axios'
import React from 'react'
import {NavLink} from "react-router-dom";
import Preloader from '../common/Preloader'
import s from './Users.module.css'


class Users extends React.Component {

    constructor(props) {
        super(props)

    }

    componentDidMount() {

        if(!this.props.users.length) {
            this.props.toggleLoader(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);

                    this.props.toggleLoader(false)
                }
            )
        }

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)

            this.props.toggleLoader(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.setUsers(response.data.items)
                    this.props.toggleLoader(false)
                }
            )
    }

    onPageFirst = () => {
        this.props.setCurrentPage(1)

             this.props.toggleLoader(true)

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.setUsers(response.data.items)
                    this.props.toggleLoader(false)
                }
            )
    }

    onPagePrev = () => {
        let pageNumber = this.props.currentPage - 1;
        if(pageNumber < 1) return
        this.props.setCurrentPage(pageNumber)

            this.props.toggleLoader(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.setUsers(response.data.items)
                    this.props.toggleLoader(false)
                }
            )
    }

    onPageNext = () => {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pageNumber = this.props.currentPage + 1;
        if(pageNumber > pagesCount) return
        this.props.setCurrentPage(pageNumber)

            this.props.toggleLoader(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.setUsers(response.data.items)
                    this.props.toggleLoader(false)
                }
            )
    }

    onPageLast = () => {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        this.props.setCurrentPage(pagesCount)

            this.props.toggleLoader(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagesCount}&count=${this.props.pageSize}`)
            .then(
                response => {
                    this.props.setUsers(response.data.items)
                    this.props.toggleLoader(false)
                }
            )
    }

    //////////////////////////

    render() {


        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        let currentPage = this.props.currentPage;

        let firstPoints = 0, // первое троеточие 
            lastPoints  = 0;

        for(let i=1; i < pagesCount + 1; i++ ) {
            pages.push(i)
        }

        let siblings = this.props.siblingsCount;
        if(pagesCount > siblings) {
                if(currentPage < siblings - 1) {
                    firstPoints = siblings + 0
                } else if(currentPage >= pagesCount - siblings) {
                    firstPoints = siblings + 1
                } else {
                    firstPoints = siblings + 1
                    lastPoints  = currentPage + siblings + 1
                }
        }
        
        return <>
           
            {
              this.props.isLoading ?
              (  <div className={s.loader}>
                  <Preloader />
                  </div> ) :
              null
            }

            <div className={s.paginator}>
                {
                    currentPage > 1 ?
                  ( <span onClick={ this.onPageFirst }> &le; </span> ) :
                  ( <span className={ s.passive }> &le; </span> )
                }
                {
                  currentPage > 1 ?
                  ( <span onClick={ this.onPagePrev }> &lt; </span> ) :
                  ( <span className={ s.passive }> &lt; </span> )
                }

                {           
                    pages.map(p => {
                        if(p <= siblings || p > pagesCount - siblings || 
                            ( p > currentPage - siblings && p < currentPage + siblings )) {
                            return (
                                <span className={p===currentPage ? s.selected : ''} 
                                        onClick={(e) => { this.onPageChanged(p) }}
                                        key={p}>{
                                           p
                                        }</span>
                            )
                        } else if(firstPoints > 0) {
                            firstPoints = 0
                            return (
                                <span className={'threeDots'} key={p}> ... </span>
                            )
                        } else if(lastPoints > 0  && lastPoints > siblings*3+1 && lastPoints === p) {
                            lastPoints = 0
                            return (
                                <span className={'threeDots'} key={p}> ... </span>
                            )
                        }
                        
                    })
                }
               
                {
                    currentPage < pagesCount ?
                    ( <span onClick={ this.onPageNext }> &gt; </span> ) :
                    ( <span className={ s.passive }> &gt; </span> )
                }
                {
                    currentPage < pagesCount ?
                    ( <span onClick={ this.onPageLast }> &ge; </span> ) :
                    ( <span className={ s.passive }> &ge; </span> )
                }
            </div>

            {
        
                this.props.users.map(user => {
                return (
                    <div className={s.userItem} key={user.id}>
                        <div className={s.left}>
                            <div className='img'>

                                <NavLink to={'/profile/' + user.id}>
                                <img src={ user.photos.small !== null  
                                        ? user.photos.small 
                                        : '/img/155.jpg' 
                                        } 
                                    className={s.usersPhoto} 
                                />
                                </NavLink>
                                
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

        </>
    
    }

}

export default Users