import { useParams } from 'react-router-dom';
import TopBar from '@/components/feature/TopBar';
import IframePanel from '@/components/feature/IframePanel';
import { reports } from '@/mocks/reports';

export default function ReportPage() {
  const { reportId } = useParams<{ reportId: string }>();
  const report = reports.find((r) => r.id === reportId);

  if (!report) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#f0f7ff]">
        <div className="text-center">
          <i className="ri-error-warning-line text-5xl text-[#7ED1F2] mb-3 block" />
          <p className="text-[#049DD9]/60 text-sm">Reporte no encontrado</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <TopBar title={report.label} subtitle="Power BI Embed" />
      <IframePanel src={report.iframeSrc} title={report.label} />
    </div>
  );
}
