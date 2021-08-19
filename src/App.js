import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import logo from './logo.png';

const App = () => {
  const ApiKey = process.env.React_APP_PIXABAY_API_KEY;
  const [images, setImages] = useState([]);
  const onSearchSubmit = async (term) => {
    try {
      const params = {
        key: ApiKey,
        // 検索キーワード
        q: term,
      };
      // apiをたたく
      const response = await axios.get("https://pixabay.com/api/", { params });
      // console.log(response);
      setImages(response.data.hits);
      if (response.data.total === 0) {
        window.alert("お探しの画像はありません");
      }
    } catch {
      // HTTP通信が失敗した場合
      window.alert("写真の取得に失敗しました");
    }
  };
  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <img src={logo} alt='pixabay-logo' className='pixabay-logo'/>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
