import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './InfoBox.css'

export default function InfoBox({ info }) {

    return (
        <div className="info-container">
            <Card sx={{ maxWidth: 345 }} className='ms-4 mt-3 search-card'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="180"
                        image="https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
                        alt="green iguana"
                    />
                    <CardContent style={{ width: "25rem" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temprature: {info.temp}&deg;C</p>
                            <p>Feels like: {info.feels_like}&deg;C</p>
                            <p>Condition is: {info.weather}</p>
                            <p>humidity: {info.humidity}</p>
                            <p>maximum temprature: {info.temp_max}&deg;C</p>
                            <p>minimum temprature: {info.temp_min}&deg;C</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}