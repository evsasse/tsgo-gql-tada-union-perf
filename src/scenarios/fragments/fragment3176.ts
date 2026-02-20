import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3174 } from "./fragment3174";
import type { FragmentToken3175 } from "./fragment3175";

export const FRAGMENT_3176 = gql(`
  fragment Fragment3176 on Member95 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_95
    memberCount_95
    memberMetric_95
  }
`);

type FragmentResult3176 = ResultOf<typeof FRAGMENT_3176>;
type FragmentSelf3176 = NonNullable<FragmentResult3176>;

export type FragmentToken3176 =
  | FragmentSelf3176["__typename"]
  | FragmentSelf3176["typenameHint"] | FragmentToken3174 | FragmentToken3175;
