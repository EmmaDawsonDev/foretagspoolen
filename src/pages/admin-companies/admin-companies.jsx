import React, { useState } from "react";
import TheHeader from "../../components/the-header/the-header";
import AdminCompanyList from "../../components/admin-company-list/admin-company-list";
import SearchBar from "../../components/search-bar/search-bar";
import BaseButton from "../../components/base-button/base-button";
import ModalBackground from "../../components/modal-background/modal-background";
import DeleteModal from "../../components/modals/modal-delete/modal-delete";
import AddModal from "../../components/modals/modal-add/modal-add";

import * as Firebase from "../../firebase/firebase.utils";

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
    e.stopPropagation();
    if (
      e.target.className === "modal-background" ||
      e.target.innertext === "AVBRYT"
    ) {
      setAddModalOpen(false);
      setEditModalOpen(false);
      setDeleteModalOpen(false);
      setCurrentCompany({});
      setModalOpen(!modalOpen);
    }
    if (e.target.innerText === "LÄGG TILL FÖRETAGET") {
      let alreadyExists = companyData.find(
        (company) => company.namn.toLowerCase() === data.namn.toLowerCase()
      );
      console.log(alreadyExists);
      console.log(data);
      if (!alreadyExists) {
        Firebase.db
          .collection("companies")
          .add(data)
          .then((docRef) => {
            console.log("Document created with id:", docRef.id);
          })
          .catch((err) => console.log(err));
        setAddModalOpen(false);
        setEditModalOpen(false);
        setDeleteModalOpen(false);
        setCurrentCompany({});
        setModalOpen(!modalOpen);
      } else {
        Firebase.db
          .collection("companies")
          .doc(alreadyExists.id)
          .set(data)
          .then(() => {
            console.log("Document updated successfully");
          })
          .catch((err) => console.log(err));
        setAddModalOpen(false);
        setEditModalOpen(false);
        setDeleteModalOpen(false);
        setCurrentCompany({});
        setModalOpen(!modalOpen);
      }
    }

    if (e.target.innerText === "SPARA ÄNDRINGAR") {
      console.log(data);
      Firebase.db
        .collection("companies")
        .doc(data.id)
        .set(data)
        .then(() => {
          console.log("Document updated successfully");
        })
        .catch((err) => console.log(err));
      setAddModalOpen(false);
      setEditModalOpen(false);
      setDeleteModalOpen(false);
      setCurrentCompany({});
      setModalOpen(!modalOpen);
    }

    if (e.target.innerText === "JA - RADERA") {
      console.log(data);
      Firebase.db
        .collection("companies")
        .doc(data.id)
        .delete()
        .then(() => {
          console.log("Document deleted successfully");
        })
        .catch((err) => console.log(err));
      setAddModalOpen(false);
      setEditModalOpen(false);
      setDeleteModalOpen(false);
      setCurrentCompany({});
      setModalOpen(!modalOpen);
    }

    if (e.target.innerText === "LÄGG TILL FÖRETAG") {
      setAddModalOpen(true);
      setModalOpen(!modalOpen);
    }
    if (e.target.innerText === "REDIGERA") {
      handleCurrentCompany(data);
      setEditModalOpen(true);
      //setAddModalOpen(true);
      setModalOpen(!modalOpen);
    }
    if (e.target.innerText === "RADERA") {
      setDeleteModalOpen(true);
      handleCurrentCompany(data);
      setModalOpen(!modalOpen);
    }
  };

  //To know which company you want to edit/delete:
  const handleCurrentCompany = (data) => {
    setCurrentCompany({ ...data });
  };

  // const handleEvent = (e) => {
  //   console.log(e.target);
  // };

  return (
    <div>
      {modalOpen ? (
        <ModalBackground toggleModal={toggleModal}>
          {addModalOpen ? (
            <AddModal
              toggleModal={toggleModal}
              currentCompany={currentCompany}
              type="add"
            />
          ) : null}
          {editModalOpen ? (
            <AddModal
              toggleModal={toggleModal}
              currentCompany={currentCompany}
              type="edit"
            />
          ) : null}
          {deleteModalOpen ? (
            <DeleteModal
              toggleModal={toggleModal}
              currentCompany={currentCompany}
            />
          ) : null}
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
