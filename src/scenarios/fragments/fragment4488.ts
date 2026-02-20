import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4486 } from "./fragment4486";
import type { FragmentToken4487 } from "./fragment4487";

export const FRAGMENT_4488 = gql(`
  fragment Fragment4488 on Member07 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_07
    memberCount_07
    memberMetric_07
  }
`);

type FragmentResult4488 = ResultOf<typeof FRAGMENT_4488>;
type FragmentSelf4488 = NonNullable<FragmentResult4488>;

export type FragmentToken4488 =
  | FragmentSelf4488["__typename"]
  | FragmentSelf4488["typenameHint"] | FragmentToken4486 | FragmentToken4487;
