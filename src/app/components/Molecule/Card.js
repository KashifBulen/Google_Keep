import React, { useState, useEffect } from "react";
import Styles from "../Styles/Styles.css";
import Card_icons from "../Atom/Card_icons";
import { auth, db } from "../../login/firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
 // Import the useAuthState hook
import { deleteDoc } from "firebase/firestore";

import Image from "next/image";
import { onAuthStateChanged } from "firebase/auth";

const Card = () => {
  const Icons = [
    "/alert.svg",
    "/person.svg",
    "/color.svg",
    "/image.svg",
    "/archive.svg",
    "/more.svg",
    "/undo.svg",
    "/redo.svg",
  ];

  const Icons_Bottom = [
    "/alert.svg",
    "/person.svg",
    "/color.svg",
    "/image.svg",
    "/archive.svg",
    "/more.svg",
  ];

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editNote, setEditNote] = useState(null);
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
 
  const [user, setUser] = useState("");


  const handleAddNote = async () => {
    if (user && (title || content)) {
      try {
        const noteData = {
          timestamp: new Date(),
          ownerid: user.userId,
          title,
          content,
          //  include userId here since it's in the collection
        };

        const noteRef = await addDoc(collection(db, "notes"), noteData);
        console.log("Note added with ID: ", noteRef.id);
      } catch (error) {
        console.error("Error adding note: ", error);
      }

      setTitle("");
      setContent("");
    }
  };




  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.role, user.email)
        onSnapshot(doc(db, "users", user.uid), (doc) => {
          if (doc.exists) {
            const data = { ...doc.data(), userId: user.uid };

            setUser(data);
          }
        });
      } else {
        console.log("user logout...");
      }
    });
  }, []);





  useEffect(() => {
    if (user) {
      if (user.role === "superuser") {
        console.log(user)
        console.log("Fetching notes for superuser...", user.role);
        const q = query(collection(db, "notes"));

        onSnapshot(q, (querySnapshot) => {
          const notesData = [];
          querySnapshot.forEach((doc) => {
            notesData.push({ ...doc.data(), id: doc.id });
          });
          setNotes(notesData);
        });
      } else {
        console.log("Fetching notes for regular user...");
        const q = query(collection(db, "notes"), where("ownerid", "==", user.userId))


        onSnapshot(q, (querySnapshot) => {
          const notesData = [];
          querySnapshot.forEach((doc) => {
            notesData.push({ ...doc.data(), id: doc.id });
          });
          setNotes(notesData);
        });
      }
    }
  }, [user]);




  const handleEditNote = async () => {
    if (!user) {
      console.log("User not authenticated");
      return;
    }

    if (editTitle || editContent) {
      if (editNote) {
        try {
          await updateDoc(doc(db, "notes", editNote.id), {
            title: editTitle,
            content: editContent,
          });

          console.log("Note updated with ID: ", editNote.id);
        } catch (error) {
          console.error("Error updating note: ", error);
        }

        setEditNote(null);
        setEditTitle("");
        setEditContent("");
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddNote();
    }
  };

  const openEditModal = (note) => {
    setModalOpen(true);
    setEditNote(note);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handlecloseandsave = () => {
    closeModal();
    handleEditNote();
  };

  const deleteNote = async (noteId) => {
    try {
      await deleteDoc(doc(db, "notes", noteId)); // Replace 'notes' with your Firestore collection name
      console.log("Note deleted successfully");
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div className="Ncontainer">
      <div className="card-try">
        <div className="noteCard">
          <input
            type="text"
            className="noteTitle"
            placeholder="Title"
            value={title}
            onKeyPress={handleKeyPress}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="noteContent"
            placeholder="Take a note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <div className="Bottom_icon">
            <Card_icons Icons={Icons} />
            <p className="text_close" onClick={handleAddNote}>
              close
            </p>
          </div>
        </div>
      </div>
      <div className="notesGrid">
        {notes.map((note, index) => (
          <div key={index} className="note">
            <h2>{note.title}</h2>
            <p onClick={() => openEditModal(note)}>{note.content}</p>
            <div className="note_icon">
              <Card_icons Icons={Icons_Bottom} />
              <Image
                className="del-img"
                src="/del.svg"
                width="19"
                height="19"
                alt="del"
                onClick={() => deleteNote(note.id)}
              />
            </div>
          </div>
        ))}
        {isModalOpen && (
          <div className="modalOverlay">
            <div className="modalContent" onClick={(e) => e.stopPropagation()}>
              <input
                className="modal-title"
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <input
                className="modal-Content"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              />
              <Card_icons Icons={Icons_Bottom} />
              <span className="closeButton" onClick={handlecloseandsave}>
                Close
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Card;
