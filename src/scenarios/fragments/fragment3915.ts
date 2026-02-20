import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3913 } from "./fragment3913";
import type { FragmentToken3914 } from "./fragment3914";

export const FRAGMENT_3915 = gql(`
  fragment Fragment3915 on Member274 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_274
    memberCount_274
    memberMetric_274
  }
`);

type FragmentResult3915 = ResultOf<typeof FRAGMENT_3915>;
type FragmentSelf3915 = NonNullable<FragmentResult3915>;

export type FragmentToken3915 =
  | FragmentSelf3915["__typename"]
  | FragmentSelf3915["typenameHint"] | FragmentToken3913 | FragmentToken3914;
