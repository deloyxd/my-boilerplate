import type { Metadata } from "next";

const siteMetadata: Metadata = {
  title: "MyApplication",
  description: "MyApplication description",
  other: {
    github: "deloyxd",
  },
};

export const getMetadataTitle = (): string => {
  return siteMetadata.title?.toString() || "";
};

export const getMetadataDescription = (): string => {
  return siteMetadata.description?.toString() || "";
};

export const getMetadataGithub = (): string => {
  return siteMetadata.other?.github?.toString() || "";
};
