import React from 'react';
import Grid from '@mui/material/Grid';
import {premiosApi} from '../../api/index';
import Layout from '../../components/Layout';
import ProductoCard  from '../../components/ProductoCard';

const index = () => {
    return (
        <Layout title="StreamPass">
            <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 12, sm: 12, md: 10 }}>
                 {premiosApi.map((premio) => (
                    <Grid key={premio.id} item md={2}>
                        <ProductoCard premio={premio}/>
                    </Grid>
                 ))}
             </Grid>
        </Layout>
    )
}

export default index