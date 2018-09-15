import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'

import { getUsers } from '../Users/actions'
import { selectUsers, selectIsUsersRequestPending } from '../Users/selectors'

const mapStateToProps = createStructuredSelector({
  users: selectUsers,
  isUsersRequestPending: selectIsUsersRequestPending,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUsers,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)
