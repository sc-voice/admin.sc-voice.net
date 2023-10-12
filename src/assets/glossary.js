const Glossary = [{
    title: "admin.sc-voice.net",
    summary: "Voice administration website",
    link: "https://admin.sc-voice.net",
    github: "sc-voice/admin.sc-voice.net",
    text: `
      (This server)
      Used by Voice administrators to monitor and maintain
      API servers. 
    `,
  },{
    title: "api.sc-voice.net",
    summary: "Voice API server source",
    link: "https://github.com/sc-voice/api.sc-voice.net",
    github: "sc-voice/api.sc-voice.net",
    text: `
      Github repository for all Voice API servers.
    `,
  },{
    title: "API server",
    summary: "Language-specific application server for search and audio",
    link: "https://github.com/sc-voice/api.sc-voice.net",
    text: `
      The audio storage requirements for Voice API servers
      make it natural to group the servers by language use.
      All Voice API servers have URLs that end with "api.sc-voice.net",
      and are prefixed by the language code or by "www".
      This server also handles SuttaCentral suttaplex audio links
      by redirecting the user to the appropriate website.
    `,
  },{
    title: "Dhammaregen.net",
    summary: "German EBT-Site hosted by Ayya Sabbamitta Silashin",
    link: "https://dhammaregen.net",
    text: `
      German language EBT-Site
    `,
    github: "dhammaregen/dhammaregen3",
  },{
    title: "Docker",
    summary: "API server containers",
    link: "https://hub.docker.com/search?q=scvoice",
    text: `
      Voice API server containers are hosted on Dockerhub
      as "scvoice/api.sc-voice.net".
      The containers are updated by Github Actions from the
      sc-voice/api.sc-voice.net repository (see above).
    `,
  },{
    title: "EBT-Site",
    summary: "Github Web Application based on the EBT-Site framework",
    text: `
      EBT Sites are typically dedicated to a single language. 
      EBT Sites provide segment-by-segment audio
      that can enrich Dhamma study.
      Each EBT-Site has its own wiki and allows users
      to search for Early Buddhist Texts. 
      Users can search by SuttaCentral identifier (e.g., thig1.1) 
      or by search phrase (e.g., "root of suffering").
      EBT-Sites provided curated language-specific examples
      that highlight key Dhamma concepts presented in the
      segmented translation archival maintained by SuttaCentral.
    `,
    link: "https://ebt-site.sc-voice.net",
    github: "sc-voice/ebt-site3",
  },{
    title: "sc-voice.net",
    summary: "SuttaCentral Voice website",
    link: "https://sc-voice.net",
    github: "sc-voice/sc-voice.net",
    text: `
      The new website for SuttaCentral Voice displays
      suttas, search results, suttas, and wiki pages
      using "cards" for side-by-side comparison.
      In addition sutta cards provide random access to segments 
      for a "click to hear" experience.
    `,
  },{
    title: "voice.suttacentral.net",
    summary: "Legacy Voice website",
    link: "https://voice.suttacentral.net",
    text: `
      The original Voice website has been superceded 
      by multiple EBT-Sites implemented using
      more current technology. 
      It is no longer being maintained.
    `,
    github: "sc-voice/sc-voice",
  },{
    title: "www.api.sc-voice.net",
    summary: "Default Voice API server",
    link: "https://www.api.sc-voice.net",
    github: "sc-voice/api.sc-voice.net",
    text: `
      The default Voice API servers handles languages
      with few segmented translations.
      Languages with extensive translations should  be
      allocated their own API server (e.g., de.api.sc-voice.net)
    `,
  }].map((item,i)=>{ item.value = i; return item});

  export default Glossary;
