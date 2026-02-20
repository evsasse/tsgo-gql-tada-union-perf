import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3300 } from "./fragment3300";
import type { FragmentToken3301 } from "./fragment3301";

export const FRAGMENT_3302 = gql(`
  fragment Fragment3302 on Member221 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_221
    memberCount_221
    memberMetric_221
  }
`);

type FragmentResult3302 = ResultOf<typeof FRAGMENT_3302>;
type FragmentSelf3302 = NonNullable<FragmentResult3302>;

export type FragmentToken3302 =
  | FragmentSelf3302["__typename"]
  | FragmentSelf3302["typenameHint"] | FragmentToken3300 | FragmentToken3301;
