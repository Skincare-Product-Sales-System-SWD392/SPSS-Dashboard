import { createSlice } from "@reduxjs/toolkit";
import { getMail, unreadMail, staredMail, trashMail, deleteMail } from './thunk';

export const initialState: any = {
  maillist: [],
  error: {},
  isLoader: false
};

const MailBoxSlice = createSlice({
  name: 'MailBox',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMail.fulfilled, (state: any, action: any) => {
      state.maillist = action.payload;
      state.isLoader = false;
    });
    builder.addCase(getMail.rejected, (state: any, action: any) => {
      state.error = action.payload.error || null;
      state.isLoader = true;
    });

    builder.addCase(unreadMail.fulfilled, (state: any, action: any) => {
      state.maillist = state.maillist.map((mail: any) => {
        if (mail.id.toString() === action.payload.toString()) {
          const updatedMail = mail.unread === true ? false : true;
          return { ...mail, unread: updatedMail };
        }
        return mail;
      });
      state.isMailDetailsDeleted = false;
    });

    builder.addCase(unreadMail.rejected, (state: any, action: any) => {
      state.error = action.payload.error || null;
      state.isMailDetailsDeleted = false;
    });

    builder.addCase(trashMail.fulfilled, (state: any, action: any) => {

      state.maillist = state.maillist.map((mail: any) => {
        if (mail.id.toString() === action.payload.toString()) {
          return { ...mail, category: "trash" };
        }
        return mail;
      });

      state.isMailDetailsDeleted = false;
    });

    builder.addCase(trashMail.rejected, (state: any, action: any) => {
      state.error = action.payload.error || null;
      state.isMailDetailsDeleted = false;
    });

    builder.addCase(staredMail.fulfilled, (state: any, action: any) => {

      state.maillist = state.maillist.map((mail: any) => {
        if (mail.id.toString() === action.payload.toString()) {
          const newCategory = mail.category === "starred" ? "inbox" : "starred";
          return { ...mail, category: newCategory };
        }
        return mail;
      });

      state.isMailDetailsDeleted = false;
    });

    builder.addCase(staredMail.rejected, (state: any, action: any) => {
      state.error = action.payload.error || null;
      state.isMailDetailsDeleted = false;
    });

    builder.addCase(deleteMail.fulfilled, (state: any, action: any) => {
      state.maillist = state.maillist.filter(
        (mail: any) => mail.id.toString() !== action.payload.toString()
      );
      state.isMailDetailsDeleted = false;
    });

    builder.addCase(deleteMail.rejected, (state: any, action: any) => {
      state.error = action.payload.error || null;
      state.isMailDetailsDeleted = false;
    });
  }
});

export default MailBoxSlice.reducer;