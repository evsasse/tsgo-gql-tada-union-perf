import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3950 } from "./fragment3950";
import type { FragmentToken3951 } from "./fragment3951";

export const FRAGMENT_3952 = gql(`
  fragment Fragment3952 on Member31 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_31
    memberCount_31
    memberMetric_31
  }
`);

type FragmentResult3952 = ResultOf<typeof FRAGMENT_3952>;
type FragmentSelf3952 = NonNullable<FragmentResult3952>;

export type FragmentToken3952 =
  | FragmentSelf3952["__typename"]
  | FragmentSelf3952["typenameHint"] | FragmentToken3950 | FragmentToken3951;
