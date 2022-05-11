import React from 'react';
import {IconButton, Tooltip} from '@mui/material';
import {Delete as DeleteIcon} from '@mui/icons-material';

const Delete = () => {
  return (
    <>
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default Delete;
