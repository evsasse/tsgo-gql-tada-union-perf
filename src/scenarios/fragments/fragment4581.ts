import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4579 } from "./fragment4579";
import type { FragmentToken4580 } from "./fragment4580";

export const FRAGMENT_4581 = gql(`
  fragment Fragment4581 on Member100 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_100
    memberCount_100
    memberMetric_100
  }
`);

type FragmentResult4581 = ResultOf<typeof FRAGMENT_4581>;
type FragmentSelf4581 = NonNullable<FragmentResult4581>;

export type FragmentToken4581 =
  | FragmentSelf4581["__typename"]
  | FragmentSelf4581["typenameHint"] | FragmentToken4579 | FragmentToken4580;
