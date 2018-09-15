import React, { PureComponent } from 'react'
import styled from 'styled-components'

import { USER_STATUSES, getNextStatus, getPrevStatus } from '../../consts'
import container from './container'

const DisplayName = styled.div`
  fontSize: 16;
  lineHeight: 20;
  color: #2d2926;
  text-transform: capitalize;
`

const UserContainer = styled.div`
  display: flex;
  flex-flow: row;
  border: 1px solid #ebebeb;
  padding: 16px;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`

const UserImage = styled.div`
  margin-right: 32px;
  overflow: hidden;
  border-radius: 50%;
`

const Navigation = styled.nav`
  display: flex;
  flex-flow: row;
  margin-top: 4px;
`

const NavButton = styled.button`
  height: 36px;
  width: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ebebeb;
  outline: 0;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: #ebebeb;
  }
`

class User extends PureComponent {
  handleMoveNextClick = () => {
    const { hireStatus, login, changeUserStatus } = this.props
    const nextStatus = getNextStatus(hireStatus)
    if (nextStatus) {
      changeUserStatus({ id: login.uuid, newHireStatus: nextStatus })
    }
  }

  handleMovePrevClick = () => {
    const { hireStatus, login, changeUserStatus } = this.props
    const prevStatus = getPrevStatus(hireStatus)
    if (prevStatus) {
      changeUserStatus({ id: login.uuid, newHireStatus: prevStatus })
    }
  }

  render() {
    const { name, picture, hireStatus } = this.props

    return (
      <UserContainer>
        <UserImage>
          <img src={picture && picture.medium} />
        </UserImage>

        <div>
          <DisplayName>
            {`${name.first} ${name.last}`}
          </DisplayName>

          <Navigation>
            {(hireStatus === USER_STATUSES.INTERVIEWING || hireStatus === USER_STATUSES.HIRED) && (
              <NavButton onClick={this.handleMovePrevClick}>
                {'<'}
              </NavButton>
            )}
            {(hireStatus === USER_STATUSES.INTERVIEWING || hireStatus === USER_STATUSES.APPLIED) && (
              <NavButton onClick={this.handleMoveNextClick}>
                {'>'}
              </NavButton>
            )}
          </Navigation>
        </div>

      </UserContainer>
    )
  }
}

export default container(User)
