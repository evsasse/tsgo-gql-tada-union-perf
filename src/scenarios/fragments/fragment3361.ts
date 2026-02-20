import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3359 } from "./fragment3359";
import type { FragmentToken3360 } from "./fragment3360";

export const FRAGMENT_3361 = gql(`
  fragment Fragment3361 on Member00 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_00
    memberCount_00
    memberMetric_00
  }
`);

type FragmentResult3361 = ResultOf<typeof FRAGMENT_3361>;
type FragmentSelf3361 = NonNullable<FragmentResult3361>;

export type FragmentToken3361 =
  | FragmentSelf3361["__typename"]
  | FragmentSelf3361["typenameHint"] | FragmentToken3359 | FragmentToken3360;
