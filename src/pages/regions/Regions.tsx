import { Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IRegion } from "../../interfaces/IPokemon";

import styles from "../regions/Regions.module.css";

const Regions = () => {
  const url = "https://pokeapi.co/api/v2/region/";
  const [region, setRegion] = useState<Array<IRegion>>([]);
  const [currentRegion, setCurrentRegion] = useState("");

  useEffect(() => {
    const fetchRegion = async () => {
      try {
        const response = await axios(url + currentRegion);
        const data = response.data;
        setRegion(data.locations);
      } catch (error) {
        toast.error("Location not found!");
      }
    };
    fetchRegion();
  }, [currentRegion]);
  return (
    <>
      <div className={styles.description}>Choose your region:</div>
      <div className={styles["button-group"]}>
        <Button
          sx={{
            marginLeft: "10px",
            backgroundColor: "#EFDBB6",
            color: "#332011",
          }}
          className={styles.regionBtn}
          variant="contained"
          onClick={() => setCurrentRegion("kanto")}
        >
          Kanto
        </Button>
        <Button
          sx={{
            marginLeft: "10px",
            backgroundColor: "#EFDBB6",
            color: "#332011",
          }}
          className={styles.regionBtn}
          variant="contained"
          onClick={() => setCurrentRegion("johto")}
        >
          Johto
        </Button>

        <Button
          sx={{
            marginLeft: "10px",
            backgroundColor: "#EFDBB6",
            color: "#332011",
          }}
          className={styles.regionBtn}
          variant="contained"
          onClick={() => setCurrentRegion("hoenn")}
        >
          Hoenn
        </Button>
        <Button
          sx={{
            marginLeft: "10px",
            backgroundColor: "#EFDBB6",
            color: "#332011",
          }}
          className={styles.regionBtn}
          variant="contained"
          onClick={() => setCurrentRegion("sinnoh")}
        >
          Sinnoh
        </Button>
        <Button
          sx={{
            marginLeft: "10px",
            backgroundColor: "#EFDBB6",
            color: "#332011",
          }}
          className={styles.regionBtn}
          variant="contained"
          onClick={() => setCurrentRegion("unova")}
        >
          Unova
        </Button>
        <Button
          sx={{
            marginLeft: "10px",
            backgroundColor: "#EFDBB6",
            color: "#332011",
          }}
          className={styles.regionBtn}
          variant="contained"
          onClick={() => setCurrentRegion("kalos")}
        >
          Kalos
        </Button>
        <Button
          sx={{
            marginLeft: "10px",
            backgroundColor: "#EFDBB6",
            color: "#332011",
          }}
          className={styles.regionBtn}
          variant="contained"
          onClick={() => setCurrentRegion("alola")}
        >
          Alola
        </Button>
        <Button
          sx={{
            marginLeft: "10px",
            backgroundColor: "#EFDBB6",
            color: "#332011",
          }}
          className={styles.regionBtn}
          variant="contained"
          onClick={() => setCurrentRegion("galar")}
        >
          Galar
        </Button>
        <Button
          sx={{
            marginLeft: "10px",
            backgroundColor: "#EFDBB6",
            color: "#332011",
          }}
          className={styles.regionBtn}
          variant="contained"
          onClick={() => setCurrentRegion("paldea")}
        >
          Paldea
        </Button>
      </div>
      <span>
        {region?.length === 0 ? (
          <div>No locations to show!</div>
        ) : (
          region && region.slice(0, 10).map((item) => <div>{item.name}</div>)
        )}
      </span>
    </>
  );
};

export default Regions;
