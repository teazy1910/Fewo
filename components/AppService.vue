<template>
    <div id="service" class="md:p-24 m-auto grid bg-[#FFF7EC]">
      <h1 class="md:text-5xl text-2xl text-center my-4 font-playfair font-bold">Ausstattung</h1>
      <h3 class="text-lg text-center mb-3 font-playfair">der Ferienwohnung</h3>
      <div class="text-[#d9d9d9] grid grid-content-center grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-2">

        <div class="my-2 mx-2 bg-[#4E5F4B] p-8">
          <Icon icon="cil:house" class="w-10 h-10 m-auto" />
          <h2 class="md:text-xl my-3 text-center font-playfair">Ferienwohnung</h2>
          <p class="md:text-lg text-sm p-3 font-raleway">
            Die Nichtraucher-Wohnung ist im modernen Landhausstil - mit viel
            hellem Holz - eingerichtet und verfügt in jedem Zimmer über
            Fußbodenheizung.
          </p>
        </div>

        <div class="my-2 mx-2 bg-[#4E5F4B] p-8">
          <Icon icon="fluent:bed-20-regular" class="w-10 h-10 m-auto" />
          <h2 class="md:text-xl my-3 text-center font-playfair">Schlafzimmer</h2>
          <p class="md:text-lg text-sm p-3 font-raleway">
            Großes Schlafzimmer mit Doppelbett , bequemer Sitzecke mit Sessel und Couchtisch, Schrank, großer Kommode und  Radiowecker. Aufstellung eines Zustellbettes für ein Kind möglich. Bettwäsche wird selbstverständlich von uns zur Verfügung gestellt. Vom Süd-Balkon mit Sitzgarnitur genießen Sie einen herrlichen Blick auf den Steinberg.
          </p>
        </div>

        <div class="my-2 mx-2 bg-[#4E5F4B] p-8">
          <Icon icon="teenyicons:bath-outline" class="w-10 h-10 font-black m-auto" />
          <h2 class="md:text-xl my-3 text-center font-playfair">Badezimmer</h2>
          <p class="md:text-lg text-sm p-3 font-raleway">
            Unser großes Bad ist mit moderner Dusche, Waschbecken, Handtuchwärmer und hellem Dachfenster ausgestattet. Handtücher werden von uns zur Verfügung gestellt und je nach Bedarf oder wöchentlich gewechselt.
          </p>
        </div>

        <div class="my-2 mx-2 bg-[#4E5F4B] p-8">
          <Icon icon="teenyicons:bath-outline" class="w-10 h-10 font-black m-auto" />
          <h2 class="md:text-xl my-3 text-center font-playfair">Wohnküche</h2>
          <p class="md:text-lg text-sm p-3 font-raleway">
            Die Küchenzeile ist  mit Ceran-Herd, Kühlschrank mit Tiefkühlfach, Kaffeemaschine, Wasserkocher, Eierkocher und Toaster ausgestattet. Eine gemütliche Essecke ist ebenso vorhanden wie eine ausziehbare Couch (mögliche Schlafgelegenheit für das Kind). Von der Sitzgarnitur des Nord-Balkons aus überblickt man das Dorf Ramsau bis hin zum Hohen Göll und Hohen Brett.
          </p>
        </div>

        <div class="my-2 mx-2 bg-[#4E5F4B] p-8">
          <Icon icon="ph:car-thin"
            class="w-10 h-10 font-black m-auto mt-2"/>  
            <h2 class="md:text-xl my-3 text-center font-playfair">Parkplatz</h2>
          <p class="md:text-lg  text-sm p-3 font-raleway">
            Ein eigener Parkplatz direkt am Haus steht Ihnen kostenlos zur Verfügung.
          </p>
          <Icon icon="carbon:wifi" class="w-10 h-10 m-auto" />
          <h2 class="md:text-xl my-3 text-center font-playfair">Kostenloses WLAN</h2>
          <p class="md:text-lg text-sm p-3 font-raleway">
            Es steht Ihnen unser kostenfreies WLAN während Ihres Aufenthalts zur
            Verfügung.
          </p>
        </div>

        <div class="my-2 mx-2 bg-[#4E5F4B] p-8 mb-12">
          <Icon icon="la:mountain" class="w-10 h-10 m-auto md:my-2" />
          <h2 class="md:text-xl my-3 text-center font-playfair">Gästekarte und Mobilität</h2>
          <p class="md:text-lg text-sm p-3 font-raleway">
            Spätestens bei Ihrer Ankunft erhalten Sie Ihre Gästekarte.
            Die nächste Bushaltestelle "Ramsau Kirche" erreichen Sie in 3 Minuten zu Fuß.
          </p>
        </div>

      </div>
    </div>
  </template>
  
  <script>
  import {Icon} from "@iconify/vue";
  
  export default {
    components: {
      Icon,
    },
  };
  </script>
  