import React, {useEffect, useState} from "react";
import {Helmet} from 'react-helmet-async';
import {faker} from '@faker-js/faker';
// @mui
import {useTheme} from '@mui/material/styles';
import {Grid, Container, Typography, IconButton, Button, Paper} from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
    AppTasks,
    AppNewsUpdate,
    AppOrderTimeline,
    AppCurrentVisits,
    AppWebsiteVisits,
    AppTrafficBySite,
    AppWidgetSummary,
    AppCurrentSubject,
    AppConversionRates,
} from '../sections/@dashboard/app';
import {gapiLoaded, getGoogleAuthToken, gisLoaded, handleAuthClick, handleSignoutClick} from "./GapiClient";
import newScript from "../utils/scriptReader";
import {uploadFileToS3} from "../utils/s3Client";
import CenteredCircularProgress from "../components/progress/CenteredCircularProgress";
import {getGuideDocuments, postGuideDocuments, postWrittenDocument} from "../api/documentApi";
import {useDispatch, useSelector} from "react-redux";
import {callGetGuideDocuments, callGetProjects, callGetWrittenDocuments, setModalOpen} from "../modules/document";
import MyDocumentTable from "./MyDocumentTable";
import palette from "../theme/palette";
import Guide from "./Guide";
import MyProjectTable from "./MyProjectTable";
import HackathonDataInput from "./HackathonDataInput";

// ----------------------------------------------------------------------

export default function HackathonInitialDataPage() {
    const dispatch = useDispatch();


    const projects = useSelector((state) => state.documentReducer.projects);
    const loading = useSelector((state) => state.documentReducer.loading);

    useEffect(() => {
        dispatch(callGetProjects())
    }, [])


    return (
        <>


            <Container maxWidth="xl">


                {loading && <CenteredCircularProgress/>}
                <Grid container spacing={3}>

                    {projects.length > 0 ?


                        <>
                            <Paper sx={{width: '100%', mb: 2}} style={{marginTop: "10px", padding: "10px"}}>
                                <Typography
                                    sx={{flex: '1 1 100%'}}
                                    variant="h6"
                                    id="tableTitle"
                                    component="div"
                                >
                                    프로젝트
                                </Typography>
                                <MyProjectTable projects={projects}/>
                            </Paper>
                        </>


                        :

                        <>
                            <div style={{width: '100%', display: "flex", justifyContent: "center"}}>
                                <HackathonDataInput style={{width: "97%"}}/>
                            </div>
                        </>


                    }


                </Grid>
            </Container>
        </>
    );
}
