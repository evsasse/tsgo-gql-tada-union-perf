import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3957 } from "./fragment3957";
import type { FragmentToken3958 } from "./fragment3958";

export const FRAGMENT_3959 = gql(`
  fragment Fragment3959 on Member38 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_38
    memberCount_38
    memberMetric_38
  }
`);

type FragmentResult3959 = ResultOf<typeof FRAGMENT_3959>;
type FragmentSelf3959 = NonNullable<FragmentResult3959>;

export type FragmentToken3959 =
  | FragmentSelf3959["__typename"]
  | FragmentSelf3959["typenameHint"] | FragmentToken3957 | FragmentToken3958;
