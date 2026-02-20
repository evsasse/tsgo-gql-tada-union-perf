import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1580 } from "./fragment1580";
import type { FragmentToken1581 } from "./fragment1581";

export const FRAGMENT_1582 = gql(`
  fragment Fragment1582 on Member181 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_181
    memberCount_181
    memberMetric_181
  }
`);

type FragmentResult1582 = ResultOf<typeof FRAGMENT_1582>;
type FragmentSelf1582 = NonNullable<FragmentResult1582>;

export type FragmentToken1582 =
  | FragmentSelf1582["__typename"]
  | FragmentSelf1582["typenameHint"] | FragmentToken1580 | FragmentToken1581;
