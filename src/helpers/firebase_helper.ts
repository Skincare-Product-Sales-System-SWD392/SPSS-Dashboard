import firebase from 'firebase/compat/app'

// Add the Firebase products that you want to use
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

class FirebaseAuthBackend {
  constructor(firebaseConfig: any) {
    if (firebaseConfig) {
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.auth().onAuthStateChanged((user: any) => {
        if (user) {
          localStorage.setItem("authUser", JSON.stringify(user));
        } else {
          localStorage.removeItem("authUser");
        }
      });
    }
  }

  /**
   * Registers the user with given details
   */
  registerUser = (email: any, password: any) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          (user: any) => {
            resolve(firebase.auth().currentUser);
          },
          (error: any) => {
            reject(this._handleError(error));
          }
        );
    });
  };

  /**
   * Registers the user with given details
   */
  // editProfileAPI = (email: any, password: any) => {
  //   return new Promise((resolve, reject) => {
  //     firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(email, password)
  //       .then(
  //         (user: any) => {
  //           resolve(firebase.auth().currentUser);
  //         },
  //         (error: any) => {
  //           reject(this._handleError(error));
  //         }
  //       );
  //   });
  // };

  editProfileAPI = (username: any, idx: any) => {
    return new Promise((resolve, reject) => {
      const currentUser = firebase.auth().currentUser;
      if (currentUser) {
        // Update the display name        
        currentUser.updateProfile({
          displayName: username
        })
          .then(() => {
            const data = (currentUser as any).multiFactor.user.displayName;
            resolve({ username: data });
            // resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        reject(new Error('User not authenticated'));
      }
    });
  }
  /**
   * Login user with given details
   */
  loginUser = (email: any, password: any) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
          (user: any) => {
            resolve(firebase.auth().currentUser);
          },
          (error: any) => {
            reject(this._handleError(error));
          }
        );
    });
  };

  /**
   * forget Password user with given details
   */
  forgetPassword = (email: any) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .sendPasswordResetEmail(email, {
          url:
            window.location.protocol + "//" + window.location.host + "/login",
        })
        .then(() => {
          resolve(true);
        })
        .catch((error: any) => {
          reject(this._handleError(error));
        });
    });
  };

  /**
   * Logout the user
   */
  logout = () => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          resolve(true);
        })
        .catch((error: any) => {
          reject(this._handleError(error));
        });
    });
  };

  /**
   * Social Login user with given details
   */
  socialLoginUser = async (type: any) => {
    let provider: any;
    if (type === "google") {
      provider = new firebase.auth.GoogleAuthProvider();
    } else if (type === "facebook") {
      provider = new firebase.auth.FacebookAuthProvider();
    }
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      const user = result.user;
      return user;
    } catch (error) {
      throw this._handleError(error);
    }
  };

  addNewUserToFirestore = (user: any) => {
    const collection = firebase.firestore().collection("users");
    const { profile } = user.additionalUserInfo;
    const details = {
      firstName: profile.given_name ? profile.given_name : profile.first_name,
      lastName: profile.family_name ? profile.family_name : profile.last_name,
      fullName: profile.name,
      email: profile.email,
      picture: profile.picture,
      createdDtm: firebase.firestore.FieldValue.serverTimestamp(),
      lastLoginTime: firebase.firestore.FieldValue.serverTimestamp()
    };
    collection.doc(firebase.auth().currentUser?.uid).set(details);
    return { user, details };
  };

  setLoggeedInUser = (user: any) => {
    localStorage.setItem("authUser", JSON.stringify(user));
  };

  /**
   * Returns the authenticated user
   */
  getAuthenticatedUser = () => {
    if (!localStorage.getItem("authUser")) return null;
    return JSON.parse(localStorage.getItem("authUser") || "");
  };

  /**
   * Handle the error
   * @param {*} error
   */
  _handleError(error: any) {
    // var errorCode = error.code;
    var errorMessage = error.message;
    return errorMessage;
  }

  /**
   * Upload file to Firebase Storage with specific directory path
   */
  uploadFileWithDirectory = async (file: File, directory: string = "SPSS/Brand-Image") => {
    try {
      const storageRef = firebase.storage().ref();
      // Use the specified directory path
      const fileRef = storageRef.child(`${directory}/${Date.now()}_${file.name}`);
      
      // Upload the file
      const snapshot = await fileRef.put(file);
      
      // Get the download URL
      const downloadURL = await snapshot.ref.getDownloadURL();
      
      return downloadURL;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  };

  /**
   * Upload blog image to Firebase Storage
   */
  uploadBlogImage = async (file: File) => {
    return this.uploadFileWithDirectory(file, "SPSS/Blog-Image");
  };

  //
  uploadPaymentMethodImage = async (file: File) => {
    return this.uploadFileWithDirectory(file, "SPSS/PaymentMethod-Image");
  };

  /**
   * Upload product item image to Firebase Storage
   */
  uploadProductItemImage = async (file: File) => {
    return this.uploadFileWithDirectory(file, "SPSS/Product-Item-Images");
  };

  /**
   * Upload multiple files to Firebase Storage
   */
  uploadFiles = async (files: File[], path: string = "SPSS/Product-Image") => {
    try {
      const storageRef = firebase.storage().ref();
      const uploadPromises = files.map(async (file) => {
        // Create a unique filename with timestamp
        const fileRef = storageRef.child(`${path}/${Date.now()}_${file.name}`);
        
        // Upload the file
        const snapshot = await fileRef.put(file);
        
        // Get the download URL
        const downloadURL = await snapshot.ref.getDownloadURL();
        
        return downloadURL;
      });
      
      // Wait for all uploads to complete
      const downloadURLs = await Promise.all(uploadPromises);
      
      return downloadURLs;
    } catch (error) {
      console.error("Error uploading files:", error);
      throw error;
    }
  };

  /**
   * Upload product images to Firebase Storage
   */
  uploadProductImages = async (files: File[]) => {
    return this.uploadFiles(files, "SPSS/Product-Images");
  };

  /**
   * Upload a single product image to Firebase Storage
   */
  uploadProductImage = async (file: File) => {
    return this.uploadFileWithDirectory(file, "SPSS/Product-Images");
  };
}

let _fireBaseBackend: any = null;

/**
 * Initilize the backend
 * @param {*} config
 */
const initFirebaseBackend = (config: any) => {
  if (!_fireBaseBackend) {
    _fireBaseBackend = new FirebaseAuthBackend(config);
  }
  return _fireBaseBackend;
};

/**
 * Returns the firebase backend
 */
const getFirebaseBackend = () => {
  return _fireBaseBackend;
};

export { initFirebaseBackend, getFirebaseBackend };