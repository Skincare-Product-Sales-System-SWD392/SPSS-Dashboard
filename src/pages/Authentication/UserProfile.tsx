import React, { useState, useEffect } from "react";

// Formik Validation
import * as Yup from "yup";
import { useFormik as useFormic } from "formik";

//redux
import { useSelector, useDispatch } from "react-redux";

import userProfile from "assets/images/users/user-profile.png";

import { createSelector } from 'reselect';
import BreadCrumb from "Common/BreadCrumb";
import withRouter from "Common/withRouter";
import { editProfile } from "slices/thunk";

const UserProfile = () => {

  //meta title
  document.title = "Profile | Skote - React Admin & Dashboard Template";

  const dispatch = useDispatch<any>();

  const [email, setEmail] = useState<string>("admin@gmail.com");
  const [name, setName] = useState<string>('');
  const [idx, setIdx] = useState<number>(1);

  const selectProperties = createSelector(
    (state: any) => state.Profile,
    (profile) => ({
      user: profile.user,
      error: profile.error,
      success: profile.success
    })
  );

  const { error, success, user } = useSelector(selectProperties);

  useEffect(() => {
    if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
      setEmail(user.email)
      setName(user.username);
      setIdx(user.uid)
    } else if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      setEmail(user.email)
      setName(user.username);
      setIdx(user.uid)
    }
  }, [user]);

  const validation = useFormic({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      username: name || 'admin',
      idx: idx || 1,
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please Enter Your UserName"),
    }),
    onSubmit: (values) => {
      dispatch(editProfile(values));
    }
  });

  return (
    <React.Fragment>
      <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
        {/* Render Breadcrumb */}
        <BreadCrumb title="Tailwick" pageTitle="Profile" />

        <div className="row">
          <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-1">
            {success && <div className="px-4 py-3 mb-3 text-sm text-green-500 border border-green-200 rounded-md bg-green-50 dark:bg-green-400/20 dark:border-green-500/50" id="successAlert">
              You have <b>successfully</b> user in.
            </div>}
            {error && <div className="px-4 py-3 mb-3 text-sm text-red-500 border border-red-200 rounded-md bg-red-50 dark:bg-red-400/20 dark:border-red-500/50" id="successAlert">
              You have <b>failed</b> user in.
            </div>}


            <div className="card">
              <div className="card-body">
                <div className="flex gap-3">
                  <div>
                    <img
                      src={userProfile}
                      alt=""
                      className="avatar-md rounded-circle img-thumbnail"
                    />
                  </div>
                  <div className="text-slate-500 dark:text-zink-200">
                    <h5 className="text-slate-500">{name || "admin"}</h5>
                    <p className="mb-1">{email || "admin@gmail.com"}</p>
                    <p className="mb-0">Id no: #{idx || 1}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h5 className="mb-4">Change User Name</h5>

        <div className="card">
          <div className="card-body">
            <form
              className="form-horizontal"
              onSubmit={(e) => {
                e.preventDefault();
                validation.handleSubmit();
                return false;
              }}
            >
              <label className="inline-block mb-2 text-base font-medium">User Name</label>
              <input
                name="username"
                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                placeholder="Enter User Name"
                type="text"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.username || ""}
              />
              {validation.touched.username && validation.errors.username ? (
                <div className="mt-1 text-sm text-red-500">{validation.errors.username}</div>
              ) : null}
              <div className="text-center mt-4">
                <button type="submit" className="px-2 py-1.5 text-xs text-white btn bg-red-500 hover:text-white hover:bg-red-600 focus:text-white focus:bg-red-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:ring active:ring-custom-100 dark:bg-red-500/20 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white dark:focus:bg-red-500 dark:focus:text-white dark:active:bg-red-500 dark:active:text-white dark:ring-red-400/20">
                  Update User Name
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment >
  );
};

export default withRouter(UserProfile);