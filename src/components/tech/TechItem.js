import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Box,Text, IconButton,Divider } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import { deleteTech } from '../../actions/techAction';

const TechItem = ({tech: {id,firstName,lastName},deleteTech}) => {
    const onDelete = () => {
        deleteTech(id);
    }
    return (
        <React.Fragment>
            <Box display={'flex'} alignItems={'center'} my={2}>
                <Text flexGrow={1}>{firstName} {lastName}</Text>
                <IconButton icon={<DeleteIcon/>} onClick={onDelete}/>
            
            </Box>
            <Divider/>
        </React.Fragment>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired
}

export default connect(null,{deleteTech})(TechItem);