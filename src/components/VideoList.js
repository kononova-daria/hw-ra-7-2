import React from 'react';
import Video from './Video';
import Article from './Article';
import toVideoPretty from './VideoPretty';

export default function VideoList(props) {
  return props.list.map((item, index) => {
    let VideoPretty = null;
    switch (item.type) {
      case 'video':
        VideoPretty = toVideoPretty(Video, item.views);
        return <VideoPretty key={index} {...item}/>;
      case 'article':
        VideoPretty = toVideoPretty(Article, item.views);
        return <VideoPretty key={index} {...item}/>;
      default:
        return null;
    }
  });
};