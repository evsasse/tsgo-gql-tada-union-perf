import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3557 } from "./fragment3557";
import type { FragmentToken3558 } from "./fragment3558";

export const FRAGMENT_3559 = gql(`
  fragment Fragment3559 on Member198 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_198
    memberCount_198
    memberMetric_198
  }
`);

type FragmentResult3559 = ResultOf<typeof FRAGMENT_3559>;
type FragmentSelf3559 = NonNullable<FragmentResult3559>;

export type FragmentToken3559 =
  | FragmentSelf3559["__typename"]
  | FragmentSelf3559["typenameHint"] | FragmentToken3557 | FragmentToken3558;
