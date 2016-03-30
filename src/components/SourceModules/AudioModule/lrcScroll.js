import $ from 'jquery';

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
  interval: 0.3,
  handle: null,

  init: function(lrcText) {
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

    let lrcLi = this.replaceTemplate(this.list), lrcUlList = $(this.lrcDomClass);
    lrcUlList.html('').html(lrcLi);
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
    let currentLrc = $(_this.lrcDomClass).children().removeClass(_this.hoverClass).eq(m).addClass(_this.hoverClass);
    tmp = currentLrc.next().offset().top-currentLrc.parent().offset().top - _this.marginTop;
    tmp = tmp > 0 ? tmp * -1 : 0;
    $(_this.lrcDomClass).animate({'marginTop': tmp + 'px'}, _this.interval * 1000);
  }
};

export default LrcScroll;