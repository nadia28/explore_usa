var Carousel = React.createClass({
  render(){
    return(

      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="item active">
            <img src="http://www.tourist-destinations.com/wp-content/uploads/2014/05/Downtown-of-Phoenix-as-seen-from-Encanto-park-Arizona-large.jpg" alt="" />
            <div className="carousel-caption">
            	<h3>Downtown Phoenix park Arizona</h3>
            </div>
          </div>
          <div className="item">
            <img src="http://www.anchalblogs.com/wp-content/uploads/2016/06/2-3.jpg" alt="" />
            <div className="carousel-caption">
            	<h3>Statue of Liberty New York City</h3>
            </div>
          </div>
          <div className="item">
            <img src="http://media.tripcentral.ca//media/00_0F_Y1_New-York-Citys-Grand-Central-Station-at-night-large.jpg" alt="" />
            <div className="carousel-caption">
            	<h3>Grand Central Station New York City</h3>
            </div>
          </div>
          <div className="item">
            <img src="http://media.tripcentral.ca//media/00_0F_Y9_St.-Patricks-Cathedral-in-New-York-City-large.jpg" alt="" />
            <div className="carousel-caption">
            	<h3>St. Patricks Cathedral in New York City</h3>
            </div>
          </div>
        </div>

        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div>

    )
  }
})
