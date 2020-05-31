let tools = [
    {
        displayName: 'Cisco  Webex Meetings',
        route: 'cisco-webex',
        url: 'https://www.webex.com/de/video-conferencing.html',
        maxParticipants: 1000,
        minPricePerMonth: '12.85',
        description:
            'Es gibt verschiedene Pakete mit unterschiedlichen Preisen und Funktionen. Mit dem Code wecare2020 kann man Webex im Monatsabo einen Monat und im Jahresabo die ersten 4 Monate kostenlos nutzen.',
        functions: [
            'Chat/Nachrichten',
            'Sperren von Konferenzräumen',
            'Unbegrenzte Anzahl an Meetings',
            'Bildschirmübertragung',
            'Planung von Konferenzen',
            'Verschlüsselung von Daten'
        ],
        color: '#005073',
        startGuide: [
            'auf <a href="https://www.webex.com/de/video-conferencing.html">die Installationsseite</a> gehen',
            'E-Mail Adresse eingeben und Kostenlos testen klicken',
            'Land auswählen, Vor- und Nachnamen angeben und Fortfahren klicken',
            'auf Bestätigungsemail warten',
            'über den Link in der E-Mail ein Passwort festlegen',
            'man wird auf eine Seite weitergeleitet, auf der man die Anwendung herunterladen kann',
            'Anwendungsdatei speichern und ausführen'
        ],
        packages: [
            {
                displayName: 'Kostenlos', pricePerMonth: 'kostenlos', maxParticipants: 100, features: []
            },
            {
                displayName: 'Starter-Paket', pricePerMonth: '12.85 €', maxParticipants: 50, features: [
                    '5 GB Cloud Speicher',
                    'Integration in andere Anwendungen (z.B. Slack)',
                    'Aufzeichnung von Meetings',
                    'persönliche Räume für Benutzer',
                    'Benutzermanagement'
                ]
            },
            {
                displayName: 'Plus-Paket', pricePerMonth: '17.30 €', maxParticipants: 100, features: [
                    '5 GB Cloud Speicher',
                    'Integration in andere Anwendungen (z.B. Slack)',
                    'Aufzeichnung von Meetings',
                    'persönliche Räume für Benutzer',
                    'Benutzermanagement',
                    'andere Teilnehmer als Gastgeber zuweisen',
                    'anpassbare URL'
                ]
            },
            {
                displayName: 'Business-Paket', pricePerMonth: '25.65 €', maxParticipants: 200, features: [
                    '10 GB Cloud Speicher',
                    'Integration in andere Anwendungen (z.B. Slack)',
                    'Aufzeichnung von Meetings',
                    'persönliche Räume für Benutzer',
                    'Benutzermanagement',
                    'andere Teilnehmer als Gastgeber zuweisen',
                    'anpassbare URL',
                    'Domänenanspruch',
                    'Synchronisierung von Microsoft Exchange und Active Directory',
                    'Branding- und Anpassungsmöglichkeiten'
                ]
            }
        ],
        preconditions: `Man kann Cisco Webex Meetings auf Windows, Linux, Mac OS, über die Mobile App auf Android und iOS
            oder einfach über einen Webbrowser nutzen. Mehr Informationen finden Sie 
            <a href="https://www.cisco.com/c/en/us/td/docs/collaboration/CWMS/b_System_Requirements/b_System_Requirements_chapter_00.html">
            hier</a>.`
    },
    {
        displayName: 'Skype',
        url: 'https://www.skype.com/de/',
        route: 'skype',
        maxParticipants: 20,
        minPricePerMonth: '0',
        description:
            'Vor allem für kleine Teams und persönliche Meetings. Keine sehr hohen Sicherheitsstandards.',
        functions: [
            'Telefonkonferenzen',
            'Aufzeichnung',
            'Live-Untertitel',
            'Chat/Nachrichten',
            'Bildschirmübertragung',
            'Verschlüsselung von Daten'
        ],
        color: '#00AFF0',
        startGuide: [
            'auf <a href="https://www.skype.com/de/get-skype/">die Installationsseite</a> gehen',
            'Skype für Windows/Mac/Linux herunterladen (eigenes Betriebssystem auswählen)',
            'Datei speichern und ausführen'
        ],
        packages: [],
        preconditions: `Skype kann über Windows, Mac, Linux, Android, iOS oder einen Webbrowser genutzt werden.
            Die genauen technischen Vorraussetzungen für die einzelnen Systeme und Geräte können Sie 
            <a href="https://support.skype.com/en/faq/fa10328/what-are-the-system-requirements-for-skype">hier</a> nachlesen.`
    },
    {
        displayName: 'Microsoft Teams',
        url: 'https://www.microsoft.com/de-de/microsoft-365/microsoft-teams/group-chat-software',
        route: 'microsoft-teams',
        maxParticipants: 250,
        minPricePerMonth: '0',
        description:
            'Nachfolger von Skype For Business',
        functions: [
            'Chat/Nachrichten',
            'Dateifreigabe',
            'Verschlüsselung von Daten'
        ],
        color: '#555BA4',
        startGuide: [
            'auf <a href="https://www.microsoft.com/de-de/microsoft-365/microsoft-teams/download-app">die Installationsseite</a> gehen',
            'Installation auf Desktop oder Mobilgerät auswählen',
            'Teams herunterladen klicken',
            'Datei speichern und ausführen'
        ],
        packages: [
            {
                displayName: 'Kostenlos', pricePerMonth: 'kostenlos', maxParticipants: 250, features: [
                    '2 GB Dateien pro Nutzer im Chat einfügen',
                    'Webversionen von Word, Excel und PowerPoint'
                ]
            },
            {
                displayName: 'Microsoft 365 Business Basic', pricePerMonth: '4.20 €', maxParticipants: 250, features: [
                    '1 TB Dateien pro Nutzer im Chat einfügen',
                    'Konferenzen planen',
                    'Aufzeichnung',
                    'Mehrstufige Authentifizierung',
                    'Benutzermanagement',
                    'Support',
                    'Exchange-E-Mail-Hosting und E-Mail-Adressen mit eigener Domain',
                    '1 TB pro Nutzer Persönliche Dateien auf OneDrive speichern und freigeben',
                    'Zusätzliche Microsoft 365-Dienste'
                ]
            },
            {
                displayName: 'Microsoft 365 Business Standard',
                pricePerMonth: '10.50 €',
                maxParticipants: 250,
                features: [
                    '1 TB Dateien pro Nutzer im Chat einfügen',
                    'Konferenzen planen',
                    'Aufzeichnung',
                    'Mehrstufige Authentifizierung',
                    'Benutzermanagement',
                    'Support',
                    'Exchange-E-Mail-Hosting und E-Mail-Adressen mit eigener Domain',
                    '1 TB pro Nutzer Persönliche Dateien auf OneDrive speichern und freigeben',
                    'Zusätzliche Microsoft 365-Dienste',
                    'Desktopversionen von Outlook, Word, Excel, PowerPoint, Access und Publisher',
                    'Business-Apps wie Bookings, Invoicing und MileIQ'
                ]
            },
            {
                displayName: 'Office 365 E3', pricePerMonth: '19.70 €', maxParticipants: 250, features: [
                    'Unbegrenzt Dateien im Chat einfügen',
                    'Konferenzen planen',
                    'Aufzeichnung',
                    'Mehrstufige Authentifizierung',
                    'Benutzermanagement',
                    'Support',
                    'Exchange-E-Mail-Hosting und E-Mail-Adressen mit eigener Domain',
                    '1 TB pro Nutzer Persönliche Dateien auf OneDrive speichern und freigeben',
                    'Zusätzliche Microsoft 365-Dienste',
                    'Desktopversionen von Outlook, Word, Excel, PowerPoint, Access und Publisher',
                    'Business-Apps wie Bookings, Invoicing und MileIQ',
                    'Audiokonferenzen',
                    'Telefonsysteme',
                    'Zugang zu gleichwertigen lokalen Servern (Exchange, SharePoint, Skype for Business)',
                    'Begleitete FastTrack-Bereitstellung'
                ]
            },
        ],
        preconditions: `Teams kann auf Windows, Mac OS, Linux, Android und iOS genutzt werden.
            <a href="https://docs.microsoft.com/de-de/microsoftteams/hardware-requirements-for-the-teams-app">
            Hier</a> finden Sie genauere Informationen zu den Hardware-Vorraussetzungen.`
    },
    {
        displayName: 'Google Duo',
        route: 'google-duo',
        url: 'https://duo.google.com/intl/de/about/',
        maxParticipants: 12,
        minPricePerMonth: '0',
        description:
            '',
        functions: [
            'Videonachrichten',
            'Ende-zu-Ende-Verschlüsselung'
        ],
        color: '#2196F3',
        startGuide: [
            'auf die Webseite gehen und Google Duo ausprobieren klicken',
            'Es ist keine Installation erforderlich. Man ist automatisch mit seinem Google-Konto angemeldet.'
        ],
        packages: [],
        preconditions: `Google Duo ist als App auf Android und iOS verfügbar und kann außerdem über einen Webbrowser genutzt werden.`
    },
    {
        displayName: 'Zoom',
        route: 'zoom',
        url: 'https://zoom.us/',
        maxParticipants: 1000,
        minPricePerMonth: '0',
        description:
            '',
        functions: [],
        color: '#2D90FF',
        startGuide: [
            'auf <a href="https://zoom.us/download">die Installationsseite</a> gehen',
            'Download Zoom-Client für Meetings auswählen',
            'Datei speichern und ausführen'
        ],
        packages: [
            {
                displayName: 'Basic', pricePerMonth: 'kostenlos', maxParticipants: 100, features: [
                    'Unbegrenzte Konferenzen zwischen 2 Personen',
                    'Limit von 40 Minuten bei Gruppenbesprechungen',
                    'Unbegrenzte Anzahl an Besprechungen',
                    'Ticket-Support',
                    'Bildschirmfreigabe',
                    'Persönliche Räume',
                    'Sofortige oder geplante Meetings',
                    'Aufzeichnung',
                    'Chat'
                ]
            },
            {
                displayName: 'Pro', pricePerMonth: '13.99 €', maxParticipants: 100, features: [
                    'Unbegrenzte Konferenzen zwischen 2 Personen',
                    'Limit von 40 Minuten bei Gruppenbesprechungen',
                    'Unbegrenzte Anzahl an Besprechungen',
                    'Ticket-Support',
                    'Bildschirmfreigabe',
                    'Persönliche Räume',
                    'Sofortige oder geplante Meetings',
                    'Aufzeichnung',
                    'Chat',
                    'Über Add-On bis zu 1000 Teilnehmer kaufen',
                    'Benutzerverwaltung',
                    '1GB von MP4 oder M4A Cloud Aufzeichnung',
                    'REST API',
                    'Skype for Business (Lync) Interoperabilität',
                    'Optionale Add-On Abos'
                ]
            },
            {
                displayName: 'Business', pricePerMonth: '18.99 €', maxParticipants: 300, features: [
                    'Unbegrenzte Konferenzen zwischen 2 Personen',
                    'Limit von 40 Minuten bei Gruppenbesprechungen',
                    'Unbegrenzte Anzahl an Besprechungen',
                    'Ticket-Support',
                    'Bildschirmfreigabe',
                    'Persönliche Räume',
                    'Sofortige oder geplante Meetings',
                    'Aufzeichnung',
                    'Chat',
                    'Über Add-On bis zu 1000 Teilnehmer kaufen',
                    'Benutzerverwaltung',
                    '1GB von MP4 oder M4A Cloud Aufzeichnung',
                    'REST API',
                    'Skype for Business (Lync) Interoperabilität',
                    'Optionale Add-On Abos',
                    'Telefon-Support',
                    'Administrator Dashboard',
                    'Individuelle URL',
                    'Verwaltete Domains',
                    'Einmaliges Anmelden (SSO)',
                    'Unternehmens-Branding',
                    'Transkripte der Cloudaufzeichnung'
                ]
            },
            {
                displayName: 'Enterprise', pricePerMonth: '18.99 €', maxParticipants: 1000, features: [
                    'Unbegrenzte Konferenzen zwischen 2 Personen',
                    'Limit von 40 Minuten bei Gruppenbesprechungen',
                    'Unbegrenzte Anzahl an Besprechungen',
                    'Ticket-Support',
                    'Bildschirmfreigabe',
                    'Persönliche Räume',
                    'Sofortige oder geplante Meetings',
                    'Aufzeichnung',
                    'Chat',
                    'Über Add-On bis zu 1000 Teilnehmer kaufen',
                    'Benutzerverwaltung',
                    '1GB von MP4 oder M4A Cloud Aufzeichnung',
                    'REST API',
                    'Skype for Business (Lync) Interoperabilität',
                    'Optionale Add-On Abos',
                    'Telefon-Support',
                    'Administrator Dashboard',
                    'Individuelle URL',
                    'Verwaltete Domains',
                    'Einmaliges Anmelden (SSO)',
                    'Unternehmens-Branding',
                    'Transkripte der Cloudaufzeichnung',
                    'Unbeschränkter Cloud-Speicher',
                    'Eigener Manager für den Kundenerfolg',
                    'Überprüfung durch Geschäftsleitung',
                    'Paketrabatte bei Webinars und Zoom Rooms'
                ]
            },
        ],
        preconditions: `Zoom kann über Windows, Mac OS, Linux und auf mobilen Geräten mit Android und iOS genutzt werden.
            Auf folgenden Seiten finden Sie mehr zu den <a href="https://support.zoom.us/hc/de/articles/201362023-Systemanforderungen-für-PC-Mac-und-Linux">
            Anforderungen für PCs</a> und <a href="https://support.zoom.us/hc/de/articles/201179966-Systemanforderungen-für-iOS-und-Android">
            Anforderungen auf Mobilen Geräten</a>.`
    },
    {
        displayName: 'Jitsi',
        route: 'jitsi',
        url: 'https://jitsi.org/jitsi-meet/',
        maxParticipants: 75,
        minPricePerMonth: '0',
        description:
            '',
        functions: [
            'Open Source',
            'Bildschirmübertragung',
            'Individuelle URL',
            'Gemeinsame Bearbeitung von Dokumenten',
            'Chat',
            'Anonym, keine Anmeldung oder Accounts',
            'Aufzeichnung',
            'Passwörter für Räume',
            'Konferenzen live auf Youtube streamen',
            'Push-To-Talk',
            'Integrierung in andere Apps oder Webseiten',
            'Audiokonferenzen',
            'Youtube Videos zusammen ansehen',
            'Ende-zu-Ende-Verschlüsselung'
        ],
        color: '#1D76BC',
        startGuide: [
            'Jitsi Meet benötigt keine Installation oder Anmeldung, sondern <a href="https://meet.jit.si/">kann einfach über den Browser genutzt werden</a>'
        ],
        packages: [],
        preconditions: ``
    },
    {
        displayName: 'Slack',
        route: 'slack',
        url: 'https://slack.com/intl/de-de/',
        maxParticipants: 15,
        minPricePerMonth: '6.25',
        description:
            'Hauptsächlich eine Chat-App, jedoch mit integrierten Video-Call-Funktionen',
        functions: [
            'Chats mit mehreren Channeln und Direktnachrichten',
            'OAuth mit Google',
            'Unbegrenztes Nachrichtenarchiv',
            'Unbegrenzt viele Apps',
            'Bildschirmfreigabe',
            'Gast-Accounts und geteilte Channels',
            'Zwei-Faktor-Authentifizierung',
            'Support'
        ],
        color: '#4C154D',
        startGuide: [
            'auf die <a href="https://slack.com/intl/de-de/">Slack-Webseite</a> gehen',
            'Slack starten und Neuen Workspace erstellen wählen',
            'E-Mail-Adresse eingeben und bestätigen',
            'Bestätigungsmail öffnen und den Code darin auf die Website kopieren',
            'gewünschten Namen für den Workspace eingeben',
            'Projekt angeben',
            'übrige Infos eingeben oder überspringen',
            'der Workspace kann dann über den Browser oder mit der herunterladbaren genutzt werden',
            'zum Download der App: auf die <a href="https://slack.com/intl/de-de/downloads/windows">Installationsseite</a> gehen',
            'Downloadoption auswählen',
            'Datei speichern und ausführen',
            'in der Anwendung Anmelden klicken, wodurch man auf eine Webseite weitergeleitet wird',
            'die URL des neu erstellten Worspace angeben und Weiter klicken',
            'man ist nun in der Anwendung angemeldet und kann den Workspace auch darüber nutzen'
        ],
        packages: [
            {
                displayName: 'Standard', pricePerMonth: '6.25 €', maxParticipants: 15, features: [
                    '10 GB Speicherplatz pro Mitglied',
                    'Posting-Berechtigungen nur für den Channel #allgemein verwalten'
                ]
            },
            {
                displayName: 'Plus', pricePerMonth: '11.75 €', maxParticipants: 15, features: [
                    '20 GB Speicherplatz pro Mitglied',
                    'SAML-basiertes Einmaliges Anmelden (SSO)',
                    'Benutzer- und Berechtigungsverwaltung',
                    'Posting-Berechtigungen für alle beliebigen Channels verwalten'
                ]
            },
            {
                displayName: 'Enterprise Grid', pricePerMonth: 'nach Vereinbarung', maxParticipants: 15, features: [
                    '1 TB Speicherplatz pro Mitglied',
                    'SAML-basiertes Einmaliges Anmelden (SSO)',
                    'Benutzer- und Berechtigungsverwaltung',
                    'Posting-Berechtigungen für alle beliebigen Channels verwalten',
                    'Unbegrenzte Workspaces',
                    'Spezielle Support-Teams',
                    'mehr Sicherheit',
                    'Organisationsweite Suche, Nachrichtenübermittlung und fokussierte Channels für Bekanntmachungen'
                ]
            },
        ],
        preconditions: ``
    },
    {
        displayName: 'BigBlueButton',
        route: 'big-blue-button',
        url: 'https://bigbluebutton.org/',
        maxParticipants: 100,
        minPricePerMonth: '0',
        description:
            '',
        functions: [
            'Open Source, APIs und Integrierung in andere Systeme',
            'Bildschirmfreigabe',
            'Umfragen und Abstimmungen',
            'Chat',
            'Filesharing',
            'Interaktives Whiteboard',
            'Aufzeichnung'
        ],
        color: '#272971',
        startGuide: [
            'Von BigBlueButton wird eine ausführliche <a href="https://docs.bigbluebutton.org/2.2/install.html">Anleitung zur Installation</a> bereitgestellt.'
        ],
        packages: [],
        preconditions: ``
    },
    {
        displayName: 'ClickMeeting',
        route: 'click-meeting',
        url: 'https://clickmeeting.com/de',
        maxParticipants: 1000,
        minPricePerMonth: '0',
        description:
            'Preise hängen von der angegebenen Anzahl an Teilnehmern ab (mindestens 10, maximal 1000).',
        functions: [
            'Unbegrenzte Meetings',
            'Bildschirmfreigabe',
            'Präsentationsmodus & Whiteboard',
            'Umfragen und Abstimmungen',
            'Privater Chat',
            'Chat-Übersetzung in Echtzeit',
            'Automatische E-Mail Benachrichtigungen',
            'Custom Branding',
            'Social Media Freigabe',
            'Offener Zugang oder Schutz durch Passwörter oder Token',
            'Integration in andere Apps',
            'Statistiken',
            'Support'
        ],
        color: '#689F38',
        startGuide: [
            '<a href="https://clickmeeting.com/de/free-signup">kostenlos registrieren</a>'
        ],
        packages: [
            {
                displayName: 'Kostenlose Testphase (7 Tage)', pricePerMonth: 'kostenlos', maxParticipants: 5, features: [
                    '500 MB Speicherplatz für Dateien'
                ]
            },
            {
                displayName: 'Live', pricePerMonth: '22 - 215 €', maxParticipants: 1000, features: [
                    '1 GB Speicherplatz für Dateien',
                    'Aufzeichnung',
                    'Speicherplatz für 6 Stunden Aufzeichnungen',
                    'Bildschirmkontrolle',
                    'Streaming auf Facebook oder YouTube',
                    'Einrichtung von Kostenpflichtigen Webinaren über PayPal',
                    'Kostenpflichtige Add-Ons'
                ]
            },
            {
                displayName: 'Automated', pricePerMonth: '35 - 249 €', maxParticipants: 1000, features: [
                    '2 GB Speicherplatz für Dateien',
                    'Aufzeichnung',
                    'Speicherplatz für 10 Stunden Aufzeichnungen',
                    'Bildschirmkontrolle',
                    'Streaming auf Facebook oder YouTube',
                    'Einrichtung von Kostenpflichtigen Webinaren über PayPal',
                    'Kostenpflichtige Add-Ons',
                    'Automatisierung: Mails, Veröffentlichung von Aufzeichnungen, Streaming'
                ]
            },
            {
                displayName: 'Enterprise', pricePerMonth: 'individuell', maxParticipants: 1000, features: [
                    '2 GB Speicherplatz für Dateien',
                    'Aufzeichnung',
                    'Speicherplatz für 10 Stunden Aufzeichnungen',
                    'Bildschirmkontrolle',
                    'Streaming auf Facebook oder YouTube',
                    'Einrichtung von Kostenpflichtigen Webinaren über PayPal',
                    'Kostenpflichtige Add-Ons',
                    'Automatisierung: Mails, Veröffentlichung von Aufzeichnungen, Streaming',
                    'Riesige Online-Events',
                    'Zusätzliche Teilnehmerplätze',
                    'Zusätzlicher Support, Services und Betreuung'
                ]
            }
        ],
        preconditions: ``
    },
    {
        displayName: 'Mikogo',
        route: 'mikogo',
        url: 'https://www.mikogo.de/',
        maxParticipants: 25,
        minPricePerMonth: '0',
        description: 'nach Vereinbarung auch bis zu 50 Teilnehmer möglich',
        functions: [
            'Rolle des Präsentators übertragen',
            'Bildschirmfreigabe und -fernsteuerung',
            'Audiokonferenzen',
            'Sitzungsplaner',
            'Aufzeichnung',
            'Whiteboard',
            'Dateiübertragung',
            'Chat'
        ],
        color: '#607ebb',
        startGuide: [
            'auf die <a href="https://www.mikogo.de/download/">Installationsseite</a> gehen und den Schritten folgen'
        ],
        packages: [
            {
                displayName: 'Kostenlos (nur für Privatnutzer)', pricePerMonth: 'kostenlos', maxParticipants: 2, features: []
            },
            {
                displayName: 'Standard', pricePerMonth: '12 €', maxParticipants: 2, features: []
            },
            {
                displayName: 'Professional', pricePerMonth: '15 €', maxParticipants: 25, features: []
            },
            {
                displayName: 'Team', pricePerMonth: '45 €', maxParticipants: 25, features: [
                    'mehrere Konferenzen gleichzeitig'
                ]
            }
        ],
        preconditions: ``
    },
    {
        displayName: 'edudip',
        route: 'edudip',
        url: 'https://www.edudip.com/de',
        maxParticipants: 1000,
        minPricePerMonth: '34',
        description: 'Preise varieren nach Art des Abonnements. Hier die Preise für das 24-Monate-Abo.',
        functions: [
            'Unbegrenzte Dauer',
            'Aufzeichnungen',
            'Browserbasiert',
            'Benutzermanagement',
            'Anpassbare Landingpage',
            'Dashboard',
            'Automatisierte E-Mails',
            'Terminverwaltung',
            'Anbindung an Newsletter-Dienste'
        ],
        color: '#d9381b',
        startGuide: [
            '<a href="https://www.edudip.com/de/registrieren?ref=next-btn-menu">hier</a> kostenlose Testphase starten oder',
            '<a href="https://www.edudip.com/de/preise">hier</a> kaufen'
        ],
        packages: [
            {
                displayName: 'Next 30', pricePerMonth: '34 €', maxParticipants: 30, features: []
            },
            {
                displayName: 'Next 100', pricePerMonth: '69 €', maxParticipants: 100, features: [
                    '3 Co-Moderatoren',
                    'Moderatoren- und Teamverwaltung',
                    'Telefoneinwahl'
                ]
            },
            {
                displayName: 'Next 500', pricePerMonth: '139 €', maxParticipants: 500, features: [
                    '3 Co-Moderatoren',
                    'Moderatoren- und Teamverwaltung',
                    'Telefoneinwahl',
                    'Berechtigungs- und Rollenverwaltung',
                    'Konferenzraum mit individuellem Logo',
                    'Erweiterte Statistiken',
                    'API-Zugang'
                ]
            },
            {
                displayName: 'Next 1000', pricePerMonth: '244 €', maxParticipants: 1000, features: [
                    '3 Co-Moderatoren',
                    'Moderatoren- und Teamverwaltung',
                    'Telefoneinwahl',
                    'Berechtigungs- und Rollenverwaltung',
                    'Konferenzraum mit individuellem Logo',
                    'Erweiterte Statistiken',
                    'API-Zugang'
                ]
            }
        ],
        preconditions: ``
    },
    {
        displayName: 'FastViewer',
        route: 'fast-viewer',
        url: 'https://fastviewer.com/de/',
        maxParticipants: 100,
        minPricePerMonth: '0',
        description: '',
        functions: [
            'Chat',
            'Telefonkonferenzen',
            'Einladung per E-Mail',
            'Interaktives Whiteboard',
            'Sicherer Dateitransfer',
            'Moderatorenauswahl und Rechtevergabe',
            'Teilnahme via Browser über den WebClient',
            'individuelle Anpassung (Funktionen, Logo, uvm.)',
            'Aufzeichnung'
        ],
        color: '#fb6d00',
        startGuide: [
            '<a href="https://fastviewer.com/demo/FastViewer_QuickStart-Guide-Instant-Meeting.pdf">von FastViewer bereitgestellter Quick Start Guide</a>'
        ],
        packages: [],
        preconditions: ``
    },
    {
        displayName: 'GoMeetNow',
        route: 'go-meet-now',
        url: 'https://www.gomeetnow.com/web-conferencing/index.html',
        maxParticipants: 100,
        minPricePerMonth: '0',
        description: '',
        functions: [
            'Bildschirmfreigabe',
            'Bildschirmkontrolle',
            'Chat',
            'Outlook/Gmail/Yahoo Integration',
            'Whiteboard',
            'Abstimmungen',
            'Aufzeichnungen',
            'Dateienfreigabe'
        ],
        color: '#60b135',
        startGuide: [
            '<a href="https://www.gomeetnow.com/aspx/UserObject/Registration.aspx?redirect=Y&mode=try">hier</a> registrieren',
            'einloggen und Meeting hosten oder beitreten'
        ],
        packages: [
            {
                displayName: 'Basic Free', pricePerMonth: 'kostenlos', maxParticipants: 100, features: [
                    'max. 40 Minuten Konferenzdauer'
                ]
            },
            {
                displayName: 'Premium',
                pricePerMonth: 'Abhängig von der Teilnehmeranzahl',
                maxParticipants: 100,
                features: [
                    'unbegrenzte Konferenzdauer'
                ]
            },
        ],
        preconditions: ``
    },
    {
        displayName: 'GatherPlace',
        route: 'gather-place',
        url: 'https://www.gatherplace.com/',
        maxParticipants: 2000,
        minPricePerMonth: '26.70',
        description: 'sehr individuelle Preise, je nach Bedürfnissen',
        functions: [
            'Bildschirmfreigabe',
            'Aufzeichnung',
            'Einladung in eigene Webseite integrieren',
            'Chat',
            'Konferenz sperren'
        ],
        color: '#1c7ac6',
        startGuide: [
            'auf die <a href="https://www.gatherplace.com/download">Installationsseite</a> gehen, Download auswählen und den Schritten folgen'
        ],
        packages: [],
        preconditions: ``
    },
    {
        displayName: 'eyeson',
        route: 'eyeson',
        url: 'https://www.eyeson.com',
        maxParticipants: 100,
        minPricePerMonth: '9',
        description: 'ohne Premium Add-On maximal 25 Teilnehmer',
        functions: [
            '10 Meetingräume',
            'Unlimitierte Meetingzeit',
            'Unlimitierte Anzahl an Meetings',
            'Permanente Meetingraum-Links',
            'Einladen per QuickJoin Link',
            'Keine Vorinstallation',
            'Bildschirmfreigabe',
            'Audiokonferenzen',
            'Dark Mode',
            'Chat',
            'Ticket Support',
            'Räume sperren'
        ],
        color: '#7b1240',
        startGuide: [
            '<a href="https://appsumo.com/eyeson/#appsumo-plans">hier</a> Plan auswählen und kaufen'
        ],
        packages: [
            {
                displayName: 'Basic', pricePerMonth: 'ab $9', maxParticipants: 100, features: [
                    'alle Premium Add-Ons inklusive',
                    'Aufzeichnung',
                    'Unlimitierter Cloud Speicher',
                    'Livestream zu Facebook Live, Vimeo, Twitch, Twitter, Restream und YouTube',
                    'Integration in Slack, Dropbox und Trello'
                ]
            },
            {
                displayName: 'Corporate', pricePerMonth: 'individuell', maxParticipants: 100, features: [
                    'ausgewählte Premium Add-Ons',
                    'Cloud Anbieter wählbar',
                    'eigener Support Manager'
                ]
            }
        ],
        preconditions: ``
    },
    {
        displayName: 'VSee',
        route: 'v-see',
        url: 'https://vsee.com/',
        maxParticipants: 32,
        minPricePerMonth: '45',
        description: 'nicht mehr als 6 Teilnehmer pro Meeting empfohlen',
        functions: [
            'Unlimitierte Videokonferenzen',
            'Chat',
            'individuelle Subdomain',
            'keine Registrierung erforderlich',
            'Dateienfreigabe',
            'Online Tutorial Videos und Anleitungen'
        ],
        color: '#689F38',
        startGuide: [
            '<a href="https://vsee.com/pricing/">hier</a> kaufen'
        ],
        packages: [
            {
                displayName: 'Basic', pricePerMonth: '49 €', maxParticipants: 32, features: []
            },
            {
                displayName: 'Enterprise', pricePerMonth: 'individuell', maxParticipants: 32, features: [
                    'Covid19 Hotline',
                    'Branding',
                    'Live Support'
                ]
            }
        ],
        preconditions: ``
    }
]

export {tools};