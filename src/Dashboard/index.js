import React, { Component } from 'react'
import styled from 'styled-components'

import User from '../Users/components/User'
import { USER_STATUSES } from '../Users/consts'
import container from './container'
import Column from './components/Column'

const Container = styled.div`
  width: 680px;
  margin: 0 auto;
  display: flex;
  display: flex;
  flex-flow: row;
`

const filterByStatus = (usersObj, status) =>
  Object.keys(usersObj)
    .filter(key => usersObj[key].hireStatus === status)
    .map(key => usersObj[key])

class Dashboard extends Component {

  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    const { users, isUsersRequestPending } = this.props

    if (isUsersRequestPending) {
      return <h4>Loading...</h4>
    }

    return (
      <Container>
        <Column title="Applied">
          {filterByStatus(users, USER_STATUSES.APPLIED)
            .map(user => <User key={user.login.uuid} {...user} />)}
        </Column>
        <Column title="Interviewing">
          {filterByStatus(users, USER_STATUSES.INTERVIEWING)
            .map(user => <User key={user.login.uuid} {...user} />)}
        </Column>
        <Column title="Hired">
          {filterByStatus(users, USER_STATUSES.HIRED)
            .map(user => <User key={user.login.uuid} {...user} />)}
        </Column>
      </Container>
    )
  }
}

export default container(Dashboard)
