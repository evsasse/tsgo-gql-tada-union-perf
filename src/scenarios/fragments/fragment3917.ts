import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3915 } from "./fragment3915";
import type { FragmentToken3916 } from "./fragment3916";

export const FRAGMENT_3917 = gql(`
  fragment Fragment3917 on Member276 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_276
    memberCount_276
    memberMetric_276
  }
`);

type FragmentResult3917 = ResultOf<typeof FRAGMENT_3917>;
type FragmentSelf3917 = NonNullable<FragmentResult3917>;

export type FragmentToken3917 =
  | FragmentSelf3917["__typename"]
  | FragmentSelf3917["typenameHint"] | FragmentToken3915 | FragmentToken3916;
