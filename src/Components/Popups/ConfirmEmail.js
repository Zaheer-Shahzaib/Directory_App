import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ConfirmEmail() {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton style={{ border: "none" }}>
          <Modal.Title>Confirm your email</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ color: "#4f5256" }}>
          <p>
            Check your email. We've sent a link to reset your password, openit
            and follow the instructions. <br /> <br /> I didn't receive an
            email. What now? <br />
            <ol>
              <li>Check the spam folder</li>
              <li>Check if provided email address is correct</li>
              <li>Wait 10 minutes and New link has been sent.</li>
            </ol>{" "}
            The link is valid 24h Didn't get a code?{" "}
            <a href="/" style={{ color: "#4e4b4b" }}>
              Click to resend.
            </a>
          </p>
        </Modal.Body>

        <Modal.Footer style={{ border: "none" }}>
          <Button
            variant="secondary"
            onClick={(e) => e.target(<a href="/" />)}
            className=" w-100  mt-4"
            style={{ backgroundColor: "#5D3CB1" }}
          >
            Back to login
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ConfirmEmail;
