import PropTypes from 'prop-types';
import {FriendListItem} from './FriendListItem'
import css from './FriendList.module.css'

export function FriendList({friends}) {
    console.log(friends);
    return (<ul className={css.list}>
       {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
</ul>)
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
     avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
       isOnline: PropTypes.bool.isRequired,
    })
  ),
};

