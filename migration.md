## migration
### users
```
CREATE TABLE users (id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, name VARCHAR(50), birthday DATE, role_id INT, product_team_id INT, bunch_id INT, join_data DATE, point INT, smile_hensa FLOAT );
```

### roles
```
CREATE TABLE roles (id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, name VARCHAR(50));
```

### product_teams
```
CREATE TABLE product_teams (id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, name VARCHAR(50));
```

### bunches
```
CREATE TABLE bunches (id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, name VARCHAR(50), leader_user_id INT);
```

### user_pictures
```
CREATE TABLE user_pictures (id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, user_id INT, picture_id INT, smile_point INT);
```

### pictures
```
CREATE TABLE pictures (id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, event_id INT, cameraman_user_id INT);
```

### events
```
CREATE TABLE events (id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, name VARCHAR(50));
```