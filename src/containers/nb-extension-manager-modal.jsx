import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {intlShape} from 'react-intl';
import bindAll from 'lodash.bindall';
import {closeExtensionManagerModal} from '../reducers/modals';
import ExtensionManagerModalComponent from '../components/nb-extension-manager-modal/extension-manager-modal.jsx';

class NBExtensionManagerModal extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, 'handleClose');
    }

    handleClose () {
        this.props.onClose();
    }

    render () {
        return (
            <ExtensionManagerModalComponent
                onClose={this.handleClose}
                vm={this.props.vm}
            />
        );
    }
};

NBExtensionManagerModal.propTypes = {
    intl: intlShape,
    onClose: PropTypes.func.isRequired,
    vm: PropTypes.shape({
        extensionManager: PropTypes.shape({
            removeExtension: PropTypes.func
        })
    })
};

const mapStateToProps = state => ({
    vm: state.scratchGui.vm
});

const mapDispatchToProps = dispatch => ({
    onClose: () => dispatch(closeExtensionManagerModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NBExtensionManagerModal);