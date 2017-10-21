USE hackathon;

CREATE TABLE Response
(
    Id         INT NOT NULL AUTO_INCREMENT,
    Content    INT NOT NULL,
    QuestionId INT NOT NULL,
    Date_Time  TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (ID)
);

CREATE TABLE Question
(
    Id             INT NOT NULL AUTO_INCREMENT,
    Content        INT NOT NULL,
    ConversationId INT NOT NULL,
    Date_Time      TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (ID)
);

CREATE TABLE Conversation
(
    Id             INT NOT NULL AUTO_INCREMENT,
    Owner          INT NOT NULL,
    StartDate      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    EndDate        TIMESTAMP NULL,
    PRIMARY KEY (ID)
);
