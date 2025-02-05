import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { Airplay, AlertOctagon, AlertTriangle, Archive, BadgeAlert, BellRing, Box, Boxes, Briefcase, CalendarCheck, Camera, CheckCircle, CheckSquare, Clock4, Contact2, Copy, Cpu, Database, Expand, Eye, FolderClosed, GaugeCircle, Gem, Gift, Globe, GraduationCap, HardDrive, Headphones, Heart, History, Home, Image, Import, Inbox, KeyRound, Laugh, Layers, LogIn, Mail, MapPin, MessagesSquare, Mic, PencilRuler, Tag, Trash2 } from "lucide-react";

const LucidIcon = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Lucide Icons" pageTitle="Icons" />

                <div className="px-4 py-3 mb-4 text-sm text-red-500 border border-transparent rounded-md bg-red-50 dark:bg-red-400/20">
                    The <a href="https://lucide.dev/guide/packages/lucide" rel="noreferrer" className="font-semibold underline" target="_blank">https://lucide.dev/guide/packages/lucide</a> provides even more options and customization possibilities for creating engaging carousels. Remember to adjust image URLs and content according to your project.
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Simple Icons (1000+)</h6>
                        <div className="flex flex-wrap justify-center gap-4 mb-5">
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default" data-tooltip-content="airplay">
                                <Tooltip id="default" place="top" content="airplay" />
                                <Airplay className="inline-block size-5 text-slate-500 dark:text-zink-200"></Airplay>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default2" data-tooltip-content="alert-octagon">
                                <Tooltip id="default2" place="top" content="alert-octagon" />
                                <AlertOctagon className="inline-block size-5 text-slate-500 dark:text-zink-200"></AlertOctagon>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default3" data-tooltip-content="alert-triangle">
                                <Tooltip id="default3" place="top" content="alert-triangle" />
                                <AlertTriangle className="inline-block size-5 text-slate-500 dark:text-zink-200"></AlertTriangle>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default4" data-tooltip-content="archive">
                                <Tooltip id="default4" place="top" content="archive" />
                                <Archive className="inline-block size-5 text-slate-500 dark:text-zink-200"></Archive>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default5" data-tooltip-content="briefcase">
                                <Tooltip id="default5" place="top" content="briefcase" />
                                <Briefcase className="inline-block size-5 text-slate-500 dark:text-zink-200"></Briefcase>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default6" data-tooltip-content="box">
                                <Tooltip id="default6" place="top" content="box" />
                                <Box className="inline-block size-5 text-slate-500 dark:text-zink-200"></Box>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default7" data-tooltip-content="boxes">
                                <Tooltip id="default7" place="top" content="boxes" />
                                <Boxes className="inline-block size-5 text-slate-500 dark:text-zink-200"></Boxes>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default8" data-tooltip-content="calendar-check">
                                <Tooltip id="default8" place="top" content="calendar-check" />
                                <CalendarCheck className="inline-block size-5 text-slate-500 dark:text-zink-200"></CalendarCheck>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default9" data-tooltip-content="camera">
                                <Tooltip id="default9" place="top" content="camera" />
                                <Camera className="inline-block size-5 text-slate-500 dark:text-zink-200"></Camera>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default10" data-tooltip-content="check-circle">
                                <Tooltip id="default10" place="top" content="check-circle" />
                                <CheckCircle className="inline-block size-5 text-slate-500 dark:text-zink-200"></CheckCircle>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default11" data-tooltip-content="check-square">
                                <Tooltip id="default11" place="top" content="check-square" />
                                <CheckSquare className="inline-block size-5 text-slate-500 dark:text-zink-200"></CheckSquare>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default12" data-tooltip-content="clock-4">
                                <Tooltip id="default12" place="top" content="clock-4" />
                                <Clock4 className="inline-block size-5 text-slate-500 dark:text-zink-200"></Clock4>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default13" data-tooltip-content="contact-2">
                                <Tooltip id="default13" place="top" content="contact-2" />
                                <Contact2 className="inline-block size-5 text-slate-500 dark:text-zink-200"></Contact2>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default14" data-tooltip-content="copy">
                                <Tooltip id="default14" place="top" content="copy" />
                                <Copy className="inline-block size-5 text-slate-500 dark:text-zink-200"></Copy>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default15" data-tooltip-content="cpu">
                                <Tooltip id="default15" place="top" content="cpu" />
                                <Cpu className="inline-block size-5 text-slate-500 dark:text-zink-200"></Cpu>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default16" data-tooltip-content="database">
                                <Tooltip id="default16" place="top" content="database" />
                                <Database className="inline-block size-5 text-slate-500 dark:text-zink-200"></Database>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default17" data-tooltip-content="eye">
                                <Tooltip id="default17" place="top" content="eye" />
                                <Eye className="inline-block size-5 text-slate-500 dark:text-zink-200"></Eye>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default18" data-tooltip-content="expand">
                                <Tooltip id="default18" place="top" content="expand" />
                                <Expand className="inline-block size-5 text-slate-500 dark:text-zink-200"></Expand>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default19" data-tooltip-content="folder-closed">
                                <Tooltip id="default19" place="top" content="folder-closed" />
                                <FolderClosed className="inline-block size-5 text-slate-500 dark:text-zink-200"></FolderClosed>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default20" data-tooltip-content="gift">
                                <Tooltip id="default20" place="top" content="gift" />
                                <Gift className="inline-block size-5 text-slate-500 dark:text-zink-200"></Gift>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default21" data-tooltip-content="gem">
                                <Tooltip id="default21" place="top" content="gem" />
                                <Gem className="inline-block size-5 text-slate-500 dark:text-zink-200"></Gem>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default22" data-tooltip-content="gauge-circle">
                                <Tooltip id="default22" place="top" content="gauge-circle" />
                                <GaugeCircle className="inline-block size-5 text-slate-500 dark:text-zink-200"></GaugeCircle>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default23" data-tooltip-content="globe">
                                <Tooltip id="default23" place="top" content="globe" />
                                <Globe className="inline-block size-5 text-slate-500 dark:text-zink-200"></Globe>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default24" data-tooltip-content="graduation-cap">
                                <Tooltip id="default24" place="top" content="graduation-cap" />
                                <GraduationCap className="inline-block size-5 text-slate-500 dark:text-zink-200"></GraduationCap>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default25" data-tooltip-content="hard-drive">
                                <Tooltip id="default25" place="top" content="hard-drive" />
                                <HardDrive className="inline-block size-5 text-slate-500 dark:text-zink-200"></HardDrive>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default26" data-tooltip-content="headphones">
                                <Tooltip id="default26" place="top" content="headphones" />
                                <Headphones className="inline-block size-5 text-slate-500 dark:text-zink-200"></Headphones>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default27" data-tooltip-content="heart">
                                <Tooltip id="default27" place="top" content="heart" />
                                <Heart className="inline-block size-5 text-slate-500 dark:text-zink-200"></Heart>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default28" data-tooltip-content="history">
                                <Tooltip id="default28" place="top" content="history" />
                                <History className="inline-block size-5 text-slate-500 dark:text-zink-200"></History>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default29" data-tooltip-content="home">
                                <Tooltip id="default29" place="top" content="home" />
                                <Home className="inline-block size-5 text-slate-500 dark:text-zink-200"></Home>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default30" data-tooltip-content="image">
                                <Tooltip id="default30" place="top" content="image" />
                                <Image className="inline-block size-5 text-slate-500 dark:text-zink-200"></Image>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default31" data-tooltip-content="import">
                                <Tooltip id="default31" place="top" content="import" />
                                <Import className="inline-block size-5 text-slate-500 dark:text-zink-200"></Import>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default32" data-tooltip-content="inbox">
                                <Tooltip id="default32" place="top" content="inbox" />
                                <Inbox className="inline-block size-5 text-slate-500 dark:text-zink-200"></Inbox>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default33" data-tooltip-content="key-round">
                                <Tooltip id="default33" place="top" content="key-round" />
                                <KeyRound className="inline-block size-5 text-slate-500 dark:text-zink-200"></KeyRound>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default34" data-tooltip-content="laugh">
                                <Tooltip id="default34" place="top" content="laugh" />
                                <Laugh className="inline-block size-5 text-slate-500 dark:text-zink-200"></Laugh>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default35" data-tooltip-content="layers">
                                <Tooltip id="default35" place="top" content="layers" />
                                <Layers className="inline-block size-5 text-slate-500 dark:text-zink-200"></Layers>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default36" data-tooltip-content="log-in">
                                <Tooltip id="default36" place="top" content="log-in" />
                                <LogIn className="inline-block size-5 text-slate-500 dark:text-zink-200"></LogIn>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default37" data-tooltip-content="map-pin">
                                <Tooltip id="default37" place="top" content="map-pin" />
                                <MapPin className="inline-block size-5 text-slate-500 dark:text-zink-200"></MapPin>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default38" data-tooltip-content="mail">
                                <Tooltip id="default38" place="top" content="mail" />
                                <Mail className="inline-block size-5 text-slate-500 dark:text-zink-200"></Mail>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default38" data-tooltip-content="messages-square">
                                <Tooltip id="default38" place="top" content="messages-square" />
                                <MessagesSquare className="inline-block size-5 text-slate-500 dark:text-zink-200"></MessagesSquare>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default39" data-tooltip-content="mic">
                                <Tooltip id="default39" place="top" content="mic" />
                                <Mic className="inline-block size-5 text-slate-500 dark:text-zink-200"></Mic>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default40" data-tooltip-content="pencil-ruler">
                                <Tooltip id="default40" place="top" content="pencil-ruler" />
                                <PencilRuler className="inline-block size-5 text-slate-500 dark:text-zink-200"></PencilRuler>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="https://lucide.dev/icons" className="text-white transition-all duration-200 ease-linear btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100">Lucide Icons Library</a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Dual Color Variant Icons</h6>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default41" data-tooltip-content="airplay">
                                <Tooltip id="default41" place="top" content="airplay" />
                                <Airplay className="inline-block size-5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-500"></Airplay>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default42" data-tooltip-content="alert-octagon">
                                <Tooltip id="default42" place="top" content="alert-octagon" />
                                <AlertOctagon className="inline-block size-5 text-custom-500 fill-custom-100 dark:fill-custom-500/20"></AlertOctagon>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default43" data-tooltip-content="check-circle">
                                <Tooltip id="default43" place="top" content="check-circle" />
                                <CheckCircle className="inline-block size-5 text-green-500 fill-green-100 dark:fill-green-500/20"></CheckCircle>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default44" data-tooltip-content="badge-alert">
                                <Tooltip id="default44" place="top" content="badge-alert" />
                                <BadgeAlert className="inline-block size-5 text-orange-500 fill-orange-100 dark:fill-orange-500/20"></BadgeAlert>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default45" data-tooltip-content="tag">
                                <Tooltip id="default45" place="top" content="tag" />
                                <Tag className="inline-block size-5 text-sky-500 fill-sky-100 dark:fill-sky-500/20"></Tag>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default46" data-tooltip-content="alert-triangle">
                                <Tooltip id="default46" place="top" content="alert-triangle" />
                                <AlertTriangle className="inline-block size-5 text-yellow-500 fill-yellow-100 dark:fill-yellow-500/20"></AlertTriangle>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default47" data-tooltip-content="trash-2">
                                <Tooltip id="default47" place="top" content="trash-2" />
                                <Trash2 className="inline-block size-5 text-red-500 fill-red-100 dark:fill-red-500/20"></Trash2>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default48" data-tooltip-content="bell-ring">
                                <Tooltip id="default48" place="top" content="bell-ring" />
                                <BellRing className="inline-block size-5 text-purple-500 fill-purple-100 dark:fill-purple-500/20"></BellRing>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Animation Icons</h6>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default49" data-tooltip-content="airplay">
                                <Tooltip id="default49" place="top" content="airplay" />
                                <Airplay className="inline-block size-5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-500 animate animate-icons"></Airplay>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default50" data-tooltip-content="alert-octagon">
                                <Tooltip id="default50" place="top" content="alert-octagon" />
                                <AlertOctagon className="inline-block size-5 text-custom-500 fill-custom-100 animate animate-icons dark:fill-custom-500/20"></AlertOctagon>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default51" data-tooltip-content="check-circle">
                                <Tooltip id="default51" place="top" content="check-circle" />
                                <CheckCircle className="inline-block size-5 text-green-500 fill-green-100 animate animate-icons dark:fill-green-500/20"></CheckCircle>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default52" data-tooltip-content="badge-alert">
                                <Tooltip id="default52" place="top" content="badge-alert" />
                                <BadgeAlert className="inline-block size-5 text-orange-500 fill-orange-100 animate animate-icons dark:fill-orange-500/20"></BadgeAlert>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default53" data-tooltip-content="tag">
                                <Tooltip id="default53" place="top" content="tag" />
                                <Tag className="inline-block size-5 text-sky-500 fill-sky-100 animate animate-icons dark:fill-sky-500/20"></Tag>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default54" data-tooltip-content="alert-triangle">
                                <Tooltip id="default54" place="top" content="alert-triangle" />
                                <AlertTriangle className="inline-block size-5 text-yellow-500 fill-yellow-100 animate animate-icons dark:fill-yellow-500/20"></AlertTriangle>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default55" data-tooltip-content="trash-2">
                                <Tooltip id="default55" place="top" content="trash-2" />
                                <Trash2 className="inline-block size-5 text-red-500 fill-red-100 animate animate-icons dark:fill-red-500/20"></Trash2>
                            </div>
                            <div className="flex items-center justify-center size-12 border rounded-md border-slate-200 dark:border-zink-500" data-tooltip-id="default56" data-tooltip-content="bell-ring">
                                <Tooltip id="default56" place="top" content="bell-ring" />
                                <BellRing className="inline-block size-5 text-purple-500 fill-purple-100 animate animate-icons dark:fill-purple-500/20"></BellRing>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LucidIcon;