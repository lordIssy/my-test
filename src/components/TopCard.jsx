const TopCard = (props) => {
  return (
    <div className="TopCard" style={props.topBorderColor}>
      <p>
        {props.icon}
        {props.userName}
      </p>
      <h1> {props.Count} </h1>
      <span> {props.Followers} </span>
      <h6 style={props.textColor}>
        {props.upDown}
        {props.Today}
      </h6>
    </div>
  );
};

export default TopCard;
