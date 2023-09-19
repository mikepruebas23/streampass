import React from 'react';
import Grid from '@mui/material/Grid';
import { retosApi } from '../../api/index';
import Layout from '../../components/Layout';
import RetoCard from '../../components/RetoCard';

const index = () => {

  return (
    <Layout title="Retos | StreamPass">
      <Grid container spacing={{ xs: 2, md: 1 }}>
        {retosApi.map((reto) => (
          <Grid item xs={6} md={2} key={reto.id}>
            <RetoCard reto={reto} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default index;
