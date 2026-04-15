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
    label: 'Ocupación',
    icon: 'ri-pie-chart-2-line',
    iframeSrc: 'https://app.powerbi.com/view?r=eyJrIjoiNzUxZTJlZGYtYmU1Ny00YjBjLTkwMDAtNjBhYTdlMjU5ZjgxIiwidCI6IjQ4NmM5OGQ2LTczMzUtNGJjMS04ZTQzLTRiMjVmNDE3ZGI0NCIsImMiOjR9',
    description: 'Ocupación — EPA ocupacion.',
  },
  {
    id: 'informe-3',
    label: 'Tarimas por Ubicación',
    icon: 'ri-line-chart-line',
    iframeSrc: 'https://app.powerbi.com/view?r=eyJrIjoiYTVlZDYyNTAtNTdiYS00NWE4LWI1MTctMmY4YmY3MWQ4NTRiIiwidCI6IjQ4NmM5OGQ2LTczMzUtNGJjMS04ZTQzLTRiMjVmNDE3ZGI0NCIsImMiOjR9',
    description: 'Tarimas por Ocupación — EPA tarimas.',
  },
];
