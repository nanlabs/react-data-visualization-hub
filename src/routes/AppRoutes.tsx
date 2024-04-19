import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Highcharts from '@/pages/Highcharts/Highcharts';
import Recharts from '@/pages/Recharts/Recharts';
import Reactcharts from '@/pages/Reactcharts/Reactcharts';
import Tradingview from '@/pages/Tradingview/Tradingview';
import Apexcharts from '@/pages/Apexcharts/Apexcharts';
import Landing from '@/pages/Landing';
import Layout from '@/pages/Layout/Layout';

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Layout>
          <Landing />
        </Layout>
      }
    />
    <Route
      path="/highcharts"
      element={
        <Layout>
          <Highcharts />
        </Layout>
      }
    />
    <Route
      path="/recharts"
      element={
        <Layout>
          <Recharts />
        </Layout>
      }
    />
    <Route
      path="/reactcharts"
      element={
        <Layout>
          <Reactcharts />
        </Layout>
      }
    />
    <Route
      path="/tradingview"
      element={
        <Layout>
          <Tradingview />
        </Layout>
      }
    />
    <Route
      path="/apexcharts"
      element={
        <Layout>
          <Apexcharts />
        </Layout>
      }
    />
  </Routes>
);

export default AppRoutes;
