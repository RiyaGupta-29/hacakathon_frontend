import React, { useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { useTable, usePagination, useGlobalFilter, useSortBy } from "react-table";
import { Table, TableBody, TableContainer, TableRow, Icon, Autocomplete } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDPagination from "components/MDPagination";
import DataTableHeadCell from "examples/Tables/DataTable/DataTableHeadCell";
import DataTableBodyCell from "examples/Tables/DataTable/DataTableBodyCell";

function DataTable({
  entriesPerPage,
  canSearch,
  showTotalEntries,
  table,
  pagination,
  isSorted,
  noEndBorder,
}) {
  const defaultEntriesPerPage = entriesPerPage?.defaultValue || 10;
  const entries = entriesPerPage?.entries || [5, 10, 15, 20, 25];

  const columns = useMemo(() => table.columns || [], [table]);
  const data = useMemo(() => table.rows || [], [table]);

  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    pageOptions,
    canPreviousPage,
    canNextPage,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
  } = tableInstance;

  useEffect(() => setPageSize(defaultEntriesPerPage), [defaultEntriesPerPage]);

  const setEntriesPerPage = (value) => setPageSize(value);

  const handleInputPagination = ({ target: { value } }) =>
    value > pageOptions.length || value < 0 ? gotoPage(0) : gotoPage(Number(value));

  const customizedPageOptions = pageOptions.map((option) => option + 1);

  const handleInputPaginationValue = ({ target: value }) => gotoPage(Number(value.value - 1));

  if (!columns.length || !data.length) {
    return null; // Render nothing if columns or data are undefined
  }

  return (
    <TableContainer sx={{ boxShadow: "none" }}>
      {entriesPerPage || canSearch ? (
        <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          {entriesPerPage && (
            <MDBox display="flex" alignItems="center">
              <Autocomplete
                disableClearable
                value={pageSize.toString()}
                options={entries.map((el) => el.toString())}
                onChange={(event, newValue) => setEntriesPerPage(parseInt(newValue, 10))}
                size="small"
                sx={{ width: "5rem" }}
                renderInput={(params) => <MDInput {...params} />}
              />
              <MDTypography variant="caption" color="secondary">
                &nbsp;&nbsp;entries per page
              </MDTypography>
            </MDBox>
          )}
          {canSearch && (
            <MDBox width="12rem" ml="auto">
              <MDInput
                placeholder="Search..."
                value={globalFilter || ""}
                size="small"
                fullWidth
                onChange={({ currentTarget }) => setGlobalFilter(currentTarget.value)}
              />
            </MDBox>
          )}
        </MDBox>
      ) : null}
      <Table {...getTableProps()}>
        <MDBox component="thead">
          {headerGroups.map((headerGroup, key) => (
            <TableRow key={key} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, idx) => (
                <DataTableHeadCell
                  key={idx}
                  {...column.getHeaderProps(isSorted && column.getSortByToggleProps())}
                  width={column.width ? column.width : "auto"}
                  align={column.align ? column.align : "left"}
                  sorted={column.isSorted ? (column.isSortedDesc ? "desc" : "asce") : "none"}
                >
                  {column.render("Header")}
                </DataTableHeadCell>
              ))}
            </TableRow>
          ))}
        </MDBox>
        <TableBody {...getTableBodyProps()}>
          {page.map((row, key) => {
            prepareRow(row);
            return (
              <TableRow key={key} {...row.getRowProps()}>
                {row.cells.map((cell, idx) => (
                  <DataTableBodyCell
                    key={idx}
                    noBorder={noEndBorder && rows.length - 1 === key}
                    align={cell.column.align ? cell.column.align : "left"}
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </DataTableBodyCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {pageOptions.length > 1 && (
        <MDBox
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          p={3}
        >
          {showTotalEntries && (
            <MDBox>
              <MDTypography variant="button" color="secondary" fontWeight="regular">
                Showing {pageIndex * pageSize + 1} to {(pageIndex + 1) * pageSize} of {rows.length}{" "}
                entries
              </MDTypography>
            </MDBox>
          )}
          <MDPagination
            variant={pagination.variant || "gradient"}
            color={pagination.color || "info"}
          >
            {canPreviousPage && (
              <MDPagination item onClick={() => previousPage()}>
                <Icon>chevron_left</Icon>
              </MDPagination>
            )}
            {pageOptions.map((option, idx) => (
              <MDPagination item key={idx} onClick={() => gotoPage(idx)} active={pageIndex === idx}>
                {option + 1}
              </MDPagination>
            ))}
            {canNextPage && (
              <MDPagination item onClick={() => nextPage()}>
                <Icon>chevron_right</Icon>
              </MDPagination>
            )}
          </MDPagination>
        </MDBox>
      )}
    </TableContainer>
  );
}

DataTable.defaultProps = {
  entriesPerPage: { defaultValue: 10, entries: [5, 10, 15, 20, 25] },
  canSearch: false,
  showTotalEntries: true,
  pagination: { variant: "gradient", color: "info" },
  isSorted: true,
  noEndBorder: false,
};

DataTable.propTypes = {
  entriesPerPage: PropTypes.oneOfType([
    PropTypes.shape({
      defaultValue: PropTypes.number,
      entries: PropTypes.arrayOf(PropTypes.number),
    }),
    PropTypes.bool,
  ]),
  canSearch: PropTypes.bool,
  showTotalEntries: PropTypes.bool,
  table: PropTypes.objectOf(PropTypes.array).isRequired,
  pagination: PropTypes.shape({
    variant: PropTypes.oneOf(["contained", "gradient"]),
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
  }),
  isSorted: PropTypes.bool,
  noEndBorder: PropTypes.bool,
};

export default DataTable;
