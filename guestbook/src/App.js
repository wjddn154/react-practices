import React from 'react';
import DeleteForm from './DeleteForm';
import Guestbook from './Guestbook';
import MessageBox from './MessageBox';

export default function() {
    return (
        <div id='App'>
          <Guestbook />
          {/* <DeleteForm msg={'작성시 입력했던 비밀번호를 입력하세요.'} error={'비밀번호가 틀립니다.'}/> */}
          {/* <MessageBox info={'메세지박스 입니다.'} /> */}
        </div>
    )
}