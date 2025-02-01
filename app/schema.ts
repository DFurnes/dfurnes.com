// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";

export interface IPostFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Description */
  description?: string | undefined;

  /** Emoji */
  emoji?: string | undefined;

  /** Content */
  content?: string | undefined;

  /** Embed URL */
  embedUrl?: string | undefined;

  /** Footnote */
  footnote?: string | undefined;

  /** Publication Date */
  date: string;

  /** Featured */
  featured?: boolean | undefined;

  /** Archived */
  archived?: boolean | undefined;

  /** Hidden */
  hidden?: boolean | undefined;

  /** Display Date? */
  displayDate?: boolean | undefined;
}

/** A note or blog post. */

export interface IPost extends Entry<IPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "post";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "post";

export type IEntry = IPost;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
