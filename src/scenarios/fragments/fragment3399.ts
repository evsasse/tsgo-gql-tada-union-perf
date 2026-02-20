import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3397 } from "./fragment3397";
import type { FragmentToken3398 } from "./fragment3398";

export const FRAGMENT_3399 = gql(`
  fragment Fragment3399 on Member38 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_38
    memberCount_38
    memberMetric_38
  }
`);

type FragmentResult3399 = ResultOf<typeof FRAGMENT_3399>;
type FragmentSelf3399 = NonNullable<FragmentResult3399>;

export type FragmentToken3399 =
  | FragmentSelf3399["__typename"]
  | FragmentSelf3399["typenameHint"] | FragmentToken3397 | FragmentToken3398;
