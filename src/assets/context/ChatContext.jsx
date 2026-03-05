import { createContext, useContext, useState } from "react"
import { users as mockUsers } from "../services/MockApi"


const ChatContext = createContext()

const ChatProvider = ({ children }) => {
  const [users, setUsers] = useState(mockUsers)
  const [selectedUserId, setSelectedUserId] = useState(null)
  const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("Account")) || null)
  const [savedAccounts, setSavedAccounts] = useState(JSON.parse(localStorage.getItem("Account")) || [])
  
  const handleAccounts = (newAccount) =>
  {
    const updatedAccounts = [... savedAccounts, newAccount];
    setSavedAccounts(updatedAccounts);
    localStorage.setItem("Account", JSON.stringify(updatedAccounts));
  };


  const handleSelectedUserId = (id) => {
    setSelectedUserId(id)
  }

const login = (userData) => {
  const Accounts =JSON.parse(localStorage.getItem("Account"));

  if (!Accounts) return;

  const foundUser = Accounts.find(
    (Account) =>
      Account.email === userData.email &&
         Account.name === userData.name &&
      Account.password === userData.password 
  );

  if (!foundUser) {
    return false;
  }

 setLoggedUser(true)
  return true
    ;
  };
  
  const logout = () => {
    setLoggedUser(false)
}


  const handleMessages = (newMessage) => {
    setUsers((prevValue) => prevValue.map((user) =>
      user.id === selectedUserId
        ? {
          ...user,
          messages: [...user.messages, newMessage]
        }
        : user
    ))
  }

  const selectedUser = users.find(user => user.id === selectedUserId)

  return (
    <ChatContext.Provider value={{ users, handleSelectedUserId, login,  loggedUser, handleMessages, selectedUser, handleAccounts, setLoggedUser }}>
      {children}
    </ChatContext.Provider>
  )
}

export { ChatContext, ChatProvider }