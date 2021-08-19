import React from "react";
import Masonry from "react-masonry-component";

import '../styles/ImageList.css';

const ImageList = (props) => {
  // mapで全てのデータを配列で取得する
  const images = props.images.map((image) => {
    return (
      <a
        href={image.pageURL}
        key={image.id}
        // セキュリティとパフォーマンス向上のため
        target="_blank"
        // noopenerは新しいタブで外部リンクを開く場合に使用する
        rel="noopener noreferrer"
        className="ui medium image"
      >
        <img src={image.webformatURL} alt={image.tags} />
      </a>
    );
  });
  return <Masonry className="image-list">{images}</Masonry>;
};

export default ImageList;
