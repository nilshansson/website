"use client";

import { CarouselDemo } from "./_components/mainPageCarousel";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { slides } from "./_components/data";

export default function Home() {
  return (
    <div className="flex justify-center items-start h-screen">
      <CarouselDemo images={slides} />
    </div>
  );
}
111;
