import "./loading.scss";
import logo from '../../assets/logo.png' 
type PropsType = {
  isLoading?: boolean;
};

export default function Loading({ isLoading }: PropsType) {
  return (
    <div
      className={`${isLoading ? "loading_page activeLoading" : "loading_page"}`}
    >
      <img className="logoIcon" alt="" src={logo} />
    </div>
  );
}
