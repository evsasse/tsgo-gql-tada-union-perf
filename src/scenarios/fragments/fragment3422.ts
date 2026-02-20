import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3420 } from "./fragment3420";
import type { FragmentToken3421 } from "./fragment3421";

export const FRAGMENT_3422 = gql(`
  fragment Fragment3422 on Member61 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_61
    memberCount_61
    memberMetric_61
  }
`);

type FragmentResult3422 = ResultOf<typeof FRAGMENT_3422>;
type FragmentSelf3422 = NonNullable<FragmentResult3422>;

export type FragmentToken3422 =
  | FragmentSelf3422["__typename"]
  | FragmentSelf3422["typenameHint"] | FragmentToken3420 | FragmentToken3421;
