<template>
    <div id="impressum" class="font-raleway flex flex-col justify-center align-center items-center text-[#4E5F4B] py-12 text-sm">
      <div class="flex">
          <div class="mx-5">
          <p class="text-xl mb-3">Kontakt</p>
          <p>Sigrid Zörner</p>
          <p>Am Bartmannfeld 5</p>
          <p>83486 Ramsau bei Berchtesgaden</p>
          <p>+49 160 2821721</p>
          <p>fewo.am.kurpark@gmx.de</p>
        </div>

        <div class="flex flex-col mb-3 mx-5 items-start">
                <p class="text-xl mb-3">Ferienwohnung Zörner</p>
                <p class="text-sm mb-3">Unsere Ferienwohnung befindet sich im Herzen von Ramsau, <br>
                dem 1. Bergsteigerdorf Deutschlands inmitten des einzigen Alpen Nationalparks in Deutschland. <br>
                Unser Haus ist idyllisch gelegen, eingebettet in eine malerische Landschaft <br> 
                und zu jeder Jahreszeit eine Reise wert.</p>
                <a href="https://tbooking.toubiz.de/DEU00000060013432410/tbooking/?globalReset=1&lang=de"
                class="py-2 px-2 text-sm bg-[#700303] text-white font-raleway"
                >Zimmer buchen &rarr;
            </a>
 
        </div>

        <div class="flex flex-col">
          <p class="text-xl mb-3">Informationen</p>
          <ul class="flex flex-col">
          <li>
            <NuxtLink to="/impressum">Impressum</NuxtLink>
          </li>
          <a href="/about">Über uns</a>
          <NuxtLink to="/datenschutz" >Datenschutz</NuxtLink>
          </ul>
        </div>

       
        <!-- <div class=""> -->
          <!-- <p>
            Hinweis: Die Buchung in mündlicher oder schriftlicher Form ist
            verbindlich nach §535 BGB.
          </p>
          <p>
            Wir empfehlen Ihnen den Abschluß einer Reiserücktrittversicherung.
          </p> -->
        <!-- </div> -->
        <!-- <div class="flex">
          <h2>Angaben gemäß § 5 TMG:</h2>
          <p>Sigrid Zörner</p>
          <p>Am Bartmannfeld 5</p>
          <p>83486 Ramsau b. Berchtesgaden</p>
        </div> -->
      </div>
      <h2 class="text-sm m-5">© FeWo Zörner - Made with &hearts;</h2>
    </div>
  </template>