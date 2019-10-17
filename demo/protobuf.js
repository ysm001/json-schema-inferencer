/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Article = (function() {

    /**
     * Properties of an Article.
     * @exports IArticle
     * @interface IArticle
     * @property {Array.<google.protobuf.IAny>|null} [detailsInfo] Article detailsInfo
     * @property {google.protobuf.IAny|null} [headline] Article headline
     * @property {Array.<Article.IHits>|null} [hits] Article hits
     * @property {google.protobuf.IAny|null} [imageUrl] Article imageUrl
     * @property {string|null} [label] Article label
     * @property {google.protobuf.IAny|null} [lead] Article lead
     * @property {string|null} [navigationId] Article navigationId
     * @property {number|null} [offset] Article offset
     * @property {Array.<Article.IPickupTopics>|null} [pickupTopics] Article pickupTopics
     * @property {string|null} [streamDesignType] Article streamDesignType
     * @property {string|null} [themaId] Article themaId
     * @property {number|null} [total] Article total
     * @property {google.protobuf.IAny|null} [uid] Article uid
     */

    /**
     * Constructs a new Article.
     * @exports Article
     * @classdesc Represents an Article.
     * @implements IArticle
     * @constructor
     * @param {IArticle=} [properties] Properties to set
     */
    function Article(properties) {
        this.detailsInfo = [];
        this.hits = [];
        this.pickupTopics = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Article detailsInfo.
     * @member {Array.<google.protobuf.IAny>} detailsInfo
     * @memberof Article
     * @instance
     */
    Article.prototype.detailsInfo = $util.emptyArray;

    /**
     * Article headline.
     * @member {google.protobuf.IAny|null|undefined} headline
     * @memberof Article
     * @instance
     */
    Article.prototype.headline = null;

    /**
     * Article hits.
     * @member {Array.<Article.IHits>} hits
     * @memberof Article
     * @instance
     */
    Article.prototype.hits = $util.emptyArray;

    /**
     * Article imageUrl.
     * @member {google.protobuf.IAny|null|undefined} imageUrl
     * @memberof Article
     * @instance
     */
    Article.prototype.imageUrl = null;

    /**
     * Article label.
     * @member {string} label
     * @memberof Article
     * @instance
     */
    Article.prototype.label = "";

    /**
     * Article lead.
     * @member {google.protobuf.IAny|null|undefined} lead
     * @memberof Article
     * @instance
     */
    Article.prototype.lead = null;

    /**
     * Article navigationId.
     * @member {string} navigationId
     * @memberof Article
     * @instance
     */
    Article.prototype.navigationId = "";

    /**
     * Article offset.
     * @member {number} offset
     * @memberof Article
     * @instance
     */
    Article.prototype.offset = 0;

    /**
     * Article pickupTopics.
     * @member {Array.<Article.IPickupTopics>} pickupTopics
     * @memberof Article
     * @instance
     */
    Article.prototype.pickupTopics = $util.emptyArray;

    /**
     * Article streamDesignType.
     * @member {string} streamDesignType
     * @memberof Article
     * @instance
     */
    Article.prototype.streamDesignType = "";

    /**
     * Article themaId.
     * @member {string} themaId
     * @memberof Article
     * @instance
     */
    Article.prototype.themaId = "";

    /**
     * Article total.
     * @member {number} total
     * @memberof Article
     * @instance
     */
    Article.prototype.total = 0;

    /**
     * Article uid.
     * @member {google.protobuf.IAny|null|undefined} uid
     * @memberof Article
     * @instance
     */
    Article.prototype.uid = null;

    /**
     * Creates a new Article instance using the specified properties.
     * @function create
     * @memberof Article
     * @static
     * @param {IArticle=} [properties] Properties to set
     * @returns {Article} Article instance
     */
    Article.create = function create(properties) {
        return new Article(properties);
    };

    /**
     * Encodes the specified Article message. Does not implicitly {@link Article.verify|verify} messages.
     * @function encode
     * @memberof Article
     * @static
     * @param {IArticle} message Article message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Article.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.detailsInfo != null && message.detailsInfo.length)
            for (var i = 0; i < message.detailsInfo.length; ++i)
                $root.google.protobuf.Any.encode(message.detailsInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.headline != null && message.hasOwnProperty("headline"))
            $root.google.protobuf.Any.encode(message.headline, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.hits != null && message.hits.length)
            for (var i = 0; i < message.hits.length; ++i)
                $root.Article.Hits.encode(message.hits[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
            $root.google.protobuf.Any.encode(message.imageUrl, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.label != null && message.hasOwnProperty("label"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.label);
        if (message.lead != null && message.hasOwnProperty("lead"))
            $root.google.protobuf.Any.encode(message.lead, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.navigationId != null && message.hasOwnProperty("navigationId"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.navigationId);
        if (message.offset != null && message.hasOwnProperty("offset"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.offset);
        if (message.pickupTopics != null && message.pickupTopics.length)
            for (var i = 0; i < message.pickupTopics.length; ++i)
                $root.Article.PickupTopics.encode(message.pickupTopics[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.streamDesignType != null && message.hasOwnProperty("streamDesignType"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.streamDesignType);
        if (message.themaId != null && message.hasOwnProperty("themaId"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.themaId);
        if (message.total != null && message.hasOwnProperty("total"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.total);
        if (message.uid != null && message.hasOwnProperty("uid"))
            $root.google.protobuf.Any.encode(message.uid, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Article message, length delimited. Does not implicitly {@link Article.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Article
     * @static
     * @param {IArticle} message Article message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Article.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Article message from the specified reader or buffer.
     * @function decode
     * @memberof Article
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Article} Article
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Article.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Article();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.detailsInfo && message.detailsInfo.length))
                    message.detailsInfo = [];
                message.detailsInfo.push($root.google.protobuf.Any.decode(reader, reader.uint32()));
                break;
            case 2:
                message.headline = $root.google.protobuf.Any.decode(reader, reader.uint32());
                break;
            case 3:
                if (!(message.hits && message.hits.length))
                    message.hits = [];
                message.hits.push($root.Article.Hits.decode(reader, reader.uint32()));
                break;
            case 4:
                message.imageUrl = $root.google.protobuf.Any.decode(reader, reader.uint32());
                break;
            case 5:
                message.label = reader.string();
                break;
            case 6:
                message.lead = $root.google.protobuf.Any.decode(reader, reader.uint32());
                break;
            case 7:
                message.navigationId = reader.string();
                break;
            case 8:
                message.offset = reader.int32();
                break;
            case 9:
                if (!(message.pickupTopics && message.pickupTopics.length))
                    message.pickupTopics = [];
                message.pickupTopics.push($root.Article.PickupTopics.decode(reader, reader.uint32()));
                break;
            case 10:
                message.streamDesignType = reader.string();
                break;
            case 11:
                message.themaId = reader.string();
                break;
            case 12:
                message.total = reader.int32();
                break;
            case 13:
                message.uid = $root.google.protobuf.Any.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Article message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Article
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Article} Article
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Article.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Article message.
     * @function verify
     * @memberof Article
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Article.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.detailsInfo != null && message.hasOwnProperty("detailsInfo")) {
            if (!Array.isArray(message.detailsInfo))
                return "detailsInfo: array expected";
            for (var i = 0; i < message.detailsInfo.length; ++i) {
                var error = $root.google.protobuf.Any.verify(message.detailsInfo[i]);
                if (error)
                    return "detailsInfo." + error;
            }
        }
        if (message.headline != null && message.hasOwnProperty("headline")) {
            var error = $root.google.protobuf.Any.verify(message.headline);
            if (error)
                return "headline." + error;
        }
        if (message.hits != null && message.hasOwnProperty("hits")) {
            if (!Array.isArray(message.hits))
                return "hits: array expected";
            for (var i = 0; i < message.hits.length; ++i) {
                var error = $root.Article.Hits.verify(message.hits[i]);
                if (error)
                    return "hits." + error;
            }
        }
        if (message.imageUrl != null && message.hasOwnProperty("imageUrl")) {
            var error = $root.google.protobuf.Any.verify(message.imageUrl);
            if (error)
                return "imageUrl." + error;
        }
        if (message.label != null && message.hasOwnProperty("label"))
            if (!$util.isString(message.label))
                return "label: string expected";
        if (message.lead != null && message.hasOwnProperty("lead")) {
            var error = $root.google.protobuf.Any.verify(message.lead);
            if (error)
                return "lead." + error;
        }
        if (message.navigationId != null && message.hasOwnProperty("navigationId"))
            if (!$util.isString(message.navigationId))
                return "navigationId: string expected";
        if (message.offset != null && message.hasOwnProperty("offset"))
            if (!$util.isInteger(message.offset))
                return "offset: integer expected";
        if (message.pickupTopics != null && message.hasOwnProperty("pickupTopics")) {
            if (!Array.isArray(message.pickupTopics))
                return "pickupTopics: array expected";
            for (var i = 0; i < message.pickupTopics.length; ++i) {
                var error = $root.Article.PickupTopics.verify(message.pickupTopics[i]);
                if (error)
                    return "pickupTopics." + error;
            }
        }
        if (message.streamDesignType != null && message.hasOwnProperty("streamDesignType"))
            if (!$util.isString(message.streamDesignType))
                return "streamDesignType: string expected";
        if (message.themaId != null && message.hasOwnProperty("themaId"))
            if (!$util.isString(message.themaId))
                return "themaId: string expected";
        if (message.total != null && message.hasOwnProperty("total"))
            if (!$util.isInteger(message.total))
                return "total: integer expected";
        if (message.uid != null && message.hasOwnProperty("uid")) {
            var error = $root.google.protobuf.Any.verify(message.uid);
            if (error)
                return "uid." + error;
        }
        return null;
    };

    /**
     * Creates an Article message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Article
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Article} Article
     */
    Article.fromObject = function fromObject(object) {
        if (object instanceof $root.Article)
            return object;
        var message = new $root.Article();
        if (object.detailsInfo) {
            if (!Array.isArray(object.detailsInfo))
                throw TypeError(".Article.detailsInfo: array expected");
            message.detailsInfo = [];
            for (var i = 0; i < object.detailsInfo.length; ++i) {
                if (typeof object.detailsInfo[i] !== "object")
                    throw TypeError(".Article.detailsInfo: object expected");
                message.detailsInfo[i] = $root.google.protobuf.Any.fromObject(object.detailsInfo[i]);
            }
        }
        if (object.headline != null) {
            if (typeof object.headline !== "object")
                throw TypeError(".Article.headline: object expected");
            message.headline = $root.google.protobuf.Any.fromObject(object.headline);
        }
        if (object.hits) {
            if (!Array.isArray(object.hits))
                throw TypeError(".Article.hits: array expected");
            message.hits = [];
            for (var i = 0; i < object.hits.length; ++i) {
                if (typeof object.hits[i] !== "object")
                    throw TypeError(".Article.hits: object expected");
                message.hits[i] = $root.Article.Hits.fromObject(object.hits[i]);
            }
        }
        if (object.imageUrl != null) {
            if (typeof object.imageUrl !== "object")
                throw TypeError(".Article.imageUrl: object expected");
            message.imageUrl = $root.google.protobuf.Any.fromObject(object.imageUrl);
        }
        if (object.label != null)
            message.label = String(object.label);
        if (object.lead != null) {
            if (typeof object.lead !== "object")
                throw TypeError(".Article.lead: object expected");
            message.lead = $root.google.protobuf.Any.fromObject(object.lead);
        }
        if (object.navigationId != null)
            message.navigationId = String(object.navigationId);
        if (object.offset != null)
            message.offset = object.offset | 0;
        if (object.pickupTopics) {
            if (!Array.isArray(object.pickupTopics))
                throw TypeError(".Article.pickupTopics: array expected");
            message.pickupTopics = [];
            for (var i = 0; i < object.pickupTopics.length; ++i) {
                if (typeof object.pickupTopics[i] !== "object")
                    throw TypeError(".Article.pickupTopics: object expected");
                message.pickupTopics[i] = $root.Article.PickupTopics.fromObject(object.pickupTopics[i]);
            }
        }
        if (object.streamDesignType != null)
            message.streamDesignType = String(object.streamDesignType);
        if (object.themaId != null)
            message.themaId = String(object.themaId);
        if (object.total != null)
            message.total = object.total | 0;
        if (object.uid != null) {
            if (typeof object.uid !== "object")
                throw TypeError(".Article.uid: object expected");
            message.uid = $root.google.protobuf.Any.fromObject(object.uid);
        }
        return message;
    };

    /**
     * Creates a plain object from an Article message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Article
     * @static
     * @param {Article} message Article
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Article.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.detailsInfo = [];
            object.hits = [];
            object.pickupTopics = [];
        }
        if (options.defaults) {
            object.headline = null;
            object.imageUrl = null;
            object.label = "";
            object.lead = null;
            object.navigationId = "";
            object.offset = 0;
            object.streamDesignType = "";
            object.themaId = "";
            object.total = 0;
            object.uid = null;
        }
        if (message.detailsInfo && message.detailsInfo.length) {
            object.detailsInfo = [];
            for (var j = 0; j < message.detailsInfo.length; ++j)
                object.detailsInfo[j] = $root.google.protobuf.Any.toObject(message.detailsInfo[j], options);
        }
        if (message.headline != null && message.hasOwnProperty("headline"))
            object.headline = $root.google.protobuf.Any.toObject(message.headline, options);
        if (message.hits && message.hits.length) {
            object.hits = [];
            for (var j = 0; j < message.hits.length; ++j)
                object.hits[j] = $root.Article.Hits.toObject(message.hits[j], options);
        }
        if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
            object.imageUrl = $root.google.protobuf.Any.toObject(message.imageUrl, options);
        if (message.label != null && message.hasOwnProperty("label"))
            object.label = message.label;
        if (message.lead != null && message.hasOwnProperty("lead"))
            object.lead = $root.google.protobuf.Any.toObject(message.lead, options);
        if (message.navigationId != null && message.hasOwnProperty("navigationId"))
            object.navigationId = message.navigationId;
        if (message.offset != null && message.hasOwnProperty("offset"))
            object.offset = message.offset;
        if (message.pickupTopics && message.pickupTopics.length) {
            object.pickupTopics = [];
            for (var j = 0; j < message.pickupTopics.length; ++j)
                object.pickupTopics[j] = $root.Article.PickupTopics.toObject(message.pickupTopics[j], options);
        }
        if (message.streamDesignType != null && message.hasOwnProperty("streamDesignType"))
            object.streamDesignType = message.streamDesignType;
        if (message.themaId != null && message.hasOwnProperty("themaId"))
            object.themaId = message.themaId;
        if (message.total != null && message.hasOwnProperty("total"))
            object.total = message.total;
        if (message.uid != null && message.hasOwnProperty("uid"))
            object.uid = $root.google.protobuf.Any.toObject(message.uid, options);
        return object;
    };

    /**
     * Converts this Article to JSON.
     * @function toJSON
     * @memberof Article
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Article.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    Article.Hits = (function() {

        /**
         * Properties of a Hits.
         * @memberof Article
         * @interface IHits
         * @property {string|null} [displayTime] Hits displayTime
         * @property {string|null} [kijiIdRaw] Hits kijiIdRaw
         * @property {string|null} [rflg] Hits rflg
         * @property {string|null} [serviceCategory] Hits serviceCategory
         * @property {string|null} [title] Hits title
         * @property {string|null} [title2] Hits title2
         * @property {string|null} [titleWeb] Hits titleWeb
         * @property {Article.Hits.IFeaturedImage|null} [featuredImage] Hits featuredImage
         * @property {google.protobuf.IAny|null} [featuredVideo] Hits featuredVideo
         * @property {boolean|null} [isTedumi] Hits isTedumi
         * @property {string|null} [listDesignType] Hits listDesignType
         * @property {Article.Hits.IPatternTestInfo|null} [patternTestInfo] Hits patternTestInfo
         */

        /**
         * Constructs a new Hits.
         * @memberof Article
         * @classdesc Represents a Hits.
         * @implements IHits
         * @constructor
         * @param {Article.IHits=} [properties] Properties to set
         */
        function Hits(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Hits displayTime.
         * @member {string} displayTime
         * @memberof Article.Hits
         * @instance
         */
        Hits.prototype.displayTime = "";

        /**
         * Hits kijiIdRaw.
         * @member {string} kijiIdRaw
         * @memberof Article.Hits
         * @instance
         */
        Hits.prototype.kijiIdRaw = "";

        /**
         * Hits rflg.
         * @member {string} rflg
         * @memberof Article.Hits
         * @instance
         */
        Hits.prototype.rflg = "";

        /**
         * Hits serviceCategory.
         * @member {string} serviceCategory
         * @memberof Article.Hits
         * @instance
         */
        Hits.prototype.serviceCategory = "";

        /**
         * Hits title.
         * @member {string} title
         * @memberof Article.Hits
         * @instance
         */
        Hits.prototype.title = "";

        /**
         * Hits title2.
         * @member {string} title2
         * @memberof Article.Hits
         * @instance
         */
        Hits.prototype.title2 = "";

        /**
         * Hits titleWeb.
         * @member {string} titleWeb
         * @memberof Article.Hits
         * @instance
         */
        Hits.prototype.titleWeb = "";

        /**
         * Hits featuredImage.
         * @member {Article.Hits.IFeaturedImage|null|undefined} featuredImage
         * @memberof Article.Hits
         * @instance
         */
        Hits.prototype.featuredImage = null;

        /**
         * Hits featuredVideo.
         * @member {google.protobuf.IAny|null|undefined} featuredVideo
         * @memberof Article.Hits
         * @instance
         */
        Hits.prototype.featuredVideo = null;

        /**
         * Hits isTedumi.
         * @member {boolean} isTedumi
         * @memberof Article.Hits
         * @instance
         */
        Hits.prototype.isTedumi = false;

        /**
         * Hits listDesignType.
         * @member {string} listDesignType
         * @memberof Article.Hits
         * @instance
         */
        Hits.prototype.listDesignType = "";

        /**
         * Hits patternTestInfo.
         * @member {Article.Hits.IPatternTestInfo|null|undefined} patternTestInfo
         * @memberof Article.Hits
         * @instance
         */
        Hits.prototype.patternTestInfo = null;

        /**
         * Creates a new Hits instance using the specified properties.
         * @function create
         * @memberof Article.Hits
         * @static
         * @param {Article.IHits=} [properties] Properties to set
         * @returns {Article.Hits} Hits instance
         */
        Hits.create = function create(properties) {
            return new Hits(properties);
        };

        /**
         * Encodes the specified Hits message. Does not implicitly {@link Article.Hits.verify|verify} messages.
         * @function encode
         * @memberof Article.Hits
         * @static
         * @param {Article.IHits} message Hits message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Hits.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.displayTime != null && message.hasOwnProperty("displayTime"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.displayTime);
            if (message.kijiIdRaw != null && message.hasOwnProperty("kijiIdRaw"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.kijiIdRaw);
            if (message.rflg != null && message.hasOwnProperty("rflg"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.rflg);
            if (message.serviceCategory != null && message.hasOwnProperty("serviceCategory"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.serviceCategory);
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.title);
            if (message.title2 != null && message.hasOwnProperty("title2"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.title2);
            if (message.titleWeb != null && message.hasOwnProperty("titleWeb"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.titleWeb);
            if (message.featuredImage != null && message.hasOwnProperty("featuredImage"))
                $root.Article.Hits.FeaturedImage.encode(message.featuredImage, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.featuredVideo != null && message.hasOwnProperty("featuredVideo"))
                $root.google.protobuf.Any.encode(message.featuredVideo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.isTedumi != null && message.hasOwnProperty("isTedumi"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.isTedumi);
            if (message.listDesignType != null && message.hasOwnProperty("listDesignType"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.listDesignType);
            if (message.patternTestInfo != null && message.hasOwnProperty("patternTestInfo"))
                $root.Article.Hits.PatternTestInfo.encode(message.patternTestInfo, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Hits message, length delimited. Does not implicitly {@link Article.Hits.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Article.Hits
         * @static
         * @param {Article.IHits} message Hits message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Hits.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Hits message from the specified reader or buffer.
         * @function decode
         * @memberof Article.Hits
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Article.Hits} Hits
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Hits.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Article.Hits();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.displayTime = reader.string();
                    break;
                case 2:
                    message.kijiIdRaw = reader.string();
                    break;
                case 3:
                    message.rflg = reader.string();
                    break;
                case 4:
                    message.serviceCategory = reader.string();
                    break;
                case 5:
                    message.title = reader.string();
                    break;
                case 6:
                    message.title2 = reader.string();
                    break;
                case 7:
                    message.titleWeb = reader.string();
                    break;
                case 8:
                    message.featuredImage = $root.Article.Hits.FeaturedImage.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.featuredVideo = $root.google.protobuf.Any.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.isTedumi = reader.bool();
                    break;
                case 11:
                    message.listDesignType = reader.string();
                    break;
                case 12:
                    message.patternTestInfo = $root.Article.Hits.PatternTestInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Hits message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Article.Hits
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Article.Hits} Hits
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Hits.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Hits message.
         * @function verify
         * @memberof Article.Hits
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Hits.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.displayTime != null && message.hasOwnProperty("displayTime"))
                if (!$util.isString(message.displayTime))
                    return "displayTime: string expected";
            if (message.kijiIdRaw != null && message.hasOwnProperty("kijiIdRaw"))
                if (!$util.isString(message.kijiIdRaw))
                    return "kijiIdRaw: string expected";
            if (message.rflg != null && message.hasOwnProperty("rflg"))
                if (!$util.isString(message.rflg))
                    return "rflg: string expected";
            if (message.serviceCategory != null && message.hasOwnProperty("serviceCategory"))
                if (!$util.isString(message.serviceCategory))
                    return "serviceCategory: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.title2 != null && message.hasOwnProperty("title2"))
                if (!$util.isString(message.title2))
                    return "title2: string expected";
            if (message.titleWeb != null && message.hasOwnProperty("titleWeb"))
                if (!$util.isString(message.titleWeb))
                    return "titleWeb: string expected";
            if (message.featuredImage != null && message.hasOwnProperty("featuredImage")) {
                var error = $root.Article.Hits.FeaturedImage.verify(message.featuredImage);
                if (error)
                    return "featuredImage." + error;
            }
            if (message.featuredVideo != null && message.hasOwnProperty("featuredVideo")) {
                var error = $root.google.protobuf.Any.verify(message.featuredVideo);
                if (error)
                    return "featuredVideo." + error;
            }
            if (message.isTedumi != null && message.hasOwnProperty("isTedumi"))
                if (typeof message.isTedumi !== "boolean")
                    return "isTedumi: boolean expected";
            if (message.listDesignType != null && message.hasOwnProperty("listDesignType"))
                if (!$util.isString(message.listDesignType))
                    return "listDesignType: string expected";
            if (message.patternTestInfo != null && message.hasOwnProperty("patternTestInfo")) {
                var error = $root.Article.Hits.PatternTestInfo.verify(message.patternTestInfo);
                if (error)
                    return "patternTestInfo." + error;
            }
            return null;
        };

        /**
         * Creates a Hits message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Article.Hits
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Article.Hits} Hits
         */
        Hits.fromObject = function fromObject(object) {
            if (object instanceof $root.Article.Hits)
                return object;
            var message = new $root.Article.Hits();
            if (object.displayTime != null)
                message.displayTime = String(object.displayTime);
            if (object.kijiIdRaw != null)
                message.kijiIdRaw = String(object.kijiIdRaw);
            if (object.rflg != null)
                message.rflg = String(object.rflg);
            if (object.serviceCategory != null)
                message.serviceCategory = String(object.serviceCategory);
            if (object.title != null)
                message.title = String(object.title);
            if (object.title2 != null)
                message.title2 = String(object.title2);
            if (object.titleWeb != null)
                message.titleWeb = String(object.titleWeb);
            if (object.featuredImage != null) {
                if (typeof object.featuredImage !== "object")
                    throw TypeError(".Article.Hits.featuredImage: object expected");
                message.featuredImage = $root.Article.Hits.FeaturedImage.fromObject(object.featuredImage);
            }
            if (object.featuredVideo != null) {
                if (typeof object.featuredVideo !== "object")
                    throw TypeError(".Article.Hits.featuredVideo: object expected");
                message.featuredVideo = $root.google.protobuf.Any.fromObject(object.featuredVideo);
            }
            if (object.isTedumi != null)
                message.isTedumi = Boolean(object.isTedumi);
            if (object.listDesignType != null)
                message.listDesignType = String(object.listDesignType);
            if (object.patternTestInfo != null) {
                if (typeof object.patternTestInfo !== "object")
                    throw TypeError(".Article.Hits.patternTestInfo: object expected");
                message.patternTestInfo = $root.Article.Hits.PatternTestInfo.fromObject(object.patternTestInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a Hits message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Article.Hits
         * @static
         * @param {Article.Hits} message Hits
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Hits.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.displayTime = "";
                object.kijiIdRaw = "";
                object.rflg = "";
                object.serviceCategory = "";
                object.title = "";
                object.title2 = "";
                object.titleWeb = "";
                object.featuredImage = null;
                object.featuredVideo = null;
                object.isTedumi = false;
                object.listDesignType = "";
                object.patternTestInfo = null;
            }
            if (message.displayTime != null && message.hasOwnProperty("displayTime"))
                object.displayTime = message.displayTime;
            if (message.kijiIdRaw != null && message.hasOwnProperty("kijiIdRaw"))
                object.kijiIdRaw = message.kijiIdRaw;
            if (message.rflg != null && message.hasOwnProperty("rflg"))
                object.rflg = message.rflg;
            if (message.serviceCategory != null && message.hasOwnProperty("serviceCategory"))
                object.serviceCategory = message.serviceCategory;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.title2 != null && message.hasOwnProperty("title2"))
                object.title2 = message.title2;
            if (message.titleWeb != null && message.hasOwnProperty("titleWeb"))
                object.titleWeb = message.titleWeb;
            if (message.featuredImage != null && message.hasOwnProperty("featuredImage"))
                object.featuredImage = $root.Article.Hits.FeaturedImage.toObject(message.featuredImage, options);
            if (message.featuredVideo != null && message.hasOwnProperty("featuredVideo"))
                object.featuredVideo = $root.google.protobuf.Any.toObject(message.featuredVideo, options);
            if (message.isTedumi != null && message.hasOwnProperty("isTedumi"))
                object.isTedumi = message.isTedumi;
            if (message.listDesignType != null && message.hasOwnProperty("listDesignType"))
                object.listDesignType = message.listDesignType;
            if (message.patternTestInfo != null && message.hasOwnProperty("patternTestInfo"))
                object.patternTestInfo = $root.Article.Hits.PatternTestInfo.toObject(message.patternTestInfo, options);
            return object;
        };

        /**
         * Converts this Hits to JSON.
         * @function toJSON
         * @memberof Article.Hits
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Hits.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Hits.FeaturedImage = (function() {

            /**
             * Properties of a FeaturedImage.
             * @memberof Article.Hits
             * @interface IFeaturedImage
             * @property {string|null} [credit] FeaturedImage credit
             * @property {string|null} [etoki] FeaturedImage etoki
             * @property {string|null} [expiresAt] FeaturedImage expiresAt
             * @property {string|null} [format] FeaturedImage format
             * @property {number|null} [height] FeaturedImage height
             * @property {string|null} [imageId] FeaturedImage imageId
             * @property {number|null} [revision] FeaturedImage revision
             * @property {string|null} [srcImageUrl] FeaturedImage srcImageUrl
             * @property {number|null} [width] FeaturedImage width
             */

            /**
             * Constructs a new FeaturedImage.
             * @memberof Article.Hits
             * @classdesc Represents a FeaturedImage.
             * @implements IFeaturedImage
             * @constructor
             * @param {Article.Hits.IFeaturedImage=} [properties] Properties to set
             */
            function FeaturedImage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FeaturedImage credit.
             * @member {string} credit
             * @memberof Article.Hits.FeaturedImage
             * @instance
             */
            FeaturedImage.prototype.credit = "";

            /**
             * FeaturedImage etoki.
             * @member {string} etoki
             * @memberof Article.Hits.FeaturedImage
             * @instance
             */
            FeaturedImage.prototype.etoki = "";

            /**
             * FeaturedImage expiresAt.
             * @member {string} expiresAt
             * @memberof Article.Hits.FeaturedImage
             * @instance
             */
            FeaturedImage.prototype.expiresAt = "";

            /**
             * FeaturedImage format.
             * @member {string} format
             * @memberof Article.Hits.FeaturedImage
             * @instance
             */
            FeaturedImage.prototype.format = "";

            /**
             * FeaturedImage height.
             * @member {number} height
             * @memberof Article.Hits.FeaturedImage
             * @instance
             */
            FeaturedImage.prototype.height = 0;

            /**
             * FeaturedImage imageId.
             * @member {string} imageId
             * @memberof Article.Hits.FeaturedImage
             * @instance
             */
            FeaturedImage.prototype.imageId = "";

            /**
             * FeaturedImage revision.
             * @member {number} revision
             * @memberof Article.Hits.FeaturedImage
             * @instance
             */
            FeaturedImage.prototype.revision = 0;

            /**
             * FeaturedImage srcImageUrl.
             * @member {string} srcImageUrl
             * @memberof Article.Hits.FeaturedImage
             * @instance
             */
            FeaturedImage.prototype.srcImageUrl = "";

            /**
             * FeaturedImage width.
             * @member {number} width
             * @memberof Article.Hits.FeaturedImage
             * @instance
             */
            FeaturedImage.prototype.width = 0;

            /**
             * Creates a new FeaturedImage instance using the specified properties.
             * @function create
             * @memberof Article.Hits.FeaturedImage
             * @static
             * @param {Article.Hits.IFeaturedImage=} [properties] Properties to set
             * @returns {Article.Hits.FeaturedImage} FeaturedImage instance
             */
            FeaturedImage.create = function create(properties) {
                return new FeaturedImage(properties);
            };

            /**
             * Encodes the specified FeaturedImage message. Does not implicitly {@link Article.Hits.FeaturedImage.verify|verify} messages.
             * @function encode
             * @memberof Article.Hits.FeaturedImage
             * @static
             * @param {Article.Hits.IFeaturedImage} message FeaturedImage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FeaturedImage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.credit != null && message.hasOwnProperty("credit"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.credit);
                if (message.etoki != null && message.hasOwnProperty("etoki"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.etoki);
                if (message.expiresAt != null && message.hasOwnProperty("expiresAt"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.expiresAt);
                if (message.format != null && message.hasOwnProperty("format"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.format);
                if (message.height != null && message.hasOwnProperty("height"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.height);
                if (message.imageId != null && message.hasOwnProperty("imageId"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.imageId);
                if (message.revision != null && message.hasOwnProperty("revision"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.revision);
                if (message.srcImageUrl != null && message.hasOwnProperty("srcImageUrl"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.srcImageUrl);
                if (message.width != null && message.hasOwnProperty("width"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.width);
                return writer;
            };

            /**
             * Encodes the specified FeaturedImage message, length delimited. Does not implicitly {@link Article.Hits.FeaturedImage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Article.Hits.FeaturedImage
             * @static
             * @param {Article.Hits.IFeaturedImage} message FeaturedImage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FeaturedImage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FeaturedImage message from the specified reader or buffer.
             * @function decode
             * @memberof Article.Hits.FeaturedImage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Article.Hits.FeaturedImage} FeaturedImage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FeaturedImage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Article.Hits.FeaturedImage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.credit = reader.string();
                        break;
                    case 2:
                        message.etoki = reader.string();
                        break;
                    case 3:
                        message.expiresAt = reader.string();
                        break;
                    case 4:
                        message.format = reader.string();
                        break;
                    case 5:
                        message.height = reader.int32();
                        break;
                    case 6:
                        message.imageId = reader.string();
                        break;
                    case 7:
                        message.revision = reader.int32();
                        break;
                    case 8:
                        message.srcImageUrl = reader.string();
                        break;
                    case 9:
                        message.width = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FeaturedImage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Article.Hits.FeaturedImage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Article.Hits.FeaturedImage} FeaturedImage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FeaturedImage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FeaturedImage message.
             * @function verify
             * @memberof Article.Hits.FeaturedImage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FeaturedImage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.credit != null && message.hasOwnProperty("credit"))
                    if (!$util.isString(message.credit))
                        return "credit: string expected";
                if (message.etoki != null && message.hasOwnProperty("etoki"))
                    if (!$util.isString(message.etoki))
                        return "etoki: string expected";
                if (message.expiresAt != null && message.hasOwnProperty("expiresAt"))
                    if (!$util.isString(message.expiresAt))
                        return "expiresAt: string expected";
                if (message.format != null && message.hasOwnProperty("format"))
                    if (!$util.isString(message.format))
                        return "format: string expected";
                if (message.height != null && message.hasOwnProperty("height"))
                    if (!$util.isInteger(message.height))
                        return "height: integer expected";
                if (message.imageId != null && message.hasOwnProperty("imageId"))
                    if (!$util.isString(message.imageId))
                        return "imageId: string expected";
                if (message.revision != null && message.hasOwnProperty("revision"))
                    if (!$util.isInteger(message.revision))
                        return "revision: integer expected";
                if (message.srcImageUrl != null && message.hasOwnProperty("srcImageUrl"))
                    if (!$util.isString(message.srcImageUrl))
                        return "srcImageUrl: string expected";
                if (message.width != null && message.hasOwnProperty("width"))
                    if (!$util.isInteger(message.width))
                        return "width: integer expected";
                return null;
            };

            /**
             * Creates a FeaturedImage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Article.Hits.FeaturedImage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Article.Hits.FeaturedImage} FeaturedImage
             */
            FeaturedImage.fromObject = function fromObject(object) {
                if (object instanceof $root.Article.Hits.FeaturedImage)
                    return object;
                var message = new $root.Article.Hits.FeaturedImage();
                if (object.credit != null)
                    message.credit = String(object.credit);
                if (object.etoki != null)
                    message.etoki = String(object.etoki);
                if (object.expiresAt != null)
                    message.expiresAt = String(object.expiresAt);
                if (object.format != null)
                    message.format = String(object.format);
                if (object.height != null)
                    message.height = object.height | 0;
                if (object.imageId != null)
                    message.imageId = String(object.imageId);
                if (object.revision != null)
                    message.revision = object.revision | 0;
                if (object.srcImageUrl != null)
                    message.srcImageUrl = String(object.srcImageUrl);
                if (object.width != null)
                    message.width = object.width | 0;
                return message;
            };

            /**
             * Creates a plain object from a FeaturedImage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Article.Hits.FeaturedImage
             * @static
             * @param {Article.Hits.FeaturedImage} message FeaturedImage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FeaturedImage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.credit = "";
                    object.etoki = "";
                    object.expiresAt = "";
                    object.format = "";
                    object.height = 0;
                    object.imageId = "";
                    object.revision = 0;
                    object.srcImageUrl = "";
                    object.width = 0;
                }
                if (message.credit != null && message.hasOwnProperty("credit"))
                    object.credit = message.credit;
                if (message.etoki != null && message.hasOwnProperty("etoki"))
                    object.etoki = message.etoki;
                if (message.expiresAt != null && message.hasOwnProperty("expiresAt"))
                    object.expiresAt = message.expiresAt;
                if (message.format != null && message.hasOwnProperty("format"))
                    object.format = message.format;
                if (message.height != null && message.hasOwnProperty("height"))
                    object.height = message.height;
                if (message.imageId != null && message.hasOwnProperty("imageId"))
                    object.imageId = message.imageId;
                if (message.revision != null && message.hasOwnProperty("revision"))
                    object.revision = message.revision;
                if (message.srcImageUrl != null && message.hasOwnProperty("srcImageUrl"))
                    object.srcImageUrl = message.srcImageUrl;
                if (message.width != null && message.hasOwnProperty("width"))
                    object.width = message.width;
                return object;
            };

            /**
             * Converts this FeaturedImage to JSON.
             * @function toJSON
             * @memberof Article.Hits.FeaturedImage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FeaturedImage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FeaturedImage;
        })();

        Hits.PatternTestInfo = (function() {

            /**
             * Properties of a PatternTestInfo.
             * @memberof Article.Hits
             * @interface IPatternTestInfo
             * @property {google.protobuf.IAny|null} [defaultPatternId] PatternTestInfo defaultPatternId
             * @property {string|null} [patternId] PatternTestInfo patternId
             * @property {google.protobuf.IAny|null} [patternTestId] PatternTestInfo patternTestId
             * @property {boolean|null} [patternTestingFlag] PatternTestInfo patternTestingFlag
             */

            /**
             * Constructs a new PatternTestInfo.
             * @memberof Article.Hits
             * @classdesc Represents a PatternTestInfo.
             * @implements IPatternTestInfo
             * @constructor
             * @param {Article.Hits.IPatternTestInfo=} [properties] Properties to set
             */
            function PatternTestInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PatternTestInfo defaultPatternId.
             * @member {google.protobuf.IAny|null|undefined} defaultPatternId
             * @memberof Article.Hits.PatternTestInfo
             * @instance
             */
            PatternTestInfo.prototype.defaultPatternId = null;

            /**
             * PatternTestInfo patternId.
             * @member {string} patternId
             * @memberof Article.Hits.PatternTestInfo
             * @instance
             */
            PatternTestInfo.prototype.patternId = "";

            /**
             * PatternTestInfo patternTestId.
             * @member {google.protobuf.IAny|null|undefined} patternTestId
             * @memberof Article.Hits.PatternTestInfo
             * @instance
             */
            PatternTestInfo.prototype.patternTestId = null;

            /**
             * PatternTestInfo patternTestingFlag.
             * @member {boolean} patternTestingFlag
             * @memberof Article.Hits.PatternTestInfo
             * @instance
             */
            PatternTestInfo.prototype.patternTestingFlag = false;

            /**
             * Creates a new PatternTestInfo instance using the specified properties.
             * @function create
             * @memberof Article.Hits.PatternTestInfo
             * @static
             * @param {Article.Hits.IPatternTestInfo=} [properties] Properties to set
             * @returns {Article.Hits.PatternTestInfo} PatternTestInfo instance
             */
            PatternTestInfo.create = function create(properties) {
                return new PatternTestInfo(properties);
            };

            /**
             * Encodes the specified PatternTestInfo message. Does not implicitly {@link Article.Hits.PatternTestInfo.verify|verify} messages.
             * @function encode
             * @memberof Article.Hits.PatternTestInfo
             * @static
             * @param {Article.Hits.IPatternTestInfo} message PatternTestInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PatternTestInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.defaultPatternId != null && message.hasOwnProperty("defaultPatternId"))
                    $root.google.protobuf.Any.encode(message.defaultPatternId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.patternId != null && message.hasOwnProperty("patternId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.patternId);
                if (message.patternTestId != null && message.hasOwnProperty("patternTestId"))
                    $root.google.protobuf.Any.encode(message.patternTestId, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.patternTestingFlag != null && message.hasOwnProperty("patternTestingFlag"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.patternTestingFlag);
                return writer;
            };

            /**
             * Encodes the specified PatternTestInfo message, length delimited. Does not implicitly {@link Article.Hits.PatternTestInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Article.Hits.PatternTestInfo
             * @static
             * @param {Article.Hits.IPatternTestInfo} message PatternTestInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PatternTestInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PatternTestInfo message from the specified reader or buffer.
             * @function decode
             * @memberof Article.Hits.PatternTestInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Article.Hits.PatternTestInfo} PatternTestInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PatternTestInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Article.Hits.PatternTestInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.defaultPatternId = $root.google.protobuf.Any.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.patternId = reader.string();
                        break;
                    case 3:
                        message.patternTestId = $root.google.protobuf.Any.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.patternTestingFlag = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PatternTestInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Article.Hits.PatternTestInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Article.Hits.PatternTestInfo} PatternTestInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PatternTestInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PatternTestInfo message.
             * @function verify
             * @memberof Article.Hits.PatternTestInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PatternTestInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.defaultPatternId != null && message.hasOwnProperty("defaultPatternId")) {
                    var error = $root.google.protobuf.Any.verify(message.defaultPatternId);
                    if (error)
                        return "defaultPatternId." + error;
                }
                if (message.patternId != null && message.hasOwnProperty("patternId"))
                    if (!$util.isString(message.patternId))
                        return "patternId: string expected";
                if (message.patternTestId != null && message.hasOwnProperty("patternTestId")) {
                    var error = $root.google.protobuf.Any.verify(message.patternTestId);
                    if (error)
                        return "patternTestId." + error;
                }
                if (message.patternTestingFlag != null && message.hasOwnProperty("patternTestingFlag"))
                    if (typeof message.patternTestingFlag !== "boolean")
                        return "patternTestingFlag: boolean expected";
                return null;
            };

            /**
             * Creates a PatternTestInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Article.Hits.PatternTestInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Article.Hits.PatternTestInfo} PatternTestInfo
             */
            PatternTestInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.Article.Hits.PatternTestInfo)
                    return object;
                var message = new $root.Article.Hits.PatternTestInfo();
                if (object.defaultPatternId != null) {
                    if (typeof object.defaultPatternId !== "object")
                        throw TypeError(".Article.Hits.PatternTestInfo.defaultPatternId: object expected");
                    message.defaultPatternId = $root.google.protobuf.Any.fromObject(object.defaultPatternId);
                }
                if (object.patternId != null)
                    message.patternId = String(object.patternId);
                if (object.patternTestId != null) {
                    if (typeof object.patternTestId !== "object")
                        throw TypeError(".Article.Hits.PatternTestInfo.patternTestId: object expected");
                    message.patternTestId = $root.google.protobuf.Any.fromObject(object.patternTestId);
                }
                if (object.patternTestingFlag != null)
                    message.patternTestingFlag = Boolean(object.patternTestingFlag);
                return message;
            };

            /**
             * Creates a plain object from a PatternTestInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Article.Hits.PatternTestInfo
             * @static
             * @param {Article.Hits.PatternTestInfo} message PatternTestInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PatternTestInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.defaultPatternId = null;
                    object.patternId = "";
                    object.patternTestId = null;
                    object.patternTestingFlag = false;
                }
                if (message.defaultPatternId != null && message.hasOwnProperty("defaultPatternId"))
                    object.defaultPatternId = $root.google.protobuf.Any.toObject(message.defaultPatternId, options);
                if (message.patternId != null && message.hasOwnProperty("patternId"))
                    object.patternId = message.patternId;
                if (message.patternTestId != null && message.hasOwnProperty("patternTestId"))
                    object.patternTestId = $root.google.protobuf.Any.toObject(message.patternTestId, options);
                if (message.patternTestingFlag != null && message.hasOwnProperty("patternTestingFlag"))
                    object.patternTestingFlag = message.patternTestingFlag;
                return object;
            };

            /**
             * Converts this PatternTestInfo to JSON.
             * @function toJSON
             * @memberof Article.Hits.PatternTestInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PatternTestInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PatternTestInfo;
        })();

        return Hits;
    })();

    Article.PickupTopics = (function() {

        /**
         * Properties of a PickupTopics.
         * @memberof Article
         * @interface IPickupTopics
         * @property {boolean|null} [followable] PickupTopics followable
         * @property {google.protobuf.IAny|null} [headline] PickupTopics headline
         * @property {google.protobuf.IAny|null} [imageUrl] PickupTopics imageUrl
         * @property {string|null} [label] PickupTopics label
         * @property {google.protobuf.IAny|null} [lead] PickupTopics lead
         * @property {google.protobuf.IAny|null} [sns] PickupTopics sns
         * @property {string|null} [topicCode] PickupTopics topicCode
         * @property {string|null} [topicType] PickupTopics topicType
         * @property {string|null} [type] PickupTopics type
         * @property {string|null} [uid] PickupTopics uid
         */

        /**
         * Constructs a new PickupTopics.
         * @memberof Article
         * @classdesc Represents a PickupTopics.
         * @implements IPickupTopics
         * @constructor
         * @param {Article.IPickupTopics=} [properties] Properties to set
         */
        function PickupTopics(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PickupTopics followable.
         * @member {boolean} followable
         * @memberof Article.PickupTopics
         * @instance
         */
        PickupTopics.prototype.followable = false;

        /**
         * PickupTopics headline.
         * @member {google.protobuf.IAny|null|undefined} headline
         * @memberof Article.PickupTopics
         * @instance
         */
        PickupTopics.prototype.headline = null;

        /**
         * PickupTopics imageUrl.
         * @member {google.protobuf.IAny|null|undefined} imageUrl
         * @memberof Article.PickupTopics
         * @instance
         */
        PickupTopics.prototype.imageUrl = null;

        /**
         * PickupTopics label.
         * @member {string} label
         * @memberof Article.PickupTopics
         * @instance
         */
        PickupTopics.prototype.label = "";

        /**
         * PickupTopics lead.
         * @member {google.protobuf.IAny|null|undefined} lead
         * @memberof Article.PickupTopics
         * @instance
         */
        PickupTopics.prototype.lead = null;

        /**
         * PickupTopics sns.
         * @member {google.protobuf.IAny|null|undefined} sns
         * @memberof Article.PickupTopics
         * @instance
         */
        PickupTopics.prototype.sns = null;

        /**
         * PickupTopics topicCode.
         * @member {string} topicCode
         * @memberof Article.PickupTopics
         * @instance
         */
        PickupTopics.prototype.topicCode = "";

        /**
         * PickupTopics topicType.
         * @member {string} topicType
         * @memberof Article.PickupTopics
         * @instance
         */
        PickupTopics.prototype.topicType = "";

        /**
         * PickupTopics type.
         * @member {string} type
         * @memberof Article.PickupTopics
         * @instance
         */
        PickupTopics.prototype.type = "";

        /**
         * PickupTopics uid.
         * @member {string} uid
         * @memberof Article.PickupTopics
         * @instance
         */
        PickupTopics.prototype.uid = "";

        /**
         * Creates a new PickupTopics instance using the specified properties.
         * @function create
         * @memberof Article.PickupTopics
         * @static
         * @param {Article.IPickupTopics=} [properties] Properties to set
         * @returns {Article.PickupTopics} PickupTopics instance
         */
        PickupTopics.create = function create(properties) {
            return new PickupTopics(properties);
        };

        /**
         * Encodes the specified PickupTopics message. Does not implicitly {@link Article.PickupTopics.verify|verify} messages.
         * @function encode
         * @memberof Article.PickupTopics
         * @static
         * @param {Article.IPickupTopics} message PickupTopics message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PickupTopics.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.followable != null && message.hasOwnProperty("followable"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.followable);
            if (message.headline != null && message.hasOwnProperty("headline"))
                $root.google.protobuf.Any.encode(message.headline, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                $root.google.protobuf.Any.encode(message.imageUrl, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.label != null && message.hasOwnProperty("label"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.label);
            if (message.lead != null && message.hasOwnProperty("lead"))
                $root.google.protobuf.Any.encode(message.lead, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.sns != null && message.hasOwnProperty("sns"))
                $root.google.protobuf.Any.encode(message.sns, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.topicCode != null && message.hasOwnProperty("topicCode"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.topicCode);
            if (message.topicType != null && message.hasOwnProperty("topicType"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.topicType);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.type);
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.uid);
            return writer;
        };

        /**
         * Encodes the specified PickupTopics message, length delimited. Does not implicitly {@link Article.PickupTopics.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Article.PickupTopics
         * @static
         * @param {Article.IPickupTopics} message PickupTopics message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PickupTopics.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PickupTopics message from the specified reader or buffer.
         * @function decode
         * @memberof Article.PickupTopics
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Article.PickupTopics} PickupTopics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PickupTopics.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Article.PickupTopics();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.followable = reader.bool();
                    break;
                case 2:
                    message.headline = $root.google.protobuf.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.imageUrl = $root.google.protobuf.Any.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.label = reader.string();
                    break;
                case 5:
                    message.lead = $root.google.protobuf.Any.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.sns = $root.google.protobuf.Any.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.topicCode = reader.string();
                    break;
                case 8:
                    message.topicType = reader.string();
                    break;
                case 9:
                    message.type = reader.string();
                    break;
                case 10:
                    message.uid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PickupTopics message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Article.PickupTopics
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Article.PickupTopics} PickupTopics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PickupTopics.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PickupTopics message.
         * @function verify
         * @memberof Article.PickupTopics
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PickupTopics.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.followable != null && message.hasOwnProperty("followable"))
                if (typeof message.followable !== "boolean")
                    return "followable: boolean expected";
            if (message.headline != null && message.hasOwnProperty("headline")) {
                var error = $root.google.protobuf.Any.verify(message.headline);
                if (error)
                    return "headline." + error;
            }
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl")) {
                var error = $root.google.protobuf.Any.verify(message.imageUrl);
                if (error)
                    return "imageUrl." + error;
            }
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.lead != null && message.hasOwnProperty("lead")) {
                var error = $root.google.protobuf.Any.verify(message.lead);
                if (error)
                    return "lead." + error;
            }
            if (message.sns != null && message.hasOwnProperty("sns")) {
                var error = $root.google.protobuf.Any.verify(message.sns);
                if (error)
                    return "sns." + error;
            }
            if (message.topicCode != null && message.hasOwnProperty("topicCode"))
                if (!$util.isString(message.topicCode))
                    return "topicCode: string expected";
            if (message.topicType != null && message.hasOwnProperty("topicType"))
                if (!$util.isString(message.topicType))
                    return "topicType: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            return null;
        };

        /**
         * Creates a PickupTopics message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Article.PickupTopics
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Article.PickupTopics} PickupTopics
         */
        PickupTopics.fromObject = function fromObject(object) {
            if (object instanceof $root.Article.PickupTopics)
                return object;
            var message = new $root.Article.PickupTopics();
            if (object.followable != null)
                message.followable = Boolean(object.followable);
            if (object.headline != null) {
                if (typeof object.headline !== "object")
                    throw TypeError(".Article.PickupTopics.headline: object expected");
                message.headline = $root.google.protobuf.Any.fromObject(object.headline);
            }
            if (object.imageUrl != null) {
                if (typeof object.imageUrl !== "object")
                    throw TypeError(".Article.PickupTopics.imageUrl: object expected");
                message.imageUrl = $root.google.protobuf.Any.fromObject(object.imageUrl);
            }
            if (object.label != null)
                message.label = String(object.label);
            if (object.lead != null) {
                if (typeof object.lead !== "object")
                    throw TypeError(".Article.PickupTopics.lead: object expected");
                message.lead = $root.google.protobuf.Any.fromObject(object.lead);
            }
            if (object.sns != null) {
                if (typeof object.sns !== "object")
                    throw TypeError(".Article.PickupTopics.sns: object expected");
                message.sns = $root.google.protobuf.Any.fromObject(object.sns);
            }
            if (object.topicCode != null)
                message.topicCode = String(object.topicCode);
            if (object.topicType != null)
                message.topicType = String(object.topicType);
            if (object.type != null)
                message.type = String(object.type);
            if (object.uid != null)
                message.uid = String(object.uid);
            return message;
        };

        /**
         * Creates a plain object from a PickupTopics message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Article.PickupTopics
         * @static
         * @param {Article.PickupTopics} message PickupTopics
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PickupTopics.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.followable = false;
                object.headline = null;
                object.imageUrl = null;
                object.label = "";
                object.lead = null;
                object.sns = null;
                object.topicCode = "";
                object.topicType = "";
                object.type = "";
                object.uid = "";
            }
            if (message.followable != null && message.hasOwnProperty("followable"))
                object.followable = message.followable;
            if (message.headline != null && message.hasOwnProperty("headline"))
                object.headline = $root.google.protobuf.Any.toObject(message.headline, options);
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                object.imageUrl = $root.google.protobuf.Any.toObject(message.imageUrl, options);
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.lead != null && message.hasOwnProperty("lead"))
                object.lead = $root.google.protobuf.Any.toObject(message.lead, options);
            if (message.sns != null && message.hasOwnProperty("sns"))
                object.sns = $root.google.protobuf.Any.toObject(message.sns, options);
            if (message.topicCode != null && message.hasOwnProperty("topicCode"))
                object.topicCode = message.topicCode;
            if (message.topicType != null && message.hasOwnProperty("topicType"))
                object.topicType = message.topicType;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            return object;
        };

        /**
         * Converts this PickupTopics to JSON.
         * @function toJSON
         * @memberof Article.PickupTopics
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PickupTopics.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PickupTopics;
    })();

    return Article;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type_url = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                var message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Any;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
