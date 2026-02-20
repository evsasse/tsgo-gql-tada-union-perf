import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3703 } from "./fragment3703";
import type { FragmentToken3704 } from "./fragment3704";

export const FRAGMENT_3705 = gql(`
  fragment Fragment3705 on Member64 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_64
    memberCount_64
    memberMetric_64
  }
`);

type FragmentResult3705 = ResultOf<typeof FRAGMENT_3705>;
type FragmentSelf3705 = NonNullable<FragmentResult3705>;

export type FragmentToken3705 =
  | FragmentSelf3705["__typename"]
  | FragmentSelf3705["typenameHint"] | FragmentToken3703 | FragmentToken3704;
