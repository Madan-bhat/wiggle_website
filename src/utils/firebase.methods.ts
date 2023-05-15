import { auth, firestore } from "./firebase";

interface IForm {
  email: string;
  password: string;
  username: string;
}

interface IDoc {
  collection: string;
  docId: string | undefined;
  fields: {
    uid: string | undefined;
    username: string;
    createdAt: any;
    email: string;
    chats: [];
    userimg: string;
    bio: string;
    groups: [];
    requests: [];
  };
}

const setDoc = ({ docId, collection, fields }: IDoc) => {
  firestore
    .collection(collection)
    .doc(docId)
    .set(fields)
    .catch((e) => {
      if (e) {
        return e;
      }
    });
};

const getUsers = async () => {
  try {
    const usersList: {
      uid: any;
      username: any;
      userimg: any;
      bio: any;
      email: any;
      createdAt: any;
      chats: any;
      groups: any;
      requests: any;
    }[] = [];
    let users = await firestore.collection("users").get();
    users.forEach((data) => {
      const {
        uid,
        username,
        userimg,
        bio,
        email,
        createdAt,
        chats,
        groups,
        requests,
      } = data.data();
      usersList.push({
        uid,
        username,
        userimg,
        bio,
        email,
        createdAt,
        chats,
        groups,
        requests,
      });
      return usersList;
    });
  } catch (error) {
    return error;
  }
};

const createUser = async ({ email, password, username }: IForm) => {
  try {
    let user = await auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        setDoc({
          docId: user?.uid,
          collection: "users",
          fields: {
            uid: user?.uid,
            username,
            userimg: "",
            bio: "",
            email,
            createdAt: new Date(),
            chats: [],
            groups: [],
            requests: [],
          },
        });
      });
    return user;
  } catch (error) {
    return error;
  }
};

const login = ({ email, password }: IForm) => {
  try {
    auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    return error;
  }
};

export { login, createUser, setDoc, getUsers };
