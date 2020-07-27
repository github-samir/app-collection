import React from "react";
import Nav from "./components/Nav";
import Row from "./components/Row";
import { requestUrl } from "./requests";
import Banner from "./components/Banner";

function Movienu() {
  return (
    <div>
      <Banner />
      <Nav />
      <Row type="Action" fetchUrl={requestUrl.fetchAction} />
      <Row type="Adventure" fetchUrl={requestUrl.fetchAdventure} />
      <Row type="Animation" fetchUrl={requestUrl.fetchAnimation} />
      <Row type="Fantasy" fetchUrl={requestUrl.fetchFantasy} />
      <Row type="Documentary" fetchUrl={requestUrl.fetchDocumentary} />
    </div>
  );
}

export default Movienu;
