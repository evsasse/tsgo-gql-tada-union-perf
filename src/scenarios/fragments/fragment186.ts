import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken184 } from "./fragment184";
import type { FragmentToken185 } from "./fragment185";

export const FRAGMENT_186 = gql(`
  fragment Fragment186 on Member185 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_185
    memberCount_185
    memberMetric_185
  }
`);

type FragmentResult186 = ResultOf<typeof FRAGMENT_186>;
type FragmentSelf186 = NonNullable<FragmentResult186>;

export type FragmentToken186 =
  | FragmentSelf186["__typename"]
  | FragmentSelf186["typenameHint"] | FragmentToken184 | FragmentToken185;
