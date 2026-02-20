import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3698 } from "./fragment3698";
import type { FragmentToken3699 } from "./fragment3699";

export const FRAGMENT_3700 = gql(`
  fragment Fragment3700 on Member59 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_59
    memberCount_59
    memberMetric_59
  }
`);

type FragmentResult3700 = ResultOf<typeof FRAGMENT_3700>;
type FragmentSelf3700 = NonNullable<FragmentResult3700>;

export type FragmentToken3700 =
  | FragmentSelf3700["__typename"]
  | FragmentSelf3700["typenameHint"] | FragmentToken3698 | FragmentToken3699;
