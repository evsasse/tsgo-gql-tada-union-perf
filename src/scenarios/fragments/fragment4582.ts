import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4580 } from "./fragment4580";
import type { FragmentToken4581 } from "./fragment4581";

export const FRAGMENT_4582 = gql(`
  fragment Fragment4582 on Member101 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_101
    memberCount_101
    memberMetric_101
  }
`);

type FragmentResult4582 = ResultOf<typeof FRAGMENT_4582>;
type FragmentSelf4582 = NonNullable<FragmentResult4582>;

export type FragmentToken4582 =
  | FragmentSelf4582["__typename"]
  | FragmentSelf4582["typenameHint"] | FragmentToken4580 | FragmentToken4581;
