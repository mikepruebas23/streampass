import * as React from 'react';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Layout from '../../components/Layout';

export default function Faq() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Layout title="StreamPass">
    <Grid container spacing={{ xs: 2, md: 1 }} >
    <Grid item sm={6} md={12}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Stream Pass
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>¿Que es?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Stream Pass es un pase de batalla como el que todos conocemos pero para el canal de twitch.
            <br/>
            Donde exist el modo &#39;Gratis&#39; y el modo &#39;de pago&#39;.
            <br/>
            El gratis te da ciertos beneficios y el de pago te da MÁS beneficios.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Stream Pass Gratis</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            ¿Que puedo ganar?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Con el pase gratis podras ganar, Tarjeta GP, Funda para Nintendo  , <br/>
            Mouse Inalámbrico, Recargable 2.4 G  y <br/>
            HOPEMOB Control Alámbrico para Nintendo Gamecube Switch.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Stream Pass de pago
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            ¿Que voy a ganar?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Todo lo anterior que viene en el pase gratis mas: <br/>
            microfono, teclado, controles, adaptadores, audifonos, chromecast.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>¿Como puedo participar?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Facil!, solo tienes que ir a mi canal de twitch : twitch.tv/mikerm <br />
            si optas por el pase gratis, solo compra 1 boleto con los puntos del canal , <br />
            si optas por el pase de pago, solo tienes que tener 1 sub para participar en los retos.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>FAQ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ¿Cuantos retos puedo hacer al día? R: 1 si eres &#39;pase gratis&#39; , 2 si eres &#39;pase de pago&#39;.
           <br />
           ¿Cuantos premios puedo reclamar? R: Mientras tengas los puntos necesarios podras reclamar la recompensa.
           <br />
           ¿Si soy pase gratis, puedo reclamar premios de &#39;pase de pago&#39;?  R: No.
           <br />
           ¿Si soy pase de pago, pudo reclamar Cualquier recompensa? R: Mientras tengas los puntos necesarios si.
           <br />
           ¿si tengo pase de pago, despues junto puntos para un premio de pase de pago y <br/>
           despues se me acaba la sub del canal, puedo reclamar premios de pago? R: solo puede reclamar premios de pago si son subs o &#39; pase de pago &#39;
           <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
      </Grid>
    </Layout>
  );
}
