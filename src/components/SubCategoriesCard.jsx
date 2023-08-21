import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Tooltip } from "@mui/material";

export default function SubCategoriesCard({
  name,
  img,
  children,
  specializedEquipmentId,
  specializedEquipment,
}) {
  return (
    <Card sx={{ height: 320, mt: 10 }}>
      <CardActionArea>
        <CardMedia component="img" height="170" image={img} alt={name} />
        <CardContent>
          <Tooltip title={name} arrow>
            <Typography gutterBottom variant="h5" noWrap component="div">
              {name}
            </Typography>
          </Tooltip>

          {specializedEquipment.map((e) => {
            if (e.id == specializedEquipmentId) {
              return <Typography>{e.name}</Typography>;
            }
          })}
        </CardContent>
      </CardActionArea>
      <CardActions>{children}</CardActions>
    </Card>
  );
}
