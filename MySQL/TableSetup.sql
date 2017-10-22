DROP DATABASE hackathon;
CREATE DATABASE hackathon;

USE hackathon;

DROP TABLE IF EXISTS `Response`;
CREATE TABLE Response
(
    Id         INT(11) NOT NULL AUTO_INCREMENT,
    Content    TEXT(500) NOT NULL,
    QuestionId INT(11) NOT NULL,
    Date_Time  TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS `Question`;
CREATE TABLE Question
(
    Id             INT(11) NOT NULL AUTO_INCREMENT,
    Content        TEXT(500) NOT NULL,
    ConversationId INT(11) NOT NULL,
    Date_Time      TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS `Conversation`;
CREATE TABLE Conversation
(
    Id             INT(11) NOT NULL AUTO_INCREMENT,
    Owner          TEXT(255) NOT NULL,
    StartDate      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    EndDate        TIMESTAMP NULL,
    PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS `WatsonAnalytics`;
CREATE TABLE WatsonAnalytics
(
    Id             INT(11) NOT NULL AUTO_INCREMENT,
    Analytics      BLOB,
    ResponseId     INT(11) NOT NULL,
    PRIMARY KEY (ID)
);
