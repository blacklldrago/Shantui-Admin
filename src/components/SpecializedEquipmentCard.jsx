import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Tooltip } from "@mui/material";

export default function SpecializedEquipmentCard({
  name,
  img,
  children,
  techidx,
  tech,
}) {
  console.log(tech);
  console.log(techidx);
  return (
    <Card sx={{height:320,  mt: 10 }}>
      <CardActionArea>
        <CardMedia component="img" height="170" image={img} alt={name} />
        <CardContent>
          <Tooltip title={name} arrow>
            <Typography gutterBottom variant="h5" noWrap component="div">
              {name}
            </Typography>

            {tech.map((e) => {
              if (e.id == techidx) {
                return <Typography>{e.name}</Typography>;
              }
            })}
          </Tooltip>
        </CardContent>
      </CardActionArea>
      <CardActions>{children}</CardActions>
    </Card>
  );
}
