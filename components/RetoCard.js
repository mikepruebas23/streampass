import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import Image from 'next/image';

export default function RetoCard({reto}) {

//   const router = useRouter();

  const onClick = () => {
    // router.push(`/pokemons/${pokemon.id}`)
    console.log('works')
  };

return (
  <Card onClick={onClick}>
    <CardContent>
      <CardMedia image={reto.img}  sx={{ height: 100, margin: '0 auto'}}  title={reto.name}/>
    </CardContent>
    <Divider />
    <CardActions>
      <Box justify='space-between'>
        <Typography transform='capitalize' variant='body'>{ reto.name }</Typography>
        <Typography transform='capitalize' variant='body2'>{ reto.category }</Typography>
        <Box >
          {
            (reto.freepass === 1) ?
            <Box sx={{background: '#fa8700', padding: 0.5, color: 'white', borderRadius: '3px',
            width: '100%'}}>
            <Typography variant='body2'>only subs</Typography>
            {/* <Image src="/sub.png" alt="Logo" width={30} height={30} /> */}
          </Box>
          : 
          <Box sx={{background: '#e3e6e6', padding: 0.5, color: 'black', borderRadius: '3px',
            width: '100%'}}>
            <Typography variant='body2'>Free Pass</Typography>
          </Box>
          } 
          <Box>
            <Typography variant='body2'>Puntos: {reto.points}</Typography>
          </Box>
        </Box>
      </Box>
    </CardActions>
  </Card>
  );
}