import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3364 } from "./fragment3364";
import type { FragmentToken3365 } from "./fragment3365";

export const FRAGMENT_3366 = gql(`
  fragment Fragment3366 on Member05 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_05
    memberCount_05
    memberMetric_05
  }
`);

type FragmentResult3366 = ResultOf<typeof FRAGMENT_3366>;
type FragmentSelf3366 = NonNullable<FragmentResult3366>;

export type FragmentToken3366 =
  | FragmentSelf3366["__typename"]
  | FragmentSelf3366["typenameHint"] | FragmentToken3364 | FragmentToken3365;
