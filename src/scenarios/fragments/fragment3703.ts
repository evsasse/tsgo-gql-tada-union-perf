import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3701 } from "./fragment3701";
import type { FragmentToken3702 } from "./fragment3702";

export const FRAGMENT_3703 = gql(`
  fragment Fragment3703 on Member62 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_62
    memberCount_62
    memberMetric_62
  }
`);

type FragmentResult3703 = ResultOf<typeof FRAGMENT_3703>;
type FragmentSelf3703 = NonNullable<FragmentResult3703>;

export type FragmentToken3703 =
  | FragmentSelf3703["__typename"]
  | FragmentSelf3703["typenameHint"] | FragmentToken3701 | FragmentToken3702;
