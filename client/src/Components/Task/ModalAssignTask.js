import React from 'react'
import { useDispatch } from 'react-redux';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

import { assignAfterSave} from '../../redux/slices/Task';

export default function ModalAssignTask(props) {
    const [open, setOpen] = React.useState(false);

    const dispatch = useDispatch();
   
   

    const assign = () => {
      
      
            dispatch(assignAfterSave(props.task));

        
        setOpen(false);
    }
    return (
        <div>
              <Modal
      
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button negative>Assign</Button>}
    >
      <Header >
        <Icon name='archive' />
        Assign Task
      </Header>
      <Modal.Content>
        <p>
          {props.task.description}
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button  color='red'  onClick={()=>assign()}>
          <Icon name='remove' /> Yes
        </Button>
        <Button color='black'  onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> No
        </Button>
      </Modal.Actions>
    </Modal>
        </div>
    )
}
