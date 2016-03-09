import React from 'react';
import $ from 'jquery';

class BookShelf extends React.Component{
		  componentDidMount(){
				  var topHeight = $("#user-new").height();
				  var bottomHeight = $("#menu-bottom").height();
				  var winHeight = $(window).height();
				  var pagallHeight = winHeight-(bottomHeight+topHeight+60);

					var pageNum = Math.ceil((this.props.data.bookItem+1)/6);
					    var dotIndex = 0;
					    var pageChange = $("#page-change");
					    var width = $(window).width();
					    
					     for (var i=1; i<pageNum; i++) {
					        $(".page-dots").append("<span class='dot-not dot'  ></span>");
					     }
					    var move = function () {
					      if (this.swipeDistanceX < -5) {
					        dotIndex +=1;
					        if (dotIndex < pageNum) {
					          pageChange.animate({left:- dotIndex * width});
					          $(".dot").removeClass("color-over").addClass("dot-not");
					          $(".dot").eq(dotIndex).addClass("color-over");
					      }
					        else {
					          dotIndex = pageNum-1;
					        }
					    } else if(this.swipeDistanceX > 5) {
					        dotIndex -=1;
					        if (dotIndex >= 0) {
					          pageChange.animate({left: dotIndex * width});
					          $(".dot").removeClass("color-over").addClass("dot-not");
					          $(".dot").eq(dotIndex).addClass("color-over");
					      }
					     else {
					     dotIndex = 0
					     }
					    }
					  }
					     //A("#page-all").swipe({
					     //"move": move,
					     //});

					 $("#page-all").height(pagallHeight);

				  $(".book-name").each(function(){
				    if($(this).text().length >= 7) {
				      $(this).html($(this).html().slice(0, 7) + "...") 
				    }
  			});		
		  }
			render(){
				return (
							<div className=" my-bookcase" id="page-all"  >
						    <div className="top-title">
						      <div className="line"></div>
						      <div className="title">我的书架</div>
						    </div>
						     
					      <div  className="book-box" id="page-change" >
					          <div className="clearfix my-books" >
											{ this.props.data.bookData.map(function(item,i){
													return (
													  <a href="" key={i}>
								               <img src={item.src} alt="book-img" className="book-img"/>
								               <div className="book-name">{item.bookName}</div>
								            </a>
													);
												}
												)
											}
											<a  >
						              <img src={"../images/more-img.png"} width="100%" alt="book-img" />
						          </a>
					          </div>

						      <div style={{clear:"both"}}></div>
						    </div>

							  <div className="page-dots" id="page-dots">
							    <span className="color-over dot" ></span>
							  </div>
						    <div className="books-bottom"></div>
						 </div>
				);
			}
		};
		export default BookShelf;