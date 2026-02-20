import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken450 } from "./fragment450";
import type { FragmentToken451 } from "./fragment451";

export const FRAGMENT_452 = gql(`
  fragment Fragment452 on Member171 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_171
    memberCount_171
    memberMetric_171
  }
`);

type FragmentResult452 = ResultOf<typeof FRAGMENT_452>;
type FragmentSelf452 = NonNullable<FragmentResult452>;

export type FragmentToken452 =
  | FragmentSelf452["__typename"]
  | FragmentSelf452["typenameHint"] | FragmentToken450 | FragmentToken451;
