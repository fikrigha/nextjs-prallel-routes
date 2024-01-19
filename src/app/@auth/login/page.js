import Modal from "@/components/modal";

export default function Login() {
  <Modal>
    <form style={{ display: "flex", flexDirection: "column" }}>
      <input placeholder="Email" />
      <input placeholder="Password" />
      <br />
      <button>Log in</button>
    </form>
  </Modal>;
}
