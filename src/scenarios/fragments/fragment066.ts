import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken064 } from "./fragment064";
import type { FragmentToken065 } from "./fragment065";

export const FRAGMENT_066 = gql(`
  fragment Fragment066 on Member65 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_65
    memberCount_65
    memberMetric_65
  }
`);

type FragmentResult066 = ResultOf<typeof FRAGMENT_066>;
type FragmentSelf066 = NonNullable<FragmentResult066>;

export type FragmentToken066 =
  | FragmentSelf066["__typename"]
  | FragmentSelf066["typenameHint"] | FragmentToken064 | FragmentToken065;
