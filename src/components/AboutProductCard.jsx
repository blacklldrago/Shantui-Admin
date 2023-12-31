import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Tooltip } from "@mui/material";

export default function AboutProductCard({
  aboutProductImage,
  powerSystem,
  transmissionSystem,
  cabinandControls,
  adaptiveAbilityToWork,
  easeOfMaintenance,
  children,
}) {
  return (
    <Card sx={{ height:360, mt: 10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image = {`${import.meta.env.VITE_APP_API_URL}/Images/${aboutProductImage}`}
          alt={aboutProductImage}
        />
        <CardContent>
          <Tooltip title={powerSystem} arrow>
            <Typography gutterBottom variant="h5" noWrap component="div">
              {powerSystem}
            </Typography>
          </Tooltip>
          <Typography>{transmissionSystem}</Typography>
          <Typography>{cabinandControls}</Typography>
          <Typography>{adaptiveAbilityToWork}</Typography>
          <Typography>{easeOfMaintenance}</Typography>
        </CardContent>
      <CardActions><div style={{position:"relative", bottom:"10px"}}>{children}</div></CardActions>
      </CardActionArea>
    </Card>
  );
}
