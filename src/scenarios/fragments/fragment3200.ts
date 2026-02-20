import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3198 } from "./fragment3198";
import type { FragmentToken3199 } from "./fragment3199";

export const FRAGMENT_3200 = gql(`
  fragment Fragment3200 on Member119 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_119
    memberCount_119
    memberMetric_119
  }
`);

type FragmentResult3200 = ResultOf<typeof FRAGMENT_3200>;
type FragmentSelf3200 = NonNullable<FragmentResult3200>;

export type FragmentToken3200 =
  | FragmentSelf3200["__typename"]
  | FragmentSelf3200["typenameHint"] | FragmentToken3198 | FragmentToken3199;
