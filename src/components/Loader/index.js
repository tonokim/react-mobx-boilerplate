
import React, { Component } from 'react';
import classnames from 'classnames';
import style from './style.less'

const Loader = ({ spinning }) => (
  <div className={classnames(style.loader, { [style.hidden]: !spinning })}>
    <div className={style.warpper}>
      <div className={style.inner} />
      <div className={style.text} >加载中</div>
    </div>
  </div>
)

export default Loader