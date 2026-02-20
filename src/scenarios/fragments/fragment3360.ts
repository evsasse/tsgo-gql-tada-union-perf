import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3358 } from "./fragment3358";
import type { FragmentToken3359 } from "./fragment3359";

export const FRAGMENT_3360 = gql(`
  fragment Fragment3360 on Member279 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_279
    memberCount_279
    memberMetric_279
  }
`);

type FragmentResult3360 = ResultOf<typeof FRAGMENT_3360>;
type FragmentSelf3360 = NonNullable<FragmentResult3360>;

export type FragmentToken3360 =
  | FragmentSelf3360["__typename"]
  | FragmentSelf3360["typenameHint"] | FragmentToken3358 | FragmentToken3359;
