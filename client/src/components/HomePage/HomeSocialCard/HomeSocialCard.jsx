import styles from "./HomeSocialCard.module.scss";

function HomeSocialCard() {
  return (
    <div className={styles.homeSocialCard}>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61572399132304&tabs=timeline&width=380&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true"
        width="380"
        height="400"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title="Facebook Page Plugin"
      />
    </div>
  );
}

export default HomeSocialCard;
