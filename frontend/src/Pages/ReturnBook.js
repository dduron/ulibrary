import React, {Component} from 'react';
import axios from 'axios';

class ReturnBook extends Component {

    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        if(urlParams.get('userid') == null || urlParams.get('userid') == undefined || urlParams.get('userid').trim() == "" ||
        urlParams.get('bookid') == null || urlParams.get('bookid') == undefined || urlParams.get('bookid').trim() == "") {
            window.location.href = "selectuser?role=librarian";
        } else {
            axios.delete('https://ulibrary-qp3d.onrender.com/users', {data: { userId: urlParams.get('userid'),
                bookId: urlParams.get('bookid') }})
                .then(res => {
                    window.location.href = "user?userid=" + urlParams.get('userid');
                })
        }
    }

    render() {
        return (
            <div>
                Returning book...
            </div>
        );
    }
}

export default ReturnBook;