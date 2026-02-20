import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3082 } from "./fragment3082";
import type { FragmentToken3083 } from "./fragment3083";

export const FRAGMENT_3084 = gql(`
  fragment Fragment3084 on Member03 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_03
    memberCount_03
    memberMetric_03
  }
`);

type FragmentResult3084 = ResultOf<typeof FRAGMENT_3084>;
type FragmentSelf3084 = NonNullable<FragmentResult3084>;

export type FragmentToken3084 =
  | FragmentSelf3084["__typename"]
  | FragmentSelf3084["typenameHint"] | FragmentToken3082 | FragmentToken3083;
