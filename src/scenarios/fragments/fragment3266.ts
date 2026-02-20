import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3264 } from "./fragment3264";
import type { FragmentToken3265 } from "./fragment3265";

export const FRAGMENT_3266 = gql(`
  fragment Fragment3266 on Member185 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_185
    memberCount_185
    memberMetric_185
  }
`);

type FragmentResult3266 = ResultOf<typeof FRAGMENT_3266>;
type FragmentSelf3266 = NonNullable<FragmentResult3266>;

export type FragmentToken3266 =
  | FragmentSelf3266["__typename"]
  | FragmentSelf3266["typenameHint"] | FragmentToken3264 | FragmentToken3265;
