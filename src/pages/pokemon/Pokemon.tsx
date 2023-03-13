import { useState } from "react";
import RegionsButtonGroup from "../../components/regionsButtonGroup/RegionsButtonGroup";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import styles from "../pokemon/Pokemon.module.css";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { pokeId } from "../../utils/arrSplit";
import { useNavigate } from "react-router-dom";
import { IPokemon } from "../../interfaces/IPokemon";
import { images } from "../../data/data";

const Pokemon = () => {
  const url = `https://pokeapi.co/api/v2/pokemon/`;

  const navigate = useNavigate();

  const [poke, setPoke] = useState<Array<IPokemon>>([]);
  const [region, setRegion] = useState("");
  const [image, setImage] = useState("");

  const pickRandomImage = () => {
    const movieArr = Object.keys(images);
    const randomNumber = Math.floor(Math.random() * movieArr.length);
    setImage(images[movieArr[randomNumber]]);
    setTimeout(() => {
      pickRandomImage()
    }, 6000);
  }

  useEffect(() => {
    pickRandomImage();
  }, [])

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios(url + region);
        const data = response.data;
        setPoke(data.results);
      } catch (error) {
        toast.error("Pokémon not found!");
      }
    };
    fetchPokemon();
  }, [region]);

  return (
    <>
    <RegionsButtonGroup setRegion={setRegion}/>
      {!region ? <img className={styles.image} src={image} alt="" />
    :  
      <Grid container sx={{ justifyContent: "center" }}>
        {poke.map((p) => (
          <Grid key={p.name} item sx={{ xs: 1, padding: 6 }}>
            <motion.div
              onClick={() => navigate(`/pokemon/${pokeId(p.url)}`)}
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
              }}
            >
              <Card
                elevation={10}
                sx={{ width: 200, border: 1, borderRadius: 10 }}
              >
                <CardMedia
                  sx={{ borderBottom: 0.5 }}
                  component="img"
                  height="140"
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId(
                    p.url
                  )}.png`}
                  alt={p.name}
                />
                <CardContent>
                  <Typography
                  sx={{ fontFamily: "Quicksand" }}
                    key={p.name}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {p.name[0].toUpperCase() + p.name.slice(1)}
                    <Typography component="div" sx={{ color: "green" }}>
                      {`Pokédex number: ${pokeId(p.url)}`}
                    </Typography>
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    }
    </>
  );
};

export default Pokemon;
