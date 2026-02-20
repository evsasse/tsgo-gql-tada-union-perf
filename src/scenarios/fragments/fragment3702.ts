import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3700 } from "./fragment3700";
import type { FragmentToken3701 } from "./fragment3701";

export const FRAGMENT_3702 = gql(`
  fragment Fragment3702 on Member61 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_61
    memberCount_61
    memberMetric_61
  }
`);

type FragmentResult3702 = ResultOf<typeof FRAGMENT_3702>;
type FragmentSelf3702 = NonNullable<FragmentResult3702>;

export type FragmentToken3702 =
  | FragmentSelf3702["__typename"]
  | FragmentSelf3702["typenameHint"] | FragmentToken3700 | FragmentToken3701;
