import "../css/map.css";
function Map() {
  return (
    <div className="mapBlock">
      <div className="container">
        <iframe
          title="googleMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1250.75373938176!2d71.4281951!3d51.1728689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424580d581fb4153%3A0xa943491a26c9669b!2z0JbQmiAi0JfQsNC80LXRh9Cw0YLQtdC70YzQvdGL0Lki!5e0!3m2!1sru!2skz!4v1697726555681!5m2!1sru!2skz"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* <iframe src="https://go.2gis.com/9b1aa">allowfullscreen=""</iframe> */}
      </div>
    </div>
  );
}
export default Map;
