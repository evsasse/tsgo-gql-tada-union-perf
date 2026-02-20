import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken012 } from "./fragment012";
import type { FragmentToken013 } from "./fragment013";

export const FRAGMENT_014 = gql(`
  fragment Fragment014 on Member13 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_13
    memberCount_13
    memberMetric_13
  }
`);

type FragmentResult014 = ResultOf<typeof FRAGMENT_014>;
type FragmentSelf014 = NonNullable<FragmentResult014>;

export type FragmentToken014 =
  | FragmentSelf014["__typename"]
  | FragmentSelf014["typenameHint"] | FragmentToken012 | FragmentToken013;
