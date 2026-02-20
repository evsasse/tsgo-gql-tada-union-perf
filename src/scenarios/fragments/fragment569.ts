import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken567 } from "./fragment567";
import type { FragmentToken568 } from "./fragment568";

export const FRAGMENT_569 = gql(`
  fragment Fragment569 on Member08 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_08
    memberCount_08
    memberMetric_08
  }
`);

type FragmentResult569 = ResultOf<typeof FRAGMENT_569>;
type FragmentSelf569 = NonNullable<FragmentResult569>;

export type FragmentToken569 =
  | FragmentSelf569["__typename"]
  | FragmentSelf569["typenameHint"] | FragmentToken567 | FragmentToken568;
