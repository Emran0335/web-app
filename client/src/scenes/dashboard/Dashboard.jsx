import {
  DownloadOutlined,
  Email,
  PersonAdd,
  PointOfSale,
  Traffic
} from "@mui/icons-material";
import { Box, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import FlexBetween from "../../components/cusComponent/Flexbetween";
import Header from "../../components/Header";
import OverviewChart from "../dashboard/OverviewChart";
import StatBox from "../dashboard/StatBox";

const columns = [
  { field: "_id", headerName: "ID", flex: 1 },
  { field: "userId", headerName: "User ID", flex: 1 },
  { field: "createdAt", headerName: "CreatedAt", flex: 1 },
  {
    field: "products",
    headerName: "# of Products",
    flex: 0.5,
    sortable: false,
    renderCell: (params) => params.value.length,
  },
  {
    field: "cost",
    headerName: "Cost",
    flex: 1,
    renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
  },
];

const Dashboard = () => {
  const theme = useTheme();
  return (
    <Box>
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </FlexBetween>
      {/* Row 1  */}
      <Box>
        <StatBox
          title="Total Customers"
          increase="+14%"
          description="Since last month"
          icon={
            <Email
              sx={{
                color: theme.palette.secondary[300],
                fontSize: "26px",
              }}
            />
          }
        />
        <StatBox
          title="Sales Today"
          increase="+21%"
          description="Since last month"
          icon={
            <PointOfSale
              sx={{
                color: theme.palette.secondary[300],
                fontSize: "26px",
              }}
            />
          }
        />
      </Box>
      <Box
        gridColumn="span 8"
        gridRow="span 2"
        backgroundColor={theme.palette.background.alt}
        p="1rem"
        borderRadius="0.55rem"
      >
        <OverviewChart />
      </Box>
      <StatBox
        title="Monthly Sales"
        increase="+5%"
        description="Since last month"
        icon={
          <PersonAdd
            sx={{
              color: theme.palette.secondary[300],
              fontSize: "26px",
            }}
          />
        }
      />
      <StatBox
        title="Yearly Sales"
        increase="+44%"
        description="Since last month"
        icon={
          <Traffic
            sx={{
              color: theme.palette.secondary[300],
              fontSize: "26px",
            }}
          />
        }
      />
      {/* Row 2 */}
      <Box
        gridColumn="span 8"
        gridRow="span 3"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            borderRadius: "5rem",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100]
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.background.alt
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none"
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          }
        }}
      >
        <DataGrid 
          getRowId={(row)=> row._id}
          rows={[]}
          columns={columns} 
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
