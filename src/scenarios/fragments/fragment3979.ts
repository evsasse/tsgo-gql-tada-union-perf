import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3977 } from "./fragment3977";
import type { FragmentToken3978 } from "./fragment3978";

export const FRAGMENT_3979 = gql(`
  fragment Fragment3979 on Member58 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_58
    memberCount_58
    memberMetric_58
  }
`);

type FragmentResult3979 = ResultOf<typeof FRAGMENT_3979>;
type FragmentSelf3979 = NonNullable<FragmentResult3979>;

export type FragmentToken3979 =
  | FragmentSelf3979["__typename"]
  | FragmentSelf3979["typenameHint"] | FragmentToken3977 | FragmentToken3978;
