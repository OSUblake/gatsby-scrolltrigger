import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import animateReveal from "./gs_reveal";
import React, { useRef, useLayoutEffect } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function AboutBlock() {
  gsap.registerPlugin(ScrollTrigger);

  const revealRefs = useRef([]);
  revealRefs.current = [];

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    let scrollTriggers = [];


    scrollTriggers = animateReveal(revealRefs.current);

    return () => {
      scrollTriggers.forEach((t) => t.kill(true));
    };
  }, []);

  const addToRevealRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <Grid container>
      <Grid
        item
        width={{ xs: "100%", sm: "80%", md: "35%" }}
        pl={{ xs: 0, md: "2.5%" }}
        mt={{ xs: 60, sm: 0 }}
      >
        <Grid
          container
          direction="column"
          alignItems={{ xs: "flex-start", sm: "flex-end" }}
        >
          <Grid item mt={{ xs: 0, md: "10vh" }} id="acum">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              NOW WE ARE IN
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              LOCATION
            </Typography>
          </Grid>

          <Grid item mt="10vh" id="hi">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              SAY HI
            </Typography>
          </Grid>

          <Grid item className="toughts">
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              TELL US YOUR THOUGHTS
            </Typography>
          </Grid>

          <Grid item mt={{ xs: 0, md: "10vh" }} id="acum">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              NOW WE ARE IN
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              LOCATION
            </Typography>
          </Grid>

          <Grid item mt="10vh" id="hi">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              SAY HI
            </Typography>
          </Grid>

          <Grid item className="toughts">
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              TELL US YOUR THOUGHTS
            </Typography>
          </Grid>

          <Grid item mt={{ xs: 0, md: "10vh" }} id="acum">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              NOW WE ARE IN
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              LOCATION
            </Typography>
          </Grid>

          <Grid item mt="10vh" id="hi">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              SAY HI
            </Typography>
          </Grid>

          <Grid item className="toughts">
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              TELL US YOUR THOUGHTS
            </Typography>
          </Grid>

          <Grid item mt={{ xs: 0, md: "10vh" }} id="acum">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              NOW WE ARE IN
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              LOCATION
            </Typography>
          </Grid>

          <Grid item mt="10vh" id="hi">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              SAY HI
            </Typography>
          </Grid>

          <Grid item className="toughts">
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              TELL US YOUR THOUGHTS
            </Typography>
          </Grid>

          <Grid item mt={{ xs: 0, md: "10vh" }} id="acum">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              NOW WE ARE IN
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              LOCATION
            </Typography>
          </Grid>

          <Grid item mt="10vh" id="hi">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              SAY HI
            </Typography>
          </Grid>

          <Grid item className="toughts">
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              TELL US YOUR THOUGHTS
            </Typography>
          </Grid>

          <Grid item mt={{ xs: 0, md: "10vh" }} id="acum">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              NOW WE ARE IN
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              LOCATION
            </Typography>
          </Grid>

          <Grid item mt="10vh" id="hi">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              SAY HI
            </Typography>
          </Grid>

          <Grid item className="toughts">
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              TELL US YOUR THOUGHTS
            </Typography>
          </Grid>

          <Grid item mt={{ xs: 0, md: "10vh" }} id="acum">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              NOW WE ARE IN
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              LOCATION
            </Typography>
          </Grid>

          <Grid item mt="10vh" id="hi">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              SAY HI
            </Typography>
          </Grid>

          <Grid item className="toughts">
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              TELL US YOUR THOUGHTS
            </Typography>
          </Grid>

          <Grid item mt={{ xs: 0, md: "10vh" }} id="acum">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              NOW WE ARE IN
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              LOCATION
            </Typography>
          </Grid>

          <Grid item mt="10vh" id="hi">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              SAY HI
            </Typography>
          </Grid>

          <Grid item className="toughts">
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              TELL US YOUR THOUGHTS
            </Typography>
          </Grid>

          <Grid item mt={{ xs: 0, md: "10vh" }} id="acum">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              NOW WE ARE IN
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              LOCATION
            </Typography>
          </Grid>

          <Grid item mt="10vh" id="hi">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              SAY HI
            </Typography>
          </Grid>

          <Grid item className="toughts">
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              TELL US YOUR THOUGHTS
            </Typography>
          </Grid>

          <Grid item mt={{ xs: 0, md: "10vh" }} id="acum">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              NOW WE ARE IN
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              LOCATION
            </Typography>
          </Grid>

          <Grid item mt="10vh" id="hi">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              SAY HI
            </Typography>
          </Grid>

          <Grid item className="toughts">
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              TELL US YOUR THOUGHTS
            </Typography>
          </Grid>

          <Grid item mt={{ xs: 0, md: "10vh" }} id="acum">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              NOW WE ARE IN
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              LOCATION
            </Typography>
          </Grid>

          <Grid item mt="10vh" id="hi">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              SAY HI
            </Typography>
          </Grid>

          <Grid item className="toughts">
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              TELL US YOUR THOUGHTS
            </Typography>
          </Grid>

          <Grid item mt={{ xs: 0, md: "10vh" }} id="acum">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              NOW WE ARE IN
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              LOCATION
            </Typography>
          </Grid>

          <Grid item mt="10vh" id="hi">
            <Typography
              variant="h5"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              SAY HI
            </Typography>
          </Grid>

          <Grid item className="toughts">
            <Typography
              variant="h6"
              textAlign={{ xs: "left", sm: "right" }}
              ref={addToRevealRefs}
              className="gs_reveal_fromRight"
            >
              TELL US YOUR THOUGHTS
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
