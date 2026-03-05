import { createContext, useContext, useState } from "react"
import { users as mockUsers } from "../services/MockApi"


const ChatContext = createContext()

const ChatProvider = ({ children }) => {
  const [users, setUsers] = useState(mockUsers)
  const [selectedUserId, setSelectedUserId] = useState(null)
  const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
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
  const AccountsLS = localStorage.getItem("Account");
  const Accounts = JSON.parse(AccountsLS);

  if (!Accounts) return false;

  const foundUser = Accounts.find(
    (user) =>
      user.email === userData.email &&
      user.password === userData.password &&
      user.name === userData.name
  );

  if (!foundUser) {
    return false;
  }


  return true;
};

  const logout = () => {
    localStorage.removeItem("user")
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
    <ChatContext.Provider value={{ users, handleSelectedUserId, login, logout, loggedUser, handleMessages, selectedUser, handleAccounts }}>
      {children}
    </ChatContext.Provider>
  )
}

export { ChatContext, ChatProvider }