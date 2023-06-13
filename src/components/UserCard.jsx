import './styles/userCard.css'

const UserCard = ({ user, deleteUserById, setUpdateInfo, setIsCloseForm }) => {

    const handleDelete = () => {
        deleteUserById('/users', user.id)
    }

    const handleUpdate = () => {
        setUpdateInfo(user)
        setIsCloseForm(false)
    }


    return (
        <article className='userCard'>
            <h2 className='name_person'>{`${user.first_name} ${user.last_name}`}</h2>
            <hr className='hr_name' />
            <ul className='list'>
                <li className='items'>
                    <span className='item_email'>EMAIL</span>
                    <span className='span_item_email'>{user.email}</span>
                </li>
                <li className='items'>
                    <span className='item_birthday'>BIRTHDAY</span>
                    <div className='item_regalo'>
                        <span><i className='bx bx-gift'></i></span>
                        <span className='span_item_birthday'>{user.birthday}</span>
                    </div>
                </li>
            </ul>
            <hr className='hr_list' />
            <div className='iconos_footer'>
                <button className='btn_trash'onClick={handleDelete}><i className='bx bx-trash'></i></button>
                <button className='btn_edit' onClick={handleUpdate}><i className='bx bx-edit-alt'></i></button>
            </div>
        </article>
    )
}

export default UserCard