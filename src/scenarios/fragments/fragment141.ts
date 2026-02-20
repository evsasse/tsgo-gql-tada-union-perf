import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken139 } from "./fragment139";
import type { FragmentToken140 } from "./fragment140";

export const FRAGMENT_141 = gql(`
  fragment Fragment141 on Member140 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_140
    memberCount_140
    memberMetric_140
  }
`);

type FragmentResult141 = ResultOf<typeof FRAGMENT_141>;
type FragmentSelf141 = NonNullable<FragmentResult141>;

export type FragmentToken141 =
  | FragmentSelf141["__typename"]
  | FragmentSelf141["typenameHint"] | FragmentToken139 | FragmentToken140;
