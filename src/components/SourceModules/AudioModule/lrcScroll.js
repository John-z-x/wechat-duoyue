
let LrcScroll = {
  lrcDomClass: '#lrc_list',
  marginTop: 20,
  template: '<li>{html}</li>',
  hoverClass: 'hover',
  list: [],
  regex: /^[^\[]*((?:\s*\[\d+\:\d+(?:\.\d+)?\])+)([\s\S]*)$/,
  regex_time: /\[(\d+)\:((?:\d+)(?:\.\d+)?)\]/g,
  hasLrc: false,
  callback: null,
  interval: 0.1,
  handle: null,

  init: function(lrcText) {
    this.lrcDOM = document.querySelector(this.lrcDomClass);
    this.list.length = 0;
    if(typeof lrcText !== 'string' || !lrcText.length) {
      this.stop();
      lrcText = this.defaultText;
    }
    let items, execLyc;
    if(lrcText !=null){
      if(lrcText.split("<br>").length === 1){
        items = lrcText.split("\n");
      }else if(lrcText.split("\n").length === 1){
        items = lrcText.split("<br>");
      }else{
        items = {};
      }
    }
    for(let i in items){
      let timeItem,
          item = items[i],
          execLyc;
      if(item.length < 1 || !(execLyc = this.regex.exec(item))) continue;
      let itemTimeLine = execLyc[1],
          itemText = execLyc[2];
      while(timeItem = this.regex_time.exec(itemTimeLine)){
        let minuteTime = timeItem[1],
            secondTime = timeItem[2];
        let keyTime = parseFloat(minuteTime * 60) + parseFloat(secondTime);
        this.list.push([keyTime, itemText]);
      }
    }
    let lrcLi = this.replaceTemplate(this.list);
    this.lrcDOM.innerHTML = lrcLi;
  },

  replaceTemplate: function(list){
    let outputHtml ="";
    if(Array.isArray(list) && list.length > 0 ){
      for(let i = 0, l = list.length; i < l; i++){
        outputHtml += this.template.replace(/\{html\}/gi, list[i][1]);
      }
      this.hasLrc = true;
    }else {
      outputHtml = "当前歌曲暂时没有字幕";
      this.hasLrc = false;
    }
    LrcScroll.lrcDOM.style.marginTop = this.marginTop + "px";
    return outputHtml;
  },

  start: function(callback) {
    this.callback = callback;
    if(this.hasLrc == 1) {
      this.handle = setInterval(() => this.jump(this.callback()) , this.interval*1000);
    }
  },

  stop: function() {
    if(typeof this.handle === 'number'){
      clearInterval(this.handle);
    }
    this.list = [];
    this.handle = this.callback = null;
  },

  jump: function(duration){
    if(typeof this.handle === 'number' && typeof duration !=='number') return;
    if(duration < 0) duration = 0;
    let tmp;
    let h = this.list.length - 1,
        l = 0,
        m = Math.floor((h + l) / 2);
    while(l <= h){
      if(this.list[m][0] == duration){
        break;
      }else if(duration > this.list[m][0]){
        l = m;
      }else{
        h = m;
      }
      tmp = l + Math.floor((h - l)/2);
      if(tmp == m )break;
      m = tmp;
    }
    if(m == this.m) return;
    this.m = m;

    let _this = this;
    let currentLrc = this.toggleStyle(m);
    tmp = currentLrc.nextElementSibling.offsetTop - currentLrc.parentNode.offsetTop - _this.marginTop;
    tmp = tmp > 0 ? tmp * -1 : 0;
    this.animate(tmp);
  },

  animate: function(tmp) {
    const SPEED = 1;
    let marginTop, speed, lrcDom = this.lrcDOM, _this = this;
    let isBottom = this.checkIfBottom(tmp);
    if(isBottom != tmp) {
      lrcDom.style.marginTop = isBottom + "px";
      return;
    }
    let play = () => {
      window.clearTimeout(_this.lrcScroll);
      marginTop = parseInt(lrcDom.style.marginTop, 10);
      if(Math.abs(marginTop-tmp) > 40) {
        lrcDom.style.marginTop = tmp + "px";
        return;
      }

      if(tmp > marginTop) {
        speed = 3;
        if(marginTop + speed < tmp) {
          lrcDom.style.marginTop = marginTop + SPEED + "px";
          speed++;
          _this.lrcScroll = window.setTimeout(play, _this.interval * 1000);
        }else {
          lrcDom.style.marginTop = tmp + "px";
        }
      }else {
        speed = -3;
        if(marginTop + speed > tmp) {
          speed--;
          lrcDom.style.marginTop = marginTop + speed + "px";
          _this.lrcScroll = window.setTimeout(play, _this.interval * 1000);
        }else {
          lrcDom.style.marginTop = tmp + "px";
        }
      }

    };
    play();
  },

  toggleStyle: function(m) {
    let items = this.lrcDOM.querySelectorAll("li");
    let itemsArray = [].slice.call(items);
    itemsArray.map( (item, index) => {
      item.className = (index == m) ? this.hoverClass : "";
    });
    return items[m];
  },

  checkIfBottom: function(tmp) {
    let lrcHeight = this.lrcDOM.offsetHeight,
        contentHeight = document.querySelector(".page-right").querySelector(".content").offsetHeight;
    if( lrcHeight < contentHeight/2 - 20) {
      return false;
    }
    return (lrcHeight + tmp < contentHeight/2 ) ? -(lrcHeight - contentHeight/2) : tmp;
  }

};

export default LrcScroll;