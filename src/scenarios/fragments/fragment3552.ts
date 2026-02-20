import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3550 } from "./fragment3550";
import type { FragmentToken3551 } from "./fragment3551";

export const FRAGMENT_3552 = gql(`
  fragment Fragment3552 on Member191 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_191
    memberCount_191
    memberMetric_191
  }
`);

type FragmentResult3552 = ResultOf<typeof FRAGMENT_3552>;
type FragmentSelf3552 = NonNullable<FragmentResult3552>;

export type FragmentToken3552 =
  | FragmentSelf3552["__typename"]
  | FragmentSelf3552["typenameHint"] | FragmentToken3550 | FragmentToken3551;
