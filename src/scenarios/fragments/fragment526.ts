import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken524 } from "./fragment524";
import type { FragmentToken525 } from "./fragment525";

export const FRAGMENT_526 = gql(`
  fragment Fragment526 on Member245 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_245
    memberCount_245
    memberMetric_245
  }
`);

type FragmentResult526 = ResultOf<typeof FRAGMENT_526>;
type FragmentSelf526 = NonNullable<FragmentResult526>;

export type FragmentToken526 =
  | FragmentSelf526["__typename"]
  | FragmentSelf526["typenameHint"] | FragmentToken524 | FragmentToken525;
