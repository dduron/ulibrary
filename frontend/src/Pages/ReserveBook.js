import React, {Component} from 'react';
import axios from 'axios';

class ReserveBook extends Component {

    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        if(urlParams.get('userid') == null || urlParams.get('userid') == undefined || urlParams.get('userid').trim() == "" ||
        urlParams.get('bookid') == null || urlParams.get('bookid') == undefined || urlParams.get('bookid').trim() == "") {
            window.location.href = "selectuser";
        } else {
            axios.post('https://ulibrary-qp3d.onrender.com/users/add-book', { userId: urlParams.get('userid'),
                bookId: urlParams.get('bookid') })
                .then(res => {
                    window.location.href = "userprofile?userid=" + urlParams.get('userid');
                })
        }
    }

    render() {
        return (
            <div>
                Reserving book...
            </div>
        );
    }
}

export default ReserveBook;