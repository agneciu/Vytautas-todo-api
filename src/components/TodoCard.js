import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

import { useDelete } from "../hooks/useDelete";
import { useUpdate } from "../hooks/useUpdate";

export const TodoCard = ({ title, description, id, onDelete, completed }) => {
  const { openDeleteDialog, closeDeleteDialog, handleDelete, isOpen } =
    useDelete(id, onDelete);

  const { onComplete, onIncomplete } = useUpdate({
    id,
    title,
    description,
    completed,
  });

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={id}
        id={id}
      >
        <Typography
          fontWeight="bold"
          sx={{
            textDecoration: completed ? "line-through" : "none",
            color: completed ? "grey" : "black",
            textDecorationThickness: "2px",
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack direction="column" gap={2} alignItems="self-start">
          <Typography>{description}</Typography>
          <Stack direction="row" gap={1}>
            {!completed ? (
              <Button
                size="small"
                variant="contained"
                startIcon={<CheckIcon />}
                onClick={onComplete}
              >
                Complete
              </Button>
            ) : (
              <Button
                size="small"
                variant="contained"
                color="secondary"
                startIcon={<CloseIcon />}
                onClick={onIncomplete}
              >
                Incomplete
              </Button>
            )}
            <Button
              size="small"
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={openDeleteDialog}
            >
              Delete
            </Button>
          </Stack>

          <Dialog open={isOpen} onClose={closeDeleteDialog}>
            <DialogTitle>
              Are you sure you want to delete "{title}"?
            </DialogTitle>
            <DialogActions>
              <Button
                onClick={closeDeleteDialog}
                size="small"
                variant="contained"
              >
                Cancel
              </Button>
              <Button
                autoFocus
                size="small"
                variant="contained"
                color="error"
                onClick={handleDelete}
              >
                Confirm Delete
              </Button>
            </DialogActions>
          </Dialog>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};
