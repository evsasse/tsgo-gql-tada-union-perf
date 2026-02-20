import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3161 } from "./fragment3161";
import type { FragmentToken3162 } from "./fragment3162";

export const FRAGMENT_3163 = gql(`
  fragment Fragment3163 on Member82 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_82
    memberCount_82
    memberMetric_82
  }
`);

type FragmentResult3163 = ResultOf<typeof FRAGMENT_3163>;
type FragmentSelf3163 = NonNullable<FragmentResult3163>;

export type FragmentToken3163 =
  | FragmentSelf3163["__typename"]
  | FragmentSelf3163["typenameHint"] | FragmentToken3161 | FragmentToken3162;
