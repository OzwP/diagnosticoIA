// diccionarios con la informacion de las enfermedades
const ef1 = {
    name: `GRIPE`,
    source: `La gripe es una infección vírica que afecta principalmente a la nariz, la garganta, los bronquios y, ocasionalmente, los pulmones. La infección dura generalmente una semana y se caracteriza por la aparición súbita de fiebre alta, dolores musculares, cefalea y malestar general importante, tos seca, dolor de garganta y rinitis. `,
    recommendations: `El virus de la gripe no tiene tratamiento curativo. Las terapias son sintomáticas y van enfocadas a mejorar y aliviar los síntomas que produce esta patología. 
    <br> Las recomendaciones de los médicos son: 
    <br> -Descansar. 
    <br> -Beber abundantes líquidos. 
    <br> -Evitar el consumo de alcohol o tabaco. 
    <br> -Tomar medicación que mejore los síntomas de la gripe (como medicamentos para bajar la fiebre).
    `,
    fuzzyVals: [0.5, 0.7, 0, 0.2, 0.5, 0.8, 0, 0.9, 0, 0, 0, 0, 0.3, 1, 0.8, 0, 0.1, 0]
}

const ef2 = {
    name: `COVID-19`,
    source: `La enfermedad por coronavirus (COVID 19) es una ‎enfermedad infecciosa causada por un ‎coronavirus recientemente descubierto. ‎ 
    <br>La mayoría de las personas que enferman de ‎COVID 19 experimentan síntomas de leves a ‎moderados y se recuperan sin tratamiento ‎especial. ‎ 
    `,
    recommendations: `Si se siente enfermo debe descansar, beber mucho líquido y comer alimentos nutritivos. Permanezca en una habitación separada de los demás miembros de la familia y utilice un baño exclusivamente para usted si es posible. Limpie y desinfecte frecuentemente las superficies que toque.  
    <br> Si tiene síntomas leves y, por lo demás, está sano, aíslese y póngase en contacto con su proveedor de atención médica o con una línea de información sobre la COVID‑19 para recibir asesoramiento. 
    <br> Solicite atención médica si tiene fiebre, tos y dificultad para respirar. Llame con antelación. 
    `,
    fuzzyVals: [0.5, 0, 0.9, 1, 0, 0.7, 0.5, 0.6, 0, 1, 0, 0, 0.2, 0.5, 0.8, 0, 0.4, 0] 
}

const ef3 = {
    name: `ASMA`,
    source: `El asma (o asma bronquial) es una enfermedad pulmonar producida por la inflamación y estrechamiento de la mucosa de los bronquios, impidiendo la salida correcta del aire de los pulmones. `,
    recommendations: `El tratamiento más eficaz para el asma consiste en realizar algunas pruebas diagnósticas (análisis sanguíneo completo, radiografía de tórax, pruebas de la función pulmonar, pruebas alérgicas, etc.) y establecer una terapia farmacológica a base de broncodilatadores para abrir las vías respiratorias.`,
    fuzzyVals: [0.8, 0.6, 1, 0, 0, 0, 0.8, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0, 0]
}

const ef4 = {
    name: `INFLUENZA`,
    source: `La influenza es una enfermedad respiratoria contagiosa provocada por el virus de la influenza. Este virus puede causar una enfermedad leve o grave y en ocasiones puede llevar a la muerte.`,
    recommendations: `Generalmente solo necesitarás descansar y tomar mucho líquido para tratar la influenza. Pero si tienes una infección de gravedad, o estás a un riesgo más alto para complicaciones, tu médico quizás te recete un medicamento antiviral para tratar la gripe. 
    <br>Estos medicamentos pueden incluir oseltamivir (Tamiflu), zanamivir (Relenza), peramivir (Rapivab) o baloxavir (Xofluza). Estos medicamentos pueden acortar tu enfermedad en aproximadamente un día y ayudar a prevenir complicaciones graves. 
    `,
    fuzzyVals: [0.6, 0.8, 0, 0.6, 0, 0, 0, 1, 0, 0, 0, 0, 0.5, 1, 1, 0, 0.2, 0]
}

const ef5 = {
    name: `BRONQUITIS`,
    source: `La bronquitis crónica está catalogada dentro de las EPOC (Enfermedad Pulmonar Obstructiva crónica). Se genera una gran cantidad de mocos al estar los bronquios inflamados. Es por esto que se hace muy difícil respirar y provocan mucha tos. El acto de fumar es una de las causas más comunes, respirar aire con altas dosis de polución, humo y polvo durante un tiempo prolongado pueden ser otras de las causas de la bronquitis crónica. `,
    recommendations: `En primer lugar, la bronquitis crónica, como su propio nombre indica, nunca desaparece por completo o reaparece de manera intermitente durante largos periodos de tiempo. El tratamiento para tratar la bronquitis crónica puede ayudar con sus síntomas, pero no dan una solución definitiva. Por ejemplo, los medicamentos pueden limpiar los conductos respiratorios y eliminar el moco. También se puede practicar la terapia con oxígeno, en este caso la rehabilitación pulmonar puede ser la solución para aliviar al máximo los síntomas y conseguir una mejor calidad de vida. `,
    fuzzyVals: [0.8, 0.7, 0.6, 0.3, 0, 0, 0.5, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}

const ef6 = {
    name: `NAUMONÍA`,
    source: `La neumonía es una infección que inflama los sacos aéreos de uno o ambos pulmones. Los sacos aéreos se pueden llenar de líquido o pus (material purulento), lo que provoca tos con flema o pus, fiebre, escalofríos y dificultad para respirar. Diversos microrganismos, como bacterias, virus y hongos, pueden provocar neumonía. `,
    recommendations: `Los casos más leves de neumonía se pueden tratar en casa con mucho descanso y líquidos, y tomando antibióticos, si así se lo ha indicado su médico. En los casos graves, el paciente puede necesitar ser hospitalizado y tratado por especialistas. `,
    fuzzyVals: [0.7, 0, 0.9, 0.8, 0, 0, 0.8, 0.5, 0.9, 0, 0, 0, 0.5, 0, 0, 0.5, 0.3, 0]
    
}

const ef7 = {
    name: `FARINGITIS`,
    source: `La faringitis, o dolor de garganta, es la inflamación de la faringe, que está situada entre las amígdalas y la laringe. Esta enfermedad puede ser aguda o crónica. La faringitis aguda suele remitir en una semana y está causada por una infección viral o bacteriana. Provoca dolor de garganta, fiebre, erupción cutánea, enrojecimiento de la faringe, hinchazón de los ganglios linfáticos, dolor de cabeza y dificultad para deglutir. La faringitis crónica afecta a aquellas personas que por constitución tienen la mucosa de la faringe débil. `,
    recommendations: `Dependiendo del origen de la infección, el tratamiento consiste en la administración de antibióticos o de medicamentos para aliviar los síntomas. También es importante hacer reposo, beber líquidos calientes y hacer gárgaras.  `,
    fuzzyVals: [0, 0, 0, 0.5, 0.8, 0, 0, 0, 0, 0, 0, 0, 0.3, 1, 0, 0, 0, 1]
}

const ef8 = {
    name: `AMIGDALITIS`,
    source: `Las amígdalas inflamadas que no presentan dolor o que no causan problemas no es necesario tratarlas. Si la causa de la enfermedad es una bacteria llamada estreptococo, el tratamiento consiste en administrar antibióticos. De esta manera, la amigdalitis se cura en aproximadamente una semana. Es importante terminar todos los antibióticos recetados por el especialista, incluso si el paciente se siente mejor ya que si no los toma la infección puede reaparecer. 
    <br>A las personas que sufren esta enfermedad de manera frecuente, se les aconseja la extirpación de las amígdalas. 
    <br>Si no se trata de manera adecuada, la amigdalitis puede derivar en posibles complicaciones graves como absceso en el área alrededor de las amígdalas, enfermedad renal causada por estreptococos y fiebre reumática. `,
    recommendations: `En muchos casos, no se puede prevenir una miocardiopatía. Para reducir el riesgo de tener una miocardiopatía u otro tipo de enfermedad cardíaca, es aconsejable mantener un estilo de vida saludable para el corazón y adoptar hábitos como los siguientes: Evitar el consumo de alcohol o de cocaína, controlar la presión arterial alta, el colesterol alto y la diabetes, seguir una dieta saludable, hacer ejercicio de forma regular, dormir bien, reducir el estrés`,
    fuzzyVals: [0.7, 0, 0, 0.6, 0.8, 0, 0.3, 0, 0, 0, 0.9, 0, 0, 0.9, 0, 0, 0, 0]
}

const ef9 = {
    name: `TOSFERINA`,
    source: `La tosferina o tos convulsiva es una infección bacterial altamente contagiosa que ocasiona una tos violenta e incontrolable que puede durar semanas o incluso meses. Es causada por una bacteria que se encuentra en la boca, la nariz y la garganta de una persona infectada. La tosferina puede comenzar con síntomas similares a los del resfriado común o a los de una tos seca que progresa hasta llegar a episodios de tos severa. `,
    recommendations: `Los antibióticos recomendados para el tratamiento y la prevención post-exposición de la tosferina incluyen azithromycin (Zithromax), erythromycin y clarithromycin (Biaxin). Otra alternativa es usar el trimetoprim-sulfametoxazol (Bactrim). `,
    fuzzyVals: [0.8, 1, 0, 0.7, 0, 0.7, 0, 0, 0, 0, 0, 0, 0, 0.9, 0, 0, 0, 0]
}

const ef10 = {
    name: `SINUSITIS`,
    source: `La sinusitis es una enfermedad que se caracteriza por la inflamación de los senos paranasales, unas cavidades que están situadas detrás de la frente, las mejillas y los ojos. Se produce como resultado de una infección por virus, hongos o bacterias. `,
    recommendations: `Por lo general, la sinusitis se cura por sí sola aunque también se pueden administrar antibióticos para reducir el tiempo de desaparición de la infección. 
La sinusitis aguda se debe tratar durante 10 0 14 días, mientras que la sinusitis crónica se tratar durante un período de entre 3 y 4 semanas. 
Si los síntomas no desaparecen con el tratamiento, puede llegar a ser necesario realizar una cirugía para agrandar la abertura y drenar los senos paranasales. La mayoría de las infecciones de los senos paranasales causadas por hongos necesitan cirugía. `,
    fuzzyVals: [0.8, 0, 0.8, 0.2, 0, 0, 0, 0.4, 0, 0.7, 0, 0, 1, 0, 1, 0, 0, 0]
}

const ef11 = {
    name: `APNEA DEL SUEÑO`,
    source: `La apnea del sueño es la interrupción de la respiración que se produce momentos después de conciliar el sueño y precedida de un ronquido fuerte durante al menos 10 segundos. Si este proceso se repite 5 veces por cada hora de sueño nos encontraremos ante el Síndrome de Apnea Obstructiva del Sueño. 
La obstrucción de la respiración provoca un descenso de los niveles de oxígeno en el organismo, que dificulta que la persona tenga un sueño reparador y se muestre con signos de cansancio a la mañana siguiente. `,
    recommendations: `El especialista determinará el tratamiento en cada caso. Se pueden utilizar algunos dispositivos dentales como tratamiento para los casos leves de apnea obstructiva del sueño. Estos dispositivos facilitan la respiración, al mover la mandíbula hacia adelante.  
Un tratamiento habitual en la apnea del sueño es el CPAP (presión positiva continua en las vías respiratorias). Consiste en colocar, durante el sueño, una máscara especial sobre la boca y la nariz. Esta máscara mantiene abiertas las vías respiratorias mediante la adición de presión al aire que el paciente respira. 
En casos menos frecuentes, se puede precisar la realización de una cirugía para eliminar las amígdalas o el tejido extra de la garganta. `,
    fuzzyVals: [0.6, 0, 1, 0, 0, 0, 0, 0.6, 0, 0, 0.7, 1, 0.7, 0, 0, 0.4, 0, 0]
}





const lstEnf = [ef1, ef2, ef3, ef4, ef5, ef6, ef7, ef8, ef9, ef10, ef11];


const umbral = 0.3;

// DIAGNOSTICO GENERAL

function diagnosticoGnrl(dta){
    let [res, aux, illnessArray] = [[], [], []];
    let [j, count] = [0, 0];
    let asw = {};

    // MAX-MIN

    lstEnf.map((illness) => {
        for(let i = 0; i < 17; i++) aux[i] = Math.min(dta[i], illness.fuzzyVals[i]);
        res[j] = aux;
        aux = [];
        j++;
    });

    for(let i = 0; i < 11; i++) res[i] = parseFloat(res[i].reduce((a, b) => a + b, 0));

    let i = res.indexOf(Math.max.apply(Math, res));

    console.log(res)

    if(res[i] <= umbral){
        asw[`illness0`] = {
            name: `WOOOOO!`,
            source: `Ninguna enfermedad coincide!`,
            recommendations: `Sigue cuidándote!`,
        };

        return asw
    }

    for(let k = 0; k < 11; k++) if(res[k] === res[i]) illnessArray.push(k);

    illnessArray.map((idx) => {
        asw[`illness${count}`] = lstEnf[idx];
        count++;
    })

    return asw;
}


// DIAGNOSTICO ESPECIFICO

function diagnosticoEsp(dta, uillness) {
    let [aux, res] = [[], []];
    let asw = {};
    console.log(dta)

    // MAX-MIN
    
    for (let i = 0; i < uillness.length; i++) {
        for (let j = 0; j < 18; j++) {
            const pos = parseInt(uillness[i]) - 1;
            aux[j] = Math.min(dta[j], lstEnf[pos].fuzzyVals[j]);
        }
        res[i] = aux;
        aux = [];
    }

    for (let i = 0; i < uillness.length; i++) res[i] = parseFloat(res[i].reduce((a, b) => a + b, 0));

    let i = res.indexOf(Math.max.apply(Math, res));

    if(res[i] <= umbral){
        asw[`illness0`] = {
            name: `WOOOOO!`,
            source: `Ninguna enfermedad coincide!`,
            recommendations: `Sigue cuidándote!`,
            };

        return asw
    }

    asw = {
        illness0: lstEnf[uillness[i]-1],
    }
    return asw;

}