export interface ImageThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Image {
  url: string;
  width: number;
  height: number;
  thumbnails?: ImageThumbnail[];
  alternateText?: string;
}

export interface ComplexImage {
  image: Image;
  details?: string;
  description?: string;
  clickthroughUrl?: string;
}

export interface C_featuredBlogs {
  id?: string;
  name?: string;
  slug?: string;
  c_coverPhoto?: ComplexImage;
  c_description?: string;
  datePosted?: string;
}

export interface Home {
  id: string;
  name: string;
  c_coverPhoto: ComplexImage;
  c_heading: string;
  c_subHeading: string;
  slug: string;
  c_featuredBlogs: C_featuredBlogs[];
}

export interface Blog {
  id: string;
  name: string;
  slug: string;
  datePosted: string;
  c_coverPhoto: ComplexImage;
  c_body: any;
  c_description: string;
  c_metaDescription: string;
  c_keywords: string;
}
