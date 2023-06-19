import "./styles.css";
import YoutubeForm from "./components/YoutubeForm";
import NewYoutubeForm from "./components/NewYoutubeForm";
import FormikComponentsYoutube from "./components/FormikComponentsYoutube";
import Dynamic_FormControls from "./components/Dynamic_FormControls";
import Validation_Form from "./components/Validation_Form";
import Manually_Triggering_Validation from "./components/Manually_Triggering_Validation";
import DisablingTheSubmitButton from "./components/DisablingTheSubmitButton";
import LoadSavedData from "./components/LoadSavedData";
import ResetFormData from "./components/ResetFormData";

export default function App() {
  return (
    <div className="App">
      <YoutubeForm />
    </div>
  );
}
