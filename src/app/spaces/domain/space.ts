/**
 * SpaceAPI 0.13
 */
export interface Space {
    /**
     * The version of SpaceAPI your endpoint uses
     */
    api: API;
    /**
     * Specifies options about caching of your SpaceAPI endpoint. Use this if you want to avoid
     * hundreds/thousands of application instances crawling your status.
     */
    cache?: Cache;
    /**
     * URL(s) of webcams in your space
     */
    cam?: string[];
    /**
     * Contact information about your space. You must define at least one which is in the list
     * of allowed values of the issue_report_channels field.
     */
    contact: Contact;
    /**
     * Events which happened recently in your space and which could be interesting to the
     * public, like 'User X has entered/triggered/did something at timestamp Z'
     */
    events?: Event[];
    /**
     * Feeds where users can get updates of your space
     */
    feeds?: Feeds;
    /**
     * This array defines all communication channels where you want to get automated issue
     * reports about your SpaceAPI endpoint from the revalidator. This field is meant for
     * internal usage only and it should never be consumed by any app. At least one channel must
     * be defined. Please consider that when using <samp>ml</samp> the mailing list moderator
     * has to moderate incoming emails or add the sender email to the subscribers. If you don't
     * break your SpaceAPI implementation you won't get any notifications ;-)
     */
    issue_report_channels: IssueReportChannel[];
    /**
     * Position data such as a postal address or geographic coordinates
     */
    location: Location;
    /**
     * URL to your space logo
     */
    logo: string;
    /**
     * Your project sites (links to GitHub, wikis or wherever your projects are hosted)
     */
    projects?: string[];
    /**
     * A list of radio shows that your hackerspace might broadcast.
     */
    radio_show?: RadioShow[];
    /**
     * Data of various sensors in your space (e.g. temperature, humidity, amount of Club-Mate
     * left, …). The only canonical property is the <em>temp</em> property, additional sensor
     * types may be defined by you. In this case, you are requested to share your definition for
     * inclusion in this specification.
     */
    sensors?: Sensors;
    /**
     * The name of your space
     */
    space: string;
    /**
     * A flag indicating if the hackerspace uses SpaceFED, a federated login scheme so that
     * visiting hackers can use the space WiFi with their home space credentials.
     */
    spacefed?: Spacefed;
    /**
     * A collection of status-related data: actual open/closed status, icons, last change
     * timestamp etc.
     */
    state: State;
    /**
     * A mapping of stream types to stream URLs. If you use other stream types make a <a
     * href="https://github.com/spaceapi/schema/pulls" target="_blank">pull request</a> or
     * prefix yours with <samp>ext_</samp>.
     */
    stream?: Stream;
    /**
     * URL to your space website
     */
    url: string;
  }
  
  /**
   * The version of SpaceAPI your endpoint uses
   */
  export enum API {
    The013 = "0.13",
  }
  
  /**
   * Specifies options about caching of your SpaceAPI endpoint. Use this if you want to avoid
   * hundreds/thousands of application instances crawling your status.
   */
  export interface Cache {
    /**
     * Cache update cycle. This field must match the basic regular expression
     * <code>^[mhd]\.[0-9]{2}$</code>, where the first field specifies a unit of time
     * (<code>m</code> for 1 minute, <code>h</code> for 1 hour, <code>d</code> for 1 day), and
     * the second field specifies how many of this unit should be skipped between updates. For
     * example, <samp>m.10</samp> means one updates every 10 minutes, <samp>h.03</samp> means
     * one update every 3 hours, and <samp>d.01</samp> means one update every day.
     */
    schedule: Schedule;
  }
  
  /**
   * Cache update cycle. This field must match the basic regular expression
   * <code>^[mhd]\.[0-9]{2}$</code>, where the first field specifies a unit of time
   * (<code>m</code> for 1 minute, <code>h</code> for 1 hour, <code>d</code> for 1 day), and
   * the second field specifies how many of this unit should be skipped between updates. For
   * example, <samp>m.10</samp> means one updates every 10 minutes, <samp>h.03</samp> means
   * one update every 3 hours, and <samp>d.01</samp> means one update every day.
   */
  export enum Schedule {
    D01 = "d.01",
    H01 = "h.01",
    H02 = "h.02",
    H04 = "h.04",
    H08 = "h.08",
    H12 = "h.12",
    M02 = "m.02",
    M05 = "m.05",
    M10 = "m.10",
    M15 = "m.15",
    M30 = "m.30",
  }
  
  /**
   * Contact information about your space. You must define at least one which is in the list
   * of allowed values of the issue_report_channels field.
   */
  export interface Contact {
    /**
     * E-mail address for contacting your space. If this is a mailing list consider to use the
     * contact/ml field.
     */
    email?: string;
    /**
     * Facebook account URL.
     */
    facebook?: string;
    /**
     * Foursquare ID, in the form <samp>4d8a9114d85f3704eab301dc</samp>.
     */
    foursquare?: string;
    /**
     * Google services.
     */
    google?: Google;
    /**
     * Identi.ca or StatusNet account, in the form <samp>yourspace@example.org</samp>
     */
    identica?: string;
    /**
     * URL of the IRC channel, in the form <samp>irc://example.org/#channelname</samp>
     */
    irc?: string;
    /**
     * A separate email address for issue reports (see the <em>issue_report_channels</em>
     * field). This value can be Base64-encoded.
     */
    issue_mail?: string;
    /**
     * A public Jabber/XMPP multi-user chatroom in the form
     * <samp>chatroom@conference.example.net</samp>
     */
    jabber?: string;
    /**
     * Persons who carry a key and are able to open the space upon request. One of the fields
     * irc_nick, phone, email or twitter must be specified.
     */
    keymasters?: Keymaster[];
    /**
     * The e-mail address of your mailing list. If you use Google Groups then the e-mail looks
     * like <samp>your-group@googlegroups.com</samp>.
     */
    ml?: string;
    /**
     * Phone number, including country code with a leading plus sign. Example: <samp>+1 800 555
     * 4567</samp>
     */
    phone?: string;
    /**
     * URI for Voice-over-IP via SIP. Example: <samp>sip:yourspace@sip.example.org</samp>
     */
    sip?: string;
    /**
     * Twitter handle, with leading @
     */
    twitter?: string;
  }
  
  /**
   * Google services.
   */
  export interface Google {
    /**
     * Google plus URL.
     */
    plus?: string;
  }
  
  export interface Keymaster {
    /**
     * Email address which can be base64 encoded.
     */
    email?: string;
    /**
     * Contact the person with this nickname directly in irc if available. The irc channel to be
     * used is defined in the contact/irc field.
     */
    irc_nick?: string;
    /**
     * Real name
     */
    name?: string;
    /**
     * Example: <samp>['+1 800 555 4567','+1 800 555 4544']</samp>
     */
    phone?: string;
    /**
     * Twitter username with leading <samp>@</samp>.
     */
    twitter?: string;
  }
  
  export interface Event {
    /**
     * A custom text field to give more information about the event
     */
    extra?: string;
    /**
     * Name or other identity of the subject (e.g. <samp>J. Random Hacker</samp>,
     * <samp>fridge</samp>, <samp>3D printer</samp>, …)
     */
    name: string;
    /**
     * Unix timestamp when the event occurred
     */
    timestamp: number;
    /**
     * Action (e.g. <samp>check-in</samp>, <samp>check-out</samp>, <samp>finish-print</samp>,
     * …). Define your own actions and use them consistently, canonical actions are not (yet)
     * specified
     */
    type: string;
  }
  
  /**
   * Feeds where users can get updates of your space
   */
  export interface Feeds {
    blog?: Blog;
    calendar?: Calendar;
    flickr?: Flickr;
    wiki?: Wiki;
  }
  
  export interface Blog {
    /**
     * Type of the feed, for example <samp>rss</samp>, <samp>atom</atom>, <samp>ical</samp>
     */
    type?: string;
    /**
     * Feed URL
     */
    url: string;
  }
  
  export interface Calendar {
    /**
     * Type of the feed, for example <samp>rss</samp>, <samp>atom</atom>, <samp>ical</samp>
     */
    type?: string;
    /**
     * Feed URL
     */
    url: string;
  }
  
  export interface Flickr {
    /**
     * Type of the feed, for example <samp>rss</samp>, <samp>atom</atom>, <samp>ical</samp>
     */
    type?: string;
    /**
     * Feed URL
     */
    url: string;
  }
  
  export interface Wiki {
    /**
     * Type of the feed, for example <samp>rss</samp>, <samp>atom</atom>, <samp>ical</samp>
     */
    type?: string;
    /**
     * Feed URL
     */
    url: string;
  }
  
  export enum IssueReportChannel {
    Email = "email",
    IssueMail = "issue_mail",
    Ml = "ml",
    Twitter = "twitter",
  }
  
  /**
   * Position data such as a postal address or geographic coordinates
   */
  export interface Location {
    /**
     * The postal address of your space (street, block, housenumber, zip code, city, whatever
     * you usually need in your country, and the country itself).<br>Examples: <ul><li>Netzladen
     * e.V., Breite Straße 74, 53111 Bonn, Germany</li></ul>
     */
    address?: string;
    /**
     * Latitude of your space location, in degree with decimal places. Use positive values for
     * locations north of the equator, negative values for locations south of equator.
     */
    lat: number;
    /**
     * Longitude of your space location, in degree with decimal places. Use positive values for
     * locations east of Greenwich, and negative values for locations west of Greenwich.
     */
    lon: number;
  }
  
  export interface RadioShow {
    /**
     * Specify the end time by using the <a href="http://en.wikipedia.org/wiki/ISO_8601"
     * target="_blank">ISO 8601</a> standard. This encodes the time as follows:
     * <br><br><ul><li>Combined date and time in UTC: 2013-06-10T10:00Z</li><li>Combined date
     * and time in localtime with the timezone offset: 2013-06-10T12:00+02:00</li><li>Combined
     * date and time in localtime with the timezone offset: 2013-06-10T07:00-03:00</li></ul> The
     * examples refer all to the same time.
     */
    end: string;
    /**
     * The name of the radio show.
     */
    name: string;
    /**
     * Specify the start time by using the <a href="http://en.wikipedia.org/wiki/ISO_8601"
     * target="_blank">ISO 8601</a> standard. This encodes the time as follows:
     * <br><br><ul><li>Combined date and time in UTC: 2013-06-10T10:00Z</li><li>Combined date
     * and time in localtime with the timezone offset: 2013-06-10T12:00+02:00</li><li>Combined
     * date and time in localtime with the timezone offset: 2013-06-10T07:00-03:00</li></ul> The
     * examples refer all to the same time.
     */
    start: string;
    /**
     * The stream encoder.
     */
    type: RadioShowType;
    /**
     * The stream URL which must end in a filename or a semicolon such as
     * <br><ul><li>http://signal.hackerspaces.org:8090/signal.mp3</li><li>http://85.214.64.213:8060/;</ul>
     */
    url: string;
  }
  
  /**
   * The stream encoder.
   */
  export enum RadioShowType {
    Mp3 = "mp3",
    Ogg = "ogg",
  }
  
  /**
   * Data of various sensors in your space (e.g. temperature, humidity, amount of Club-Mate
   * left, …). The only canonical property is the <em>temp</em> property, additional sensor
   * types may be defined by you. In this case, you are requested to share your definition for
   * inclusion in this specification.
   */
  export interface Sensors {
    /**
     * How rich is your hackerspace?
     */
    account_balance?: AccountBalance[];
    /**
     * Barometer sensor
     */
    barometer?: Barometer[];
    /**
     * How much Mate and beer is in your fridge?
     */
    beverage_supply?: BeverageSupply[];
    /**
     * Sensor type to indicate if a certain door is locked.
     */
    door_locked?: DoorLocked[];
    /**
     * Humidity sensor
     */
    humidity?: Humidity[];
    /**
     * This sensor type is to specify the currently active  ethernet or wireless network
     * devices. You can create different instances for each network type.
     */
    network_connections?: NetworkConnection[];
    /**
     * Specify the number of people that are currently in your space. Optionally you can define
     * a list of names.
     */
    people_now_present?: PeopleNowPresent[];
    /**
     * The power consumption of a specific device or of your whole space.
     */
    power_consumption?: PowerConsumption[];
    /**
     * Compound radiation sensor. Check this <a rel="nofollow"
     * href="https://sites.google.com/site/diygeigercounter/gm-tubes-supported"
     * target="_blank">resource</a>.
     */
    radiation?: Radiation;
    /**
     * Temperature sensor. To convert from one unit of temperature to another consider <a
     * href="http://en.wikipedia.org/wiki/Temperature_conversion_formulas"
     * target="_blank">Wikipedia</a>.
     */
    temperature?: Temperature[];
    /**
     * Specify the number of space members.
     */
    total_member_count?: TotalMemberCount[];
    /**
     * Your wind sensor.
     */
    wind?: Wind[];
  }
  
  export interface AccountBalance {
    /**
     * An extra field that you can use to attach some additional information to this sensor
     * instance.
     */
    description?: string;
    /**
     * If you have more than one account you can use this field to specify where it is.
     */
    location?: string;
    /**
     * Give your sensor instance a name.
     */
    name?: string;
    /**
     * What's the currency? Please use the ones provided, in the next version you can use
     * currency definitions according to <a href="https://en.wikipedia.org/wiki/ISO_4217"
     * target="_blank">ISO 4217</a>
     */
    unit: AccountBalanceUnit;
    /**
     * How much?
     */
    value: number;
  }
  
  /**
   * What's the currency? Please use the ones provided, in the next version you can use
   * currency definitions according to <a href="https://en.wikipedia.org/wiki/ISO_4217"
   * target="_blank">ISO 4217</a>
   */
  export enum AccountBalanceUnit {
    Btc = "BTC",
    Eur = "EUR",
    Gbp = "GBP",
    Usd = "USD",
  }
  
  export interface Barometer {
    /**
     * An extra field that you can use to attach some additional information to this sensor
     * instance.
     */
    description?: string;
    /**
     * The location of your sensor such as <samp>Outside</samp>, <samp>Inside</samp>,
     * <samp>Ceiling</samp>, <samp>Roof</samp> or <samp>Room 1</samp>.
     */
    location: string;
    /**
     * This field is an additional field to give your sensor a name. This can be useful if you
     * have multiple sensors in the same location.
     */
    name?: string;
    /**
     * The unit of the sensor value. You should always define the unit though if the sensor is a
     * flag of a boolean type then you can of course omit it.
     */
    unit: BarometerUnit;
    /**
     * The sensor value
     */
    value: number;
  }
  
  /**
   * The unit of the sensor value. You should always define the unit though if the sensor is a
   * flag of a boolean type then you can of course omit it.
   */
  export enum BarometerUnit {
    HPA = "hPA",
  }
  
  export interface BeverageSupply {
    /**
     * An extra field that you can use to attach some additional information to this sensor
     * instance.
     */
    description?: string;
    /**
     * The location of your sensor such as <samp>Room 1</samp> or <samp>Room 2</samp> or
     * <samp>Room 3</samp>, <samp>Roof</samp> or <samp>Room 1</samp>.
     */
    location?: string;
    /**
     * This field is an additional field to give your sensor a name. This can be useful if you
     * have multiple sensors in the same location.
     */
    name?: string;
    /**
     * The unit, either <samp>btl</samp> for bottles or <samp>crt</samp> for crates.
     */
    unit: BeverageSupplyUnit;
    /**
     * The sensor value
     */
    value: number;
  }
  
  /**
   * The unit, either <samp>btl</samp> for bottles or <samp>crt</samp> for crates.
   */
  export enum BeverageSupplyUnit {
    Btl = "btl",
    CRT = "crt",
  }
  
  export interface DoorLocked {
    /**
     * An extra field that you can use to attach some additional information to this sensor
     * instance.
     */
    description?: string;
    /**
     * The location of your sensor such as <samp>front door</samp>, <samp>chill room</samp> or
     * <samp>lab</samp>.
     */
    location: string;
    /**
     * This field is an additional field to give your sensor a name. This can be useful if you
     * have multiple sensors in the same location.
     */
    name?: string;
    /**
     * The sensor value
     */
    value: boolean;
  }
  
  export interface Humidity {
    /**
     * An extra field that you can use to attach some additional information to this sensor
     * instance.
     */
    description?: string;
    /**
     * The location of your sensor such as <samp>Outside</samp>, <samp>Inside</samp>,
     * <samp>Ceiling</samp>, <samp>Roof</samp> or <samp>Room 1</samp>.
     */
    location: string;
    /**
     * This field is an additional field to give your sensor a name. This can be useful if you
     * have multiple sensors in the same location.
     */
    name?: string;
    /**
     * The unit of the sensor value. You should always define the unit though if the sensor is a
     * flag of a boolean type then you can of course omit it.
     */
    unit: HumidityUnit;
    /**
     * The sensor value
     */
    value: number;
  }
  
  /**
   * The unit of the sensor value. You should always define the unit though if the sensor is a
   * flag of a boolean type then you can of course omit it.
   */
  export enum HumidityUnit {
    Empty = "%",
  }
  
  export interface NetworkConnection {
    /**
     * An extra field that you can use to attach some additional information to this sensor
     * instance.
     */
    description?: string;
    /**
     * The location of your sensor such as <samp>Outside</samp>, <samp>Inside</samp>,
     * <samp>Ceiling</samp>, <samp>Roof</samp> or <samp>Room 1</samp>.
     */
    location?: string;
    /**
     * The machines that are currently connected with the network.
     */
    machines?: Machine[];
    /**
     * This field is an additional field to give your sensor a name. This can be useful if you
     * have multiple sensors in the same location.
     */
    name?: string;
    /**
     * This field is optional but you can use it to the network type such as <samp>wifi</samp>
     * or <samp>cable</samp>. You can even expose the number of <a
     * href="https://spacefed.net/wiki/index.php/Spacenet"
     * target="_blank">spacenet</a>-authenticated connections.
     */
    type?: NetworkConnectionType;
    /**
     * The amount of network connections.
     */
    value: number;
  }
  
  export interface Machine {
    /**
     * The machine's MAC address of the format <samp>D3:3A:DB:EE:FF:00</samp>.
     */
    mac: string;
    /**
     * The machine name.
     */
    name?: string;
  }
  
  /**
   * This field is optional but you can use it to the network type such as <samp>wifi</samp>
   * or <samp>cable</samp>. You can even expose the number of <a
   * href="https://spacefed.net/wiki/index.php/Spacenet"
   * target="_blank">spacenet</a>-authenticated connections.
   */
  export enum NetworkConnectionType {
    Cable = "cable",
    Spacenet = "spacenet",
    Wifi = "wifi",
  }
  
  export interface PeopleNowPresent {
    /**
     * An extra field that you can use to attach some additional information to this sensor
     * instance.
     */
    description?: string;
    /**
     * If you use multiple sensor instances for different rooms, use this field to indicate the
     * location.
     */
    location?: string;
    /**
     * Give this sensor a name if necessary at all. Use the location field for the rooms. This
     * field is not intended to be used for names of hackerspace members. Use the field 'names'
     * instead.
     */
    name?: string;
    /**
     * List of hackerspace members that are currently occupying the space.
     */
    names?: string[];
    /**
     * The amount of present people.
     */
    value: number;
  }
  
  export interface PowerConsumption {
    /**
     * An extra field that you can use to attach some additional information to this sensor
     * instance.
     */
    description?: string;
    /**
     * The location of your sensor such as <samp>Outside</samp>, <samp>Inside</samp>,
     * <samp>Ceiling</samp>, <samp>Roof</samp> or <samp>Room 1</samp>.
     */
    location: string;
    /**
     * This field is an additional field to give your sensor a name. This can be useful if you
     * have multiple sensors in the same location.
     */
    name?: string;
    /**
     * The unit of the sensor value. You should always define the unit though if the sensor is a
     * flag of a boolean type then you can of course omit it.
     */
    unit: PowerConsumptionUnit;
    /**
     * The sensor value
     */
    value: number;
  }
  
  /**
   * The unit of the sensor value. You should always define the unit though if the sensor is a
   * flag of a boolean type then you can of course omit it.
   */
  export enum PowerConsumptionUnit {
    MW = "mW",
    Va = "VA",
    W = "W",
  }
  
  /**
   * Compound radiation sensor. Check this <a rel="nofollow"
   * href="https://sites.google.com/site/diygeigercounter/gm-tubes-supported"
   * target="_blank">resource</a>.
   */
  export interface Radiation {
    /**
     * An alpha sensor
     */
    alpha?: Alpha[];
    /**
     * A beta sensor
     */
    beta?: Beta[];
    /**
     * A sensor which cannot filter beta and gamma radiation separately.
     */
    beta_gamma?: BetaGamma[];
    /**
     * A gamma sensor
     */
    gamma?: Gamma[];
  }
  
  export interface Alpha {
    /**
     * The conversion from the <em>cpm</em> unit to another unit hardly depends on your tube
     * type. See the description of the value field to see how to use the conversion factor.
     * <strong>Note:</strong> only trust your manufacturer if it comes to the actual factor
     * value. The internet seems <a rel="nofollow"
     * href="http://sapporohibaku.wordpress.com/2011/10/15/conversion-factor/"
     * target="_blank">full of wrong copy & pastes</a>, don't even trust your neighbour
     * hackerspace. If in doubt ask the tube manufacturer.
     */
    conversion_factor?: number;
    /**
     * The dead time in µs. See the description of the value field to see how to use the dead
     * time.
     */
    dead_time?: number;
    /**
     * An extra field that you can use to attach some additional information to this sensor
     * instance.
     */
    description?: string;
    /**
     * The location of your sensor such as <samp>Outside</samp>, <samp>Inside</samp>,
     * <samp>Ceiling</samp>, <samp>Roof</samp> or <samp>Room 1</samp>.
     */
    location?: string;
    /**
     * This field is an additional field to give your sensor a name. This can be useful if you
     * have multiple sensors in the same location.
     */
    name?: string;
    /**
     * Choose the appropriate unit for your radiation sensor instance.
     */
    unit: AlphaUnit;
    /**
     * Observed counts per minute (ocpm) or actual radiation value. If the value are the
     * observed counts then the dead_time and conversion_factor fields must be defined as well.
     * CPM formula: <div>cpm = ocpm ( 1 + 1 / (1 - ocpm x dead_time) )</div> Conversion formula:
     * <div>µSv/h = cpm x conversion_factor</div>
     */
    value: number;
  }
  
  /**
   * Choose the appropriate unit for your radiation sensor instance.
   */
  export enum AlphaUnit {
    Cpm = "cpm",
    MSvA = "mSv/a",
    RH = "r/h",
    ΜSvA = "µSv/a",
    ΜSvH = "µSv/h",
  }
  
  export interface Beta {
    /**
     * The conversion from the <em>cpm</em> unit to another unit hardly depends on your tube
     * type. See the description of the value field to see how to use the conversion factor.
     * <strong>Note:</strong> only trust your manufacturer if it comes to the actual factor
     * value. The internet seems <a rel="nofollow"
     * href="http://sapporohibaku.wordpress.com/2011/10/15/conversion-factor/"
     * target="_blank">full of wrong copy & pastes</a>, don't even trust your neighbour
     * hackerspace. If in doubt ask the tube manufacturer.
     */
    conversion_factor?: number;
    /**
     * The dead time in µs. See the description of the value field to see how to use the dead
     * time.
     */
    dead_time?: number;
    /**
     * An extra field that you can use to attach some additional information to this sensor
     * instance.
     */
    description?: string;
    /**
     * The location of your sensor such as <samp>Outside</samp>, <samp>Inside</samp>,
     * <samp>Ceiling</samp>, <samp>Roof</samp> or <samp>Room 1</samp>.
     */
    location?: string;
    /**
     * This field is an additional field to give your sensor a name. This can be useful if you
     * have multiple sensors in the same location.
     */
    name?: string;
    /**
     * Choose the appropriate unit for your radiation sensor instance.
     */
    unit: AlphaUnit;
    /**
     * Observed counts per minute (ocpm) or actual radiation value. If the value are the
     * observed counts then the dead_time and conversion_factor fields must be defined as well.
     * CPM formula: <div>cpm = ocpm ( 1 + 1 / (1 - ocpm x dead_time) )</div> Conversion formula:
     * <div>µSv/h = cpm x conversion_factor</div>
     */
    value: number;
  }
  
  export interface BetaGamma {
    /**
     * The conversion from the <em>cpm</em> unit to another unit hardly depends on your tube
     * type. See the description of the value field to see how to use the conversion factor.
     * <strong>Note:</strong> only trust your manufacturer if it comes to the actual factor
     * value. The internet seems <a rel="nofollow"
     * href="http://sapporohibaku.wordpress.com/2011/10/15/conversion-factor/"
     * target="_blank">full of wrong copy & pastes</a>, don't even trust your neighbour
     * hackerspace. If in doubt ask the tube manufacturer.
     */
    conversion_factor?: number;
    /**
     * The dead time in µs. See the description of the value field to see how to use the dead
     * time.
     */
    dead_time?: number;
    /**
     * An extra field that you can use to attach some additional information to this sensor
     * instance.
     */
    description?: string;
    /**
     * The location of your sensor such as <samp>Outside</samp>, <samp>Inside</samp>,
     * <samp>Ceiling</samp>, <samp>Roof</samp> or <samp>Room 1</samp>.
     */
    location?: string;
    /**
     * This field is an additional field to give your sensor a name. This can be useful if you
     * have multiple sensors in the same location.
     */
    name?: string;
    /**
     * Choose the appropriate unit for your radiation sensor instance.
     */
    unit: AlphaUnit;
    /**
     * Observed counts per minute (ocpm) or actual radiation value. If the value are the
     * observed counts then the dead_time and conversion_factor fields must be defined as well.
     * CPM formula: <div>cpm = ocpm ( 1 + 1 / (1 - ocpm x dead_time) )</div> Conversion formula:
     * <div>µSv/h = cpm x conversion_factor</div>
     */
    value: number;
  }
  
  export interface Gamma {
    /**
     * The conversion from the <em>cpm</em> unit to another unit hardly depends on your tube
     * type. See the description of the value field to see how to use the conversion factor.
     * <strong>Note:</strong> only trust your manufacturer if it comes to the actual factor
     * value. The internet seems <a rel="nofollow"
     * href="http://sapporohibaku.wordpress.com/2011/10/15/conversion-factor/"
     * target="_blank">full of wrong copy & pastes</a>, don't even trust your neighbour
     * hackerspace. If in doubt ask the tube manufacturer.
     */
    conversion_factor?: number;
    /**
     * The dead time in µs. See the description of the value field to see how to use the dead
     * time.
     */
    dead_time?: number;
    /**
     * An extra field that you can use to attach some additional information to this sensor
     * instance.
     */
    description?: string;
    /**
     * The location of your sensor such as <samp>Outside</samp>, <samp>Inside</samp>,
     * <samp>Ceiling</samp>, <samp>Roof</samp> or <samp>Room 1</samp>.
     */
    location?: string;
    /**
     * This field is an additional field to give your sensor a name. This can be useful if you
     * have multiple sensors in the same location.
     */
    name?: string;
    /**
     * Choose the appropriate unit for your radiation sensor instance.
     */
    unit: AlphaUnit;
    /**
     * Observed counts per minute (ocpm) or actual radiation value. If the value are the
     * observed counts then the dead_time and conversion_factor fields must be defined as well.
     * CPM formula: <div>cpm = ocpm ( 1 + 1 / (1 - ocpm x dead_time) )</div> Conversion formula:
     * <div>µSv/h = cpm x conversion_factor</div>
     */
    value: number;
  }
  
  export interface Temperature {
    /**
     * An extra field that you can use to attach some additional information to this sensor
     * instance.
     */
    description?: string;
    /**
     * The location of your sensor such as <samp>Outside</samp>, <samp>Inside</samp>,
     * <samp>Ceiling</samp>, <samp>Roof</samp> or <samp>Room 1</samp>.
     */
    location: string;
    /**
     * This field is an additional field to give your sensor a name. This can be useful if you
     * have multiple sensors in the same location.
     */
    name?: string;
    /**
     * The unit of the sensor value.
     */
    unit: TemperatureUnit;
    /**
     * The sensor value
     */
    value: number;
  }
  
  /**
   * The unit of the sensor value.
   */
  export enum TemperatureUnit {
    C = "°C",
    De = "°De",
    F = "°F",
    K = "K",
    N = "°N",
    R = "°R",
    Ré = "°Ré",
    Rø = "°Rø",
  }
  
  export interface TotalMemberCount {
    /**
     * An extra field that you can use to attach some additional information to this sensor
     * instance.
     */
    description?: string;
    /**
     * Specify the location if your hackerspace has different departments (for whatever reason).
     * This field is for one department. Every department should have its own sensor instance.
     */
    location?: string;
    /**
     * You can use this field to specify if this sensor instance counts active or inactive
     * members.
     */
    name?: string;
    /**
     * The amount of your space members.
     */
    value: number;
  }
  
  export interface Wind {
    /**
     * An extra field that you can use to attach some additional information to this sensor
     * instance.
     */
    description?: string;
    /**
     * The location of your sensor such as <samp>Outside</samp>, <samp>Inside</samp>,
     * <samp>Ceiling</samp>, <samp>Roof</samp> or <samp>Room 1</samp>.
     */
    location: string;
    /**
     * This field is an additional field to give your sensor a name. This can be useful if you
     * have multiple sensors in the same location.
     */
    name?: string;
    properties: Properties;
  }
  
  export interface Properties {
    /**
     * The wind direction in degrees.
     */
    direction: Direction;
    /**
     * Height above mean sea level.
     */
    elevation: Elevation;
    gust: Gust;
    speed: Speed;
  }
  
  /**
   * The wind direction in degrees.
   */
  export interface Direction {
    /**
     * The unit of the sensor value. You should always define the unit though if the sensor is a
     * flag of a boolean type then you can of course omit it.
     */
    unit: DirectionUnit;
    /**
     * The sensor value
     */
    value: number;
  }
  
  /**
   * The unit of the sensor value. You should always define the unit though if the sensor is a
   * flag of a boolean type then you can of course omit it.
   */
  export enum DirectionUnit {
    Empty = "°",
  }
  
  /**
   * Height above mean sea level.
   */
  export interface Elevation {
    /**
     * The unit of the sensor value. You should always define the unit though if the sensor is a
     * flag of a boolean type then you can of course omit it.
     */
    unit: ElevationUnit;
    /**
     * The sensor value
     */
    value: number;
  }
  
  /**
   * The unit of the sensor value. You should always define the unit though if the sensor is a
   * flag of a boolean type then you can of course omit it.
   */
  export enum ElevationUnit {
    M = "m",
  }
  
  export interface Gust {
    /**
     * The unit of the sensor value. You should always define the unit though if the sensor is a
     * flag of a boolean type then you can of course omit it.
     */
    unit: GustUnit;
    /**
     * The sensor value
     */
    value: number;
  }
  
  /**
   * The unit of the sensor value. You should always define the unit though if the sensor is a
   * flag of a boolean type then you can of course omit it.
   */
  export enum GustUnit {
    KMH = "km/h",
    Kn = "kn",
    MS = "m/s",
  }
  
  export interface Speed {
    /**
     * The unit of the sensor value. You should always define the unit though if the sensor is a
     * flag of a boolean type then you can of course omit it.
     */
    unit: GustUnit;
    /**
     * The sensor value
     */
    value: number;
  }
  
  /**
   * A flag indicating if the hackerspace uses SpaceFED, a federated login scheme so that
   * visiting hackers can use the space WiFi with their home space credentials.
   */
  export interface Spacefed {
    /**
     * See the <a target="_blank"
     * href="https://spacefed.net/wiki/index.php/Category:Howto/Spacenet">wiki</a>.
     */
    spacenet: boolean;
    /**
     * See the <a target="_blank"
     * href="https://spacefed.net/wiki/index.php/Category:Howto/Spacephone">wiki</a>.
     */
    spacephone: boolean;
    /**
     * See the <a target="_blank"
     * href="https://spacefed.net/wiki/index.php/Category:Howto/Spacesaml">wiki</a>.
     */
    spacesaml: boolean;
  }
  
  /**
   * A collection of status-related data: actual open/closed status, icons, last change
   * timestamp etc.
   */
  export interface State {
    /**
     * Icons that show the status graphically
     */
    icon?: Icon;
    /**
     * The Unix timestamp when the space status changed most recently
     */
    lastchange?: number;
    /**
     * An additional free-form string, could be something like <samp>'open for public'</samp>,
     * <samp>'members only'</samp> or whatever you want it to be
     */
    message?: string;
    /**
     * A flag which indicates if the space is currently open or closed. The state 'undefined'
     * can be achieved by assigning this field the value 'null' (without the quotes). In most
     * (all?) programming languages this is evaluated to false so that no app should break
     */
    open: boolean | null;
    /**
     * The person who lastly changed the state e.g. opened or closed the space.
     */
    trigger_person?: string;
  }
  
  /**
   * Icons that show the status graphically
   */
  export interface Icon {
    /**
     * The URL to your customized space logo showing a closed space
     */
    closed: string;
    /**
     * The URL to your customized space logo showing an open space
     */
    open: string;
  }
  
  /**
   * A mapping of stream types to stream URLs. If you use other stream types make a <a
   * href="https://github.com/spaceapi/schema/pulls" target="_blank">pull request</a> or
   * prefix yours with <samp>ext_</samp>.
   */
  export interface Stream {
    /**
     * Your mpg stream URL. Example: <samp>{"mp4": "http://example.org/stream.mpg"}</samp>
     */
    m4?: string;
    /**
     * Your mjpeg stream URL. Example: <samp>{"mjpeg": "http://example.org/stream.mjpeg"}</samp>
     */
    mjpeg?: string;
    /**
     * Your ustream stream URL. Example: <samp>{"ustream":
     * "http://www.ustream.tv/channel/hackspsps"}</samp>
     */
    ustream?: string;
  }
  
  // Converts JSON strings to/from your types
  // and asserts the results of JSON.parse at runtime
  export class Convert {
    public static toSpace(json: string): Space {
      return cast(JSON.parse(json), r("Space"));
    }
  
    public static spaceToJson(value: Space): string {
      return JSON.stringify(uncast(value, r("Space")), null, 2);
    }
  }
  
  function invalidValue(typ: any, val: any): never {
    throw Error(
      `Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`
    );
  }
  
  function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
      const map: any = {};
      typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
      typ.jsonToJS = map;
    }
    return typ.jsonToJS;
  }
  
  function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
      const map: any = {};
      typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
      typ.jsToJSON = map;
    }
    return typ.jsToJSON;
  }
  
  function transform(val: any, typ: any, getProps: any): any {
    function transformPrimitive(typ: string, val: any): any {
      if (typeof typ === typeof val) return val;
      return invalidValue(typ, val);
    }
  
    function transformUnion(typs: any[], val: any): any {
      // val must validate against one typ in typs
      const l = typs.length;
      for (let i = 0; i < l; i++) {
        const typ = typs[i];
        try {
          return transform(val, typ, getProps);
        } catch (_) {}
      }
      return invalidValue(typs, val);
    }
  
    function transformEnum(cases: string[], val: any): any {
      if (cases.indexOf(val) !== -1) return val;
      return invalidValue(cases, val);
    }
  
    function transformArray(typ: any, val: any): any {
      // val must be an array with no invalid elements
      if (!Array.isArray(val)) return invalidValue("array", val);
      return val.map((el) => transform(el, typ, getProps));
    }
  
    function transformDate(val: any): any {
      if (val === null) {
        return null;
      }
      const d = new Date(val);
      if (isNaN(d.valueOf())) {
        return invalidValue("Date", val);
      }
      return d;
    }
  
    function transformObject(
      props: { [k: string]: any },
      additional: any,
      val: any
    ): any {
      if (val === null || typeof val !== "object" || Array.isArray(val)) {
        return invalidValue("object", val);
      }
      const result: any = {};
      Object.getOwnPropertyNames(props).forEach((key) => {
        const prop = props[key];
        const v = Object.prototype.hasOwnProperty.call(val, key)
          ? val[key]
          : undefined;
        result[prop.key] = transform(v, prop.typ, getProps);
      });
      Object.getOwnPropertyNames(val).forEach((key) => {
        if (!Object.prototype.hasOwnProperty.call(props, key)) {
          result[key] = transform(val[key], additional, getProps);
        }
      });
      return result;
    }
  
    if (typ === "any") return val;
    if (typ === null) {
      if (val === null) return val;
      return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
      typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
      return typ.hasOwnProperty("unionMembers")
        ? transformUnion(typ.unionMembers, val)
        : typ.hasOwnProperty("arrayItems")
        ? transformArray(typ.arrayItems, val)
        : typ.hasOwnProperty("props")
        ? transformObject(getProps(typ), typ.additional, val)
        : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
  }
  
  function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
  }
  
  function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
  }
  
  function a(typ: any) {
    return { arrayItems: typ };
  }
  
  function u(...typs: any[]) {
    return { unionMembers: typs };
  }
  
  function o(props: any[], additional: any) {
    return { props, additional };
  }
  
  function m(additional: any) {
    return { props: [], additional };
  }
  
  function r(name: string) {
    return { ref: name };
  }
  
  const typeMap: any = {
    Space: o(
      [
        { json: "api", js: "api", typ: r("API") },
        { json: "cache", js: "cache", typ: u(undefined, r("Cache")) },
        { json: "cam", js: "cam", typ: u(undefined, a("")) },
        { json: "contact", js: "contact", typ: r("Contact") },
        { json: "events", js: "events", typ: u(undefined, a(r("Event"))) },
        { json: "feeds", js: "feeds", typ: u(undefined, r("Feeds")) },
        {
          json: "issue_report_channels",
          js: "issue_report_channels",
          typ: a(r("IssueReportChannel")),
        },
        { json: "location", js: "location", typ: r("Location") },
        { json: "logo", js: "logo", typ: "" },
        { json: "projects", js: "projects", typ: u(undefined, a("")) },
        {
          json: "radio_show",
          js: "radio_show",
          typ: u(undefined, a(r("RadioShow"))),
        },
        { json: "sensors", js: "sensors", typ: u(undefined, r("Sensors")) },
        { json: "space", js: "space", typ: "" },
        { json: "spacefed", js: "spacefed", typ: u(undefined, r("Spacefed")) },
        { json: "state", js: "state", typ: r("State") },
        { json: "stream", js: "stream", typ: u(undefined, r("Stream")) },
        { json: "url", js: "url", typ: "" },
      ],
      "any"
    ),
    Cache: o([{ json: "schedule", js: "schedule", typ: r("Schedule") }], "any"),
    Contact: o(
      [
        { json: "email", js: "email", typ: u(undefined, "") },
        { json: "facebook", js: "facebook", typ: u(undefined, "") },
        { json: "foursquare", js: "foursquare", typ: u(undefined, "") },
        { json: "google", js: "google", typ: u(undefined, r("Google")) },
        { json: "identica", js: "identica", typ: u(undefined, "") },
        { json: "irc", js: "irc", typ: u(undefined, "") },
        { json: "issue_mail", js: "issue_mail", typ: u(undefined, "") },
        { json: "jabber", js: "jabber", typ: u(undefined, "") },
        {
          json: "keymasters",
          js: "keymasters",
          typ: u(undefined, a(r("Keymaster"))),
        },
        { json: "ml", js: "ml", typ: u(undefined, "") },
        { json: "phone", js: "phone", typ: u(undefined, "") },
        { json: "sip", js: "sip", typ: u(undefined, "") },
        { json: "twitter", js: "twitter", typ: u(undefined, "") },
      ],
      "any"
    ),
    Google: o([{ json: "plus", js: "plus", typ: u(undefined, "") }], "any"),
    Keymaster: o(
      [
        { json: "email", js: "email", typ: u(undefined, "") },
        { json: "irc_nick", js: "irc_nick", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "phone", js: "phone", typ: u(undefined, "") },
        { json: "twitter", js: "twitter", typ: u(undefined, "") },
      ],
      "any"
    ),
    Event: o(
      [
        { json: "extra", js: "extra", typ: u(undefined, "") },
        { json: "name", js: "name", typ: "" },
        { json: "timestamp", js: "timestamp", typ: 3.14 },
        { json: "type", js: "type", typ: "" },
      ],
      "any"
    ),
    Feeds: o(
      [
        { json: "blog", js: "blog", typ: u(undefined, r("Blog")) },
        { json: "calendar", js: "calendar", typ: u(undefined, r("Calendar")) },
        { json: "flickr", js: "flickr", typ: u(undefined, r("Flickr")) },
        { json: "wiki", js: "wiki", typ: u(undefined, r("Wiki")) },
      ],
      "any"
    ),
    Blog: o(
      [
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "url", js: "url", typ: "" },
      ],
      "any"
    ),
    Calendar: o(
      [
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "url", js: "url", typ: "" },
      ],
      "any"
    ),
    Flickr: o(
      [
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "url", js: "url", typ: "" },
      ],
      "any"
    ),
    Wiki: o(
      [
        { json: "type", js: "type", typ: u(undefined, "") },
        { json: "url", js: "url", typ: "" },
      ],
      "any"
    ),
    Location: o(
      [
        { json: "address", js: "address", typ: u(undefined, "") },
        { json: "lat", js: "lat", typ: 3.14 },
        { json: "lon", js: "lon", typ: 3.14 },
      ],
      "any"
    ),
    RadioShow: o(
      [
        { json: "end", js: "end", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "start", js: "start", typ: "" },
        { json: "type", js: "type", typ: r("RadioShowType") },
        { json: "url", js: "url", typ: "" },
      ],
      "any"
    ),
    Sensors: o(
      [
        {
          json: "account_balance",
          js: "account_balance",
          typ: u(undefined, a(r("AccountBalance"))),
        },
        {
          json: "barometer",
          js: "barometer",
          typ: u(undefined, a(r("Barometer"))),
        },
        {
          json: "beverage_supply",
          js: "beverage_supply",
          typ: u(undefined, a(r("BeverageSupply"))),
        },
        {
          json: "door_locked",
          js: "door_locked",
          typ: u(undefined, a(r("DoorLocked"))),
        },
        { json: "humidity", js: "humidity", typ: u(undefined, a(r("Humidity"))) },
        {
          json: "network_connections",
          js: "network_connections",
          typ: u(undefined, a(r("NetworkConnection"))),
        },
        {
          json: "people_now_present",
          js: "people_now_present",
          typ: u(undefined, a(r("PeopleNowPresent"))),
        },
        {
          json: "power_consumption",
          js: "power_consumption",
          typ: u(undefined, a(r("PowerConsumption"))),
        },
        { json: "radiation", js: "radiation", typ: u(undefined, r("Radiation")) },
        {
          json: "temperature",
          js: "temperature",
          typ: u(undefined, a(r("Temperature"))),
        },
        {
          json: "total_member_count",
          js: "total_member_count",
          typ: u(undefined, a(r("TotalMemberCount"))),
        },
        { json: "wind", js: "wind", typ: u(undefined, a(r("Wind"))) },
      ],
      "any"
    ),
    AccountBalance: o(
      [
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "location", js: "location", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "unit", js: "unit", typ: r("AccountBalanceUnit") },
        { json: "value", js: "value", typ: 3.14 },
      ],
      "any"
    ),
    Barometer: o(
      [
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "location", js: "location", typ: "" },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "unit", js: "unit", typ: r("BarometerUnit") },
        { json: "value", js: "value", typ: 3.14 },
      ],
      "any"
    ),
    BeverageSupply: o(
      [
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "location", js: "location", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "unit", js: "unit", typ: r("BeverageSupplyUnit") },
        { json: "value", js: "value", typ: 3.14 },
      ],
      "any"
    ),
    DoorLocked: o(
      [
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "location", js: "location", typ: "" },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "value", js: "value", typ: true },
      ],
      "any"
    ),
    Humidity: o(
      [
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "location", js: "location", typ: "" },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "unit", js: "unit", typ: r("HumidityUnit") },
        { json: "value", js: "value", typ: 3.14 },
      ],
      "any"
    ),
    NetworkConnection: o(
      [
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "location", js: "location", typ: u(undefined, "") },
        { json: "machines", js: "machines", typ: u(undefined, a(r("Machine"))) },
        { json: "name", js: "name", typ: u(undefined, "") },
        {
          json: "type",
          js: "type",
          typ: u(undefined, r("NetworkConnectionType")),
        },
        { json: "value", js: "value", typ: 3.14 },
      ],
      "any"
    ),
    Machine: o(
      [
        { json: "mac", js: "mac", typ: "" },
        { json: "name", js: "name", typ: u(undefined, "") },
      ],
      "any"
    ),
    PeopleNowPresent: o(
      [
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "location", js: "location", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "names", js: "names", typ: u(undefined, a("")) },
        { json: "value", js: "value", typ: 3.14 },
      ],
      "any"
    ),
    PowerConsumption: o(
      [
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "location", js: "location", typ: "" },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "unit", js: "unit", typ: r("PowerConsumptionUnit") },
        { json: "value", js: "value", typ: 3.14 },
      ],
      "any"
    ),
    Radiation: o(
      [
        { json: "alpha", js: "alpha", typ: u(undefined, a(r("Alpha"))) },
        { json: "beta", js: "beta", typ: u(undefined, a(r("Beta"))) },
        {
          json: "beta_gamma",
          js: "beta_gamma",
          typ: u(undefined, a(r("BetaGamma"))),
        },
        { json: "gamma", js: "gamma", typ: u(undefined, a(r("Gamma"))) },
      ],
      "any"
    ),
    Alpha: o(
      [
        {
          json: "conversion_factor",
          js: "conversion_factor",
          typ: u(undefined, 3.14),
        },
        { json: "dead_time", js: "dead_time", typ: u(undefined, 3.14) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "location", js: "location", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "unit", js: "unit", typ: r("AlphaUnit") },
        { json: "value", js: "value", typ: 3.14 },
      ],
      "any"
    ),
    Beta: o(
      [
        {
          json: "conversion_factor",
          js: "conversion_factor",
          typ: u(undefined, 3.14),
        },
        { json: "dead_time", js: "dead_time", typ: u(undefined, 3.14) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "location", js: "location", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "unit", js: "unit", typ: r("AlphaUnit") },
        { json: "value", js: "value", typ: 3.14 },
      ],
      "any"
    ),
    BetaGamma: o(
      [
        {
          json: "conversion_factor",
          js: "conversion_factor",
          typ: u(undefined, 3.14),
        },
        { json: "dead_time", js: "dead_time", typ: u(undefined, 3.14) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "location", js: "location", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "unit", js: "unit", typ: r("AlphaUnit") },
        { json: "value", js: "value", typ: 3.14 },
      ],
      "any"
    ),
    Gamma: o(
      [
        {
          json: "conversion_factor",
          js: "conversion_factor",
          typ: u(undefined, 3.14),
        },
        { json: "dead_time", js: "dead_time", typ: u(undefined, 3.14) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "location", js: "location", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "unit", js: "unit", typ: r("AlphaUnit") },
        { json: "value", js: "value", typ: 3.14 },
      ],
      "any"
    ),
    Temperature: o(
      [
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "location", js: "location", typ: "" },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "unit", js: "unit", typ: r("TemperatureUnit") },
        { json: "value", js: "value", typ: 3.14 },
      ],
      "any"
    ),
    TotalMemberCount: o(
      [
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "location", js: "location", typ: u(undefined, "") },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "value", js: "value", typ: 3.14 },
      ],
      "any"
    ),
    Wind: o(
      [
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "location", js: "location", typ: "" },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "properties", js: "properties", typ: r("Properties") },
      ],
      "any"
    ),
    Properties: o(
      [
        { json: "direction", js: "direction", typ: r("Direction") },
        { json: "elevation", js: "elevation", typ: r("Elevation") },
        { json: "gust", js: "gust", typ: r("Gust") },
        { json: "speed", js: "speed", typ: r("Speed") },
      ],
      "any"
    ),
    Direction: o(
      [
        { json: "unit", js: "unit", typ: r("DirectionUnit") },
        { json: "value", js: "value", typ: 3.14 },
      ],
      "any"
    ),
    Elevation: o(
      [
        { json: "unit", js: "unit", typ: r("ElevationUnit") },
        { json: "value", js: "value", typ: 3.14 },
      ],
      "any"
    ),
    Gust: o(
      [
        { json: "unit", js: "unit", typ: r("GustUnit") },
        { json: "value", js: "value", typ: 3.14 },
      ],
      "any"
    ),
    Speed: o(
      [
        { json: "unit", js: "unit", typ: r("GustUnit") },
        { json: "value", js: "value", typ: 3.14 },
      ],
      "any"
    ),
    Spacefed: o(
      [
        { json: "spacenet", js: "spacenet", typ: true },
        { json: "spacephone", js: "spacephone", typ: true },
        { json: "spacesaml", js: "spacesaml", typ: true },
      ],
      "any"
    ),
    State: o(
      [
        { json: "icon", js: "icon", typ: u(undefined, r("Icon")) },
        { json: "lastchange", js: "lastchange", typ: u(undefined, 3.14) },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "open", js: "open", typ: u(true, null) },
        { json: "trigger_person", js: "trigger_person", typ: u(undefined, "") },
      ],
      "any"
    ),
    Icon: o(
      [
        { json: "closed", js: "closed", typ: "" },
        { json: "open", js: "open", typ: "" },
      ],
      "any"
    ),
    Stream: o(
      [
        { json: "m4", js: "m4", typ: u(undefined, "") },
        { json: "mjpeg", js: "mjpeg", typ: u(undefined, "") },
        { json: "ustream", js: "ustream", typ: u(undefined, "") },
      ],
      "any"
    ),
    API: ["0.13"],
    Schedule: [
      "d.01",
      "h.01",
      "h.02",
      "h.04",
      "h.08",
      "h.12",
      "m.02",
      "m.05",
      "m.10",
      "m.15",
      "m.30",
    ],
    IssueReportChannel: ["email", "issue_mail", "ml", "twitter"],
    RadioShowType: ["mp3", "ogg"],
    AccountBalanceUnit: ["BTC", "EUR", "GBP", "USD"],
    BarometerUnit: ["hPA"],
    BeverageSupplyUnit: ["btl", "crt"],
    HumidityUnit: ["%"],
    NetworkConnectionType: ["cable", "spacenet", "wifi"],
    PowerConsumptionUnit: ["mW", "VA", "W"],
    AlphaUnit: ["cpm", "mSv/a", "r/h", "µSv/a", "µSv/h"],
    TemperatureUnit: ["°C", "°De", "°F", "K", "°N", "°R", "°Ré", "°Rø"],
    DirectionUnit: ["°"],
    ElevationUnit: ["m"],
    GustUnit: ["km/h", "kn", "m/s"],
  };
  