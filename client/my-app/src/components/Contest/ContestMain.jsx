import axios from "axios";
import { useEffect, useState } from "react";
import ContestCard from "./contestcard";
import { Grid, CircularProgress, Box, styled } from '@mui/material';
import RiHeader from "../Header/Header";

const GridContainer = styled(Box)({
  padding: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', // Center aligns vertically within GridContainer
  minHeight: '100vh',
  backgroundColor: 'black',
  width: '100%'
});

function ContestMain() {
    const [loading, setLoading] = useState(true);
    const [contests, setContests] = useState([]);
    const [err, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get("https://api.digitomize.com/contests");
                setContests(data.results.slice(0, 5));
                setLoading(false);
            } catch (error) {
                const msg = error.response.data?.message || error.response.data?.error;
                setLoading(false);
                setError(msg);
            }
        };

        fetchData();

    }, []);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="black">
                <CircularProgress />
                {err && <div>Error: {err.message}</div>}
            </Box>
        );
    }

    return (
        <>
            <RiHeader />
            <GridContainer>
                <Grid container spacing={2} justifyContent="center" alignItems="flex-start">
                    {contests.map((contest) => (
                        <Grid item xs={12} sm={6} md={4} key={contest.id}>
                            <ContestCard contest={contest} />
                        </Grid>
                    ))}
                </Grid>
                {err && <div className="error-message">Error: {err || err?.message}</div>}
            </GridContainer>
        </>
    );
}

export default ContestMain;