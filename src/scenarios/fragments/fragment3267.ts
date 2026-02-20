import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3265 } from "./fragment3265";
import type { FragmentToken3266 } from "./fragment3266";

export const FRAGMENT_3267 = gql(`
  fragment Fragment3267 on Member186 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_186
    memberCount_186
    memberMetric_186
  }
`);

type FragmentResult3267 = ResultOf<typeof FRAGMENT_3267>;
type FragmentSelf3267 = NonNullable<FragmentResult3267>;

export type FragmentToken3267 =
  | FragmentSelf3267["__typename"]
  | FragmentSelf3267["typenameHint"] | FragmentToken3265 | FragmentToken3266;
