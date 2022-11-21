import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { noticesOperations } from 'redux/notices';
import { noticesSelectors } from '../../../redux/notices';
import { authSelectors } from '../../../redux/auth';
import notices from 'helpers/Notification/Notification';

import { ReactComponent as AddToFavorite } from '../../../image/svg/addToFavorite.svg';

import styles from './NoticesCategoriesList.module.scss';

function NoticesCategoriesItem({ item, setActive }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const myFavorite = useSelector(noticesSelectors.getMyFavoriteNotice);
  const myFavoriteIds = useSelector(authSelectors.getUserFavorite)
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (myFavorite.length > 0) {
      setIsFavorite(myFavorite.some(i => i._id === item._id));
    } else {
      setIsFavorite(myFavoriteIds.some(i => i === item._id));
    }
  }, [myFavorite, item._id, isFavorite, myFavoriteIds]);

  const addFavorite = e => {
    e.preventDefault();
    if (!isLoggedIn) {
      return notices.showError(
        'You need to authorize before adding notices to favorite.'
      );
    }
    e.currentTarget.style.fill = '#f59256';
    dispatch(noticesOperations.addToFavorite(item._id));
    setIsFavorite(true);

    notices.showSuccess('Notice added to favorite adds.');
  };

  const removeFavorite = e => {
    e.preventDefault();

    if (!isLoggedIn) {
      return notices.showError(
        'You need to authorize before remove notices from favorite.'
      );
    }
    e.currentTarget.style.fill = 'none';
    dispatch(noticesOperations.removeFavorite(item._id));
    setIsFavorite(false);

    notices.showSuccess('Notice removed from favorite adds.');
  };

  const normalizeCategoryName = name => {
    let category;

    if (name === 'sell') {
      category = 'Sell';
    } else if (name === 'for-free') {
      category = 'In good hands';
    } else {
      category = 'Lost/found';
    }

    return category;
  };

  const cutFilmTitle = title => {
    if (title.length > 17) {
      return title.slice(0, 17) + '...';
    } else {
      return title;
    }
  };
  
  return (
    <div className={styles.item} key={item._id}>
      <div className={styles.imgWrapper}>
        <img src={`https://fetch-friend.herokuapp.com/${item.petImageUrl}`} alt="Pet" className={styles.img} />
      </div>
      <p className={styles.itemCategory}>
        {normalizeCategoryName(item.category)}
      </p>
      {!isFavorite && (
        <AddToFavorite className={styles.addToFavorite} onClick={addFavorite} />
      )}
      {isFavorite && (
        <AddToFavorite
          className={styles.removeFavorite}
          onClick={removeFavorite}
        />
      )}
      <h3 className={styles.itemHeader}>{item.title}</h3>
      <div className={styles.itemDescriptionWrapper}>
        <div className={styles.itemDescriptionConteiner}>
          <p className={styles.itemDescription}>Breed:</p>
          <p className={styles.itemDescription}>Place:</p>
          <p className={styles.itemDescription}>Birth Date:</p>
        </div>
        <div className={styles.itemDescriptionConteiner}>
          <p className={styles.itemDescription}>{item.breed}</p>
          <p className={styles.itemDescription}>{item.location}</p>
          <p className={styles.itemDescription}>{item.birthDate}</p>
        </div>
      </div>
      <button
        className={styles.itemButton}
        onClick={() => {
          setActive(true);
          dispatch(noticesOperations.getOneNotice(item._id));
        }}
      >
        Learn more
      </button>
    </div>
  );
}

export default NoticesCategoriesItem;
