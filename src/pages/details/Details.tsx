import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { ISinglePokemon } from "../../interfaces/IPokemon";
import styles from "../details/Details.module.css";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { routing } from "../../routing";

const Details = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const navigate = useNavigate();
  const { id } = useParams();

  const [singlePokemon, setSinglePokemon] = useState<ISinglePokemon>({name: "", 
    weight: 0,
    order: 0,
    height: 0});



  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios(url + id);
        const data = response.data;
        setSinglePokemon(data);
      } catch (error) {
        toast.error("Starship not found!");
      }
    };
    fetchPokemon();
  }, []);

  return (
    <div>
      <Button onClick={() => navigate(routing.pokemon)} startIcon={<ArrowBackIosIcon />} variant="outlined">Go Back</Button>
      <Card sx={{ maxWidth: 245, height: 320, margin: "auto" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        title={singlePokemon.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Name: {singlePokemon.name[0]?.toUpperCase() + singlePokemon.name.slice(1)}
        </Typography>
        <Typography className={styles.captions} variant="caption" sx={{color: "black"}}>
        Weight: {singlePokemon.weight} lbs.
        </Typography>
        <Typography className={styles.captions} variant="caption" sx={{color: "black"}}>
        Height: {singlePokemon.height} feet
        </Typography>
        <a className={styles.anchor} href={`https://www.google.com/search?q=${singlePokemon.name}`} target="_blank" rel="noreferrer" >Click here for Additional Information</a>
      </CardContent>
    </Card>
    </div>
  );
};
export default Details;