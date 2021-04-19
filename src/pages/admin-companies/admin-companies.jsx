import React, { useState } from "react";
import TheHeader from "../../components/the-header/the-header";
import AdminCompanyList from "../../components/admin-company-list/admin-company-list";
import SearchBar from "../../components/search-bar/search-bar";
import BaseButton from "../../components/base-button/base-button";
import ModalBackground from "../../components/modal-background/modal-background";
import DeleteModal from "../../components/modals/modal-delete/modal-delete";

import "./admin-companies.scss";

const AdminCompanies = ({ companyData }) => {
  const [currentCompany, setCurrentCompany] = useState({});
  const [adminSearchTerm, setAdminSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const setSearch = (e) => {
    setAdminSearchTerm(e.target.value);
    console.log(adminSearchTerm);
  };

  //Filter by search term
  const filteredCompaniesBySearch = companyData.filter((company) =>
    company.namn.toLowerCase().includes(adminSearchTerm.toLowerCase())
  );

  //Open and close modal with different content
  const toggleModal = (e, data) => {
    setAddModalOpen(false);
    setEditModalOpen(false);
    setDeleteModalOpen(false);
    setCurrentCompany({});

    if (e.target.innerText === "LÄGG TILL FÖRETAG") {
      setAddModalOpen(true);
    }
    if (e.target.innerText === "REDIGERA") {
      setEditModalOpen(true);
      handleCurrentCompany(data);
    }
    if (e.target.innerText === "RADERA") {
      setDeleteModalOpen(true);
      handleCurrentCompany(data);
    }
    setModalOpen(!modalOpen);
  };

  //To know which company you want to edit/delete:
  const handleCurrentCompany = (data) => {
    setCurrentCompany({ ...data });
    console.log(currentCompany);
  };

  return (
    <div>
      {modalOpen ? (
        <ModalBackground toggleModal={toggleModal}>
          {addModalOpen ? <p className="modal-test">ADD</p> : null}
          {editModalOpen ? <p className="modal-test">edit</p> : null}
          {deleteModalOpen ? <DeleteModal className="modal-test" /> : null}
        </ModalBackground>
      ) : null}
      <TheHeader title="Admin" />
      <main className="admin-wrapper">
        <section className="admin-search">
          <SearchBar searchTerm={adminSearchTerm} setSearch={setSearch} />
        </section>

        <section className="add-company">
          <BaseButton color="danger" toggleModal={toggleModal}>
            Lägg till företag
          </BaseButton>
        </section>
        {companyData ? (
          <AdminCompanyList
            companyData={filteredCompaniesBySearch}
            toggleModal={toggleModal}
            handleCurrentCompany={handleCurrentCompany}
          />
        ) : (
          <h6>Loading...</h6>
        )}
      </main>
    </div>
  );
};

export default AdminCompanies;
