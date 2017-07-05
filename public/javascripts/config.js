var server = "";
//var theme = "ui-smoothness";
var theme = "custom";
var theme2 = "fresh";
var theme3 = "web";

/*$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    //console.log(results);
    try{
        return results[1] || 0;
    }catch(e){
        console.log("ERROR: Usuario o perfil no identificados");
        location.href = '/';
    }
    return results[1] || 0;
}*/

//console.log($("#u").text());
//console.log($("#p").text());

var body = $('body');
var offset = body.offset();
var usuario = $("#u").text();
//var usuario = "MIMEND";
var perfilUsuario = $("#p").text();
//var perfilUsuario = 'CCENTE'; //SCCENT - CCENTE - JSCOME // STALLE - OTALM

//INICIO - LINK PANTALLAS
/*function fn_pantalla(nomPantalla){
    $("#div1").load(server + "/", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")

        if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
}*/
//INICIO - LINK PANTALLAS

var fechaActual = new Date();
var diaActual = fechaActual.getDate();
var ultimoDiaMesActual = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0).getDate();
var mesActual = fechaActual.getMonth();
var anioActual = fechaActual.getFullYear();
var horaActual = fechaActual.getHours();
var minutoActual = fechaActual.getMinutes();
var fechaInicioLoad = anioActual + '-' + (((mesActual)+1<10) ? "0" + (mesActual + 1) : (mesActual + 1)) + '-' + '01';
var fechaFinLoad = anioActual + '-' + (((mesActual)+1<10) ? "0" + (mesActual + 1) : (mesActual + 1)) + '-' + ((diaActual<10) ? "0" + diaActual : diaActual) ;

var f = new Date();
var diaActual = f.getDate();
var mesActual = f.getMonth() + 1;
var anioActual = f.getFullYear();
if (diaActual < 10){
    diaActual = '0' + diaActual;
}
if (mesActual < 10){
    mesActual = '0' + mesActual;
}
var FechaActualSQL = anioActual + '-' + mesActual + '-' + diaActual;

var optionsMap, chartMap;

//INICIO - FORMATOS DE TEXTO Y NUMEROS
$('.texto-minuscula').focusout(function(){
    this.value = this.value.toLowerCase();
});

$('.texto-mayuscula').focusout(function(){
    this.value = this.value.toUpperCase();
});

$('.texto-capital').focusout(function(){
    this.value = this.value.toLowerCase().replace(/(^|\s)([a-z])/g, function(m, p1, p2) {
        return p1 + p2.toUpperCase();
    });
});

$('.solo-numero').keyup(function (){
    this.value = (this.value + '').replace(/[^0-9]/g, '');
});

$('.solo-numero-decimal').keyup(function (){
    this.value = (this.value + '').replace(/[^0-9]+[^.]+[^0-9]/g, '');
});
//INICIO - FORMATOS DE TEXTO Y NUMEROS

function fn_convertFecha_DMY_to_SQL(fechaDMY){
    dia = fechaDMY.substr(0,2);
    mes = fechaDMY.substr(3,2);
    anio = fechaDMY.substr(6,4);

    return anio +'-'+mes+'-'+dia;
}

function fn_convertFecha_DMYHM_to_SQL(fechatime){
    dia = fechatime.substr(0,2);
    mes = fechatime.substr(3,2);
    anio = fechatime.substr(6,4);
    hora = fechatime.substr(11,2);
    min = fechatime.substr(14,2);

    return anio +'-'+mes+'-'+dia+' '+hora+':'+min+':00';
}

function fn_convertFecha_SQL_to_DMY(fechatime){
    anio = fechatime.substr(0,4);
    mes = fechatime.substr(5,2);
    dia = fechatime.substr(8,2);

    return dia +'/'+mes+'/'+anio;
}

function fn_DMYHM_to_Array(fechaDMYHM){
    dia = fechaDMYHM.substr(0,2);
    mes = fechaDMYHM.substr(3,2);
    anio = fechaDMYHM.substr(6,4);
    hora = fechaDMYHM.substr(11,2);
    min = fechaDMYHM.substr(14,2);

    /*var fech = {
        DIA: (( dia<10) ? "0" + dia : dia),
        MES: (((mes)+1<10) ? "0" + (mes) : (mes)),
        ANIO: anio,
        HORA: ((hora<10) ? "0" + hora : hora),
        MINUTO: ((min<10) ? "0" + min : min)
    }*/
    var fech = {
        DIA: dia,
        MES: mes,
        ANIO: anio,
        HORA: hora,
        MINUTO: min
    }

    return fech;
}

function fn_time(){
    var f = new Date();
    var dia = f.getDate();
    // el mes es devuelto entre 0 y 11
    var mes = f.getMonth();
    var anio = f.getFullYear();
    var hora = f.getHours();
    var minuto = f.getMinutes();
    var segundo = f.getSeconds();

    var fech = {
      DIA: ((dia<10) ? "0" + dia : dia),
      MES: (((mes)+1<10) ? "0" + (mes) : (mes)),
      ANIO: anio,
      HORA: ((hora<10) ? "0" + hora : hora),
      MINUTO: ((minuto<10) ? "0" + minuto : minuto),
      SEGUNDO: ((segundo<10) ? "0" + segundo : segundo)
    };

    return fech;
}

function fn_timeStamp(){
    var f = new Date();
    var dia = f.getDate();
    // el mes es devuelto entre 0 y 11
    var mes = f.getMonth();
    var anio = f.getFullYear();
    var hora = f.getHours();
    var minuto = f.getMinutes();
    var segundo = f.getSeconds();

    var fech = {
        DIA: ((dia<10) ? "0" + dia : dia),
        MES: (((mes)+1<10) ? "0" + (mes) : (mes)),
        ANIO: anio,
        HORA: ((hora<10) ? "0" + hora : hora),
        MINUTO: ((minuto<10) ? "0" + minuto : minuto),
        SEGUNDO: ((segundo<10) ? "0" + segundo : segundo)
    };

    return fech.DIA + fech.MES + fech.ANIO + fech.HORA + fech.MINUTO + fech.SEGUNDO;
}

function fn_nmes(mes){
    var result = '';
    switch(mes){
        case 1:
            result = 'Enero';
        break;
        case 2:
            result = 'Febrero';
            break;
        case 13:
            result = 'Marzo';
            break;
        case 4:
            result = 'Abril';
            break;
        case 5:
            result = 'Mayo';
            break;
        case 6:
            result = 'Junio';
            break;
        case 7:
            result = 'Julio';
            break;
        case 8:
            result = 'Agosto';
            break;
        case 9:
            result = 'Setiembre';
            break;
        case 10:
            result = 'Octubre';
            break;
        case 11:
            result = 'Noviembre';
            break;
        case 12:
            result = 'Dicimbre';
            break;
    }

    return result;
}

function fn_fechaLarga(){
    var f = new Date();
    var dia = f.getDate();
    // el mes es devuelto entre 0 y 11
    var mes = f.getMonth();
    var anio = f.getFullYear();
    var hora = f.getHours();
    var minuto = f.getMinutes();
    var segundo = f.getSeconds();

    var fech = {
        DIA: ((dia<10) ? "0" + dia : dia),
        MES: (((mes)+1<10) ? "0" + (mes) : (mes)),
        ANIO: anio,
        HORA: ((hora<10) ? "0" + hora : hora),
        MINUTO: ((minuto<10) ? "0" + minuto : minuto),
        SEGUNDO: ((segundo<10) ? "0" + segundo : segundo)
    };

    return fech.DIA + ' de '+ fn_nmes(parseInt(fech.MES)) +' del '+ fech.ANIO;
}


function fn_FechaTimeProgTrab(tipoTrabajo){
    //Declaramos la fecha actual
    var f = new Date();
    var dia = f.getDate();
    var diaSemana = f.getDay();
    // el mes es devuelto entre 0 y 11
    var mes = f.getMonth();
    var anio = f.getFullYear();
    var hora = f.getHours();
    var minuto = f.getMinutes();
    var segundo = f.getSeconds();

    switch(tipoTrabajo){
        case 'A': //ADICIONAL
            days = 0;
            break;
        case 'N': //NORMAL
            if(diaSemana == 5){
                days = 2;
            }else{
                days = 1;
            }
            break;
        case 'P': //PROVINCIA NORMAL
            days = 1;
            break;
        case 'L': //PROVINCIA ADICIONAL
            days = 1;
            break;
        default:
            days = 1;
    }

    //Obtenemos los milisegundos desde media noche del 1/1/1970
    var tiempo = f.getTime();
    //Calculamos los milisegundos sobre la fecha que hay que sumar o restar...
    var milisegundos = parseInt(days*24*60*60*1000);
    //Modificamos la fecha actual
    var total = f.setTime(tiempo+milisegundos);
    var dia = f.getDate();
    var mes = f.getMonth();
    var anio = f.getFullYear();

    var fech = {
        DIA: ((dia<10) ? "0" + dia : dia),
        MES: (((mes)+1<10) ? "0" + (mes) : (mes)),
        ANIO: anio,
        HORA: ((hora<10) ? "0" + hora : hora),
        MINUTO: ((minuto<10) ? "0" + minuto : minuto),
        SEGUNDO: ((segundo<10) ? "0" + segundo : segundo)
    };

    return fech;
}

function fn_validarFormProgTrab(){
    var msg = '';
    var tipoTrabajo = $('#tipoTrabajo').jqxDropDownList('selectedIndex');
    var dpto = $('#dpto').jqxDropDownList('selectedIndex');
    var prov = $('#prov').jqxDropDownList('selectedIndex');
    var dist = $('#dist').jqxDropDownList('selectedIndex');
    var obs = $('#observacion').val();

    if(tipoTrabajo == -1){
        msg += 'Elija un tipo de trabajo correcto\n';
    }
    if(dpto == -1){
        msg += 'Elija un departamento correcto\n';
    }
    if(prov == -1){
        msg += 'Elija una provincia correcta\n';
    }
    if(dist == -1){
        msg += 'Elija un distrito correcto\n';
    }
    if(obs.length < 5){
        msg += 'La observacion debe tener mas de 5 caracteres\n';
    }

    return msg;
}

function fn_addFilterGrid(grid, field, value){
    var filtergroup = new $.jqx.filter();
    var filter_or_operator = 1;
    var filtervalue = value;
    if(value != ''){
        var filtercondition = 'contains';
    }else{
        var filtercondition = 'empty';
    }
    var filter1 = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
    filtergroup.addfilter(filter_or_operator, filter1);

    // add the filters.
    $("#"+grid).jqxGrid('addfilter', field, filtergroup);
    // apply the filters.
    $("#"+grid).jqxGrid('applyfilters');
}


function fn_sourceJSON(datafields, url){
    var source =
    {
        datatype: "json",
        datafields: datafields,
        url: url
    };
    return source;
}


function fn_readOnlyText(arrayException){
    var elementsText = document.querySelectorAll('input[type="text"]');
    for (var i = 0; i < elementsText.length; i++) {
        //elementsText[i].readOnly = !elementsText[i].readOnly;
        elementsText[i].readOnly = true;
    }

    for(var i = 0; i < arrayException.length; i++){
        document.getElementById(arrayException[i]).readOnly = false;
        //arrayException[i].readOnly = false;
    }
}

function fn_clearText(){
    var elementsText = document.querySelectorAll('input[type="text"]');
    for (var i = 0; i < elementsText.length; i++) {
        //elementsText[i].readOnly = !elementsText[i].readOnly;
        elementsText[i].value = '';
    }
    /*for(var i = 0; i < arrayException.length; i++){
        document.getElementById(arrayException[i]).value = '';
    }*/
}

//INICIO - NO RESIZE/DRAGGABLE MODALS
/*
$('.modal-content').resizable({
    //alsoResize: ".modal-dialog",
    minHeight: 300,
    minWidth: 300
});
*/
//$('.modal-dialog').draggable();

$('#myModal').on('show.bs.modal', function() {
    $(this).find('.modal-body').css({
        'max-height': '100%'
    });
});
//FIN - RESIZE MODALS

var vDefaultOptionsToolBar = {
    theme: theme3,
    width: '100%',
    height: 35
};

var vDefaultOptionsGrid = {
    theme: theme3,
    touchmode: true,
    //filtermode: 'excel',
    filterable: true,
    autoheight: false,
    showfilterrow: true,
    groupable: true,
    sortable: true,
    altrows: true,
    enabletooltips: true,
    columnsresize: true,
    columnsreorder: true,
    selectionmode: 'singlerow',
    showstatusbar: true,
    showaggregates: true,
    editable: false,
    showtoolbar: false,
    pagermode: "simple"
};

var vDefaultOptionsWindow = {
    theme: theme,
    autoOpen: false,
    resizable: false,
    //position: { x: offset.left + 50, y: offset.top + 50},
    showCollapseButton: true,
};

var vDefaultOptionsDateTimeInput = {
    theme: theme3,
    width: '200',
    height: '25',
    formatString: 'dd/MM/yyyy HH:mm',
    showTimeButton: true,
    //value: new Date(anioActual, mesActual, diaActual, horaActual, minutoActual, 0),
    showCalendarButton: true,
    culture: 'es-ES'
};

var vDefaultOptionsDropDownList = {
    theme: theme3,
    placeHolder: "Seleccione:",
    width: 200,
    height: 25
};

var vDefaultOptionsTextArea = {
    theme: theme3,
    width: 200,
    height: 90,
    minLength: 1
};

var vDefaultOptionsInput = {
    theme: theme3,
    height: 25,
    width: 195
};

var vDefaultOptionsButton = {
    theme: theme3,
    width: 100,
    height: 30,
    imgPosition: "left",
    textPosition: "right",
    textImageRelation: "imageBeforeText"
};

var vDefaultOptionsTabs = {
    theme: theme3,
    width: '100%',
    height: '100%',
    position: 'top'
};

var vDefaultOptionsMenu = {
    theme: theme3,
    width: 200,
    height: 58,
    autoOpenPopup: false,
    mode: 'popup'
};

var vDefaultOptionsNotification = {
    width: 250,
    position: "top-left",
    opacity: 0.9,
    autoOpen: false,
    animationOpenDelay: 800,
    autoClose: true,
    autoCloseDelay: 5000
    //template: "success",
    //blink: true
};

if (typeof Highcharts !== 'undefined') {
    Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, color],
                [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    });
}

function fn_JSONToCSVConvertor(JSONData, fileName, ReportTitleCSV, ShowLabel) {
    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

    var CSV = '';
    if(ReportTitleCSV != ""){
        //Set Report title in first row or line
        CSV += ReportTitleCSV + '\r\n\n';
    }

    //This condition will generate the Label/Header
    if (ShowLabel) {
        var row = "";

        //This loop will extract the label from 1st index of on array
        for (var index in arrData[0]) {

            //Now convert each value to string and comma-seprated
            row += index + ',';
        }

        row = row.slice(0, -1);

        //if(ReportTitleCSV != "") {
        //append Label row with line break
        CSV += row + '\r\n';
        //}
    }

    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = "";

        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);

        //add a line break after each row
        CSV += row + '\r\n';
    }

    if (CSV == '') {
        alert("Invalid data");
        return;
    }

    ////Generate a file name
    //var fileName = "MyReport_";
    ////this will remove the blank-spaces from the title and replace it with an underscore
    //fileName += ReportTitleCSV.replace(/ /g,"_");

    //Initialize file format you want csv or xls
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

    // Now the little tricky part.
    // you can use either>> window.open(uri);
    // but this will not work in some browsers
    // or you will not get the correct file extension

    //this trick will generate a temp <a /> tag
    var link = document.createElement("a");
    link.href = uri;

    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    //link.download = fileName + ".xlsx";

    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function fn_sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

/*
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}*/

/*
var vLocalizationScheduler = {
    //localization: {
        // separator of parts of a date (e.g. '/' in 11/05/1955)
        '/': "/",
        // separator of parts of a time (e.g. ':' in 05:44 PM)
        ':': ":",
        // the first day of the week (0 = Sunday, 1 = Monday, etc)
        firstDay: 0,
        days: {
            // full day names
            names: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
            // abbreviated day names
            namesAbbr: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
            // shortest day names
            namesShort: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"]
        },
        months: {
            // full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
            names: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre", ""],
            // abbreviated month names
            namesAbbr: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dic", ""]
        },
        // AM and PM designators in one of these forms:
        // The usual view, and the upper and lower case versions
        //      [standard,lowercase,uppercase]
        // The culture does not use AM or PM (likely all standard date formats use 24 hour time)
        //      null
        AM: ["AM", "am", "AM"],
        PM: ["PM", "pm", "PM"],
        eras: [
            // eras in reverse chronological order.
            // name: the name of the era in this culture (e.g. A.D., C.E.)
            // start: when the era starts in ticks (gregorian, gmt), null if it is the earliest supported era.
            // offset: offset in years from gregorian calendar
            { "name": "A.D.", "start": null, "offset": 0 }
        ],
        twoDigitYearMax: 2029,
        patterns: {
            // short date pattern
            d: "M/d/yyyy",
            // long date pattern
            D: "dddd, MMMM dd, yyyy",
            // short time pattern
            t: "h:mm tt",
            // long time pattern
            T: "h:mm:ss tt",
            // long date, short time pattern
            f: "dddd, MMMM dd, yyyy h:mm tt",
            // long date, long time pattern
            F: "dddd, MMMM dd, yyyy h:mm:ss tt",
            // month/day pattern
            M: "MMMM dd",
            // month/year pattern
            Y: "yyyy MMMM",
            // S is a sortable format that does not vary by culture
            S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss",
            // formatting of dates in MySQL DataBases
            ISO: "yyyy-MM-dd hh:mm:ss",
            ISO2: "yyyy-MM-dd HH:mm:ss",
            d1: "dd.MM.yyyy",
            d2: "dd-MM-yyyy",
            d3: "dd-MMMM-yyyy",
            d4: "dd-MM-yy",
            d5: "H:mm",
            d6: "HH:mm",
            d7: "HH:mm tt",
            d8: "dd/MMMM/yyyy",
            d9: "MMMM-dd",
            d10: "MM-dd",
            d11: "MM-dd-yyyy"
        },
        agendaDateColumn: "Fecha",
        agendaTimeColumn: "Hora",
        agendaAppointmentColumn: "Evento",
        backString: "anterior",
        forwardString: "siguiente",
        toolBarPreviousButtonString: "anterior",
        toolBarNextButtonString: "siguiente",
        emptyDataString: "No hay datos para mostrar",
        loadString: "Loading...",
        clearString: "Clear",
        todayString: "Hoy",
        dayViewString: "Dia",
        weekViewString: "Semana",
        monthViewString: "Mes",
        agendaViewString: "Agenda",

        timelineDayViewString: "Timeline Day",
        timelineWeekViewString: "Timeline Week",
        timelineMonthViewString: "Timeline Month",

        agendaAllDayString: "Todo el dia",
        loadingErrorMessage: "Los datos todav�a se est� cargando y no se puede establecer una propiedad o llamar a un m�todo. Usted puede hacer que una vez que los datos se completa la uni�n. jqxScheduler plantea el evento 'bindingComplete' cuando se completa la uni�n.",
        editRecurringAppointmentDialogTitleString: "Editar evento peri�dico",
        editRecurringAppointmentDialogContentString: "�Quieres editar s�lo esta ocurrencia o la serie?",
        editRecurringAppointmentDialogOccurrenceString: "Editar Ocurrencia",
        editRecurringAppointmentDialogSeriesString: "Editar la serie",

        editDialogTitleString: "Editar Evento",
        editDialogCreateTitleString: "Crear un nuevo evento",
        contextMenuEditAppointmentString: "Modificar evento",
        contextMenuCreateAppointmentString: "Crear nuevo evento",
        editDialogSubjectString: "Tema",
        editDialogLocationString: "Ubicacion",
        editDialogFromString: "Desde",
        editDialogToString: "Hasta",
        editDialogAllDayString: "Todo el dia",
        editDialogExceptionsString: "Excepciones",
        editDialogResetExceptionsString: "Reset on save",
        editDialogDescriptionString: "Descripcion",
        editDialogResourceIdString: "Propietario",
        editDialogStatusString: "Status",
        editDialogColorString: "Color",
        editDialogColorPlaceHolderString: "Seleccionar color",
        editDialogTimeZoneString: "Zona horaria",
        editDialogSelectTimeZoneString: "Seleccione zona horaria",
        editDialogSaveString: "Guardar",
        editDialogDeleteString: "Eliminar",
        editDialogCancelString: "Cancelar",
        editDialogRepeatString: "Repetir",

        editDialogRepeatEveryString: "Repite cada",
        editDialogRepeatEveryWeekString: "semana(s)",
        editDialogRepeatEveryYearString: "a�o(s)",
        editDialogRepeatEveryDayString: "dia(s)",
        editDialogRepeatNeverString: "Nunca",
        editDialogRepeatDailyString: "Diariamente",
        editDialogRepeatWeeklyString: "Semanal",
        editDialogRepeatMonthlyString: "Mensual",
        editDialogRepeatYearlyString: "Anual",
        editDialogRepeatEveryMonthString: "mes(es)",
        editDialogRepeatEveryMonthDayString: "Dia",
        editDialogRepeatFirstString: "Primero",
        editDialogRepeatSecondString: "Segundo",
        editDialogRepeatThirdString: "Tercero",
        editDialogRepeatFourthString: "Cuarto",
        editDialogRepeatLastString: "Ultimo",
        editDialogRepeatEndString: "Fin",
        editDialogRepeatAfterString: "Despues",
        editDialogRepeatOnString: "On",
        editDialogRepeatOfString: "of",
        editDialogRepeatOccurrencesString: "ocurrencia(s)",
        editDialogRepeatSaveString: "Guardar ocurrencia",

        editDialogRepeatSaveSeriesString: "Guardar serie",
        editDialogRepeatDeleteString: "Eliminar ocurrencia",
        editDialogRepeatDeleteSeriesString: "Eliminar serie",
        editDialogStatuses:
        {
            free: "Libre",
            tentative: "Tentativo",
            busy: "Ocupado",
            outOfOffice: "Fuera oficina"
        }
    //}
}*/

/*
function jqxGridConstructor(customOptions) {
    this.defaults = {
        filterable: true,
        sortable: true,
        width: '99.8%',
        columnsresize: true,
        theme: 'custom',
        columns: [
            {
                text: '#', sortable: false, filterable: false, editable: false,
                groupable: false, draggable: false, resizable: false,
                datafield: ', columntype: 'number', width: '5%',
                cellsrenderer: function (row, column, value) {
                    return "<div style='margin:4px; float: right'>" + (value + 1) + "</div>";
                }, pinned: true
            }
        ]
    };
    this.customOptions = customOptions;
    this.jqxGridAdapter = function (customOptions) {
        var source =
        {
            datatype: "json"
        };
        // create a new instance of the jqx.dataAdapter.
        this.dataAdapter = new $.jqx.dataAdapter($.extend(source, customOptions.source));
        this.get = function () {
            return this.dataAdapter;
        }
    }
    this.getOptions = function () {
        if (this.customOptions.columns != undefined) {
            for (var i = 0; i < this.defaults.columns.length; i++) {
                this.customOptions.columns.push(this.defaults.columns[i]);
            }
        }
        return $.extend(this.defaults, this.customOptions, {source: new this.jqxGridAdapter(this.customOptions).get()});
    }
}*/
