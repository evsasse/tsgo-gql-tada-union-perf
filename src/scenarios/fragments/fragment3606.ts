import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3604 } from "./fragment3604";
import type { FragmentToken3605 } from "./fragment3605";

export const FRAGMENT_3606 = gql(`
  fragment Fragment3606 on Member245 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_245
    memberCount_245
    memberMetric_245
  }
`);

type FragmentResult3606 = ResultOf<typeof FRAGMENT_3606>;
type FragmentSelf3606 = NonNullable<FragmentResult3606>;

export type FragmentToken3606 =
  | FragmentSelf3606["__typename"]
  | FragmentSelf3606["typenameHint"] | FragmentToken3604 | FragmentToken3605;
