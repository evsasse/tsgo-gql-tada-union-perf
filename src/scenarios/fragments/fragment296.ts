import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken294 } from "./fragment294";
import type { FragmentToken295 } from "./fragment295";

export const FRAGMENT_296 = gql(`
  fragment Fragment296 on Member15 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_15
    memberCount_15
    memberMetric_15
  }
`);

type FragmentResult296 = ResultOf<typeof FRAGMENT_296>;
type FragmentSelf296 = NonNullable<FragmentResult296>;

export type FragmentToken296 =
  | FragmentSelf296["__typename"]
  | FragmentSelf296["typenameHint"] | FragmentToken294 | FragmentToken295;
