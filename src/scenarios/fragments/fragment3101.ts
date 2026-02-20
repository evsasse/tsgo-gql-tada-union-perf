import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3099 } from "./fragment3099";
import type { FragmentToken3100 } from "./fragment3100";

export const FRAGMENT_3101 = gql(`
  fragment Fragment3101 on Member20 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_20
    memberCount_20
    memberMetric_20
  }
`);

type FragmentResult3101 = ResultOf<typeof FRAGMENT_3101>;
type FragmentSelf3101 = NonNullable<FragmentResult3101>;

export type FragmentToken3101 =
  | FragmentSelf3101["__typename"]
  | FragmentSelf3101["typenameHint"] | FragmentToken3099 | FragmentToken3100;
