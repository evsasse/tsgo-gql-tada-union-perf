import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3963 } from "./fragment3963";
import type { FragmentToken3964 } from "./fragment3964";

export const FRAGMENT_3965 = gql(`
  fragment Fragment3965 on Member44 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_44
    memberCount_44
    memberMetric_44
  }
`);

type FragmentResult3965 = ResultOf<typeof FRAGMENT_3965>;
type FragmentSelf3965 = NonNullable<FragmentResult3965>;

export type FragmentToken3965 =
  | FragmentSelf3965["__typename"]
  | FragmentSelf3965["typenameHint"] | FragmentToken3963 | FragmentToken3964;
