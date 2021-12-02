import React from 'react';

export default function({msg, error}) {
    return (
        <div id="dialog-delete-form" className="Guestbook__DeleteForm" title="메세지 삭제" style="display:none">
            <p className="validateTips normal">{msg}</p>
            <p className="validateTips error" style="display:none;">{error}</p>
            <form>
                <input type="password" id="password-delete" value="" className="text ui-widget-content ui-corner-all" />
                <input type="hidden" id="hidden-no" value="" />
            </form>
        </div>
    )
}