import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Tooltip } from "@mui/material";

export default function UsersCard({
    
    userFileName,
    userName,
    firstName,
    lastName,
    phoneNumber,
    email,
    children,
    roles
}) {
    console.log(firstName, lastName);
  return (
    <Card sx={{mt:10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={userFileName}
          alt={userFileName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" noWrap component="div">{firstName}</Typography>
          <Typography gutterBottom variant="h5" noWrap component="div">{lastName}</Typography>
          <Typography>Phonenumber:{phoneNumber}</Typography>
          <Typography>Username:{userName}</Typography>
          <Typography>Email:{email}</Typography>
          {
            roles.map((e)=>{
                return <Typography>
                    {e.name}
                </Typography>
            })
          }
        </CardContent>
      </CardActionArea>
      <CardActions>
        {children}
      </CardActions>
    </Card>
  );
}


