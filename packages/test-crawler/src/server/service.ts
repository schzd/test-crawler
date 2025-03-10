import { isomorRemote } from "isomor";
import { Crawler, CrawlerInput, PageData, Project, CodeInfoList, Browser, ZoneStatus } from 'test-crawler-core';
export function getSettings(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "getSettings", args);
}
export function getInfo(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "getInfo", args);
}
export function getJobs(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "getJobs", args);
}
export function getRepo(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "getRepo", args);
}
export function loadRepos(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "loadRepos", args);
}
export function loadProject(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "loadProject", args);
}
export function loadProjects(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "loadProjects", args);
}
export function saveProject(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "saveProject", args);
}
export function getCrawler(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "getCrawler", args);
}
export function getCrawlers(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "getCrawlers", args);
}
export function getPages(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "getPages", args);
}
export function getPins(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "getPins", args);
}
export function getPin(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "getPin", args);
}
export function saveBeforeAfterCode(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "saveBeforeAfterCode", args);
}
export function getBeforeAfterCode(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "getBeforeAfterCode", args);
}
export function setCode(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "setCode", args);
}
export function getCode(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "getCode", args);
}
export function getCodes(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "getCodes", args);
}
export function getThumbnail(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "getThumbnail", args);
}
export function removePin(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "removePin", args);
}
export function pin(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "pin", args);
}
export function setZoneStatus(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "setZoneStatus", args);
}
export function setZonesStatus(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "setZonesStatus", args);
}
export function setStatus(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "setStatus", args);
}
export function getBrowsers(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "getBrowsers", args);
}
export function startCrawler(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "startCrawler", args);
}
export function startCrawlers(...args: any) {
  return isomorRemote("ws", "ws://127.0.0.1:3005", "server-service", "test-crawler", "startCrawlers", args);
}