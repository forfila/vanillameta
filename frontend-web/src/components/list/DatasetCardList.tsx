import { Card, CardActions, CardContent, Grid, IconButton, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Delete, Edit } from '@mui/icons-material';
import React, { useEffect } from 'react';
import CardListWrapper, { CardWrapper } from '@/components/list/CardListWrapper';
import { any } from 'prop-types';

export const DatasetCardList = props => {
  const { data, minWidth, disabledIcons, selectedDataset, onSelectDataset, onDeleteDataset } = props;

  return (
    <CardListWrapper minWidth={minWidth}>
      {data.map
        ? data.map(item => {
            const selected = selectedDataset?.id == item.id;
            return (
              <Grid item xs={12} md component="li" key={item.id}>
                <CardWrapper selected={selected} onClick={() => onSelectDataset(item)}>
                  <CardContent
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      component="span"
                      variant="subtitle2"
                      sx={{
                        width: disabledIcons ? '100%' : '40%',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.title || item.tableName}
                    </Typography>
                  </CardContent>

                  {/* 아이콘 */}
                  {disabledIcons ? null : (
                    <CardActions
                      disableSpacing
                      sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 10,
                        display: 'flex',
                        justifyContent: 'flex-end,',
                        m: 0,
                        p: 0,
                      }}
                    >
                      <IconButton size="medium" component={RouterLink} to={`/data/set/modify/${item.id}`}>
                        <Edit />
                      </IconButton>
                      <IconButton
                        size="medium"
                        onClick={event => {
                          event.preventDefault();
                          event.stopPropagation();
                          onDeleteDataset(item);
                        }}
                      >
                        <Delete />
                      </IconButton>
                    </CardActions>
                  )}
                </CardWrapper>
              </Grid>
            );
          })
        : ''}
    </CardListWrapper>
  );
};

DatasetCardList.defaultProps = {
  data: any,
  minWidth: false,
  disabledIcons: false,
};
