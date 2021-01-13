import { connect } from 'react-redux';
import DetailDeclaration from 'src/components/DetailDeclaration';
import { fetchDetailDeclaration, idDeclaration } from 'src/actions/detailDeclaration';

const mapStateToProps = (state) => ({
  detailDeclaration: state.detail.detailDeclaration,
  idDeclaration: state.detail.idDeclaration,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDetailDeclaration: () => {
    dispatch(fetchDetailDeclaration());
  },

  idDeclaration: (id) => {
    dispatch(idDeclaration(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailDeclaration);