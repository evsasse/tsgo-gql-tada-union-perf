import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3958 } from "./fragment3958";
import type { FragmentToken3959 } from "./fragment3959";

export const FRAGMENT_3960 = gql(`
  fragment Fragment3960 on Member39 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_39
    memberCount_39
    memberMetric_39
  }
`);

type FragmentResult3960 = ResultOf<typeof FRAGMENT_3960>;
type FragmentSelf3960 = NonNullable<FragmentResult3960>;

export type FragmentToken3960 =
  | FragmentSelf3960["__typename"]
  | FragmentSelf3960["typenameHint"] | FragmentToken3958 | FragmentToken3959;
