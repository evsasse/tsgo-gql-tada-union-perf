import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3088 } from "./fragment3088";
import type { FragmentToken3089 } from "./fragment3089";

export const FRAGMENT_3090 = gql(`
  fragment Fragment3090 on Member09 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_09
    memberCount_09
    memberMetric_09
  }
`);

type FragmentResult3090 = ResultOf<typeof FRAGMENT_3090>;
type FragmentSelf3090 = NonNullable<FragmentResult3090>;

export type FragmentToken3090 =
  | FragmentSelf3090["__typename"]
  | FragmentSelf3090["typenameHint"] | FragmentToken3088 | FragmentToken3089;
