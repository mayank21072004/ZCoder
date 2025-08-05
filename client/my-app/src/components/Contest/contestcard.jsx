import React from 'react';
import moment from "moment-timezone";
import { Box, Typography, IconButton, styled, Paper } from '@mui/material';
import { FaClock } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";
import geeksforgeeks from "./assets/5.svg";
import leetcode from "./assets/6.svg";
import codingninjas from "./assets/4.png";
import codechef from "./assets/2.svg";
import codeforces from "./assets/3.svg";
import atcoder from "./assets/1.svg";

const LOCATION_ID_UTC = 1440;

const generateTimeAndDateURL = (startTimeUnix) => {
  const utcDateAndTime = moment.tz(startTimeUnix * 1000, "UTC");
  const utcStartMonth = utcDateAndTime.format("MM");
  const utcStartDate = utcDateAndTime.format("DD");
  const utcStartYear = utcDateAndTime.format("YYYY");
  const utcStartTime = utcDateAndTime.format("HH:mm:ss");
  const utcStartHour = utcStartTime.split(":")[0];
  const utcStartMin = utcStartTime.split(":")[1];
  const utcStartSec = utcStartTime.split(":")[2];

  const timeAndDateURL = new URL("https://timeanddate.com/worldclock/fixedtime.html");
  const params = {
    day: utcStartDate,
    month: utcStartMonth,
    year: utcStartYear,
    hour: utcStartHour,
    min: utcStartMin,
    sec: utcStartSec,
    p1: LOCATION_ID_UTC,
  };

  timeAndDateURL.search = new URLSearchParams(params).toString();
  return timeAndDateURL.href;
};

const platforms = {
  "geeksforgeeks": geeksforgeeks,
  "leetcode": leetcode,
  "codingninjas": codingninjas,
  "codechef": codechef,
  "codeforces": codeforces,
  "atcoder": atcoder,
};

const ContestCardContainer = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end', // Align items from the bottom
  gap: '8px',
  padding: '16px',
  borderRadius: '8px',
  backgroundColor: '#1e1e1e',
  color: 'white',
  height: '100%', // Ensure the container fills the grid item
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
});

const ContestInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '14px',
  color: 'white',
});

const ContestName = styled(Typography)({
  fontWeight: 'bold',
  color: '#d1d1d1',
});

const ContestDetails = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '4px',
});

const ContestDuration = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'white',
});

const ContestStartTimeLink = styled('a')({
  textDecoration: 'none',
  color: 'white',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const ContestLink = styled(IconButton)({
  color: 'lime',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.25)',
  },
});

function ContestCard({ contest }) {
  const platformLogo = platforms[contest.host];
  const timeAndDateURL = generateTimeAndDateURL(contest.startTimeUnix);
  const userTimezone = moment.tz.guess(true);
  const dateTimeInTimezone = moment.tz(contest.startTimeUnix * 1000, userTimezone);
  const startMonth = dateTimeInTimezone.format("MMMM");
  const startDate = dateTimeInTimezone.format("D");
  const startYear = dateTimeInTimezone.format("YYYY");
  const startTime = dateTimeInTimezone.format("h:mm A");

  return (
    <ContestCardContainer elevation={3}>
      <Box display="flex" justifyContent="center">
        {platformLogo && <img src={platformLogo} alt={contest.name} width="32" />}
      </Box>
      <ContestInfo>
        <ContestName variant="h6" gutterBottom>
          {contest.name.slice(0, 35) + "..."}
        </ContestName>
        <ContestDetails>
          <FaClock />
          <Typography>
            Duration: {Math.floor(contest.duration / 60)}hr {contest.duration % 60 ? `${contest.duration % 60}min` : ''}
          </Typography>
        </ContestDetails>
        <ContestDuration>
          <Typography>
            Starts at: <ContestStartTimeLink href={timeAndDateURL} target="_blank" rel="noopener noreferrer">
              {startMonth.slice(0, 3)} {startDate}, {startYear} {startTime}
            </ContestStartTimeLink>
          </Typography>
          <ContestLink href={contest.url + "?ref=digitomize&utm_source=digitomize"} target="_blank" rel="noopener noreferrer">
            <IoOpenOutline />
          </ContestLink>
        </ContestDuration>
      </ContestInfo>
    </ContestCardContainer>
  );
}

export default ContestCard;