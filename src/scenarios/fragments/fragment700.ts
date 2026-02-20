import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken698 } from "./fragment698";
import type { FragmentToken699 } from "./fragment699";

export const FRAGMENT_700 = gql(`
  fragment Fragment700 on Member139 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_139
    memberCount_139
    memberMetric_139
  }
`);

type FragmentResult700 = ResultOf<typeof FRAGMENT_700>;
type FragmentSelf700 = NonNullable<FragmentResult700>;

export type FragmentToken700 =
  | FragmentSelf700["__typename"]
  | FragmentSelf700["typenameHint"] | FragmentToken698 | FragmentToken699;
