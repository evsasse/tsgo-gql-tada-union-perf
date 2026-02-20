import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3349 } from "./fragment3349";
import type { FragmentToken3350 } from "./fragment3350";

export const FRAGMENT_3351 = gql(`
  fragment Fragment3351 on Member270 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_270
    memberCount_270
    memberMetric_270
  }
`);

type FragmentResult3351 = ResultOf<typeof FRAGMENT_3351>;
type FragmentSelf3351 = NonNullable<FragmentResult3351>;

export type FragmentToken3351 =
  | FragmentSelf3351["__typename"]
  | FragmentSelf3351["typenameHint"] | FragmentToken3349 | FragmentToken3350;
