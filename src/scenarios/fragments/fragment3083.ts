import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3081 } from "./fragment3081";
import type { FragmentToken3082 } from "./fragment3082";

export const FRAGMENT_3083 = gql(`
  fragment Fragment3083 on Member02 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_02
    memberCount_02
    memberMetric_02
  }
`);

type FragmentResult3083 = ResultOf<typeof FRAGMENT_3083>;
type FragmentSelf3083 = NonNullable<FragmentResult3083>;

export type FragmentToken3083 =
  | FragmentSelf3083["__typename"]
  | FragmentSelf3083["typenameHint"] | FragmentToken3081 | FragmentToken3082;
