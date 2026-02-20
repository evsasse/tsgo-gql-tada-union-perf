import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3299 } from "./fragment3299";
import type { FragmentToken3300 } from "./fragment3300";

export const FRAGMENT_3301 = gql(`
  fragment Fragment3301 on Member220 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_220
    memberCount_220
    memberMetric_220
  }
`);

type FragmentResult3301 = ResultOf<typeof FRAGMENT_3301>;
type FragmentSelf3301 = NonNullable<FragmentResult3301>;

export type FragmentToken3301 =
  | FragmentSelf3301["__typename"]
  | FragmentSelf3301["typenameHint"] | FragmentToken3299 | FragmentToken3300;
