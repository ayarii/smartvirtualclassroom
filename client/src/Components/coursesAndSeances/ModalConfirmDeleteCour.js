import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Feed, Icon, Modal } from "semantic-ui-react";
import { DeleteCourses } from "../../redux/slices/Courses";

function ModalConfirmDeleteCour(props) {
  const [modalOpen, SetModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = (e) => SetModalOpen(true);
  const handleClose = (e) => SetModalOpen(false);

  const handleSubmit = (e) => {
    let params = e.target.getAttribute("coursesid");

    dispatch(DeleteCourses(params))
      .then(() => {
        handleClose();
      
      })
      .catch((err) => {
        handleClose();
        throw err;
      });
  };
  return (
    <div>
      <Modal
        trigger={
          

          <Feed.Like onClick={handleOpen}>
            <Icon onClick={handleOpen} name="trash" /> Remove
          </Feed.Like>
        }
        open={modalOpen}
        onClose={handleClose}
        dimmer="inverted"
        size="tiny"
      >
        <Modal.Header>{props.headerTitle}</Modal.Header>
        <Modal.Content>
          <p>
            Are you sure you want to delete{" "}
            <strong>{props.courses.titre}</strong>?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={handleSubmit}
            coursesid={props.courses._id}
            color="red"
          >
            Yes
          </Button>
          <Button onClick={handleClose} color="black">
            No
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default ModalConfirmDeleteCour;
