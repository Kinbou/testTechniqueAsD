import { connect } from 'react-redux';
import ListDeclarations from 'src/components/ListDeclarations';
import { fetchAllListDeclarations} from 'src/actions/global';

const mapStateToProps = (state) => ({
  listDeclarations: state.global.listDeclarations,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllListDeclarations: () => {
    dispatch(fetchAllListDeclarations());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListDeclarations);