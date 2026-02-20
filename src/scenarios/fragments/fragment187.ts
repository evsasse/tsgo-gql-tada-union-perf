import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken185 } from "./fragment185";
import type { FragmentToken186 } from "./fragment186";

export const FRAGMENT_187 = gql(`
  fragment Fragment187 on Member186 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_186
    memberCount_186
    memberMetric_186
  }
`);

type FragmentResult187 = ResultOf<typeof FRAGMENT_187>;
type FragmentSelf187 = NonNullable<FragmentResult187>;

export type FragmentToken187 =
  | FragmentSelf187["__typename"]
  | FragmentSelf187["typenameHint"] | FragmentToken185 | FragmentToken186;
