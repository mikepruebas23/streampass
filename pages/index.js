import Layout from "../components/Layout";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function HomePage() {
  return (
    <Layout title="HOME">
      <Container maxWidth="xl">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh" // Ajusta la altura a tu necesidad
        >
          {/* Utilizamos CSS para establecer el tamaño de la imagen en dispositivos móviles */}
          <style jsx>
            {`
              @media (max-width: 600px) {
                .logo-image {
                  width: 200px;
                  height: 200px;
                }
              }
            `}
          </style>
          <Image
            src="/logo.png"
            alt="Logo"
            width={300} // Tamaño predeterminado en pantallas más grandes
            height={300} // Tamaño predeterminado en pantallas más grandes
            className="logo-image" // Clase CSS para aplicar el tamaño en móviles
          />

          <Button
            variant="outlined"
            href="https://solo.to/mikerm"
            target="_blank"
          >
            REDES
          </Button>

          <Typography
            variant="h2"
            variantMapping={{ h1: 'h3' }} // Cambia la variante en dispositivos móviles
            gutterBottom
            sx={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}
          >
            STREAM PASS
          </Typography>
        </Box>
      </Container>
    </Layout>
  )
}
