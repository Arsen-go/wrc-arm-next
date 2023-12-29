"use client";

import Navbar from "@/components/navbar";
import { Footer } from "@/components";
import Articles from "../articles";

function News() {
  return (<div>
    <Navbar />
    <Articles/>
    <Footer />
  </div>
  );
}

export default News;
