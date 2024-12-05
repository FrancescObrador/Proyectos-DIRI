
interface ActicityItemProps {
    imageName: string,
    timeText: string,
    description: string
}

function ActivityItem({imageName, timeText, description}: ActicityItemProps) {
    return (
    <div className="item">
      <div className="avatar">
        <img alt={imageName} src={`/images/${imageName}.jpg`} />
      </div>
      <span className="time">{timeText}</span>
      <p>{description}</p>
    </div>
    );
  }

export default ActivityItem