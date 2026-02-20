import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3975 } from "./fragment3975";
import type { FragmentToken3976 } from "./fragment3976";

export const FRAGMENT_3977 = gql(`
  fragment Fragment3977 on Member56 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_56
    memberCount_56
    memberMetric_56
  }
`);

type FragmentResult3977 = ResultOf<typeof FRAGMENT_3977>;
type FragmentSelf3977 = NonNullable<FragmentResult3977>;

export type FragmentToken3977 =
  | FragmentSelf3977["__typename"]
  | FragmentSelf3977["typenameHint"] | FragmentToken3975 | FragmentToken3976;
