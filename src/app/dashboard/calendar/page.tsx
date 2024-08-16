"use client";

import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipledates, setMultimpleDates] = useState<Date[] | undefined>([]);

  const smallDate = date?.toLocaleDateString("es-ES", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  return (
    <div className="flex-col md:flex md:flex-row gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={(date) => date > new Date()}
      />
      <Calendar
        mode="multiple"
        selected={multipledates}
        onSelect={setMultimpleDates}
        className="rounded-md border"
      />
      <div>
        <h1 className="text-3xl">Informacion</h1>
        <p className="border-b"></p>
        <p>{smallDate}</p>
        <p>{multipledates?.map((date) => date.toDateString())}</p>
      </div>
    </div>
  );
};

export default CalendarPage;
