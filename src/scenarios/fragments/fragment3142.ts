import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3140 } from "./fragment3140";
import type { FragmentToken3141 } from "./fragment3141";

export const FRAGMENT_3142 = gql(`
  fragment Fragment3142 on Member61 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_61
    memberCount_61
    memberMetric_61
  }
`);

type FragmentResult3142 = ResultOf<typeof FRAGMENT_3142>;
type FragmentSelf3142 = NonNullable<FragmentResult3142>;

export type FragmentToken3142 =
  | FragmentSelf3142["__typename"]
  | FragmentSelf3142["typenameHint"] | FragmentToken3140 | FragmentToken3141;
