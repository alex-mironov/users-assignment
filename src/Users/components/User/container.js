import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeUserStatus } from '../../actions'

const mapDispatchToProps = dispatch => bindActionCreators({
  changeUserStatus,
}, dispatch)

export default connect(null, mapDispatchToProps)
