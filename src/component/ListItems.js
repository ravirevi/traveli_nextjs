'use client'
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import Link from 'next/link';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to={"/pages/dashboard2"}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="대시보드" />
    </ListItemButton>
    <ListItemButton component={Link} to={"/pages/member"}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="회원 관리" />
    </ListItemButton>
    <ListItemButton component={Link} to={"/pages/inquiry"}>
      <ListItemIcon>
        <LiveHelpIcon />
      </ListItemIcon>
      <ListItemText primary="1:1 문의" />
    </ListItemButton>
    <ListItemButton component={Link} to={"/pages/bbsmanage"}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="게시글 관리" />
    </ListItemButton>
    <ListItemButton component={Link} to={"/pages/guide2"}>
      <ListItemIcon>
        <FollowTheSignsIcon />
      </ListItemIcon>
      <ListItemText primary="가이드 관리" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      about
    </ListSubheader>
    <ListItemButton component={Link} to={"/pages/report"}>
      <ListItemIcon>
        <ContactEmergencyIcon />
      </ListItemIcon>
      <ListItemText primary="신고 관리"/>
    </ListItemButton>
    <ListItemButton component={Link} to={"/pages/report"}>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="리포트" />
    </ListItemButton>
    <ListItemButton component={Link} to={"/pages/settings"}>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="세팅" />
    </ListItemButton>
  </React.Fragment>
);