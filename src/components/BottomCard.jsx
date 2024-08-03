const BottomCard = (props) => {
  return (
    <div className="BottomCard">
      <section className="likeCount">
        <p> {props.Likes} </p>
        <h1> {props.Count} </h1>
      </section>
      <section className="logoChange">
        <figure> {props.Logo} </figure>
        <h6 style={props.changeColor}>
          {props.upDown}
          {props.Change}
        </h6>
      </section>
    </div>
  );
};

export default BottomCard;
