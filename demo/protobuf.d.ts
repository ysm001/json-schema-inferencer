import * as $protobuf from "protobufjs";
/** Properties of an Article. */
export interface IArticle {

    /** Article detailsInfo */
    detailsInfo?: (google.protobuf.IAny[]|null);

    /** Article headline */
    headline?: (google.protobuf.IAny|null);

    /** Article hits */
    hits?: (Article.IHits[]|null);

    /** Article imageUrl */
    imageUrl?: (google.protobuf.IAny|null);

    /** Article label */
    label?: (string|null);

    /** Article lead */
    lead?: (google.protobuf.IAny|null);

    /** Article navigationId */
    navigationId?: (string|null);

    /** Article offset */
    offset?: (number|null);

    /** Article pickupTopics */
    pickupTopics?: (Article.IPickupTopics[]|null);

    /** Article streamDesignType */
    streamDesignType?: (string|null);

    /** Article themaId */
    themaId?: (string|null);

    /** Article total */
    total?: (number|null);

    /** Article uid */
    uid?: (google.protobuf.IAny|null);
}

/** Represents an Article. */
export class Article implements IArticle {

    /**
     * Constructs a new Article.
     * @param [properties] Properties to set
     */
    constructor(properties?: IArticle);

    /** Article detailsInfo. */
    public detailsInfo: google.protobuf.IAny[];

    /** Article headline. */
    public headline?: (google.protobuf.IAny|null);

    /** Article hits. */
    public hits: Article.IHits[];

    /** Article imageUrl. */
    public imageUrl?: (google.protobuf.IAny|null);

    /** Article label. */
    public label: string;

    /** Article lead. */
    public lead?: (google.protobuf.IAny|null);

    /** Article navigationId. */
    public navigationId: string;

    /** Article offset. */
    public offset: number;

    /** Article pickupTopics. */
    public pickupTopics: Article.IPickupTopics[];

    /** Article streamDesignType. */
    public streamDesignType: string;

    /** Article themaId. */
    public themaId: string;

    /** Article total. */
    public total: number;

    /** Article uid. */
    public uid?: (google.protobuf.IAny|null);

    /**
     * Creates a new Article instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Article instance
     */
    public static create(properties?: IArticle): Article;

    /**
     * Encodes the specified Article message. Does not implicitly {@link Article.verify|verify} messages.
     * @param message Article message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IArticle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Article message, length delimited. Does not implicitly {@link Article.verify|verify} messages.
     * @param message Article message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IArticle, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Article message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Article
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Article;

    /**
     * Decodes an Article message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Article
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Article;

    /**
     * Verifies an Article message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Article message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Article
     */
    public static fromObject(object: { [k: string]: any }): Article;

    /**
     * Creates a plain object from an Article message. Also converts values to other types if specified.
     * @param message Article
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Article, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Article to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Article {

    /** Properties of a Hits. */
    interface IHits {

        /** Hits displayTime */
        displayTime?: (string|null);

        /** Hits kijiIdRaw */
        kijiIdRaw?: (string|null);

        /** Hits rflg */
        rflg?: (string|null);

        /** Hits serviceCategory */
        serviceCategory?: (string|null);

        /** Hits title */
        title?: (string|null);

        /** Hits title2 */
        title2?: (string|null);

        /** Hits titleWeb */
        titleWeb?: (string|null);

        /** Hits featuredImage */
        featuredImage?: (Article.Hits.IFeaturedImage|null);

        /** Hits featuredVideo */
        featuredVideo?: (google.protobuf.IAny|null);

        /** Hits isTedumi */
        isTedumi?: (boolean|null);

        /** Hits listDesignType */
        listDesignType?: (string|null);

        /** Hits patternTestInfo */
        patternTestInfo?: (Article.Hits.IPatternTestInfo|null);
    }

    /** Represents a Hits. */
    class Hits implements IHits {

        /**
         * Constructs a new Hits.
         * @param [properties] Properties to set
         */
        constructor(properties?: Article.IHits);

        /** Hits displayTime. */
        public displayTime: string;

        /** Hits kijiIdRaw. */
        public kijiIdRaw: string;

        /** Hits rflg. */
        public rflg: string;

        /** Hits serviceCategory. */
        public serviceCategory: string;

        /** Hits title. */
        public title: string;

        /** Hits title2. */
        public title2: string;

        /** Hits titleWeb. */
        public titleWeb: string;

        /** Hits featuredImage. */
        public featuredImage?: (Article.Hits.IFeaturedImage|null);

        /** Hits featuredVideo. */
        public featuredVideo?: (google.protobuf.IAny|null);

        /** Hits isTedumi. */
        public isTedumi: boolean;

        /** Hits listDesignType. */
        public listDesignType: string;

        /** Hits patternTestInfo. */
        public patternTestInfo?: (Article.Hits.IPatternTestInfo|null);

        /**
         * Creates a new Hits instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Hits instance
         */
        public static create(properties?: Article.IHits): Article.Hits;

        /**
         * Encodes the specified Hits message. Does not implicitly {@link Article.Hits.verify|verify} messages.
         * @param message Hits message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Article.IHits, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Hits message, length delimited. Does not implicitly {@link Article.Hits.verify|verify} messages.
         * @param message Hits message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Article.IHits, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Hits message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Hits
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Article.Hits;

        /**
         * Decodes a Hits message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Hits
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Article.Hits;

        /**
         * Verifies a Hits message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Hits message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Hits
         */
        public static fromObject(object: { [k: string]: any }): Article.Hits;

        /**
         * Creates a plain object from a Hits message. Also converts values to other types if specified.
         * @param message Hits
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Article.Hits, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Hits to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Hits {

        /** Properties of a FeaturedImage. */
        interface IFeaturedImage {

            /** FeaturedImage credit */
            credit?: (string|null);

            /** FeaturedImage etoki */
            etoki?: (string|null);

            /** FeaturedImage expiresAt */
            expiresAt?: (string|null);

            /** FeaturedImage format */
            format?: (string|null);

            /** FeaturedImage height */
            height?: (number|null);

            /** FeaturedImage imageId */
            imageId?: (string|null);

            /** FeaturedImage revision */
            revision?: (number|null);

            /** FeaturedImage srcImageUrl */
            srcImageUrl?: (string|null);

            /** FeaturedImage width */
            width?: (number|null);
        }

        /** Represents a FeaturedImage. */
        class FeaturedImage implements IFeaturedImage {

            /**
             * Constructs a new FeaturedImage.
             * @param [properties] Properties to set
             */
            constructor(properties?: Article.Hits.IFeaturedImage);

            /** FeaturedImage credit. */
            public credit: string;

            /** FeaturedImage etoki. */
            public etoki: string;

            /** FeaturedImage expiresAt. */
            public expiresAt: string;

            /** FeaturedImage format. */
            public format: string;

            /** FeaturedImage height. */
            public height: number;

            /** FeaturedImage imageId. */
            public imageId: string;

            /** FeaturedImage revision. */
            public revision: number;

            /** FeaturedImage srcImageUrl. */
            public srcImageUrl: string;

            /** FeaturedImage width. */
            public width: number;

            /**
             * Creates a new FeaturedImage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeaturedImage instance
             */
            public static create(properties?: Article.Hits.IFeaturedImage): Article.Hits.FeaturedImage;

            /**
             * Encodes the specified FeaturedImage message. Does not implicitly {@link Article.Hits.FeaturedImage.verify|verify} messages.
             * @param message FeaturedImage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Article.Hits.IFeaturedImage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeaturedImage message, length delimited. Does not implicitly {@link Article.Hits.FeaturedImage.verify|verify} messages.
             * @param message FeaturedImage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Article.Hits.IFeaturedImage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeaturedImage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeaturedImage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Article.Hits.FeaturedImage;

            /**
             * Decodes a FeaturedImage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeaturedImage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Article.Hits.FeaturedImage;

            /**
             * Verifies a FeaturedImage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeaturedImage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeaturedImage
             */
            public static fromObject(object: { [k: string]: any }): Article.Hits.FeaturedImage;

            /**
             * Creates a plain object from a FeaturedImage message. Also converts values to other types if specified.
             * @param message FeaturedImage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Article.Hits.FeaturedImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeaturedImage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PatternTestInfo. */
        interface IPatternTestInfo {

            /** PatternTestInfo defaultPatternId */
            defaultPatternId?: (google.protobuf.IAny|null);

            /** PatternTestInfo patternId */
            patternId?: (string|null);

            /** PatternTestInfo patternTestId */
            patternTestId?: (google.protobuf.IAny|null);

            /** PatternTestInfo patternTestingFlag */
            patternTestingFlag?: (boolean|null);
        }

        /** Represents a PatternTestInfo. */
        class PatternTestInfo implements IPatternTestInfo {

            /**
             * Constructs a new PatternTestInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: Article.Hits.IPatternTestInfo);

            /** PatternTestInfo defaultPatternId. */
            public defaultPatternId?: (google.protobuf.IAny|null);

            /** PatternTestInfo patternId. */
            public patternId: string;

            /** PatternTestInfo patternTestId. */
            public patternTestId?: (google.protobuf.IAny|null);

            /** PatternTestInfo patternTestingFlag. */
            public patternTestingFlag: boolean;

            /**
             * Creates a new PatternTestInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PatternTestInfo instance
             */
            public static create(properties?: Article.Hits.IPatternTestInfo): Article.Hits.PatternTestInfo;

            /**
             * Encodes the specified PatternTestInfo message. Does not implicitly {@link Article.Hits.PatternTestInfo.verify|verify} messages.
             * @param message PatternTestInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Article.Hits.IPatternTestInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PatternTestInfo message, length delimited. Does not implicitly {@link Article.Hits.PatternTestInfo.verify|verify} messages.
             * @param message PatternTestInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Article.Hits.IPatternTestInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PatternTestInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PatternTestInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Article.Hits.PatternTestInfo;

            /**
             * Decodes a PatternTestInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PatternTestInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Article.Hits.PatternTestInfo;

            /**
             * Verifies a PatternTestInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PatternTestInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PatternTestInfo
             */
            public static fromObject(object: { [k: string]: any }): Article.Hits.PatternTestInfo;

            /**
             * Creates a plain object from a PatternTestInfo message. Also converts values to other types if specified.
             * @param message PatternTestInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Article.Hits.PatternTestInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PatternTestInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a PickupTopics. */
    interface IPickupTopics {

        /** PickupTopics followable */
        followable?: (boolean|null);

        /** PickupTopics headline */
        headline?: (google.protobuf.IAny|null);

        /** PickupTopics imageUrl */
        imageUrl?: (google.protobuf.IAny|null);

        /** PickupTopics label */
        label?: (string|null);

        /** PickupTopics lead */
        lead?: (google.protobuf.IAny|null);

        /** PickupTopics sns */
        sns?: (google.protobuf.IAny|null);

        /** PickupTopics topicCode */
        topicCode?: (string|null);

        /** PickupTopics topicType */
        topicType?: (string|null);

        /** PickupTopics type */
        type?: (string|null);

        /** PickupTopics uid */
        uid?: (string|null);
    }

    /** Represents a PickupTopics. */
    class PickupTopics implements IPickupTopics {

        /**
         * Constructs a new PickupTopics.
         * @param [properties] Properties to set
         */
        constructor(properties?: Article.IPickupTopics);

        /** PickupTopics followable. */
        public followable: boolean;

        /** PickupTopics headline. */
        public headline?: (google.protobuf.IAny|null);

        /** PickupTopics imageUrl. */
        public imageUrl?: (google.protobuf.IAny|null);

        /** PickupTopics label. */
        public label: string;

        /** PickupTopics lead. */
        public lead?: (google.protobuf.IAny|null);

        /** PickupTopics sns. */
        public sns?: (google.protobuf.IAny|null);

        /** PickupTopics topicCode. */
        public topicCode: string;

        /** PickupTopics topicType. */
        public topicType: string;

        /** PickupTopics type. */
        public type: string;

        /** PickupTopics uid. */
        public uid: string;

        /**
         * Creates a new PickupTopics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PickupTopics instance
         */
        public static create(properties?: Article.IPickupTopics): Article.PickupTopics;

        /**
         * Encodes the specified PickupTopics message. Does not implicitly {@link Article.PickupTopics.verify|verify} messages.
         * @param message PickupTopics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Article.IPickupTopics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PickupTopics message, length delimited. Does not implicitly {@link Article.PickupTopics.verify|verify} messages.
         * @param message PickupTopics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Article.IPickupTopics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PickupTopics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PickupTopics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Article.PickupTopics;

        /**
         * Decodes a PickupTopics message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PickupTopics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Article.PickupTopics;

        /**
         * Verifies a PickupTopics message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PickupTopics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PickupTopics
         */
        public static fromObject(object: { [k: string]: any }): Article.PickupTopics;

        /**
         * Creates a plain object from a PickupTopics message. Also converts values to other types if specified.
         * @param message PickupTopics
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Article.PickupTopics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PickupTopics to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
