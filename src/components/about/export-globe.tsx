"use client";

import dynamic from "next/dynamic";
import countriesTopo from "world-atlas/countries-110m.json";
import { feature } from "topojson-client";
import { AmbientLight, Color, DirectionalLight, MeshPhongMaterial } from "three";
import { useEffect, useMemo, useRef, useState } from "react";
import type { GlobeInstance } from "globe.gl";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

type Country = { id?: string | number; properties?: { name?: string }; geometry?: unknown };
type Place = { name: string; lat: number; lng: number; color: string; label: string };
type Route = { startLat: number; startLng: number; endLat: number; endLng: number; name: string };

const world = countriesTopo as unknown as { objects: { countries: object } };
const countries = (feature(world as never, world.objects.countries as never) as unknown as { features: Country[] }).features;
const peruId = 604;
const priorityCountries = new Set([604, 840, 250, 276, 380, 724, 826, 528]);

const places: Place[] = [
  { name: "Lima", lat: -12.0464, lng: -77.0428, color: "#d5ed5a", label: "Peru · Origin" },
  { name: "Piura", lat: -5.1945, lng: -80.6328, color: "#d5ed5a", label: "Peru · Growing region" },
  { name: "New York", lat: 40.7128, lng: -74.006, color: "#8be4d1", label: "United States" },
  { name: "Miami", lat: 25.7617, lng: -80.1918, color: "#8be4d1", label: "United States" },
  { name: "Los Angeles", lat: 34.0522, lng: -118.2437, color: "#8be4d1", label: "United States" },
  { name: "Rotterdam", lat: 51.9244, lng: 4.4777, color: "#8be4d1", label: "Europe" },
  { name: "Madrid", lat: 40.4168, lng: -3.7038, color: "#8be4d1", label: "Europe" },
  { name: "London", lat: 51.5072, lng: -0.1276, color: "#8be4d1", label: "Europe" },
];

const routes: Route[] = [
  { startLat: -12.0464, startLng: -77.0428, endLat: 40.7128, endLng: -74.006, name: "Peru to United States" },
  { startLat: -12.0464, startLng: -77.0428, endLat: 25.7617, endLng: -80.1918, name: "Peru to United States" },
  { startLat: -12.0464, startLng: -77.0428, endLat: 51.9244, endLng: 4.4777, name: "Peru to Europe" },
  { startLat: -12.0464, startLng: -77.0428, endLat: 40.4168, endLng: -3.7038, name: "Peru to Europe" },
];

const countryNames: Record<number, string> = { 604: "Peru", 840: "United States", 250: "France", 276: "Germany", 380: "Italy", 724: "Spain", 826: "United Kingdom", 528: "Netherlands" };

export function ExportGlobe() {
  const globeRef = useRef<GlobeInstance | undefined>(undefined);
  const hostRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 360, height: 360 });
  const [paused, setPaused] = useState(false);
  const material = useMemo(() => new MeshPhongMaterial({ color: new Color("#062b3d"), shininess: 14, transparent: true, opacity: 0.98 }), []);

  useEffect(() => {
    if (!hostRef.current) return;
    const updateSize = () => {
      if (!hostRef.current) return;
      const width = hostRef.current.clientWidth;
      setSize({ width, height: Math.max(350, Math.min(500, width * 0.94)) });
    };
    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(hostRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;
    globe.pointOfView({ lat: 18, lng: -45, altitude: 1.55 }, 0);
    const controls = globe.controls();
    controls.autoRotate = !paused;
    controls.autoRotateSpeed = 0.45;
    controls.enablePan = false;
    controls.minDistance = 150;
    controls.maxDistance = 520;
    globe.lights([new AmbientLight("#b7fff2", 1.15), new DirectionalLight("#d5ed5a", 1.55)]);
  }, [paused, size]);

  return <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#031a13] p-4 shadow-[0_18px_46px_rgba(2,30,16,.22)] sm:p-7">
    <div className="globe-stars absolute inset-0 opacity-70" aria-hidden="true" />
    <div className="relative flex items-start justify-between gap-4 text-white"><div><p className="eyebrow text-lime">Global supply</p><p className="mt-2 text-sm text-white/70">Peru connected to key markets.</p></div><button type="button" onClick={() => setPaused((value) => !value)} className="rounded-full border border-white/20 px-3 py-2 text-[10px] font-bold uppercase tracking-[.08em] text-white/80 transition hover:border-lime hover:text-lime">{paused ? "Resume globe" : "Pause globe"}</button></div>
    <div ref={hostRef} className="relative z-10 mx-auto mt-2 overflow-hidden rounded-full" style={{ width: size.width, height: size.height }}>
      <Globe ref={globeRef} width={size.width} height={size.height} backgroundColor="rgba(0,0,0,0)" globeMaterial={material} showAtmosphere atmosphereColor="#8be4d1" atmosphereAltitude={0.12} showGraticules polygonsData={countries as object[]} polygonGeoJsonGeometry={(country) => (country as Country).geometry as never} polygonCapColor={(country) => Number((country as Country).id) === peruId ? "#d5ed5a" : priorityCountries.has(Number((country as Country).id)) ? "#2d6653" : "#164b50"} polygonSideColor={() => "rgba(2,30,16,.46)"} polygonStrokeColor={() => "rgba(159,238,222,.35)"} polygonAltitude={(country) => Number((country as Country).id) === peruId ? 0.035 : 0.008} polygonLabel={(country) => `<div style="padding:6px 8px;font:600 12px Arial;color:#021e10;background:#d5ed5a;border-radius:6px">${countryNames[Number((country as Country).id)] || "Country"}</div>`} pointsData={places} pointLat="lat" pointLng="lng" pointColor="color" pointAltitude={(point) => (point as Place).name === "Lima" ? 0.12 : 0.055} pointRadius={(point) => (point as Place).name === "Lima" ? 0.34 : 0.18} pointLabel={(point) => `<div style="padding:6px 8px;font:600 12px Arial;color:#fff;background:#021e10;border:1px solid rgba(213,237,90,.55);border-radius:6px">${(point as Place).label}</div>`} arcsData={routes} arcStartLat="startLat" arcStartLng="startLng" arcEndLat="endLat" arcEndLng="endLng" arcColor={() => ["#d5ed5a", "#8be4d1"]} arcAltitude={0.3} arcStroke={0.8} arcDashLength={0.42} arcDashGap={0.25} arcDashAnimateTime={2600} arcLabel={(route) => `<div style="padding:6px 8px;font:600 12px Arial;color:#fff;background:#021e10;border:1px solid rgba(213,237,90,.55);border-radius:6px">${(route as Route).name}</div>`} ringsData={[places[0]]} ringLat="lat" ringLng="lng" ringColor={() => ["#d5ed5a", "rgba(213,237,90,0)"]} ringMaxRadius={4} ringPropagationSpeed={1.5} ringRepeatPeriod={900} />
    </div>
    <div className="relative mt-1 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[.08em] text-white/70"><span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-lime" />Peru origin</span><span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-[#8be4d1]" />United States &amp; Europe</span></div>
    <p className="relative mt-3 text-center text-xs text-white/60">Drag to rotate and zoom, or use the button to pause the automatic rotation.</p>
  </div>;
}
