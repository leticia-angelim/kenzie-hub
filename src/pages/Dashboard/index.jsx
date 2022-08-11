import { TechContext, UserContext } from "../../contexts/UserContext";
import { useContext, useState } from "react";

import Logo from "../../components/Logo";
import AddModal from "../../components/AddModal";
import UpdateModal from "../../components/UpdateModal";
import ContainerMotion from "../../components/Animation";

import { LinkButton } from "../Register/styles";
import { Container, Header, Line, Line2, Main, Navbar } from "./styles";

const Dashboard = () => {
  const { user, setUser, techs } = useContext(UserContext);
  const { addModal, setAddModal, updateModal, setUpdateModal, setTechId } =
    useContext(TechContext);

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");

  const handleClick = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <ContainerMotion>
      <Container>
        <Navbar>
          <Logo />
          <LinkButton onClick={handleClick} to={"/login"}>
            Sair
          </LinkButton>
        </Navbar>
        <Line />
        <Header>
          <h2>Olá, {user.name}</h2>
          <span>{user.course_module}</span>
        </Header>
        <Line2 />
        <Main>
          <div className="title">
            <h3>Tecnologias</h3>
            <button onClick={() => setAddModal(true)}>+</button>
          </div>
          <div className="tech-list">
            {techs.map((tech, index) => (
              <div
                key={index}
                onClick={() => {
                  setTechId(tech.id);
                  setTitle(tech.title);
                  setStatus(tech.status);
                  setUpdateModal(true);
                }}
              >
                <p>{tech.title}</p>
                <span>{tech.status}</span>
              </div>
            ))}
          </div>
        </Main>
        {addModal && <AddModal />}
        {updateModal && <UpdateModal title={title} status={status} />}
      </Container>
    </ContainerMotion>
  );
};

export default Dashboard;
