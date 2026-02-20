import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3224 } from "./fragment3224";
import type { FragmentToken3225 } from "./fragment3225";

export const FRAGMENT_3226 = gql(`
  fragment Fragment3226 on Member145 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_145
    memberCount_145
    memberMetric_145
  }
`);

type FragmentResult3226 = ResultOf<typeof FRAGMENT_3226>;
type FragmentSelf3226 = NonNullable<FragmentResult3226>;

export type FragmentToken3226 =
  | FragmentSelf3226["__typename"]
  | FragmentSelf3226["typenameHint"] | FragmentToken3224 | FragmentToken3225;
