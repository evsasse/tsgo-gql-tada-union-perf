import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken932 } from "./fragment932";
import type { FragmentToken933 } from "./fragment933";

export const FRAGMENT_934 = gql(`
  fragment Fragment934 on Member93 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_93
    memberCount_93
    memberMetric_93
  }
`);

type FragmentResult934 = ResultOf<typeof FRAGMENT_934>;
type FragmentSelf934 = NonNullable<FragmentResult934>;

export type FragmentToken934 =
  | FragmentSelf934["__typename"]
  | FragmentSelf934["typenameHint"] | FragmentToken932 | FragmentToken933;
