import { Button, Card, Box, Typography } from "@material-ui/core";

function CardItem(props) {
  return (
    <>
      <Box className='name-box' >
        <Typography variant='h4'>{props.name}</Typography>
      </Box>
      <Box class='price-box-1'>
        <Typography variant='h4'>{props.priceOne}</Typography>
      </Box>
      <Box class='price-box-2'>
         <Typography color='primary'>{props.priceTwo}</Typography>
      </Box>
      <Button class='btn'>
          Buy Now
      </Button>
    </>
  );
}

export default CardItem;
