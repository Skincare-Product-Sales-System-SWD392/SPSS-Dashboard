import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import * as url from "../url_helper";

import accessToken from "../jwt-token-access/accessToken";

import {
  ChatUser,
  CalenderCategories,
  Events,
  OrderListData,
  SellersData,
  EmployeeListData,
  HolidaysData,
  DepartmentsListData,
  EstimatesData,
  ExpensesData,
  NotesData,
  EventData,
  UserListViewData,
  GridViewData,
  ListViewData,
  ProductGridViewData,
  LeaveManageHRData,
  EmployeeSalaryData,
  AttendanceData,
  MainAttendanceData,
  LeaveManageEmployeeData,
  PaymentsData,
  FriendsData,
  ProductReviewsData,
  MailList,
  InvoiceList
} from "Common/data";

let users = [
  {
    uid: 1,
    username: "admin",
    role: "admin",
    password: "123456",
    email: "admin@themesbrand.com",
  },
];

const fakeBackend = () => {
  // This sets the mock adapter on the default instance
  const mock = new MockAdapter(axios, { onNoMatch: "passthrough" });

  // login
  mock.onPost(url.POST_LOGIN).reply(config => {
        
    // const user = JSON.parse(config["data"]);
    // const validUser = users.filter(
    //   usr => usr.email === user.email && usr.password === user.password
    // );

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve([200, validUser[0]]);
        // if (validUser["length"] === 1) {
        // } else {
        //   reject([
        //     "Username and password are invalid. Please enter correct username and password",
        //   ]);
        // }
      });
    });
  });

  // register
  mock.onPost(url.POST_FAKE_REGISTER).reply((config: any) => {
    const user = JSON.parse(config["data"]);

    users.push(user);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, user]);
      });
    });
  });

  // edit profile
  mock.onPost(url.POST_EDIT_PROFILE).reply(config => {
    const user = JSON.parse(config["data"]);

    const validUser = users.filter(usr => usr.uid === user.idx);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (validUser["length"] === 1) {

          let objIndex;

          //Find index of specific object using findIndex method.
          objIndex = users.findIndex(obj => obj.uid === user.idx);
          //Update object's name property.
          users[objIndex].username = user.username;

          // Assign a value to locastorage
          localStorage.removeItem("authUser");
          localStorage.setItem("authUser", JSON.stringify(users[objIndex]));

          resolve([200, users[objIndex]]);
        } else {
          reject([400, "Something wrong for edit profile"]);
        }
      });
    });
  });

  mock.onPost("/post-jwt-register").reply((config: any) => {
    const user = JSON.parse(config["data"]);
    users.push(user);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, user]);
      });
    });
  });

  mock.onPost("/post-jwt-login").reply((config: any) => {
    const user = JSON.parse(config["data"]);
    const validUser = users.filter(
      usr => usr.email === user.email && usr.password === user.password
    );

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (validUser["length"] === 1) {
          // You have to generate AccessToken by jwt. but this is fakeBackend so, right now its dummy
          const token = accessToken;

          // JWT AccessToken
          const tokenObj = { accessToken: token }; // Token Obj
          const validUserObj = { ...validUser[0], ...tokenObj }; // validUser Obj

          resolve([200, validUserObj]);
        } else {
          reject([
            400,
            "Username and password are invalid. Please enter correct username and password",
          ]);
        }
      });
    });
  });

  mock.onPost("/post-jwt-profile").reply((config: any) => {
    const user = JSON.parse(config["data"]);

    const one = config.headers;

    let finalToken = one?.Authorization;

    const validUser = users.filter(usr => usr.uid === user.idx);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Verify Jwt token from header.Authorization
        if (finalToken === accessToken) {
          if (validUser["length"] === 1) {
            let objIndex;

            //Find index of specific object using findIndex method.
            objIndex = users.findIndex(obj => obj.uid === user.idx);

            //Update object's name property.
            users[objIndex].username = user.username;

            // Assign a value to locastorage
            localStorage.removeItem("authUser");
            localStorage.setItem("authUser", JSON.stringify(users[objIndex]));

            resolve([200, "Profile Updated Successfully"]);
          } else {
            reject([400, "Something wrong for edit profile"]);
          }
        } else {
          reject([400, "Invalid Token !!"]);
        }
      });
    });
  });

  mock.onPost("/jwt-forget-pwd").reply((config: any) => {
    // User needs to check that user is eXist or not and send mail for Reset New password

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, "Check you mail and reset your password."]);
      });
    });
  });

  mock.onPost("/social-login").reply((config: any) => {
    const user = JSON.parse(config["data"]);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user && user.token) {
          // You have to generate AccessToken by jwt. but this is fakeBackend so, right now its dummy
          const token = accessToken;

          // JWT AccessToken
          const tokenObj = { accessToken: token }; // Token Obj
          const validUserObj = { ...user[0], ...tokenObj }; // validUser Obj

          resolve([200, validUserObj]);
        } else {
          reject([
            400,
            "Username and password are invalid. Please enter correct username and password",
          ]);
        }
      });
    });
  });

  // Chat
  mock.onGet(new RegExp(`${url.GET_CHAT}/*`)).reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (ChatUser) {
          // Passing fake JSON data as response
          const { params } = config;
          const filteredMessages = ChatUser.filter(
            msg => msg.roomId === params.roomId
          );

          resolve([200, filteredMessages]);
        } else {
          reject([400, "cannot get messages"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_CHAT).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "cannot add data"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_CHAT).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.data]);
        } else {
          reject([400, "cannot delete data"]);
        }
      });
    });
  });

  mock.onDelete(url.BOOKMARK_CHAT).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.data]);
        } else {
          reject([400, "cannot get data"]);
        }
      });
    });
  });

  // Mailbox
  mock.onGet(url.GET_MAIL).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (MailList) {
          // Passing fake JSON data as response
          resolve([200, MailList]);
        } else {
          reject([400, "cannot get data"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_MAIL).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.data]);
        } else {
          reject([400, "cannot delete data"]);
        }
      });
    });
  });

  mock.onDelete(url.UNREAD_MAIL).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.data]);
        } else {
          reject([400, "cannot delete data"]);
        }
      });
    });
  });

  mock.onDelete(url.STARED_MAIL).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.data]);
        } else {
          reject([400, "cannot delete data"]);
        }
      });
    });
  });

  mock.onDelete(url.TRASH_MAIL).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.data]);
        } else {
          reject([400, "cannot delete data"]);
        }
      });
    });
  });


  // Calendar
  mock.onGet(url.GET_EVENT).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Events) {
          // Passing fake JSON data as response
          resolve([200, Events]);
        } else {
          reject([400, "cannot get data"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_EVENT).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "cannot add data"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_EVENT).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "cannot update data"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_EVENT).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.data]);
        } else {
          reject([400, "cannot delete data"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_CATEGORY).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.data]);
        } else {
          reject([400, "cannot delete data"]);
        }
      });
    });
  });

  // Ecommerce
  // Orders
  // mock.onGet(url.GET_ORDERS).reply(() => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (OrderListData) {
  //         // Passing fake JSON data as response
  //         resolve([200, OrderListData]);
  //       } else {
  //         reject([400, "cannot get data"]);
  //       }
  //     });
  //   });
  // });

  // mock.onPost(url.ADD_ORDERS).reply((event: any) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (event && event.data) {
  //         // Passing fake JSON data as response
  //         resolve([200, event.data]);
  //       } else {
  //         reject([400, "cannot add data"]);
  //       }
  //     });
  //   });
  // });

  // mock.onPatch(url.UPDATE_ORDERS).reply((event: any) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (event && event.data) {
  //         // Passing fake JSON data as response
  //         resolve([200, event.data]);
  //       } else {
  //         reject([400, "cannot update data"]);
  //       }
  //     });
  //   });
  // });

  // mock.onDelete(url.DELETE_ORDERS).reply((config: any) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (config && config.headers) {
  //         // Passing fake JSON data as response
  //         resolve([200, config.headers.data]);
  //       } else {
  //         reject([400, "cannot delete data"]);
  //       }
  //     });
  //   });
  // });

  // Sellers
  mock.onGet(url.GET_SELLERS).reply(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (SellersData) {
          // Passing fake JSON data as response
          resolve([200, SellersData]);
        } else {
          reject([400, "cannot get data"]);
        }
      });
    });
  });

  mock.onPost(url.ADD_SELLERS).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "cannot add data"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_SELLERS).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "cannot update data"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_SELLERS).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.data]);
        } else {
          reject([400, "cannot delete data"]);
        }
      });
    });
  });

  

 



  // // OverView
  // mock.onGet(url.GET_REVIEW).reply(() => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (ProductReviewsData) {
  //         // Passing fake JSON data as response
  //         resolve([200, ProductReviewsData]);
  //       } else {
  //         reject([400, "cannot get data"]);
  //       }
  //     });
  //   });
  // });

  mock.onPost(url.ADD_REVIEW).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "cannot add data"]);
        }
      });
    });
  });

  mock.onPatch(url.UPDATE_REVIEW).reply((event: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (event && event.data) {
          // Passing fake JSON data as response
          resolve([200, event.data]);
        } else {
          reject([400, "cannot update data"]);
        }
      });
    });
  });

  mock.onDelete(url.DELETE_REVIEW).reply((config: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (config && config.headers) {
          // Passing fake JSON data as response
          resolve([200, config.headers.data]);
        } else {
          reject([400, "cannot delete data"]);
        }
      });
    });
  });


  

 
 


};



export default fakeBackend;
