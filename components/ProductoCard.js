import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

export default function ProductoCard({premio}) {

//   const router = useRouter();

  const onClick = () => {
    // router.push(`/pokemons/${pokemon.id}`)
    console.log('works')
  };

return (
  <Card onClick={onClick}>
    <CardContent css={{ p: 1 }}>
      <CardMedia image={premio.url}  sx={{ height: 100, width: 120, margin: '0 auto'}}  title={premio.name}/>
    </CardContent>
    <Divider />
    <CardActions>
      <Box justify='space-between'>
        <Typography transform='capitalize'>{ premio.name }</Typography>
        <Box >
          {
            (premio.pass === 1) ?
            <Box sx={{background: '#fa8700', padding: 0.5, color: 'white', borderRadius: '3px',
            width: '100%'}}>
            <Typography>{(premio.pass === 0) ? 'Free Pass' : 'only sub'}</Typography>
          </Box>
          : 
          <Box sx={{background: '#e3e6e6', padding: 0.5, color: 'black', borderRadius: '3px',
            width: '100%'}}>
            <Typography>{(premio.pass === 0) ? 'Free Pass' : 'only sub'}</Typography>
          </Box>
          } 
          <Box>
            <Typography>Puntos: {premio.points}</Typography>
          </Box>
        </Box>
      </Box>
    </CardActions>
  </Card>
  );
}