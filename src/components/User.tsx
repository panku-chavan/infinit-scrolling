
import "../styles/user.css"

const User = ({user} : any) => {
  console.log('user: ', user);
  return (
      <div className="user__card__wrapper">
        <div className="user_details">
          <div className="user__avatar">
            <img src={user.picture.medium} alt={user.name.first} className="user__img" />
          </div>
          <div className="user__name">{user.name.first} {user.name.last}</div>
        </div>
      </div>
  );
};

export default User;

