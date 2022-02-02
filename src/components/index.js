/** Components are re-usable elements of the app.
 * Components can be simple (stand-alone) or complex (made of multiple other components).
 * Components rarely make calls to the server (they lack the specific context), but manage their
 * own state when possible (ex. a Modal should on its own know if it is currently open or closed)
 * **/
import FundTile from "./FundTile";
import AppHeader from "./AppHeader";
import ProfileImage from "./ProfileImage";
import Card from "./Card";
import ScrollToTop from "./ScrollToTop";
import Button from "./Button";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import ReturnsCalculator from "./ReturnsCalculator";
import ButtonGroup from "./ButtonGroup";
import Slider from "./Slider";
import Table from "./Table";
import AutoComplete from "./AutoComplete";
import UserFundTile from "./UserFundTile";
import Modal from "./Modal";
import InputField from "./InputField";
import DropdownField from "./DropdownField";
import MobileNumberField from "./MobileNumberField";

export {
  FundTile,
  AppHeader,
  ProfileImage,
  Card,
  ScrollToTop,
  Button,
  LineChart,
  PieChart,
  ReturnsCalculator,
  ButtonGroup,
  Slider,
  Table,
  AutoComplete,
  UserFundTile,
  Modal,
  InputField,
  DropdownField,
  MobileNumberField,
};
