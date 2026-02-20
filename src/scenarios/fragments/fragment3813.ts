import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3811 } from "./fragment3811";
import type { FragmentToken3812 } from "./fragment3812";

export const FRAGMENT_3813 = gql(`
  fragment Fragment3813 on Member172 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_172
    memberCount_172
    memberMetric_172
  }
`);

type FragmentResult3813 = ResultOf<typeof FRAGMENT_3813>;
type FragmentSelf3813 = NonNullable<FragmentResult3813>;

export type FragmentToken3813 =
  | FragmentSelf3813["__typename"]
  | FragmentSelf3813["typenameHint"] | FragmentToken3811 | FragmentToken3812;
