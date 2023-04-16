import db from "../../firebase/config";

export async function signUp(obj) {
  
    await db.auth().createUserWithEmailAndPassword(obj.email, obj.password)
    .then(async (userCredential) =>{

        // User signed up successfully
        const user = userCredential.user;
        const userId = user.uid;

        try {
          await db
            .firestore()
            .collection("users")
            .doc(userId)
            .set({
              ...obj,
              date: Date.now(),
            });
        } catch (error) {
          console.log(
            `%c[Error - addNewUserToServer(): ${error.message}]`,
            "color: #F44336;"
          );
      
          throw error;
        }

    });
}

export async function signOut() {
  await db.auth().signOut();
}

export async function signIn({ email, password }) {
  try {
    await db.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(
      `%c[Error - addNewUserToServer(): ${error.message}]`,
      "color: #F44336;"
    );

    throw error;
  }
}
  