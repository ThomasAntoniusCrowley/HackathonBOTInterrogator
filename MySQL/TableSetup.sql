USE hackathon;

CREATE TABLE Response
(
    Id         INT(11) NOT NULL AUTO_INCREMENT,
    Content    CHAR(255) NOT NULL,
    QuestionId INT(11) NOT NULL,
    Date_Time  TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (ID)
);

CREATE TABLE Question
(
    Id             INT(11) NOT NULL AUTO_INCREMENT,
    Content        CHAR(255) NOT NULL,
    ConversationId INT(11) NOT NULL,
    Date_Time      TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (ID)
);

CREATE TABLE Conversation
(
    Id             INT(11) NOT NULL AUTO_INCREMENT,
    Owner          CHAR(255) NOT NULL,
    StartDate      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    EndDate        TIMESTAMP NULL,
    PRIMARY KEY (ID)
);
