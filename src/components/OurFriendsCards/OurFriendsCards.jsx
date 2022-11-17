import styles from './OurFriendsCards.module.scss';

const OurFriends = ({ data }) => {
  const getWorkDays = arr => {
    const { from, to } = arr.find(item => item.isOpen === true);
    return `${from} : ${to}`;
  };
  return (
    <>
      <div>
        <h2 className={styles.Title}>Our friends</h2>
        <div className={styles.FriendsThumb}>
          {data.map(
            ({
              _id,
              url,
              imageUrl,
              title,
              address,
              addressUrl,
              email,
              phone,
              workDays,
            }) => (
              <div className={styles.ContainerFriendsCards} key={_id}>
                <a href={url}>
                  <h3 className={styles.NameFriends}>{title}</h3>
                </a>

                <div className={styles.CardsThumb}>
                  <div className={styles.MainThumb}>
                    <img
                      className={styles.CardsImg}
                      src={imageUrl}
                      alt={`${title} img`}
                    />
                  </div>

                  <div className={styles.SecThumb}>
                    <ul>
                      <li className={styles.CardItem}>
                        Work Hours: <br />
                        {workDays ? (
                          <p>{getWorkDays(workDays)}</p>
                        ) : (
                          <span>-------------</span>
                        )}
                        <ul className={styles.subMenu}>
                          {workDays ? (
                            workDays.map(({ day, from, to, id }) => (
                              <>
                                <li
                                  key={id.toString()}
                                  className={styles.subMenuItem}
                                >
                                  <p>{day}</p>
                                  <p>
                                    {from}-{to}
                                  </p>
                                </li>
                              </>
                            ))
                          ) : (
                            <span>----------</span>
                          )}
                        </ul>
                      </li>
                      <li className={styles.CardItem}>
                        Address: <br />
                        {address ? (
                          <a href={addressUrl} className={styles.CardAddress}>
                            <span>{address}</span>
                          </a>
                        ) : (
                          <span>----------</span>
                        )}
                      </li>
                      <li className={styles.CardItem}>
                        Email: <br />
                        {email ? (
                          <a
                            className={styles.CardLink}
                            href={`mailto:${email}`}
                          >
                            {email}
                          </a>
                        ) : (
                          <span>----------</span>
                        )}
                      </li>
                      <li className={styles.CardItem}>
                        Phone:
                        <br />
                        {phone ? (
                          <a className={styles.CardLink} href={`tel:${phone}`}>
                            {phone}
                          </a>
                        ) : (
                          <span>----------</span>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default OurFriends;
