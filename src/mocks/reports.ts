export interface Report {
  id: string;
  label: string;
  icon: string;
  iframeSrc: string;
  description: string;
}

export const reports: Report[] = [
  {
    id: 'informe-2',
    label: 'CCA EPA',
    icon: 'ri-pie-chart-2-line',
    iframeSrc: 'https://app.powerbi.com/view?r=eyJrIjoiNzUxZTJlZGYtYmU1Ny00YjBjLTkwMDAtNjBhYTdlMjU5ZjgxIiwidCI6IjQ4NmM5OGQ2LTczMzUtNGJjMS04ZTQzLTRiMjVmNDE3ZGI0NCIsImMiOjR9',
    description: 'Ocupación — EPA ocupacion.',
  },
];