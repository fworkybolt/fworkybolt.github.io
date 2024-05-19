import PropTypes from 'prop-types';
import React, {useState} from 'react';
import Modal from '../../containers/modal.jsx';
import Box from '../box/box.jsx';
import {defineMessages, injectIntl, intlShape} from 'react-intl';

import styles from './extension-manager-modal.css';

const messages = defineMessages({
    title: {
        defaultMessage: 'Extension Manager',
        description: 'Title of modal that appears when loading the Extension Manager',
        id: 'nb.extensionManager.title'
    }
});

const handleRemoveExtension = (props, extension) => {
    props.vm.extensionManager.removeExtension(extension);
    props.onClose();
}

const ExtensionManagerModal = props => {
    const [loadedExtensions, setLoadedExtensions] = useState(Array.from(props.vm.extensionManager._loadedExtensions));

    let loadedAmountText;
    if (loadedExtensions.length == 0) {
        loadedAmountText = 'No extensions loaded';
    } else if (loadedExtensions.length == 1) {
        loadedAmountText = '1 loaded extension';
    } else {
        loadedAmountText = `${loadedExtensions.length} loaded extensions`;
    }

    return (
        <Modal
            className={styles.modalContent}
            onRequestClose={props.onClose}
            contentLabel={props.intl.formatMessage(messages.title)}
            id='extensionManagerModal'
        >
            <Box className={styles.body}>
                <p>{loadedAmountText}</p>
                {loadedExtensions.map((extension, index) => (
                    <div className={styles.extensionCard} key={index}>
                        <p>{extension[0]}</p>
                        <button
                            className={styles.deleteOption}
                            onClick={() => handleRemoveExtension(props, extension[0])}>
                        </button>
                    </div>
                ))}
            </Box>
        </Modal>
    );
};

ExtensionManagerModal.propTypes = {
    intl: intlShape,
    onClose: PropTypes.func.isRequired,
    vm: PropTypes.shape({
        extensionManager: PropTypes.shape({
            removeExtension: PropTypes.func
        })
    })
};

export default injectIntl(ExtensionManagerModal);