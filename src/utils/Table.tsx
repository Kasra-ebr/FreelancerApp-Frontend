import React from "react";

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

function Table({ children, className = "" }: TableProps) {
  return (
    <div className={`bg-secondary-0 overflow-x-auto min-w-full border border-gray-300 text-sm ${className}`}>
      <table className="min-w-full">{children}</table>
    </div>
  );
}

function Header({ children, className = "" }: TableProps) {
  return (
    <thead className={className}>
      <tr className="title-row">{children}</tr>
    </thead>
  );
}

function Body({ children, className = "" }: TableProps) {
  return <tbody className={className}>{children}</tbody>;
}

function Row({ children }: TableProps) {
  return <tr>{children}</tr>;
}


Table.Header = Header;
Table.Body = Body;
Table.Row = Row;

export default Table;
