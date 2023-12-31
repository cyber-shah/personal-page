import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';


function ReviewCard(props) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      {props.image && (
        <CardMedia
          component="img"
          alt={props.alt}
          height="140"
          image={props.plantImage}
        />)}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      {props.tags && (
        <CardContent>
          {props.tags.map((tag) => (
            <Chip label={tag} />
          ))}
        </CardContent>
      )}

      <div style={{ textAlign: 'center' }}>
        <CardActions>
          {props.github && (
            <Link href={props.github} target="_blank" rel="noopener noreferrer">
              <IconButton aria-label="GitHub">
                <GitHubIcon />
              </IconButton>
            </Link>
          )}
          {props.live && (
            <Button size="small" href={props.live} target="_blank" rel="noopener noreferrer">
              Live
            </Button>
          )}
          {/* Add more buttons based on the props you want to include */}
        </CardActions>
      </div>

    </Card >
  );
}

export default ReviewCard;
