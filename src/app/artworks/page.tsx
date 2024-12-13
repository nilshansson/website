"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { slides } from "../_components/data";
import "yet-another-react-lightbox/styles.css";
import { Captions } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Images from "../_components/Images";

function App() {
  const [index, setIndex] = useState<number>(-1);

  return (
    <>
      <Images
        data={slides}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />

      <Lightbox
        plugins={[Captions]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "end",
        }}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
}

export default App;
