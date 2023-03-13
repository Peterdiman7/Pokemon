import { Button } from "@mui/material";
import styles from "../../pages/pokemon/Pokemon.module.css";

const RegionsButtonGroup = ({ setRegion }) => {

  return (
    <div className={styles["button-group"]}>
    <Button
      sx={{
        marginLeft: "10px",
        backgroundColor: "#EFDBB6",
        color: "#332011",
      }}
      className={styles.regionBtn}
      variant="contained"
      onClick={() => setRegion("?limit=151")}
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
      onClick={() => setRegion("?limit=100&offset=151")}
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
      onClick={() => setRegion("?limit=135&offset=251")}
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
      onClick={() => setRegion("?limit=107&offset=386")}
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
      onClick={() => setRegion("?limit=155&offset=494")}
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
      onClick={() => setRegion("?limit=72&offset=649")}
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
      onClick={() => setRegion("?limit=88&offset=721")}
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
      onClick={() => setRegion("?limit=89&offset=809")}
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
      onClick={() => setRegion("?limit=110&offset=898")}
    >
      Paldea
    </Button>
  </div>
  )
}

export default RegionsButtonGroup;