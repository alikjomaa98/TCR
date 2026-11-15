import '../Styles/Events.css'

const EventItem = ({img = '', title, date, description ='Details coming soon'})=>{
    // javascript
    let slotText = '';
    if(img === '' || img === null)
    {
      slotText = 'Add poster here · 4:5';
    }
    return(
    <div className='eventItem'>
      <div className='eventPoster imageSlot' style={{ backgroundImage: `url(${img})` }}>
        {slotText}
      </div>
      <div className='eventInfo'>
        <h3>{date}</h3>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
    )
}
export default EventItem;
